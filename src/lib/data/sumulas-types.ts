/**
 * Tipo compartilhado entre os bancos de súmulas por tribunal.
 */
/** Súmulas do TST: apenas título, subtítulo e descrição (sem campo tribunal). */
export type SumulaTST = {
  id: number;
  titulo: string;
  subtitulo?: string;
  descricao: string;
};

export type Sumula = {
  id: number;
  tribunal?: "STF" | "STJ" | "TST";
  titulo: string;
  /** TST: tema ou rubrica (ex.: competência, terceirização). */
  subtitulo?: string;
  descricao: string;
  /** STJ (banco): seção temática da súmula. */
  secao?: string;
  julgadoEm?: string;
  djeDe?: string;
  dataAprovacao?: string;
  fontePublicacao?: string;
  referenciaLegislativa?: string;
  precedentes?: string;
  observacao?: string;
  /** Metadado do banco STJ (ex.: REVISADA, CANCELADA). */
  status?: string;
  redacaoAnterior?: string;
};
