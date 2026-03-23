import { prisma } from "@/lib/prisma";
import { BANCO_SUMULAS, type Sumula } from "@/lib/data/sumulas";
import { BANCO_SUMULAS_STJ } from "@/lib/data/sumulasSTJ";

type ListFilters = {
  tribunal?: "STF" | "STJ";
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

export async function listSumulas(filters: ListFilters): Promise<Sumula[]> {
  try {
    if (filters.tribunal === "STJ") {
      return [...BANCO_SUMULAS_STJ];
    }

    const rows = await prisma.sumulasSTF.findMany({
      orderBy: { id: "asc" },
    });

    const stf = rows.map((r) => {
      const fallback = BANCO_SUMULAS.find((s) => s.id === r.id && s.tribunal === "STF");
      return mapRowStf(r, fallback);
    });

    if (filters.tribunal === "STF") {
      return stf;
    }

    // sem filtro: STF (banco) + STJ (estático)
    return [...stf, ...BANCO_SUMULAS_STJ];
  } catch {
    let lista = [...BANCO_SUMULAS];
    if (filters.tribunal) {
      lista = lista.filter((s) => s.tribunal === filters.tribunal);
    }
    return lista;
  }
}
