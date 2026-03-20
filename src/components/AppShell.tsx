"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import TopNav from "@/components/TopNav";

export default function AppShell({
  sidebar,
  children,
}: {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="site-header">
        <button
          type="button"
          className="header-menu-btn"
          aria-label="Abrir menu de matérias e filtros"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
        <div className="logo">
          LexPrep <span>ENAM</span>
          <span className="badge-enam">OAB</span>
        </div>
        <TopNav />
      </header>

      {menuOpen ? (
        <button
          type="button"
          className="sidebar-backdrop"
          aria-label="Fechar menu"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}

      <div className="app">
        <aside className={"sidebar" + (menuOpen ? " sidebar--open" : "")}>
          {sidebar}
        </aside>
        <main className="main">{children}</main>
      </div>
    </>
  );
}
