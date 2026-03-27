import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { authConfig } from "@/auth.config";
import { MARKETING_PATHS } from "@/lib/marketingRoutes";

const { auth } = NextAuth(authConfig);

const PUBLIC_PATHS = new Set<string>(MARKETING_PATHS);

function isPublicPath(pathname: string) {
  if (PUBLIC_PATHS.has(pathname)) return true;
  if (pathname.startsWith("/api/auth")) return true;
  if (pathname === "/api/session/init") return true;
  /* SEO e metadados: rotas geradas pelo App Router (sem sessão) */
  if (pathname === "/robots.txt") return true;
  if (pathname === "/sitemap.xml") return true;
  if (pathname === "/manifest.webmanifest") return true;
  if (pathname === "/llms.txt") return true;
  if (pathname.startsWith("/opengraph-image")) return true;
  if (pathname.startsWith("/twitter-image")) return true;
  if (pathname === "/icon" || pathname.startsWith("/icon?")) return true;
  return false;
}

export default auth((req) => {
  const pathname = req.nextUrl.pathname;

  if (req.auth && pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl.origin));
  }

  if (req.auth && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl.origin));
  }

  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  if (!req.auth) {
    const login = new URL("/login", req.nextUrl.origin);
    login.searchParams.set(
      "callbackUrl",
      `${req.nextUrl.pathname}${req.nextUrl.search}`,
    );
    return NextResponse.redirect(login);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
