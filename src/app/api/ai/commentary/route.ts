import { NextResponse } from "next/server";
import { z } from "zod";
import { getQuestionById } from "@/lib/questions-repo";
import { callAnthropicMessages } from "@/lib/ai/anthropic";

const BodySchema = z.object({
  qid: z.number().int().positive(),
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = BodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Corpo inválido" }, { status: 400 });
  }

  const q = await getQuestionById(parsed.data.qid);
  if (!q) {
    return NextResponse.json({ error: "Questão não encontrada" }, { status: 404 });
  }

  const gabaritoIndex = q.gabarito.charCodeAt(0) - 65;
  const gabaritoTexto =
    gabaritoIndex >= 0 && gabaritoIndex < q.opcoes.length
      ? q.opcoes[gabaritoIndex]
      : "Alternativa não encontrada";

  const prompt = `Você é um professor experiente de Direito preparando estudantes para o ENAM (Exame Nacional da Advocacia). 
Analise esta questão de forma didática e concisa (máximo 5 linhas):

Matéria: ${q.materia}
Enunciado: ${q.enunciado}
Gabarito correto: Alternativa ${q.gabarito} — "${gabaritoTexto}"

Explique por que a alternativa correta está certa, mencione o fundamento legal ou jurisprudencial relevante, e aponte por que as demais são erradas (de forma breve). Use linguagem técnica mas acessível.`;

  try {
    const text = await callAnthropicMessages(prompt);
    return NextResponse.json({ text });
  } catch {
    // Fallback offline: mantém o app funcional mesmo sem chave/DB/Internet.
    return NextResponse.json({ text: q.comentario }, { status: 200 });
  }
}

