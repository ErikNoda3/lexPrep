"use client";

import { useState } from "react";

function CalendarGrid() {
  const dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const estudados = [1, 2, 3, 5, 6, 8, 9, 10, 12, 13, 15, 16, 17, 19, 20, 22, 23];
  const parciais = [4, 11, 18];
  const hoje = 23;

  const days: Array<{ day: number; cls: string }> = [];
  for (let i = 1; i <= 31; i++) {
    const cls =
      i === hoje
        ? "today"
        : estudados.includes(i)
          ? "done"
          : parciais.includes(i)
            ? "partial"
            : "";
    days.push({ day: i, cls });
  }

  return (
    <div className="calendar">
      {dias.map((d) => (
        <div key={d} className="cal-header">
          {d}
        </div>
      ))}
      {days.map((x) => (
        <div key={x.day} className={`cal-day ${x.cls}`}>
          {x.day}
        </div>
      ))}
    </div>
  );
}

function Ranking() {
  const data = [
    { name: "Ana Oliveira", score: 89, pct: 89 },
    { name: "Carlos Mendes", score: 84, pct: 84 },
    { name: "Você", score: 71, pct: 71 },
    { name: "Beatriz Lima", score: 68, pct: 68 },
    { name: "Rafael Costa", score: 62, pct: 62 },
  ];

  return (
    <div>
      {data.map((d, i) => (
        <div key={d.name} className="ranking-item">
          <div className={`rank-num ${i === 0 ? "gold" : ""}`}>{i + 1}</div>
          <div className="rank-info">
            <div
              className="rank-name"
              style={
                i === 2
                  ? { fontWeight: 500, color: "var(--gold)" }
                  : undefined
              }
            >
              {d.name}
            </div>
            <div className="rank-score">{d.score}% de acerto</div>
          </div>
          <div className="rank-bar">
            <div className="rank-fill" style={{ width: `${d.pct}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function MapaClient() {
  const [aiVisible, setAiVisible] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiText, setAiText] = useState("");

  async function analisarDesempenhoIA() {
    setAiVisible(true);
    setAiLoading(true);
    setAiText("");

    try {
      const res = await fetch("/api/ai/mapa", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          taxaAcertoGeral: 71,
          melhorMateria: "Constitucional",
          piorMateria: "Direito do Trabalho",
        }),
      });
      const data = await res.json();
      setAiText(typeof data?.text === "string" ? data.text : "");
    } catch {
      setAiText(
        "Diagnóstico offline: o ganho vem priorizando a matéria de menor aproveitamento. Faça sessões curtas (45-60 min) com correção ativa e revise lei seca no fim do dia."
      );
    } finally {
      setAiLoading(false);
    }
  }

  return (
    <div className="page active">
      <div className="page-header">
        <h1>Mapa de Estudos</h1>
        <p>Calendário, ranking e análise do seu desempenho</p>
      </div>

      <div className="mapa-grid">
        <div className="mapa-card">
          <h3>Calendário — Março 2025</h3>
          <CalendarGrid />
        </div>
        <div className="mapa-card">
          <h3>Ranking de estudantes</h3>
          <Ranking />
        </div>
      </div>

      <div className="progress-section">
        <div className="progress-title">Análise detalhada de desempenho</div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <div
            style={{
              background: "var(--light)",
              borderRadius: "6px",
              padding: "1rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: ".75rem",
                color: "var(--mid)",
                textTransform: "uppercase",
                letterSpacing: ".07em",
                marginBottom: ".5rem",
              }}
            >
              Melhor matéria
            </div>
            <div style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", color: "var(--success)" }}>
              Constitucional
            </div>
            <div style={{ fontSize: ".78rem", color: "var(--mid)" }}>
              82% de acerto
            </div>
          </div>

          <div
            style={{
              background: "var(--light)",
              borderRadius: "6px",
              padding: "1rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: ".75rem",
                color: "var(--mid)",
                textTransform: "uppercase",
                letterSpacing: ".07em",
                marginBottom: ".5rem",
              }}
            >
              Precisa reforço
            </div>
            <div style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", color: "var(--danger)" }}>
              Dir. do Trabalho
            </div>
            <div style={{ fontSize: ".78rem", color: "var(--mid)" }}>
              48% de acerto
            </div>
          </div>

          <div
            style={{
              background: "var(--light)",
              borderRadius: "6px",
              padding: "1rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: ".75rem",
                color: "var(--mid)",
                textTransform: "uppercase",
                letterSpacing: ".07em",
                marginBottom: ".5rem",
              }}
            >
              Meta semanal
            </div>
            <div style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", color: "var(--info)" }}>
              5/7 dias
            </div>
            <div style={{ fontSize: ".78rem", color: "var(--mid)" }}>
              71% concluída
            </div>
          </div>
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          <button className="btn btn-primary" onClick={analisarDesempenhoIA}>
            ✦ Analisar desempenho com IA
          </button>
        </div>

        <div
          className={"ai-box" + (aiVisible ? " visible" : "")}
          style={{ marginTop: "1rem" }}
        >
          <div className="ai-header">✦ Diagnóstico da IA</div>
          <div className="ai-content">
            {aiLoading ? (
              <span className="ai-loading">Analisando seu desempenho...</span>
            ) : (
              <span
                dangerouslySetInnerHTML={{
                  __html: aiText.replace(/\n/g, "<br/>"),
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

