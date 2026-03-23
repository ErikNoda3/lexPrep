import Link from "next/link";

export default function AreaPraticaPage() {
  return (
    <div className="page active">
      <div className="page-header">
        <h1>Área de Prática</h1>
        <p>Responda questões e faça simulados no estilo ENAM.</p>
      </div>

      <div className="cards-grid">
        <article className="stat-card">
          <div className="label">Questões</div>
          <div className="value" style={{ fontSize: "1.5rem" }}>
            Banco de Questões
          </div>
          <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--mid)" }}>
            Filtre por matéria e dificuldade no topo da página de questões.
          </p>
          <div style={{ marginTop: "0.5rem" }}>
            <Link className="btn btn-primary" href="/questoes">
              Abrir Questões →
            </Link>
          </div>
        </article>

        <article className="stat-card">
          <div className="label">Simulado</div>
          <div className="value" style={{ fontSize: "1.5rem" }}>
            Questões no tempo
          </div>
          <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--mid)" }}>
            Cronômetro por questão e resultado ao final.
          </p>
          <div style={{ marginTop: "0.5rem" }}>
            <Link className="btn btn-primary" href="/simulado">
              Iniciar Simulado →
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
