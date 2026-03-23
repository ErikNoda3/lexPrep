import { NextResponse } from "next/server";
import { z } from "zod";
import { listSumulas } from "@/lib/sumulas-repo";

const QuerySchema = z.object({
  tribunal: z.enum(["STF", "STJ"]).optional(),
});

export async function GET(req: Request) {
  const url = new URL(req.url);
  const parsed = QuerySchema.safeParse({
    tribunal: url.searchParams.get("tribunal") ?? undefined,
  });

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Parâmetros inválidos" },
      { status: 400 },
    );
  }

  const sumulas = await listSumulas(parsed.data);
  return NextResponse.json({ sumulas });
}

