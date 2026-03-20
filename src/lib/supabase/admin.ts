import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const globalForAdmin = globalThis as unknown as {
  supabaseAdmin?: SupabaseClient;
};

/**
 * Cliente com privilégios elevados (ignora RLS). Use só em rotas API / Server Actions.
 * Aceita SUPABASE_SERVICE_ROLE_KEY ou SUPABASE_SECRET_KEY (chave de serviço no dashboard).
 */
export function createSupabaseAdmin(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_SECRET_KEY;

  if (!url || !serviceKey) {
    throw new Error(
      "Defina NEXT_PUBLIC_SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY (ou SUPABASE_SECRET_KEY) no .env",
    );
  }

  if (!globalForAdmin.supabaseAdmin) {
    globalForAdmin.supabaseAdmin = createClient(url, serviceKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }

  return globalForAdmin.supabaseAdmin;
}
