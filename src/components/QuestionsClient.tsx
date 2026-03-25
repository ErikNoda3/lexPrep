"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { BANCO_QUESTOES, type Questao } from "@/lib/data/questions";
import { formatEnunciado } from "@/lib/formatEnunciado";
import {
  MATERIA_FILTER_OPTIONS,
  matchesMateriaFilter,
  normalizeMateriaFilter,
} from "@/lib/materias";

function normalizeForSearch(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function questaoMatchesQuery(q: Questao, raw: string): boolean {
  const t = raw.trim();
  if (!t) return true;
  const full = normalizeForSearch(t.replace(/\s+/g, " "));
  const hay = normalizeForSearch(
    [q.materia, q.enunciado, ...q.opcoes, q.fonte, q.comentario].join(" "),
  );

  if (/^\d+$/.test(full)) {
    if (q.id === parseInt(full, 10)) return true;
    const re = new RegExp(`(^|\\s)${full}(?=\\s|$)`);
    return re.test(hay);
  }

  if (hay.includes(full)) return true;

  const tokens = full.split(/\s+/).filter(Boolean);
  return tokens.every((tok) => {
    if (/^\d+$/.test(tok)) {
      if (q.id === parseInt(tok, 10)) return true;
      const re = new RegExp(`(^|\\s)${tok}(?=\\s|$)`);
      return re.test(hay);
    }
    return hay.includes(tok);
  });
}

type Filters = {
  materia?: string;
  dificuldade?: string;
};

function mapDifficultyToValue(d: string | undefined) {
  if (!d) return "";
  return d;
}

function canonicalMateria(m?: string): string {
  if (!m) return "";
  return normalizeMateriaFilter(m) ?? m;
}

function optionLetterFromIndex(index: number): Questao["gabarito"] {
  return String.fromCharCode(65 + index) as Questao["gabarito"];
}

function materiaAccent(materia?: string): { accent: string; soft: string } {
  const key = canonicalMateria(materia);

  // Paleta pensada para "área do Direito" (materia) e não para dificuldade.
  // soft deve ser sempre mais "apagado" (ex.: rgba com alpha).
  const map: Record<string, { accent: string; soft: string }> = {
    "Direito Constitucional": { accent: "#a16207", soft: "rgba(161, 98, 7, 0.16)" },
    "Direito Administrativo": { accent: "#1d4ed8", soft: "rgba(29, 78, 216, 0.18)" },
    "Direito Civil": { accent: "#475569", soft: "rgba(71, 85, 105, 0.18)" },
    "Direito Empresarial": { accent: "#7c3aed", soft: "rgba(124, 58, 237, 0.18)" },
    "Direito Penal": { accent: "#b91c1c", soft: "rgba(185, 28, 28, 0.14)" },
    "Direito do Trabalho": { accent: "#15803d", soft: "rgba(21, 128, 61, 0.14)" },
    "Direito Tributário": { accent: "#0f766e", soft: "rgba(15, 118, 110, 0.16)" },
    "Noções Gerais de Direito e Formação Humanística": {
      accent: "#ca8a04",
      soft: "rgba(202, 138, 4, 0.18)",
    },
    "Direitos Humanos": { accent: "#e11d48", soft: "rgba(225, 29, 72, 0.16)" },
    "Direito Processual Civil": { accent: "#0284c7", soft: "rgba(2, 132, 199, 0.16)" },
  };

  return map[key ?? ""] ?? { accent: "#a16207", soft: "rgba(161, 98, 7, 0.16)" };
}

export default function QuestionsClient({
  initialFilters,
}: {
  initialFilters: Filters;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [materia, setMateria] = useState(() =>
    canonicalMateria(initialFilters.materia),
  );
  const [dificuldade, setDificuldade] = useState(
    mapDifficultyToValue(initialFilters.dificuldade),
  );
  const [searchQuery, setSearchQuery] = useState("");
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

  useEffect(() => {
    setMateria(canonicalMateria(initialFilters.materia));
    setDificuldade(mapDifficultyToValue(initialFilters.dificuldade));
  }, [initialFilters.materia, initialFilters.dificuldade]);

  function pushFilters(nextMateria: string, nextDificuldade: string) {
    const params = new URLSearchParams();
    if (nextMateria) params.set("materia", nextMateria);
    if (nextDificuldade) params.set("dificuldade", nextDificuldade);
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

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
        if (!alive) return;
        let lista = [...BANCO_QUESTOES];
        if (materia) {
          lista = lista.filter((q) =>
            matchesMateriaFilter(q.materia, materia),
          );
        }
        if (dificuldade) {
          lista = lista.filter((q) => q.dificuldade === dificuldade);
        }
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

  const filteredQuestions = useMemo(
    () => questions.filter((q) => questaoMatchesQuery(q, searchQuery)),
    [questions, searchQuery],
  );

  const dificuldades: Filters["dificuldade"][] = ["Fácil", "Médio", "Difícil"];

  return (
    <div className="page active">
      <div className="page-header">
        <h1>Banco de Questões</h1>
        <p>Questões com comentário · Estilo ENAM</p>
      </div>

      <div
        className="filter-panel filter-panel--questoes-filters"
        role="search"
        aria-label="Filtros de questões"
      >
        <div className="filter-bar">
          <div className="filter-group">
            <label className="filter-label" htmlFor="filter-materia">
              Matéria
            </label>
            <select
              id="filter-materia"
              value={materia}
              onChange={(e) => {
                const v = e.target.value;
                setMateria(v);
                pushFilters(v, dificuldade);
              }}
              aria-label="Filtro de matéria"
            >
              <option value="">Todas as matérias</option>
              {MATERIA_FILTER_OPTIONS.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label" htmlFor="filter-dificuldade">
              Dificuldade
            </label>
            <select
              id="filter-dificuldade"
              value={dificuldade}
              onChange={(e) => {
                const v = e.target.value;
                setDificuldade(v);
                pushFilters(materia, v);
              }}
              aria-label="Filtro de dificuldade"
            >
              <option value="">Todas as dificuldades</option>
              {dificuldades.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group filter-group--questoes-search">
            <label className="filter-label" htmlFor="filter-questoes-search">
              Buscar
            </label>
            <input
              id="filter-questoes-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enunciado, alternativas, fonte…"
              autoComplete="off"
              spellCheck={false}
              aria-label="Buscar questões por texto"
            />
          </div>

          <div className="filter-actions">
            <button type="button" className="btn btn-outline btn-sm" onClick={onShuffle}>
              ↺ Embaralhar
            </button>
          </div>
        </div>
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
        ) : filteredQuestions.length === 0 ? (
          <p
            style={{
              color: "var(--mid)",
              fontFamily: "var(--serif)",
            }}
          >
            Nenhuma questão corresponde à busca. Tente outras palavras ou limpe o
            campo.
          </p>
        ) : (
          <div className="questions-grid">
            {filteredQuestions.map((q, i) => {
              const selected = selectedById[q.id] ?? null;
              const reveal = revealGabaritoById[q.id] ?? false;
              const answered = selected !== null;
              const locked = reveal || answered;

              const { accent, soft } = materiaAccent(q.materia);

              return (
                <div
                  key={q.id}
                  className="question-card"
                  style={
                    {
                      ["--q-accent" as any]: accent,
                      ["--q-accent-soft" as any]: soft,
                    } as any
                  }
                >
                  <div className="q-meta">
                    <span className="tag tag--materia">{q.materia}</span>
                    <span className="tag tag--dificuldade">{q.dificuldade}</span>
                    <span className="tag">{q.fonte}</span>
                  </div>

                  <div className="q-text">
                    <span className="q-number">{i + 1}.</span>
                    <span className="q-enunciado">{formatEnunciado(q.enunciado)}</span>
                  </div>

                  <ul className="options">
                    {q.opcoes.map((o, j) => {
                      const isCorrect = optionLetterFromIndex(j) === q.gabarito;
                      const isWrongSelected =
                        answered && j === selected && !isCorrect;

                      const className =
                        "option" +
                        (isCorrect && (answered || reveal) ? " correct" : "") +
                        (isWrongSelected ? " wrong selected-wrong" : "") +
                        "";

                      const isSelected = answered && j === selected;

                      return (
                        <li
                          key={j}
                          role="button"
                          aria-pressed={isSelected}
                          tabIndex={locked ? -1 : 0}
                          className={className}
                          onClick={() => {
                            if (locked) return;
                            setSelectedById((prev) => ({
                              ...prev,
                              [q.id]: j,
                            }));
                          }}
                          onKeyDown={(e) => {
                            if (locked) return;
                            if (e.key !== "Enter" && e.key !== " ") return;
                            e.preventDefault();
                            setSelectedById((prev) => ({
                              ...prev,
                              [q.id]: j,
                            }));
                          }}
                          style={{ pointerEvents: locked ? "none" : "auto" }}
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
                      type="button"
                      className="btn btn-outline btn-sm"
                      disabled={reveal}
                      onClick={() => {
                        setRevealGabaritoById((p) => ({
                          ...p,
                          [q.id]: true,
                        }));
                        setAiVisibleById((p) => ({ ...p, [q.id]: true }));
                        setAiTextById((p) => ({
                          ...p,
                          [q.id]: q.comentario ?? "",
                        }));
                      }}
                    >
                      {reveal ? "Gabarito revelado" : "Ver gabarito"}
                    </button>
                  </div>

                  <div
                    className={
                      "ai-box" + (aiVisibleById[q.id] ? " visible" : "")
                    }
                    id={`ai-${q.id}`}
                  >
                    <div className="ai-header">✦ Comentário</div>
                    <div className="ai-content" id={`ai-content-${q.id}`}>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: (aiTextById[q.id] ?? q.comentario ?? "").replace(
                            /\n/g,
                            "<br/>",
                          ),
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
