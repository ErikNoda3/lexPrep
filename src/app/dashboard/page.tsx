import Link from "next/link";
import { ArrowRight, Compass, Library, Target } from "lucide-react";

export default function DashboardPage() {
  return (
    <>
      <div className="page active">
        <section className="hero animate-enter" aria-labelledby="home-title">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--gold-pale)] text-[var(--gold)] shadow-[var(--lp-shadow-sm)] ring-1 ring-[rgba(161,98,7,0.12)]">
              <Compass className="h-6 w-6" strokeWidth={1.5} aria-hidden />
            </div>
            <div className="min-w-0">
              <h1 id="home-title">Escolha sua área</h1>
              <p className="mt-1">
                Selecione entre estudar com súmulas ou praticar com questões e simulado no estilo
                ENAM.
              </p>
            </div>
          </div>
        </section>

        <div className="cards-grid">
          <article className="stat-card group">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gold-pale)] text-[var(--gold)]">
              <Library className="h-5 w-5" strokeWidth={1.75} aria-hidden />
            </div>
            <div className="label">Área de Estudo</div>
            <div className="value" style={{ fontSize: "1.5rem" }}>
              Súmulas STF/STJ/TST
            </div>
            <p className="text-muted" style={{ margin: 0, fontSize: "0.875rem", color: "var(--mid)" }}>
              Jurisprudência consolidada para revisão rápida antes da prova.
            </p>
            <div className="mt-2">
              <Link className="btn btn-primary gap-2" href="/area-estudo">
                Ir para Estudo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} aria-hidden />
              </Link>
            </div>
          </article>

          <article className="stat-card group">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--info-bg)] text-[var(--info)]">
              <Target className="h-5 w-5" strokeWidth={1.75} aria-hidden />
            </div>
            <div className="label">Área de Prática</div>
            <div className="value" style={{ fontSize: "1.5rem" }}>
              Questões &amp; simulado
            </div>
            <p className="text-muted" style={{ margin: 0, fontSize: "0.875rem", color: "var(--mid)" }}>
              Banco de questões e simulado com cronômetro.
            </p>
            <div className="mt-2">
              <Link className="btn btn-primary gap-2" href="/area-pratica">
                Ir para Prática
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} aria-hidden />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
