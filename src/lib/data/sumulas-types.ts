/**
 * Tipo compartilhado entre os bancos de súmulas por tribunal.
 */
export type Sumula = {
  id: number;
  tribunal: "STF" | "STJ";
  titulo: string;
  descricao: string;
  dataAprovacao: string;
  fontePublicacao: string;
  referenciaLegislativa: string;
  precedentes: string;
  observacao: string;
};
