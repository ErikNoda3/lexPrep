"use client";

import { useMemo, useState } from "react";
import { RESUMOS, type ResumoKey } from "@/lib/data/resumos";

export default function ResumosClient() {
  const chaves = useMemo(() => Object.keys(RESUMOS) as ResumoKey[], []);
  const [aberto, setAberto] = useState<ResumoKey | null>(null);
  const [aiVisible, setAiVisible] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiText, setAiText] = useState("");

  async function explicarResumoIA() {
    if (!aberto) return;
    setAiVisible(true);
    setAiLoading(true);
    setAiText("");

    try {
      const res = await fetch("/api/ai/resumo", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ chave: aberto }),
      });
      const data = await res.json();
      setAiText(typeof data?.text === "string" ? data.text : "");
    } catch {
      setAiText(
        "Dica offline: foque nos pontos mais cobrados da matéria e revise lei seca + 10 questões do tema."
      );
    } finally {
      setAiLoading(false);
    }
  }

  return (
    <div className="page active">
      <div className="page-header">
        <h1>Resumos por Matéria</h1>
        <p>
          Síntese doutrinária para o ENAM · Clique para expandir
        </p>
      </div>

      <div className="resumo-grid" style={{ display: aberto ? "none" : "grid" }}>
        {chaves.map((k) => {
          const r = RESUMOS[k];
          const icon =
            k === "constitucional"
              ? "📜"
              : k === "civil"
                ? "📋"
                : k === "penal"
                  ? "🔒"
                  : k === "trabalho"
                    ? "👷"
                    : k === "tributario"
                      ? "💰"
                      : k === "administrativo"
                        ? "🏛"
                        : k === "processual"
                          ? "⚙"
                          : "📘";
          const desc =
            k === "constitucional"
              ? "Direitos fundamentais, estrutura do Estado, controle de constitucionalidade"
              : k === "civil"
                ? "Obrigações, contratos, responsabilidade civil, família e sucessões"
                : k === "penal"
                  ? "Teoria do crime, tipicidade, ilicitude, culpabilidade e penas"
                  : k === "trabalho"
                    ? "CLT, contrato de trabalho, jornada, verbas rescisórias"
                    : k === "tributario"
                      ? "CTN, fato gerador, obrigação tributária, impostos e contribuições"
                      : k === "administrativo"
                        ? "Atos administrativos, licitação, contratos, agentes públicos"
                        : k === "processual"
                          ? "CPC, petição inicial, contestação, recursos e execução"
                          : "EOAB, Código de Ética, impedimentos e deveres do advogado";

          return (
            <div
              key={r.chave}
              className="resumo-card"
              onClick={() => {
                setAberto(k);
                setAiVisible(false);
                setAiText("");
              }}
            >
              <div className="materia-icon">{icon}</div>
              <h3>{r.titulo}</h3>
              <p>{desc}</p>
            </div>
          );
        })}
      </div>

      <div
        className={"resumo-content" + (aberto ? " visible" : "")}
        style={{ display: aberto ? "block" : "none" }}
      >
        <button
          className="btn btn-outline btn-sm"
          onClick={() => setAberto(null)}
          style={{ marginBottom: "1rem" }}
        >
          ← Voltar
        </button>

        {aberto ? (
          <>
            <div id="resumo-texto">
              <h2>{RESUMOS[aberto].titulo}</h2>
              <div
                dangerouslySetInnerHTML={{ __html: RESUMOS[aberto].html }}
              />
            </div>

            <div className={"ai-box" + (aiVisible ? " visible" : "")}>
              <div className="ai-header">✦ Análise da IA</div>
              <div className="ai-content" id="resumo-ai-content">
                {aiLoading ? (
                  <span className="ai-loading">Consultando...</span>
                ) : (
                  <span
                    dangerouslySetInnerHTML={{ __html: aiText.replace(/\n/g, "<br/>") }}
                  />
                )}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

