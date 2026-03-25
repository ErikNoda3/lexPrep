import Link from "next/link";
import {
  ArrowRight,
  FileText,
  GraduationCap,
  Library,
  LogIn,
  Scale,
  Shield,
  ShieldCheck,
  Target,
} from "lucide-react";

export default function LandingPage() {
  const year = new Date().getFullYear();
  return (
    <div className="page active">
      <section className="hero animate-enter" aria-labelledby="landing-title">
        <div className="flex flex-col items-center text-center">
          <div
            className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--gold-pale)] text-[var(--gold)] shadow-[var(--lp-shadow-sm)] ring-1 ring-[rgba(161,98,7,0.15)]"
            aria-hidden
          >
            <GraduationCap className="h-8 w-8" strokeWidth={1.5} />
          </div>
          <h1 id="landing-title">LexPrep ENAM</h1>
          <p className="max-w-2xl mx-auto">
            Plataforma de estudos jurídicos para a prova do ENAM: súmulas STF, STJ e TST, banco de
            questões e simulados no ritmo da prova — num só lugar.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-7">
            <Link className="btn btn-primary gap-2" href="/login">
              <LogIn className="h-4 w-4" strokeWidth={2} aria-hidden />
              Entrar
            </Link>
            <Link className="btn btn-outline gap-2" href="/register">
              Criar conta
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <div className="cards-grid max-w-4xl mx-auto">
        <article className="stat-card group">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gold-pale)] text-[var(--gold)] transition-colors group-hover:bg-[rgba(254,243,199,0.85)]">
            <Library className="h-5 w-5" strokeWidth={1.75} aria-hidden />
          </div>
          <div className="label">Estudo</div>
          <div className="value" style={{ fontSize: "1.25rem" }}>
            Súmulas STF, STJ e TST
          </div>
          <p className="text-muted" style={{ margin: 0, fontSize: "0.875rem", color: "var(--mid)" }}>
            Jurisprudência consolidada dos tribunais superiores para revisão objetiva.
          </p>
        </article>
        <article className="stat-card group">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--info-bg)] text-[var(--info)] transition-colors group-hover:bg-[rgba(219,234,254,0.85)]">
            <Target className="h-5 w-5" strokeWidth={1.75} aria-hidden />
          </div>
          <div className="label">Prática</div>
          <div className="value" style={{ fontSize: "1.25rem" }}>
            Questões e simulado
          </div>
          <p className="text-muted" style={{ margin: 0, fontSize: "0.875rem", color: "var(--mid)" }}>
            Filtros por matéria e dificuldade, cronômetro no estilo ENAM.
          </p>
        </article>
        <article className="stat-card group">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--success-bg)] text-[var(--success)] transition-colors group-hover:bg-[rgba(209,250,229,0.85)]">
            <ShieldCheck className="h-5 w-5" strokeWidth={1.75} aria-hidden />
          </div>
          <div className="label">Acesso</div>
          <div className="value" style={{ fontSize: "1.25rem" }}>
            Conta segura
          </div>
          <p className="text-muted" style={{ margin: 0, fontSize: "0.875rem", color: "var(--mid)" }}>
            Login com Google ou email. Os seus dados são tratados conforme a nossa política.
          </p>
        </article>
      </div>

      <footer
        className="mt-20 border-t border-[var(--lp-border)] bg-[var(--lp-surface)]/80 pt-12 pb-10 shadow-[0_-1px_0_rgba(15,23,42,0.04)]"
        role="contentinfo"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--gold-pale)] text-[var(--gold)] ring-1 ring-[rgba(161,98,7,0.12)]">
                  <Scale className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                </span>
                <span className="font-serif text-lg font-semibold text-[var(--dark)]">
                  LexPrep <span className="font-normal text-[var(--mid)]">ENAM</span>
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--mid)]">
                Preparação objetiva para o ENAM: súmulas, questões e simulado num só lugar.
              </p>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--mid)]">
                Informações legais
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link
                    href="/termos"
                    className="inline-flex items-center gap-2 text-[var(--dark-2)] transition-colors hover:text-[var(--gold)]"
                  >
                    <FileText className="h-4 w-4 shrink-0 text-[var(--gold)]/80" strokeWidth={1.75} aria-hidden />
                    Termos de uso
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacidade"
                    className="inline-flex items-center gap-2 text-[var(--dark-2)] transition-colors hover:text-[var(--gold)]"
                  >
                    <Shield className="h-4 w-4 shrink-0 text-[var(--gold)]/80" strokeWidth={1.75} aria-hidden />
                    Política de privacidade
                  </Link>
                </li>
              </ul>
            </div>

            <div className="sm:col-span-2 lg:col-span-1">
              <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--mid)]">
                Começar
              </h2>
              <p className="mt-3 text-sm text-[var(--mid)]">
                Crie uma conta ou entre para acessar o conteúdo completo.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link className="btn btn-primary gap-2" href="/login">
                  <LogIn className="h-4 w-4" strokeWidth={2} aria-hidden />
                  Entrar
                </Link>
                <Link className="btn btn-outline gap-2" href="/register">
                  Criar conta
                  <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-[var(--lp-border)] pt-8 text-center text-sm text-[var(--mid)]">
            <p className="mb-0">
              © {year} LexPrep — preparação para o ENAM. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
