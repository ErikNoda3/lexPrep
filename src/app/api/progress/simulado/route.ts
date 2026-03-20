import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const BodySchema = z.object({
  qtdQuestoes: z.number().int().positive(),
  tempoPorQSec: z.number().int().positive(),
  acertos: z.number().int().nonnegative(),
  respondidas: z.number().int().nonnegative(),
  materiaStats: z
    .record(
      z.string(),
      z.object({
        respondidas: z.number().int().nonnegative(),
        acertos: z.number().int().nonnegative(),
      })
    )
    .optional(),
});

function toUtcDayKey(d: Date) {
  return d.toISOString().slice(0, 10);
}

export async function POST(req: Request) {
  const jar = cookies();
  const sessionId = jar.get("enam_sessionId")?.value;
  if (!sessionId) {
    return NextResponse.json({ error: "Sessão não encontrada" }, { status: 400 });
  }

  const body = await req.json().catch(() => null);
  const parsed = BodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Corpo inválido" }, { status: 400 });
  }

  const { qtdQuestoes, tempoPorQSec, acertos, respondidas, materiaStats } =
    parsed.data;

  const sim = await prisma.simuladoAttempt.create({
    data: {
      sessionId,
      qtdQuestoes,
      tempoPorQSec,
      acertos,
      respondidas,
    },
  });

  const existingSession = await prisma.userSession.findUnique({
    where: { sessionId },
    select: { progressoPorMateria: true },
  });

  const progressoBase =
    (existingSession?.progressoPorMateria ?? {}) as Record<
      string,
      { respondidas?: number; acertos?: number }
    >;

  // Soma incremental por matéria (mantida como JSON no UserSession).
  const mergedProgresso: Record<string, { respondidas: number; acertos: number }> =
    {};

  for (const [k, v] of Object.entries(progressoBase)) {
    mergedProgresso[k] = {
      respondidas: Number((v as any)?.respondidas ?? 0),
      acertos: Number((v as any)?.acertos ?? 0),
    };
  }

  for (const [materia, stats] of Object.entries(
    materiaStats ?? {}
  ) as Array<[string, { respondidas: number; acertos: number }]>) {
    const current = mergedProgresso[materia] ?? { respondidas: 0, acertos: 0 };
    mergedProgresso[materia] = {
      respondidas: current.respondidas + stats.respondidas,
      acertos: current.acertos + stats.acertos,
    };
  }

  // Recalcula sequência com base nos dias (UTC) com pelo menos 1 simulado.
  const attemptsForStreak = await prisma.simuladoAttempt.findMany({
    where: { sessionId },
    select: { createdAt: true },
    orderBy: { createdAt: "desc" },
    take: 2000,
  });

  const dayKeys = new Set(attemptsForStreak.map((a) => toUtcDayKey(a.createdAt)));
  let streak = 0;
  let cursor = new Date();
  while (dayKeys.has(toUtcDayKey(cursor))) {
    streak += 1;
    cursor.setUTCDate(cursor.getUTCDate() - 1);
    if (streak > 3650) break; // proteção
  }

  await prisma.userSession.upsert({
    where: { sessionId },
    update: {
      questoesRespondidas: { increment: respondidas },
      acertos: { increment: acertos },
      simuladosRealizados: { increment: 1 },
      progressoPorMateria: mergedProgresso,
      diasSequenciaAtual: streak,
    },
    create: {
      sessionId,
      questoesRespondidas: respondidas,
      acertos,
      simuladosRealizados: 1,
      progressoPorMateria: mergedProgresso,
      diasSequenciaAtual: streak,
    },
  });

  return NextResponse.json({ ok: true, attemptId: sim.id });
}

