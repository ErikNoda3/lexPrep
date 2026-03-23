/**
 * Agrega os bancos por tribunal. Para editar conteúdo, use `sumulasSTF.ts` ou `sumulasSTJ.ts`.
 */
import type { Sumula } from "./sumulas-types";
import { BANCO_SUMULAS_STF } from "./sumulasSTF";
import { BANCO_SUMULAS_STJ } from "./sumulasSTJ";

export type { Sumula } from "./sumulas-types";

export const BANCO_SUMULAS: Sumula[] = [
  ...BANCO_SUMULAS_STF,
  ...BANCO_SUMULAS_STJ,
];
