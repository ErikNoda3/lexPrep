"use client";

import { Scale } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  BANCO_SUMULAS,
  type Sumula,
} from "@/lib/data/sumulas";

function normalizeForSearch(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function sumulaMatchesQuery(s: Sumula, raw: string): boolean {
  const q = raw.trim();
  if (!q) return true;
  const full = normalizeForSearch(q.replace(/\s+/g, " "));
  const tituloNorm = normalizeForSearch(s.titulo);
  const hay = normalizeForSearch(
    [
      s.titulo,
      s.subtitulo,
      s.descricao,
      s.secao,
      s.dataAprovacao,
      s.fontePublicacao,
      s.julgadoEm,
      s.djeDe,
      s.referenciaLegislativa,
      s.precedentes,
      s.observacao,
    ].join(" "),
  );

  // Busca só com número: exige o número completo no título (evita "1" em "12" ou em datas)
  if (/^\d+$/.test(full)) {
    return new RegExp(`(^|\\s)${full}(?=\\s|$)`).test(tituloNorm);
  }

  // Frase inteira no título (ex.: "sumula 1" → só a SÚMULA 1)
  if (tituloNorm.includes(full)) return true;
  // Frase inteira em qualquer campo (datas, trechos longos)
  if (hay.includes(full)) return true;

  const tokens = full.split(/\s+/).filter(Boolean);
  return tokens.every((t) => {
    // Número isolado: datas e "art. 1" poluem o texto; exige o dígito no título com limite de palavra
    if (/^\d+$/.test(t)) {
      const re = new RegExp(`(^|\\s)${t}(?=\\s|$)`);
      return re.test(tituloNorm);
    }
    return hay.includes(t);
  });
}

type MetaRow = { label: string; value?: string | null; pre?: boolean };

function SumulaMetaRow({
  label,
  value,
  pre,
}: {
  label: string;
  value?: string | null;
  pre?: boolean;
}) {
  const v = value?.trim();
  if (!v) return null;
  return (
    <div className="sumula-card__meta-group">
      <dt className="sumula-card__meta-label">{label}</dt>
      <dd
        className={
          pre
            ? "sumula-card__meta-value sumula-card__meta-value--pre"
            : "sumula-card__meta-value"
        }
      >
        {v}
      </dd>
    </div>
  );
}

function SumulaMeta({ rows }: { rows: MetaRow[] }) {
  const visible = rows.filter((r) => r.value?.trim());
  if (!visible.length) return null;
  return (
    <dl className="sumula-card__meta">
      {visible.map((r) => (
        <SumulaMetaRow
          key={r.label}
          label={r.label}
          value={r.value}
          pre={r.pre}
        />
      ))}
    </dl>
  );
}

export default function SumulasPage() {
  const [tribunal, setTribunal] = useState<"STF" | "STJ" | "TST">("STF");
  const [sumulas, setSumulas] = useState<Sumula[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setSearchQuery("");
  }, [tribunal]);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch(`/api/sumulas?tribunal=${tribunal}`);
        if (!res.ok) throw new Error("Erro ao carregar súmulas");
        const data = await res.json();
        if (!alive) return;
        setSumulas((data.sumulas ?? []) as Sumula[]);
      } catch {
        if (!alive) return;
        setSumulas(BANCO_SUMULAS.filter((s) => s.tribunal === tribunal));
      }
    })();
    return () => {
      alive = false;
    };
  }, [tribunal]);

  const filteredSumulas = useMemo(
    () => sumulas.filter((s) => sumulaMatchesQuery(s, searchQuery)),
    [sumulas, searchQuery],
  );

  return (
    <div className="page active">
      <div className="page-header">
        <h1>Súmulas</h1>
        <p>Revisão rápida dos entendimentos mais cobrados no ENAM.</p>
      </div>

      <div
        className="filter-panel filter-panel--sumulas-filters"
        role="search"
        aria-label="Filtros de súmulas"
      >
        <div className="filter-bar">
          <div className="filter-group filter-group--tribunal">
            <label className="filter-label" htmlFor="filter-tribunal">
              Tribunal
            </label>
            <select
              id="filter-tribunal"
              value={tribunal}
              onChange={(e) =>
                setTribunal(e.target.value as "STF" | "STJ" | "TST")
              }
              aria-label="Filtro de tribunal"
            >
              <option value="STF">STF</option>
              <option value="STJ">STJ</option>
              <option value="TST">TST</option>
            </select>
          </div>
          <div className="filter-group filter-group--sumulas-search">
            <label className="filter-label" htmlFor="filter-sumulas-search">
              Buscar
            </label>
            <input
              id="filter-sumulas-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Título, ementa, referência…"
              autoComplete="off"
              spellCheck={false}
              aria-label="Buscar súmulas por texto"
            />
          </div>
        </div>
      </div>

      <div className="sumula-list">
        {filteredSumulas.map((s) => (
          <article
            key={s.id}
            className={`stat-card sumula-card sumula-card--${tribunal.toLowerCase()} group`}
          >
            <div className="sumula-card__header">
              <div className="sumula-card__icon" aria-hidden>
                <Scale className="h-[1.15rem] w-[1.15rem]" strokeWidth={2} />
              </div>
              <div className="sumula-card__head-text">
                <span className="sumula-card__tribunal">{tribunal}</span>
                <h2 className="sumula-card__title">{s.titulo}</h2>
              </div>
            </div>
            {s.subtitulo?.trim() ? (
              <p className="sumula-card__subtitle">{s.subtitulo}</p>
            ) : null}
            <p className="sumula-card__ementa">{s.descricao}</p>
            {tribunal === "STF" ? (
              <SumulaMeta
                rows={[
                  { label: "Seção", value: s.secao },
                  { label: "Data de aprovação", value: s.dataAprovacao },
                  { label: "Fonte de publicação", value: s.fontePublicacao },
                  { label: "Referência legislativa", value: s.referenciaLegislativa },
                  { label: "Precedentes", value: s.precedentes, pre: true },
                  { label: "Observação", value: s.observacao },
                ]}
              />
            ) : tribunal === "STJ" ? (
              <SumulaMeta
                rows={[
                  { label: "Seção", value: s.secao },
                  {
                    label: "Julgado em",
                    value: s.julgadoEm ?? s.dataAprovacao,
                  },
                  {
                    label: "DJE de",
                    value: s.djeDe ?? s.fontePublicacao,
                  },
                ]}
              />
            ) : null}
          </article>
        ))}
        {sumulas.length === 0 ? (
          <div
            className={`stat-card sumula-card sumula-card--${tribunal.toLowerCase()} sumula-card--empty`}
          >
            <p className="sumula-card__empty-msg">
              Nenhuma súmula cadastrada para {tribunal}.
            </p>
          </div>
        ) : filteredSumulas.length === 0 ? (
          <div
            className={`stat-card sumula-card sumula-card--${tribunal.toLowerCase()} sumula-card--empty`}
          >
            <p className="sumula-card__empty-msg">
              Nenhuma súmula corresponde à busca. Tente outras palavras ou limpe
              o campo.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
