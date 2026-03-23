-- Remove coluna tribunal: a tabela sumulasSTF é exclusiva do STF.
ALTER TABLE "sumulasSTF" DROP COLUMN IF EXISTS "tribunal";
