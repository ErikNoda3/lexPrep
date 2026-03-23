"use client";

import { useEffect, useMemo, useState } from "react";

type ProgressoPorMateria = {
  materia: string;
  pct: number;
  respondidas: number;
  acertos: number;
};

type StatsResponse = {
  questoesRespondidasTotal: number;
  deltaQuestoesSemana: number;
  taxaAcerto: number;
  taxaAcertoLabel: string;
  simuladosRealizados: number;
  lastSimulado: { qtdQuestoes: number; acertos: number; pct: number } | null;
  diasDeEstudoTotal: number;
  diasSequenciaAtual: number;
  progressoPorMateria: ProgressoPorMateria[];
};

function formatWeeklyDelta(delta: number) {
  if (delta === 0) return "Sem variação esta semana";
  const abs = Math.abs(delta);
  return `${delta > 0 ? "↑" : "↓"} ${abs} esta semana`;
}

export default function DashboardStatsClient() {
  const [stats, setStats] = useState<StatsResponse | null>(null);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    let isMounted = true;
    fetch("/api/dashboard/stats")
      .then((r) => r.json())
      .then((data: StatsResponse) => {
        if (!isMounted) return;
        setStats(data);
      })
      .catch(() => {
        if (!isMounted) return;
        setErrored(true);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const taxaSubColor = useMemo(() => {
    if (!stats) return undefined;
    return stats.taxaAcertoLabel === "Acima da média" ? "#2255A4" : undefined;
  }, [stats]);

  const materiasOrdenadas = stats?.progressoPorMateria ?? [];

  return (
    <>
      {stats ? (
        <>
          <div className="cards-grid">
            <div className="stat-card">
              <div className="label">Questões respondidas</div>
              <div className="value">{stats.questoesRespondidasTotal}</div>
              <div className="sub">{formatWeeklyDelta(stats.deltaQuestoesSemana)}</div>
            </div>

            <div className="stat-card">
              <div className="label">Taxa de acerto</div>
              <div className="value">{stats.taxaAcerto}%</div>
              <div className="sub" style={{ color: taxaSubColor }}>
                {stats.taxaAcertoLabel}
              </div>
            </div>

            <div className="stat-card">
              <div className="label">Simulados realizados</div>
              <div className="value">{stats.simuladosRealizados}</div>
              <div className="sub" style={{ color: "var(--mid)" }}>
                {stats.lastSimulado
                  ? `Último: ${stats.lastSimulado.acertos}/${stats.lastSimulado.qtdQuestoes}`
                  : "Último: —"}
              </div>
            </div>

            <div className="stat-card">
              <div className="label">Dias de estudo</div>
              <div className="value">{stats.diasDeEstudoTotal}</div>
              <div className="sub">
                {stats.diasSequenciaAtual > 0
                  ? `↑ Sequência: ${stats.diasSequenciaAtual} dias`
                  : "Sequência: 0 dias"}
              </div>
            </div>
          </div>

          <div className="progress-section">
            <div className="progress-title">Progresso por Matéria</div>

            {materiasOrdenadas.length === 0 ? (
              <div style={{ color: "var(--mid)", fontSize: ".9rem" }}>
                Nenhum progresso salvo ainda. Faça um simulado para começar.
              </div>
            ) : (
              materiasOrdenadas.map((m) => {
                const width = `${Math.min(100, Math.max(0, m.pct))}%`;
                const pct = m.pct;

                // Mantém a mesma linguagem visual do mock atual.
                const fillClass =
                  pct >= 75 ? "prog-fill green" : pct >= 55 ? "prog-fill blue" : "prog-fill";

                const fillStyle =
                  pct < 55
                    ? { width, background: "#AAA" }
                    : { width };

                return (
                  <div className="prog-item" key={m.materia}>
                    <div className="prog-header">
                      <span className="prog-name">{m.materia}</span>
                      <span className="prog-pct">{pct}%</span>
                    </div>
                    <div className="prog-bar">
                      <div className={fillClass} style={fillStyle} />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </>
      ) : errored ? (
        <div style={{ color: "var(--danger)" }}>Não foi possível carregar seus dados.</div>
      ) : (
        <div style={{ color: "var(--mid)" }}>Carregando...</div>
      )}
    </>
  );
}

