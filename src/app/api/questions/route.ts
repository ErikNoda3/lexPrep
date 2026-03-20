import { NextResponse } from "next/server";
import { z } from "zod";
import { listQuestions } from "@/lib/questions-repo";

const QuerySchema = z.object({
  materia: z.string().optional(),
  dificuldade: z.string().optional(),
});

export async function GET(req: Request) {
  const url = new URL(req.url);
  const parsed = QuerySchema.safeParse({
    materia: url.searchParams.get("materia") ?? undefined,
    dificuldade: url.searchParams.get("dificuldade") ?? undefined,
  });

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Parâmetros inválidos" },
      { status: 400 },
    );
  }

  const questions = await listQuestions(parsed.data);
  return NextResponse.json({ questions });
}

