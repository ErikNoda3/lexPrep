import Link from "next/link";

export default function AreaEstudoPage() {
  return (
    <div className="page active">
      <div className="page-header">
        <h1>Área de Estudo</h1>
        <p>Escolha entre resumos teóricos e súmulas para revisão rápida.</p>
      </div>

      <div className="cards-grid">
        <article className="stat-card">
          <div className="label">Resumos</div>
          <div className="value" style={{ fontSize: "1.5rem" }}>
            Estudo por matéria
          </div>
          <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--mid)" }}>
            Conteúdo sintetizado por disciplina.
          </p>
          <div style={{ marginTop: "0.5rem" }}>
            <Link className="btn btn-primary" href="/resumos">
              Abrir Resumos →
            </Link>
          </div>
        </article>

        <article className="stat-card">
          <div className="label">Súmulas</div>
          <div className="value" style={{ fontSize: "1.5rem" }}>
            Revisão objetiva
          </div>
          <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--mid)" }}>
            STF e STJ em formato de cards.
          </p>
          <div style={{ marginTop: "0.5rem" }}>
            <Link className="btn btn-primary" href="/sumulas">
              Abrir Súmulas →
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
