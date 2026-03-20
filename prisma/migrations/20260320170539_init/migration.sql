-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "materia" TEXT NOT NULL,
    "dificuldade" TEXT NOT NULL,
    "enunciado" TEXT NOT NULL,
    "opcoes" TEXT[],
    "gabarito" INTEGER NOT NULL,
    "comentario" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resumo" (
    "id" SERIAL NOT NULL,
    "chave" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "html" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Resumo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSession" (
    "sessionId" TEXT NOT NULL,
    "questoesRespondidas" INTEGER NOT NULL DEFAULT 0,
    "acertos" INTEGER NOT NULL DEFAULT 0,
    "simuladosRealizados" INTEGER NOT NULL DEFAULT 0,
    "diasSequenciaAtual" INTEGER NOT NULL DEFAULT 0,
    "progressoPorMateria" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserSession_pkey" PRIMARY KEY ("sessionId")
);

-- CreateTable
CREATE TABLE "SimuladoAttempt" (
    "id" SERIAL NOT NULL,
    "sessionId" TEXT NOT NULL,
    "qtdQuestoes" INTEGER NOT NULL,
    "tempoPorQSec" INTEGER NOT NULL,
    "acertos" INTEGER NOT NULL DEFAULT 0,
    "respondidas" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SimuladoAttempt_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Question_materia_idx" ON "Question"("materia");

-- CreateIndex
CREATE INDEX "Question_dificuldade_idx" ON "Question"("dificuldade");

-- CreateIndex
CREATE UNIQUE INDEX "Resumo_chave_key" ON "Resumo"("chave");

-- CreateIndex
CREATE INDEX "SimuladoAttempt_sessionId_idx" ON "SimuladoAttempt"("sessionId");

-- AddForeignKey
ALTER TABLE "SimuladoAttempt" ADD CONSTRAINT "SimuladoAttempt_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "UserSession"("sessionId") ON DELETE CASCADE ON UPDATE CASCADE;
