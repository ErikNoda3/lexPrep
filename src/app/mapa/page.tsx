import type { Metadata } from "next";
import MapaClient from "@/components/MapaClient";
import { privateAppRobots } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mapa mental",
  description: "Mapa mental assistido para organizar temas e reforçar a revisão para o ENAM.",
  robots: privateAppRobots,
  alternates: { canonical: "/mapa" },
};

export default function MapaPage() {
  return <MapaClient />;
}

