import { prisma } from "@/lib/prisma";
import {
  BANCO_SUMULAS,
  type Sumula,
} from "@/lib/data/sumulas";      
import { BANCO_SUMULAS_STJ } from "@/lib/data/sumulasSTJ";
import { BANCO_SUMULAS_TST } from "@/lib/data/sumulasTST";

type ListFilters = {
  tribunal?: "STF" | "STJ" | "TST";
};

function mapRowStf(
  r: {
    id: number;
    titulo: string;
    descricao: string;
    dataAprovacao: string;
    fontePublicacao: string;
    referenciaLegislativa: string;
    precedentes: string;
    observacao: string;
  },
  fallback?: Sumula,
): Sumula {
  return {
    id: r.id,
    tribunal: "STF",
    titulo: r.titulo,
    descricao: r.descricao,
    dataAprovacao: r.dataAprovacao ?? fallback?.dataAprovacao ?? "Não informado",
    fontePublicacao: r.fontePublicacao ?? fallback?.fontePublicacao ?? "Não informado",
    referenciaLegislativa:
      r.referenciaLegislativa ?? fallback?.referenciaLegislativa ?? "Não informado",
    precedentes: r.precedentes ?? fallback?.precedentes ?? "Não informado",
    observacao: r.observacao ?? fallback?.observacao ?? "Não informado",
  };
}

function mapRowStj(
  r: {
    id: number;
    titulo: string;
    descricao: string;
    secao: string;
    julgadoEm: string;
    djeDe: string;
  },
  fallback?: Sumula,
): Sumula {
  const secaoDb = r.secao?.trim();
  return {
    id: r.id,
    tribunal: "STJ",
    titulo: r.titulo,
    descricao: r.descricao,
    secao:
      secaoDb && secaoDb !== "Não informado" ? secaoDb : fallback?.secao,
    dataAprovacao:
      r.julgadoEm?.trim() || fallback?.dataAprovacao || "Não informado",
    fontePublicacao:
      r.djeDe?.trim() || fallback?.fontePublicacao || "Não informado",
    referenciaLegislativa: fallback?.referenciaLegislativa ?? "Não informado",
    precedentes: fallback?.precedentes ?? "Não informado",
    observacao: fallback?.observacao ?? "Não informado",
  };
}

function mapRowTst(
  r: {
    id: number;
    titulo: string;
    subtitulo?: string | null;
    descricao: string;
  },
  fallback?: Sumula,
): Sumula {
  const sub = r.subtitulo?.trim();
  return {
    id: r.id,
    tribunal: "TST",
    titulo: r.titulo,
    subtitulo: sub || fallback?.subtitulo,
    descricao: r.descricao,
  };
}

export async function listSumulas(filters: ListFilters): Promise<Sumula[]> {
  try {
    const rowsStf = await prisma.sumulasSTF.findMany({
      orderBy: { id: "asc" },
    });
    const stf = rowsStf.map((r) => {
      const fallback = BANCO_SUMULAS.find((s) => s.id === r.id && s.tribunal === "STF");
      return mapRowStf(r, fallback);
    });

    const rowsStj = await prisma.sumulasSTJ.findMany({
      orderBy: { id: "asc" },
    });
    const stj = rowsStj.map((r) => {
      const fallback = BANCO_SUMULAS_STJ.find((s) => s.id === r.id);
      return mapRowStj(r, fallback);
    });

    const rowsTst = await prisma.sumulasTST.findMany({
      orderBy: { id: "asc" },
    });
    const tst = rowsTst.map((r) => {
      const fallback = BANCO_SUMULAS_TST.find((s) => s.id === r.id);
      return mapRowTst(r, fallback);
    });

    if (filters.tribunal === "STF") {
      return stf;
    }
    if (filters.tribunal === "STJ") {
      return stj;
    }
    if (filters.tribunal === "TST") {
      return tst;
    }

    return [...stf, ...stj, ...tst];
  } catch {
    if (filters.tribunal === "TST") {
      return BANCO_SUMULAS_TST.map((s) => ({
        ...s,
        tribunal: "TST" as const,
      }));
    }
    let lista = [...BANCO_SUMULAS];
    if (filters.tribunal) {
      lista = lista.filter((s) => s.tribunal === filters.tribunal);
    }
    return lista;
  }
}
