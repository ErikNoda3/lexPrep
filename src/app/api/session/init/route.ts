import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const COOKIE_NAME = "enam_sessionId";

export async function GET() {
  const jar = cookies();
  let sessionId = jar.get(COOKIE_NAME)?.value;

  if (!sessionId) {
    sessionId = crypto.randomUUID();
    jar.set(COOKIE_NAME, sessionId, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 dias
    });
  }

  return NextResponse.json({ sessionId });
}

