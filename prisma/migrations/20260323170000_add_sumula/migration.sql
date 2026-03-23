CREATE TABLE "Sumula" (
    "id" SERIAL NOT NULL,
    "tribunal" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sumula_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "Sumula_tribunal_idx" ON "Sumula"("tribunal");
