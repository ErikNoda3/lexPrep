import type { Metadata } from "next";
import SimulationClient from "@/components/SimulationClient";
import { privateAppRobots } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Simulado",
  description: "Simulado no ritmo do ENAM com cronómetro e correção para treinar a prova.",
  robots: privateAppRobots,
  alternates: { canonical: "/simulado" },
};

export default function SimuladoPage() {
  return <SimulationClient />;
}

