"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { type Questao } from "@/lib/data/questions";
import { formatEnunciado } from "@/lib/formatEnunciado";

type Phase = "inicio" | "rodando" | "resultado";

function optionLetterFromIndex(index: number): Questao["gabarito"] {
  return String.fromCharCode(65 + index) as Questao["gabarito"];
}

export default function SimulationClient() {
  const [phase, setPhase] = useState<Phase>("inicio");

  const [qtd, setQtd] = useState(20);
  const [tempoPorQMin, setTempoPorQMin] = useState(3);

  const [simQuestoes, setSimQuestoes] = useState<Questao[]>([]);
  const [simIdx, setSimIdx] = useState(0);
  const [simAcertos, setSimAcertos] = useState(0);
  const [simRespondidas, setSimRespondidas] = useState(0);

  const tempoPorQSec = useMemo(() => tempoPorQMin * 60, [tempoPorQMin]);
  const [timerLeft, setTimerLeft] = useState(tempoPorQSec);

  const intervalRef = useRef<number | null>(null);

  function clearTimer() {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function startTimer() {
    clearTimer();
    setTimerLeft(tempoPorQSec);
    intervalRef.current = window.setInterval(() => {
      setTimerLeft((t) => t - 1);
    }, 1000);
  }

  useEffect(() => {
    if (phase !== "rodando") return;
    startTimer();
    return () => clearTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, simIdx]);

  useEffect(() => {
    if (phase !== "rodando") return;
    if (timerLeft <= 0) {
      // Tempo estourou -> pula
      simPular();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerLeft, phase]);

  async function iniciarSimulado() {
    // carrega a base (por ora, endpoint retorna dados do seed/fallback)
    const res = await fetch("/api/questions");
    const data = await res.json();
    const all: Questao[] = (data?.questions ?? []) as Questao[];
    const pick = [...all].sort(() => Math.random() - 0.5).slice(0, Math.min(qtd, all.length));

    setSimQuestoes(pick);
    setSimIdx(0);
    setSimAcertos(0);
    setSimRespondidas(0);
    setPhase("rodando");
  }

  function renderSimQuestao() {
    return simQuestoes[simIdx] ?? null;
  }

  function simResponder(opcao: number) {
    if (phase !== "rodando") return;
    clearTimer();

    const q = renderSimQuestao();
    if (!q) return;

    setSimRespondidas((n) => n + 1);

    const isCorrect = optionLetterFromIndex(opcao) === q.gabarito;
    if (isCorrect) setSimAcertos((n) => n + 1);

    // tranca e avança manualmente com botões:
    // Mantemos estado local de "respondido" via atributo no DOM não é ideal; então usamos estado derivado:
    // abordagem: se o índice já passou, a renderização muda. Para travar opções, usamos timerLeft<=0? não.
  }

  // Controle de resposta (para travar UI):
  const [answeredByIdx, setAnsweredByIdx] = useState<Record<number, number | null>>({});

  useEffect(() => {
    if (phase === "rodando") {
      setAnsweredByIdx({});
    }
  }, [phase]);

  function simResponderWithLock(opcao: number) {
    const q = renderSimQuestao();
    if (!q) return;
    if (answeredByIdx[simIdx] !== undefined && answeredByIdx[simIdx] !== null) return;

    setAnsweredByIdx((p) => ({ ...p, [simIdx]: opcao }));
    clearTimer();

    setSimRespondidas((n) => n + 1);
    if (optionLetterFromIndex(opcao) === q.gabarito) setSimAcertos((n) => n + 1);
  }

  function simPular() {
    clearTimer();
    setAnsweredByIdx((p) => ({ ...p, [simIdx]: null }));
    setSimIdx((i) => {
      const next = i + 1;
      if (next >= simQuestoes.length) {
        finalizarSimulado();
        return i;
      }
      return next;
    });
  }

  function simProxima() {
    clearTimer();
    setSimIdx((i) => {
      const next = i + 1;
      if (next >= simQuestoes.length) {
        finalizarSimulado();
        return i;
      }
      return next;
    });
  }

  async function finalizarSimulado() {
    clearTimer();
    setPhase("resultado");

    const pct =
      simQuestoes.length > 0
        ? Math.round((simAcertos / simQuestoes.length) * 100)
        : 0;

    // Estatísticas por matéria (usadas pelo dashboard no home).
    const materiaStats = simQuestoes.reduce<
      Record<string, { respondidas: number; acertos: number }>
    >((acc, q, idx) => {
      const answeredOpt = answeredByIdx[idx];
      if (answeredOpt === undefined || answeredOpt === null) return acc;

      const isCorrect = optionLetterFromIndex(answeredOpt) === q.gabarito;
      const current = acc[q.materia] ?? { respondidas: 0, acertos: 0 };
      acc[q.materia] = {
        respondidas: current.respondidas + 1,
        acertos: current.acertos + (isCorrect ? 1 : 0),
      };
      return acc;
    }, {});

    // Persistência (se o DB estiver configurado)
    try {
      await fetch("/api/progress/simulado", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          qtdQuestoes: simQuestoes.length,
          tempoPorQSec,
          acertos: simAcertos,
          respondidas: simRespondidas,
          materiaStats,
        }),
      });
    } catch {
      // offline/sem DB: ignora
    }

    setResultadoState({ pct });
  }

  const [resultadoState, setResultadoState] = useState<{ pct: number }>({
    pct: 0,
  });

  const q = renderSimQuestao();
  const answered = answeredByIdx[simIdx];

  return (
    <div>
      {phase === "inicio" ? (
        <div className="page active">
          <div className="page-header">
            <h1>Simulado ENAM</h1>
            <p>80 questões · 5 horas · Estilo prova oficial</p>
          </div>

          <div id="simulado-inicio">
            <div style={{ maxWidth: 560 }}>
              <div className="progress-section">
                <div className="progress-title">Configurar Simulado</div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    marginTop: ".5rem",
                  }}
                >
                  <div>
                    <label
                      style={{
                        fontSize: ".85rem",
                        color: "var(--mid)",
                        display: "block",
                        marginBottom: ".35rem",
                      }}
                    >
                      Número de questões
                    </label>
                    <select
                      style={{
                        fontFamily: "var(--sans)",
                        fontSize: ".875rem",
                        padding: ".45rem .75rem",
                        border: "1px solid var(--border)",
                        borderRadius: "6px",
                        width: "100%",
                      }}
                      id="sim-qtd"
                      value={qtd}
                      onChange={(e) => setQtd(parseInt(e.target.value, 10))}
                    >
                      <option value="10">10 questões (prática rápida)</option>
                      <option value="20">20 questões (prática média)</option>
                      <option value="80">80 questões (simulado completo)</option>
                    </select>
                  </div>

                  <div>
                    <label
                      style={{
                        fontSize: ".85rem",
                        color: "var(--mid)",
                        display: "block",
                        marginBottom: ".35rem",
                      }}
                    >
                      Tempo por questão
                    </label>
                    <select
                      style={{
                        fontFamily: "var(--sans)",
                        fontSize: ".875rem",
                        padding: ".45rem .75rem",
                        border: "1px solid var(--border)",
                        borderRadius: "6px",
                        width: "100%",
                      }}
                      id="sim-tempo"
                      value={tempoPorQMin}
                      onChange={(e) => setTempoPorQMin(parseInt(e.target.value, 10))}
                    >
                      <option value="2">2 minutos (rápido)</option>
                      <option value="3">3 minutos (padrão ENAM)</option>
                      <option value="5">5 minutos (relaxado)</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginTop: "1.5rem" }}>
                  <button className="btn btn-primary" onClick={iniciarSimulado}>
                    Iniciar Simulado
                  </button>
                </div>
              </div>

              <div className="progress-section" style={{ marginTop: "1.5rem" }}>
                <div className="progress-title">Histórico de simulados</div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".75rem",
                    marginTop: ".5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: ".875rem",
                    }}
                  >
                    <span style={{ color: "var(--dark-2)" }}>
                      Simulado #4 · {qtd} questões
                    </span>
                    <span style={{ color: "var(--success)", fontWeight: 500 }}>
                      68% · 13/20
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {phase === "rodando" && q ? (
        <div className="page active" id="simulado-rodando">
          <div className="simulado-header">
            <div>
              <div style={{ fontSize: ".75rem", color: "rgba(255,255,255,0.55)", letterSpacing: ".08em", textTransform: "uppercase", marginBottom: "2px" }}>
                Questão{" "}
                <span id="sim-atual">{simIdx + 1}</span> de{" "}
                <span id="sim-total">{simQuestoes.length}</span>
              </div>
              <div className="simulado-progress-text" id="sim-materia-tag">
                {q.materia} · {q.dificuldade}
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: ".72rem", color: "rgba(255,255,255,0.55)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: "2px" }}>
                Tempo restante
              </div>
              <div className="timer" id="sim-timer">
                {`${String(Math.floor(timerLeft / 60)).padStart(2, "0")}:${String(timerLeft % 60).padStart(2, "0")}`}
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: ".72rem", color: "rgba(255,255,255,0.55)", letterSpacing: ".08em", textTransform: "uppercase", marginBottom: "2px" }}>
                Acertos
              </div>
              <div style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.65)" }}>
                <span style={{ color: "var(--gold-light)", fontWeight: 500 }}>
                  {simAcertos}
                </span>
                /<span>{simRespondidas}</span>
              </div>
            </div>
          </div>

          <div id="sim-questao-container">
            <div className="question-card">
              <div className="q-text">{formatEnunciado(q.enunciado)}</div>
              <ul className="options">
                {q.opcoes.map((o, j) => {
                  const isCorrect = optionLetterFromIndex(j) === q.gabarito;
                  const isSelected = answered !== undefined && answered !== null && j === answered;
                  const isWrongSelected = answered !== undefined && answered !== null && isSelected && !isCorrect;

                  const cls =
                    "option" +
                    (answered !== undefined && answered !== null && isCorrect
                      ? " correct"
                      : "") +
                    (isWrongSelected ? " wrong" : "");

                  return (
                    <li
                      key={j}
                      className={cls}
                      onClick={() => {
                        if (answered !== undefined && answered !== null) return;
                        simResponderWithLock(j);
                      }}
                      style={{ pointerEvents: answered !== undefined && answered !== null ? "none" : "auto" }}
                    >
                      <span className="opt-letter">{String.fromCharCode(65 + j)}</span>
                      <span>{o}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="sim-actions-row">
            <button className="btn btn-outline" onClick={simPular}>
              Pular questão
            </button>
            <button
              className="btn btn-primary"
              onClick={simProxima}
              style={{ display: answered !== undefined ? "block" : "none" }}
            >
              Próxima →
            </button>
            <button
              className="btn btn-primary"
              onClick={finalizarSimulado}
              style={{
                display:
                  answered !== undefined && simIdx === simQuestoes.length - 1
                    ? "block"
                    : "none",
              }}
            >
              Finalizar simulado
            </button>
          </div>
        </div>
      ) : null}

      {phase === "resultado" ? (
        <div className="page active" id="simulado-resultado">
          <div className="progress-section sim-resultado-panel">
            <div className="sim-resultado-icon">⚖</div>
            <div className="progress-title">
              Simulado concluído!
            </div>
            <div
              className="sim-resultado-pct"
              id="res-pct"
            >
              {resultadoState.pct}%
            </div>
            <div style={{ color: "var(--mid)", fontSize: ".95rem" }}>
              {resultadoState.pct < 50
                ? "Continue estudando! Revise as matérias com mais atenção."
                : resultadoState.pct < 65
                  ? "Bom progresso! Com mais prática você chegará lá."
                  : resultadoState.pct < 80
                    ? "Muito bem! Você está acima da média do ENAM."
                    : "Excelente! Desempenho de aprovado. Continue assim!"}
            </div>
            <div className="sim-resultado-actions">
              <button className="btn btn-outline" onClick={() => setPhase("inicio")}>
                Novo simulado
              </button>
              <button className="btn btn-primary" onClick={() => setPhase("inicio")}>
                Revisar questões
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

