"use client";

import Link from "next/link";
import { Scale } from "lucide-react";
import { usePathname } from "next/navigation";
import TopNav from "@/components/TopNav";
import { isMarketingPath } from "@/lib/marketingRoutes";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const logoHref = isMarketingPath(pathname) ? "/" : "/dashboard";

  return (
    <>
      <header className="site-header">
        <Link
          href={logoHref}
          className="logo flex items-center gap-2.5 min-w-0"
          aria-label="Ir para a página inicial"
        >
          <Scale
            className="h-8 w-8 shrink-0 text-[var(--gold-light)]"
            strokeWidth={1.5}
            aria-hidden
          />
          <span className="min-w-0 leading-tight">
            LexPrep <span className="text-xl font-normal">ENAM</span>{" "}
            <span className="badge-enam">OAB</span>
          </span>
        </Link>
        <TopNav />
      </header>

      <div className="app app--no-sidebar">
        <main className="main">{children}</main>
      </div>
    </>
  );
}
