import { NextResponse } from "next/server";
import { z } from "zod";
import { RESUMOS, type ResumoKey } from "@/lib/data/resumos";
import { callAnthropicMessages } from "@/lib/ai/anthropic";

const Chaves = [
  "constitucional",
  "civil",
  "penal",
  "trabalho",
  "tributario",
  "administrativo",
  "processual",
  "etica",
] as const satisfies readonly ResumoKey[];

const BodySchema = z.object({
  chave: z.enum(Chaves),
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = BodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Corpo inválido" }, { status: 400 });
  }

  const r = RESUMOS[parsed.data.chave];
  const prompt = `Você é professor de direito preparando estudantes para o ENAM. 
Sobre o tema "${r.titulo}", aponte:
1. Os 3 pontos mais cobrados no ENAM sobre essa matéria
2. A pegadinha mais comum nas provas
3. Uma dica de memorização para o dia da prova
Seja conciso e direto, usando linguagem técnica mas acessível. Máximo 200 palavras.`;

  try {
    const text = await callAnthropicMessages(prompt);
    return NextResponse.json({ text });
  } catch {
    return NextResponse.json(
      {
        text:
          "Dica offline: foque nos pontos mais cobrados da matéria, revise artigos/lei seca relacionados e faça pelo menos 10 questões focadas no tema. No ENAM, pegadinhas costumam explorar exceções e requisitos específicos.",
      },
      { status: 200 },
    );
  }
}

