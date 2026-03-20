import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function Sidebar() {
  let totalCount = 0;
  let countByMateria: Record<string, number> = {};

  try {
    const [total, groupedByMateria] = await Promise.all([
      prisma.question.count(),
      prisma.question.groupBy({
        by: ["materia"],
        _count: { _all: true },
      }),
    ]);
    totalCount = total;
    countByMateria = Object.fromEntries(
      groupedByMateria.map((g) => [g.materia, g._count._all])
    );
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.error("[Sidebar] Falha ao carregar contagens:", err);
    }
  }

  const getCount = (materia: string) => countByMateria[materia] ?? 0;

  return (
    <div>
      <div className="sidebar-title">Matérias</div>

      <Link className="sidebar-item" href="/questoes">
        <span className="icon">⚖</span> Todas as matérias{" "}
        <span className="count">{totalCount}</span>
      </Link>

      <Link className="sidebar-item" href="/questoes?materia=Constitucional">
        <span className="icon">📜</span> Constitucional{" "}
        <span className="count">{getCount("Constitucional")}</span>
      </Link>

      <Link className="sidebar-item" href="/questoes?materia=Civil">
        <span className="icon">📋</span> Direito Civil{" "}
        <span className="count">{getCount("Civil")}</span>
      </Link>

      <Link className="sidebar-item" href="/questoes?materia=Penal">
        <span className="icon">🔒</span> Direito Penal{" "}
        <span className="count">{getCount("Penal")}</span>
      </Link>

      <Link className="sidebar-item" href="/questoes?materia=Trabalho">
        <span className="icon">👷</span> Direito do Trabalho{" "}
        <span className="count">{getCount("Trabalho")}</span>
      </Link>

      <Link className="sidebar-item" href="/questoes?materia=Administrativo">
        <span className="icon">🏛</span> Direito Adm.{" "}
        <span className="count">{getCount("Administrativo")}</span>
      </Link>

      <Link className="sidebar-item" href="/questoes?materia=Tributário">
        <span className="icon">💰</span> Tributário{" "}
        <span className="count">{getCount("Tributário")}</span>
      </Link>

      <Link className="sidebar-item" href="/questoes?materia=Ética">
        <span className="icon">📘</span> Ética e Estatuto{" "}
        <span className="count">{getCount("Ética")}</span>
      </Link>

      <div className="sidebar-title" style={{ marginTop: "1rem" }}>
        Filtros
      </div>

      <Link className="sidebar-item" href="/questoes?dificuldade=Fácil">
        <span className="icon">🟢</span> Fácil
      </Link>

      <Link className="sidebar-item" href="/questoes?dificuldade=Médio">
        <span className="icon">🟡</span> Médio
      </Link>

      <Link className="sidebar-item" href="/questoes?dificuldade=Difícil">
        <span className="icon">🔴</span> Difícil
      </Link>
    </div>
  );
}

