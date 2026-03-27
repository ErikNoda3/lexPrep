import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ListChecks, Timer } from "lucide-react";
import { privateAppRobots } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Área de prática",
  description: "Pratique com o banco de questões e simulados no estilo ENAM.",
  robots: privateAppRobots,
  alternates: { canonical: "/area-pratica" },
};

export default function AreaPraticaPage() {
  return (
    <div className="page active">
      <div className="page-header">
        <h1>Área de Prática</h1>
        <p>Responda questões e faça simulados no estilo ENAM.</p>
      </div>

      <div className="cards-grid">
        <article className="stat-card group">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gold-pale)] text-[var(--gold)]">
            <ListChecks className="h-5 w-5" strokeWidth={1.75} aria-hidden />
          </div>
          <div className="label">Questões</div>
          <div className="value" style={{ fontSize: "1.5rem" }}>
            Banco de Questões
          </div>
          <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--mid)" }}>
            Filtre por matéria e dificuldade no topo da página de questões.
          </p>
          <div className="mt-2">
            <Link className="btn btn-primary gap-2" href="/questoes">
              Abrir Questões
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} aria-hidden />
            </Link>
          </div>
        </article>

        <article className="stat-card group">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--info-bg)] text-[var(--info)]">
            <Timer className="h-5 w-5" strokeWidth={1.75} aria-hidden />
          </div>
          <div className="label">Simulado</div>
          <div className="value" style={{ fontSize: "1.5rem" }}>
            Questões no tempo
          </div>
          <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--mid)" }}>
            Cronômetro por questão e resultado ao final.
          </p>
          <div className="mt-2">
            <Link className="btn btn-primary gap-2" href="/simulado">
              Iniciar Simulado
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} aria-hidden />
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
