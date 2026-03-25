import Link from "next/link";

import { ArrowRight, Library } from "lucide-react";



export default function AreaEstudoPage() {

  return (

    <div className="page active">

      <div className="page-header">

        <h1>Área de Estudo</h1>

        <p>Súmulas STF, STJ e TST para revisão objetiva.</p>

      </div>



      <div className="cards-grid max-w-xl">

        <article className="stat-card group">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--info-bg)] text-[var(--info)]">

            <Library className="h-5 w-5" strokeWidth={1.75} aria-hidden />

          </div>

          <div className="label">Súmulas</div>

          <div className="value" style={{ fontSize: "1.5rem" }}>

            Revisão objetiva

          </div>

          <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--mid)" }}>

            STF, STJ e TST em formato de cards.

          </p>

          <div className="mt-2">

            <Link className="btn btn-primary gap-2" href="/sumulas">

              Abrir Súmulas

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} aria-hidden />

            </Link>

          </div>

        </article>

      </div>

    </div>

  );

}

