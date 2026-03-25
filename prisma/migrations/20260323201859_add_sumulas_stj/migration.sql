-- CreateTable
CREATE TABLE "sumulasSTJ" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "secao" TEXT NOT NULL DEFAULT 'Não informado',
    "julgadoEm" TEXT NOT NULL DEFAULT 'Não informado',
    "djeDe" TEXT NOT NULL DEFAULT 'Não informado',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sumulasSTJ_pkey" PRIMARY KEY ("id")
);
