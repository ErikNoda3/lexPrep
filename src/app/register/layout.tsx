import type { Metadata } from "next";
import type { ReactNode } from "react";
import { authPageRobots } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Criar conta",
  description: "Registe-se no LexPrep ENAM para estudar súmulas e praticar questões para a magistratura.",
  robots: authPageRobots,
  alternates: { canonical: "/register" },
};

export default function RegisterLayout({ children }: { children: ReactNode }) {
  return children;
}
