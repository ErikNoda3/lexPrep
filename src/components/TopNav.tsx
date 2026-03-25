"use client";

import Link from "next/link";
import {
  AppWindow,
  BookOpen,
  FileText,
  LayoutDashboard,
  Loader2,
  LogIn,
  LogOut,
  Shield,
  Target,
  UserPlus,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { isMarketingPath } from "@/lib/marketingRoutes";
import ThemeToggle from "@/components/ThemeToggle";

const NAV = [
  {
    href: "/dashboard",
    label: "Início",
    Icon: LayoutDashboard,
    activePrefixes: ["/dashboard"],
  },
  {
    href: "/area-estudo",
    label: "Área de Estudo",
    Icon: BookOpen,
    activePrefixes: ["/area-estudo", "/sumulas"],
  },
  {
    href: "/area-pratica",
    label: "Área de Prática",
    Icon: Target,
    activePrefixes: ["/area-pratica", "/questoes", "/simulado", "/mapa"],
  },
] as const;

const navItemClass =
  "inline-flex items-center gap-1.5 rounded-full [&_svg]:shrink-0 [&_svg]:opacity-90";

export default function TopNav() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const marketing = isMarketingPath(pathname);

  const displayName =
    session?.user?.name?.trim() ||
    session?.user?.email?.split("@")[0] ||
    null;

  return (
    <nav className="top-nav" aria-label="Navegação principal">
      <div className="top-nav-links" aria-label="Seções do app">
        {marketing ? (
          <>
            <Link
              href="/termos"
              className={`${navItemClass} ${pathname === "/termos" ? "active" : ""}`}
            >
              <FileText className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
              Termos
            </Link>
            <Link
              href="/privacidade"
              className={`${navItemClass} ${pathname === "/privacidade" ? "active" : ""}`}
            >
              <Shield className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
              Privacidade
            </Link>
          </>
        ) : (
          NAV.map((item) => {
            const isActive = item.activePrefixes.some(
              (p) => pathname === p || pathname.startsWith(p + "/"),
            );
            const { Icon } = item;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${navItemClass} ${isActive ? "active" : ""}`}
              >
                <Icon className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                {item.label}
              </Link>
            );
          })
        )}
      </div>

      <div className="top-nav-account" aria-label="Conta e sessão">
        <ThemeToggle />
        {status === "loading" ? (
          <span
            className="inline-flex items-center gap-1.5 text-white/50 text-xs px-1"
            aria-live="polite"
            aria-busy="true"
          >
            <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />
            <span className="sr-only">Carregando sessão</span>
          </span>
        ) : session ? (
          <>
            <span
              className="hidden max-w-[min(160px,28vw)] truncate text-xs text-white/75 sm:inline-block"
              title={session.user?.email ?? undefined}
            >
              {displayName}
            </span>
            {marketing ? (
              <Link href="/dashboard" className={navItemClass}>
                <AppWindow className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                App
              </Link>
            ) : null}
            <button
              type="button"
              className={navItemClass}
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              <LogOut className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
              Sair
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className={navItemClass}>
              <LogIn className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
              Entrar
            </Link>
            <Link href="/register" className={navItemClass}>
              <UserPlus className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
              Criar conta
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
