import type { Metadata } from "next";

/** Área logada: evita indexar redirecionamentos para login e conteúdo duplicado. */
export const privateAppRobots: Metadata["robots"] = {
  index: false,
  follow: true,
};

/** Login e registo: páginas utilitárias, sem valor de pesquisa orgânica. */
export const authPageRobots: Metadata["robots"] = {
  index: false,
  follow: true,
};
