import { NextResponse } from "next/server";
import { z } from "zod";
import { callAnthropicMessages } from "@/lib/ai/anthropic";

const BodySchema = z.object({
  taxaAcertoGeral: z.number().optional(),
  melhorMateria: z.string().optional(),
  piorMateria: z.string().optional(),
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const parsed = BodySchema.safeParse(body);
  const input = parsed.success ? parsed.data : {};

  const taxa = input.taxaAcertoGeral ?? 71;
  const melhor = input.melhorMateria ?? "Constitucional";
  const pior = input.piorMateria ?? "Direito do Trabalho";

  const prompt = `Você é um orientador de estudos jurídicos para o ENAM. Com base nos dados a seguir, dê um diagnóstico e um plano de estudos para as próximas 2 semanas:

- Taxa de acerto geral: ${taxa}%
- Melhor matéria: ${melhor} 
- Pior matéria: ${pior}

Seja objetivo e prático. Sugira uma rotina diária realista. Máximo 250 palavras.`;

  try {
    const text = await callAnthropicMessages(prompt);
    return NextResponse.json({ text });
  } catch {
    return NextResponse.json(
      {
        text:
          "Diagnóstico offline: sua taxa geral está razoável, mas o ganho vem priorizando a matéria de menor aproveitamento. Faça sessões curtas (ex.: 45-60 min) com questões e correção ativa, e feche o dia com 10-15 min de revisão focada (lei seca + esquema).",
      },
      { status: 200 },
    );
  }
}

