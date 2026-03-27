/** URL canónica do site (OG, sitemap, JSON-LD). Defina NEXT_PUBLIC_SITE_URL em produção. */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  return "http://localhost:3001";
}

export const SITE_NAME = "LexPrep ENAM";

export const SITE_TAGLINE =
  "Plataforma de estudos jurídicos para o ENAM: súmulas STF, STJ e TST, questões e simulados.";

export const SITE_DESCRIPTION =
  "Prepare o Exame Nacional da Magistratura (ENAM) com súmulas dos tribunais superiores, banco de questões com filtros por matéria e simulados no ritmo da prova.";
