import QuestionsClient from "@/components/QuestionsClient";

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

