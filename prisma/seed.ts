import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { BANCO_QUESTOES } from "@/lib/data/questions";
import { RESUMOS } from "@/lib/data/resumos";
import { BANCO_SUMULAS_STF } from "@/lib/data/sumulasSTF";

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString:
      process.env.DATABASE_URL ??
      "postgresql://USER:PASSWORD@localhost:5432/enam?schema=public",
  }),
});

async function main() {
  // Ao trocar o banco de questões no seed, queremos remover o conteúdo antigo.
  await prisma.question.deleteMany();

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
        fonte: q.fonte,
      })),
      // Depois do `deleteMany`, não existe mais duplicidade; mantemos a insercao deterministica.
      skipDuplicates: false,
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

  await prisma.sumulasSTF.deleteMany();
  if (BANCO_SUMULAS_STF.length > 0) {
    await prisma.sumulasSTF.createMany({
      data: BANCO_SUMULAS_STF.map((s) => ({
        id: s.id,
        titulo: s.titulo,
        descricao: s.descricao,
        dataAprovacao: s.dataAprovacao,
        fontePublicacao: s.fontePublicacao,
        referenciaLegislativa: s.referenciaLegislativa,
        precedentes: s.precedentes,
        observacao: s.observacao,
      })),
      skipDuplicates: false,
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
