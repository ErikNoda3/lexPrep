import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="page active">
        <section className="hero animate-enter" aria-labelledby="home-title">
          <h1 id="home-title">Escolha sua área</h1>
          <p>
            Selecione entre estudar com resumos e súmulas ou praticar com questões e
            simulado no estilo ENAM.
          </p>
        </section>

        <div className="cards-grid">
          <article className="stat-card">
            <div className="label">Área de Estudo</div>
            <div className="value" style={{ fontSize: "1.5rem" }}>
              Resumos &amp; súmulas
            </div>
            <p className="text-muted" style={{ margin: 0, fontSize: "0.875rem", color: "var(--mid)" }}>
              Teoria organizada para revisão rápida antes da prova.
            </p>
            <div style={{ marginTop: "0.5rem" }}>
              <Link className="btn btn-primary" href="/area-estudo">
                Ir para Estudo →
              </Link>
            </div>
          </article>

          <article className="stat-card">
            <div className="label">Área de Prática</div>
            <div className="value" style={{ fontSize: "1.5rem" }}>
              Questões &amp; simulado
            </div>
            <p className="text-muted" style={{ margin: 0, fontSize: "0.875rem", color: "var(--mid)" }}>
              Banco de questões e simulado com cronômetro.
            </p>
            <div style={{ marginTop: "0.5rem" }}>
              <Link className="btn btn-primary" href="/area-pratica">
                Ir para Prática →
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
