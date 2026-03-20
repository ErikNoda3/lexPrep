import { prisma } from "@/lib/prisma";
import { BANCO_QUESTOES, type Questao } from "@/lib/data/questions";

type ListFilters = {
  materia?: string;
  dificuldade?: string;
};

export async function listQuestions(filters: ListFilters): Promise<Questao[]> {
  // Fallback em memória: o app continua funcionando mesmo sem Postgres rodando.
  try {
    const where: Record<string, unknown> = {};
    if (filters.materia) where.materia = filters.materia;
    if (filters.dificuldade) where.dificuldade = filters.dificuldade;

    const rows = await prisma.question.findMany({
      where,
      orderBy: { id: "asc" },
    });

    return rows.map((r) => ({
      id: r.id,
      materia: r.materia,
      dificuldade: r.dificuldade as Questao["dificuldade"],
      enunciado: r.enunciado,
      opcoes: r.opcoes,
      gabarito: r.gabarito,
      comentario: r.comentario,
    }));
  } catch {
    let lista = [...BANCO_QUESTOES];
    if (filters.materia) lista = lista.filter((q) => q.materia === filters.materia);
    if (filters.dificuldade)
      lista = lista.filter((q) => q.dificuldade === filters.dificuldade);
    return lista;
  }
}

export async function getQuestionById(id: number): Promise<Questao | null> {
  try {
    const row = await prisma.question.findUnique({ where: { id } });
    if (!row) return null;
    return {
      id: row.id,
      materia: row.materia,
      dificuldade: row.dificuldade as Questao["dificuldade"],
      enunciado: row.enunciado,
      opcoes: row.opcoes,
      gabarito: row.gabarito,
      comentario: row.comentario,
    };
  } catch {
    return BANCO_QUESTOES.find((q) => q.id === id) ?? null;
  }
}

