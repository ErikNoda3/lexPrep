"use client";

import { useEffect, useMemo, useState } from "react";
import { BANCO_QUESTOES, type Questao } from "@/lib/data/questions";

type Filters = {
  materia?: string;
  dificuldade?: string;
};

function mapDifficultyToValue(d: string | undefined) {
  if (!d) return "";
  return d;
}

export default function QuestionsClient({
  initialFilters,
}: {
  initialFilters: Filters;
}) {
  const [materia, setMateria] = useState(initialFilters.materia ?? "");
  const [dificuldade, setDificuldade] = useState(
    mapDifficultyToValue(initialFilters.dificuldade),
  );
  const [questions, setQuestions] = useState<Questao[]>(BANCO_QUESTOES);

  const [selectedById, setSelectedById] = useState<
    Record<number, number | null>
  >({});
  const [revealGabaritoById, setRevealGabaritoById] = useState<
    Record<number, boolean>
  >({});

  const [aiVisibleById, setAiVisibleById] = useState<Record<number, boolean>>(
    {},
  );
  const [aiTextById, setAiTextById] = useState<Record<number, string>>({});

  const query = useMemo(() => {
    const params = new URLSearchParams();
    if (materia) params.set("materia", materia);
    if (dificuldade) params.set("dificuldade", dificuldade);
    const qs = params.toString();
    return qs ? `?${qs}` : "";
  }, [materia, dificuldade]);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch(`/api/questions${query}`);
        if (!res.ok) throw new Error("Erro ao carregar questões");
        const data = await res.json();
        if (!alive) return;
        setQuestions((data.questions ?? []) as Questao[]);
      } catch {
        // Fallback offline: mantém a lista in-memory.
        if (!alive) return;
        let lista = [...BANCO_QUESTOES];
        if (materia) lista = lista.filter((q) => q.materia === materia);
        if (dificuldade)
          lista = lista.filter((q) => q.dificuldade === dificuldade);
        setQuestions(lista);
      }
    })();
    return () => {
      alive = false;
    };
  }, [query, materia, dificuldade]);

  function onShuffle() {
    setQuestions((prev) => [...prev].sort(() => Math.random() - 0.5));
  }

  const dificuldades: Filters["dificuldade"][] = ["Fácil", "Médio", "Difícil"];
  const materias = [
    "Constitucional",
    "Civil",
    "Penal",
    "Trabalho",
    "Tributário",
    "Administrativo",
  ];

  return (
    <div className="page active">
      <div className="page-header">
        <h1>Banco de Questões</h1>
        <p>Questões com comentário · Estilo ENAM</p>
      </div>

      <div className="filter-bar">
        <select
          value={materia}
          onChange={(e) => setMateria(e.target.value)}
          aria-label="Filtro de matéria"
        >
          <option value="">Todas as matérias</option>
          {materias.map((m) => (
            <option key={m} value={m}>
              {m === "Administrativo" ? "Administrativo" : m}
            </option>
          ))}
        </select>

        <select
          value={dificuldade}
          onChange={(e) => setDificuldade(e.target.value)}
          aria-label="Filtro de dificuldade"
        >
          <option value="">Todas as dificuldades</option>
          {dificuldades.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        <button className="btn btn-outline btn-sm" onClick={onShuffle}>
          ↺ Embaralhar
        </button>
      </div>

      <div>
        {questions.length === 0 ? (
          <p
            style={{
              color: "var(--mid)",
              fontFamily: "var(--serif)",
            }}
          >
            Nenhuma questão encontrada com os filtros selecionados.
          </p>
        ) : (
          questions.map((q, i) => {
            const selected = selectedById[q.id] ?? null;
            const reveal = revealGabaritoById[q.id] ?? false;
            const answered = selected !== null;

            return (
              <div key={q.id} className="question-card">
                <div className="q-meta">
                  <span className="tag gold">{q.materia}</span>
                  <span className="tag blue">{q.dificuldade}</span>
                  <span className="tag">ENAM</span>
                </div>

                <div className="q-text">
                  {i + 1}. {q.enunciado}
                </div>

                <ul className="options">
                  {q.opcoes.map((o, j) => {
                    const isCorrect = j === q.gabarito;
                    const isWrongSelected =
                      answered && j === selected && !isCorrect && !reveal;

                    const className =
                      "option" +
                      (isCorrect && (answered || reveal) ? " correct" : "") +
                      (isWrongSelected ? " wrong" : "") +
                      "";

                    return (
                      <li
                        key={j}
                        className={className}
                        onClick={() => {
                          if (answered) return;
                          setSelectedById((prev) => ({
                            ...prev,
                            [q.id]: j,
                          }));
                        }}
                        style={{ pointerEvents: answered ? "none" : "auto" }}
                      >
                        <span className="opt-letter">
                          {String.fromCharCode(65 + j)}
                        </span>
                        <span>{o}</span>
                      </li>
                    );
                  })}
                </ul>

                <div style={{ display: "flex", gap: ".75rem" }}>
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() =>
                      {
                        setRevealGabaritoById((p) => ({
                          ...p,
                          [q.id]: true,
                        }));
                        // Ao revelar, exibe apenas a opção correta e mostra o comentário do banco.
                        setAiVisibleById((p) => ({ ...p, [q.id]: true }));
                        setAiTextById((p) => ({
                          ...p,
                          [q.id]: q.comentario ?? "",
                        }));
                      }
                    }
                  >
                    Ver gabarito
                  </button>
                </div>

                <div
                  className={"ai-box" + (aiVisibleById[q.id] ? " visible" : "")}
                  id={`ai-${q.id}`}
                >
                  <div className="ai-header">✦ Comentário</div>
                  <div className="ai-content" id={`ai-content-${q.id}`}>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: (aiTextById[q.id] ?? q.comentario ?? "").replace(
                          /\n/g,
                          "<br/>"
                        ),
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

