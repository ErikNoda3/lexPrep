"use client";

import Link from "next/link";
import TopNav from "@/components/TopNav";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="site-header">
        <Link href="/" className="text-white text-2xl font-bold" aria-label="Ir para a página inicial">
          LexPrep <span className="text-xl font-normal">ENAM</span>
          <span className="badge-enam">OAB</span>
        </Link>
        <TopNav />
      </header>

      <div className="app app--no-sidebar">
        <main className="main">{children}</main>
      </div>
    </>
  );
}
