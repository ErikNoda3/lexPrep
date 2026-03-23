/**
 * Súmulas do STJ — edite este arquivo para adicionar ou alterar entradas.
 */
import type { Sumula } from "./sumulas-types";

export type { Sumula } from "./sumulas-types";

export const BANCO_SUMULAS_STJ: Sumula[] = [
  {
    id: 2,
    tribunal: "STJ",
    titulo: "Súmula 444",
    descricao:
      "Súmula 444 do STJ: Inquéritos policiais e ações penais em curso não podem ser utilizados para agravar a pena-base.",
    dataAprovacao: "28/04/2010",
    fontePublicacao: "DJe 13/05/2010",
    referenciaLegislativa: "CP, art. 59; CF/88, art. 5º, LVII",
    precedentes: "HC 107.090/MG; HC 97.665/MS",
    observacao:
      "A vedação decorre do princípio da presunção de inocência na fixação da pena-base.",
  },
  {
    id: 3,
    tribunal: "STJ",
    titulo: "Súmula 7",
    descricao:
      "Súmula 7 do STJ: A pretensão de simples reexame de prova não enseja recurso especial.",
    dataAprovacao: "28/06/1990",
    fontePublicacao: "DJ 03/07/1990",
    referenciaLegislativa: "CF/88, art. 105, III",
    precedentes: "REsp 2.108/SP; REsp 5.851/SP",
    observacao:
      "Limita o conhecimento do recurso especial a questões de direito, sem revolvimento fático-probatório.",
  },
  {
    id: 5,
    tribunal: "STJ",
    titulo: "Súmula 166",
    descricao:
      "Súmula 166 do STJ: Não constitui fato gerador do ICMS o simples deslocamento de mercadoria entre estabelecimentos do mesmo contribuinte.",
    dataAprovacao: "23/10/1996",
    fontePublicacao: "DJ 29/10/1996",
    referenciaLegislativa: "CF/88, art. 155, II; LC 87/1996",
    precedentes: "REsp 30.005/SP; REsp 37.268/SP",
    observacao:
      "A ausência de circulação jurídica da mercadoria impede a incidência do imposto.",
  },
];
