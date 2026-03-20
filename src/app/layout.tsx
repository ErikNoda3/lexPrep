import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import SessionInit from "@/components/SessionInit";

export const metadata: Metadata = {
  title: "LexPrep — ENAM",
  description: "App de estudos jurídicos (Next.js + Postgres)",
};

/** Sidebar usa Prisma; sem isso o `next build` tenta prerender e falha se o DB não estiver acessível. */
export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SessionInit />
        <header>
          <div className="logo">
            LexPrep <span>ENAM</span>
            <span className="badge-enam">OAB</span>
          </div>
          <TopNav />
        </header>

        <div className="app">
          <aside className="sidebar">
            <Sidebar />
          </aside>
          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
