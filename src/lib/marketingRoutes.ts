/** Rotas com layout “marketing” (sem navegação completa da app). Manter alinhado com `src/middleware.ts`. */
export const MARKETING_PATHS = [
  "/",
  "/termos",
  "/privacidade",
  "/login",
  "/register",
] as const;

export function isMarketingPath(pathname: string) {
  return (MARKETING_PATHS as readonly string[]).includes(pathname);
}
