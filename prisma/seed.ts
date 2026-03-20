import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { BANCO_QUESTOES } from "@/lib/data/questions";
import { RESUMOS } from "@/lib/data/resumos";

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString:
      process.env.DATABASE_URL ??
      "postgresql://USER:PASSWORD@localhost:5432/enam?schema=public",
  }),
});

async function main() {
  // Limpa e reinsere dados iniciais.
  if (BANCO_QUESTOES.length > 0) {
    await prisma.question.createMany({
      data: BANCO_QUESTOES.map((q) => ({
        id: q.id,
        materia: q.materia,
        dificuldade: q.dificuldade,
        enunciado: q.enunciado,
        opcoes: q.opcoes,
        gabarito: q.gabarito,
        comentario: q.comentario,
      })),
      skipDuplicates: true,
    });
  }

  const resumoEntries = Object.values(RESUMOS);
  if (resumoEntries.length > 0) {
    await prisma.resumo.createMany({
      data: resumoEntries.map((r) => ({
        chave: r.chave,
        titulo: r.titulo,
        html: r.html,
      })),
      skipDuplicates: true,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
