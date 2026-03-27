import type { Metadata } from "next";
import QuestionsClient from "@/components/QuestionsClient";
import { privateAppRobots } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Questões",
  description:
    "Banco de questões para o ENAM com filtros por matéria e dificuldade, com comentários e progresso.",
  robots: privateAppRobots,
  alternates: { canonical: "/questoes" },
};

export default function QuestoesPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const materia =
    typeof searchParams.materia === "string" ? searchParams.materia : "";
  const dificuldade =
    typeof searchParams.dificuldade === "string" ? searchParams.dificuldade : "";

  return (
    <QuestionsClient
      initialFilters={{
        materia: materia || undefined,
        dificuldade: dificuldade || undefined,
      }}
    />
  );
}

