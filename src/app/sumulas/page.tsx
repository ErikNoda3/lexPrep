"use client";

import { useEffect, useMemo, useState } from "react";
import { BANCO_SUMULAS, type Sumula } from "@/lib/data/sumulas";

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
      s.descricao,
      s.dataAprovacao,
      s.fontePublicacao,
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

export default function SumulasPage() {
  const [tribunal, setTribunal] = useState<"STF" | "STJ">("STF");
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
              onChange={(e) => setTribunal(e.target.value as Sumula["tribunal"])}
              aria-label="Filtro de tribunal"
            >
              <option value="STF">STF</option>
              <option value="STJ">STJ</option>
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

      <div style={{ display: "grid", gap: "1rem" }}>
        {filteredSumulas.map((s) => (
          <div key={s.id} className="stat-card">
            <div className="label">
              {s.tribunal} · {s.titulo}
            </div>
            <div style={{ color: "var(--dark-2)", fontSize: ".95rem" }}>
              {s.descricao}
            </div>
            <div
              style={{
                display: "grid",
                gap: ".4rem",
                marginTop: ".85rem",
                color: "var(--mid)",
                fontSize: ".88rem",
              }}
            >
              <div>
                <strong>Data de aprovação:</strong> {s.dataAprovacao}
              </div>
              <div>
                <strong>Fonte de publicação:</strong> {s.fontePublicacao}
              </div>
              <div>
                <strong>Referência legislativa:</strong> {s.referenciaLegislativa}
              </div>
              <div>
                <strong>Precedentes:</strong> {s.precedentes}
              </div>
              <div>
                <strong>Observação:</strong> {s.observacao}
              </div>
            </div>
          </div>
        ))}
        {sumulas.length === 0 ? (
          <div className="stat-card">
            <div style={{ color: "var(--mid)" }}>
              Nenhuma súmula cadastrada para {tribunal}.
            </div>
          </div>
        ) : filteredSumulas.length === 0 ? (
          <div className="stat-card">
            <div style={{ color: "var(--mid)" }}>
              Nenhuma súmula corresponde à busca. Tente outras palavras ou limpe o
              campo.
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
