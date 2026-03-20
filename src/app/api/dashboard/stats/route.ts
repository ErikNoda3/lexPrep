import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const COOKIE_NAME = "enam_sessionId";

function startOfUtcWeek(date: Date) {
  // Semana iniciando na segunda (Monday), em UTC.
  const day = date.getUTCDay(); // 0 (Dom) .. 6 (Sáb)
  const diffToMonday = (day + 6) % 7;
  const start = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  start.setUTCDate(start.getUTCDate() - diffToMonday);
  return start;
}

function toUtcDayKey(d: Date) {
  return d.toISOString().slice(0, 10); // YYYY-MM-DD em UTC
}

export async function GET() {
  const jar = cookies();
  let sessionId = jar.get(COOKIE_NAME)?.value;

  // Garante sessão mesmo na primeira visita ao dashboard.
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    jar.set(COOKIE_NAME, sessionId, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 dias
    });
  }

  const session = await prisma.userSession.findUnique({
    where: { sessionId },
  });

  if (!session) {
    await prisma.userSession.create({
      data: {
        sessionId,
        progressoPorMateria: {},
        diasSequenciaAtual: 0,
        questoesRespondidas: 0,
        acertos: 0,
        simuladosRealizados: 0,
      },
    });
  }

  const sessionNow = await prisma.userSession.findUnique({
    where: { sessionId },
  });

  const safeSession = sessionNow ?? {
    sessionId,
    questoesRespondidas: 0,
    acertos: 0,
    simuladosRealizados: 0,
    diasSequenciaAtual: 0,
    progressoPorMateria: {},
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const taxaAcerto =
    safeSession.questoesRespondidas > 0
      ? Math.round((safeSession.acertos / safeSession.questoesRespondidas) * 100)
      : 0;

  const taxaAcertoLabel = taxaAcerto >= 65 ? "Acima da média" : "Abaixo da média";

  const now = new Date();
  const startThisWeek = startOfUtcWeek(now);
  const endThisWeek = new Date(startThisWeek);
  endThisWeek.setUTCDate(endThisWeek.getUTCDate() + 7);

  const startPrevWeek = new Date(startThisWeek);
  startPrevWeek.setUTCDate(startPrevWeek.getUTCDate() - 7);
  const endPrevWeek = new Date(startPrevWeek);
  endPrevWeek.setUTCDate(endPrevWeek.getUTCDate() + 7);

  const [sumThisWeek, sumPrevWeek] = await Promise.all([
    prisma.simuladoAttempt.aggregate({
      _sum: { respondidas: true },
      where: {
        sessionId,
        createdAt: { gte: startThisWeek, lt: endThisWeek },
      },
    }),
    prisma.simuladoAttempt.aggregate({
      _sum: { respondidas: true },
      where: {
        sessionId,
        createdAt: { gte: startPrevWeek, lt: endPrevWeek },
      },
    }),
  ]);

  const respondidasThisWeek = sumThisWeek._sum.respondidas ?? 0;
  const respondidasPrevWeek = sumPrevWeek._sum.respondidas ?? 0;
  const deltaQuestoesSemana = respondidasThisWeek - respondidasPrevWeek;

  const lastAttempt = await prisma.simuladoAttempt.findFirst({
    where: { sessionId },
    orderBy: { createdAt: "desc" },
    select: { qtdQuestoes: true, acertos: true },
  });

  const lastSimulado = lastAttempt
    ? {
        qtdQuestoes: lastAttempt.qtdQuestoes,
        acertos: lastAttempt.acertos,
        pct:
          lastAttempt.qtdQuestoes > 0
            ? Math.round((lastAttempt.acertos / lastAttempt.qtdQuestoes) * 100)
            : 0,
      }
    : null;

  // Total de dias com pelo menos um simulado (aproxima usando os últimos 2000 attempts).
  const attemptsForDays = await prisma.simuladoAttempt.findMany({
    where: { sessionId },
    select: { createdAt: true },
    orderBy: { createdAt: "desc" },
    take: 2000,
  });

  const diasDeEstudoTotal = new Set(
    attemptsForDays.map((a) => toUtcDayKey(a.createdAt))
  ).size;

  // Progresso por matéria: aproveita o JSON persistido em UserSession.
  const rawProgresso = (safeSession.progressoPorMateria ?? {}) as
    | Record<string, { respondidas?: number; acertos?: number }>
    | unknown;

  const progressoEntries = typeof rawProgresso === "object" && rawProgresso
    ? Object.entries(rawProgresso as Record<string, any>).map(([materia, stats]) => {
        const respondidas = Number(stats?.respondidas ?? 0);
        const acertos = Number(stats?.acertos ?? 0);
        const pct = respondidas > 0 ? Math.round((acertos / respondidas) * 100) : 0;
        return {
          materia,
          respondidas,
          acertos,
          pct,
        };
      })
    : [];

  const progressoPorMateria = progressoEntries
    .filter((x) => x.respondidas > 0)
    .sort((a, b) => b.pct - a.pct)
    .slice(0, 5);

  return NextResponse.json({
    questoesRespondidasTotal: safeSession.questoesRespondidas,
    deltaQuestoesSemana,
    taxaAcerto,
    taxaAcertoLabel,
    simuladosRealizados: safeSession.simuladosRealizados,
    lastSimulado,
    diasDeEstudoTotal,
    diasSequenciaAtual: safeSession.diasSequenciaAtual ?? 0,
    progressoPorMateria,
  });
}

