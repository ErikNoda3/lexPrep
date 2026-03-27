import type { Metadata } from "next";
import type { ReactNode } from "react";
import { authPageRobots } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Entrar",
  description: "Aceda ao LexPrep ENAM com Google ou email para questões, súmulas e simulado.",
  robots: authPageRobots,
  alternates: { canonical: "/login" },
};

export default function LoginLayout({ children }: { children: ReactNode }) {
  return children;
}
