/**
 * Formata o texto do enunciado para melhorar a leitura das "assertivas" (I., II., III., IV., V...).
 * Insere quebras de linha antes dos numerais romanos seguidos de ponto.
 */
export function formatEnunciado(text: string): string {
  // Quebra antes do primeiro numeral após ":" (ex.: "analise as assertivas: I. ...")
  let out = text.replace(/:\s+(?=[IVXLCDM]{1,7}\.)/g, ":\n");

  // Quebra após ";" (ex.: "...; II. ...")
  out = out.replace(/;\s+(?=[IVXLCDM]{1,7}\.)/g, ";\n");

  // Quebra após "." quando vier um novo numeral em seguida (ex.: ".... propriedade. II. ...")
  out = out.replace(/\.\s+(?=[IVXLCDM]{1,7}\.)/g, ".\n");

  // Pequena melhoria de leitura: geralmente vem após as assertivas.
  out = out.replace(
    /\.\s+(?=Está\s+correto\s+o\s+que\s+se\s+afirma\s+em\b)/g,
    ".\n",
  );

  // Também melhora casos como "... III. ... Mário. Considerando ..."
  out = out.replace(/\.\s+(?=Considerando\b)/g, ".\n");

  // E casos finais como "... ITBI e do ITCMD, assinale ..."
  out = out.replace(/,\s+(?=assinale\b)/gi, ",\n");

  return out;
}

