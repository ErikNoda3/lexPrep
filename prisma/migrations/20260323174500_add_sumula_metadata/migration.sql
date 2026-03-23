-- Add metadata fields to Sumula with safe defaults for existing rows.
ALTER TABLE "Sumula"
ADD COLUMN "dataAprovacao" TEXT NOT NULL DEFAULT 'Não informado',
ADD COLUMN "fontePublicacao" TEXT NOT NULL DEFAULT 'Não informado',
ADD COLUMN "referenciaLegislativa" TEXT NOT NULL DEFAULT 'Não informado',
ADD COLUMN "precedentes" TEXT NOT NULL DEFAULT 'Não informado',
ADD COLUMN "observacao" TEXT NOT NULL DEFAULT 'Não informado';
