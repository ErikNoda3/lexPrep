/**
 * Chave pública do Supabase: no dashboard novo costuma aparecer como
 * publishable default key; na documentação antiga, "anon" / public.
 */
export function getSupabasePublishableKeyOrUndefined(): string | undefined {
  return (
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

export function getSupabaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!url) {
    throw new Error("Defina NEXT_PUBLIC_SUPABASE_URL no .env");
  }
  return url;
}

export function getSupabasePublishableKey(): string {
  const key = getSupabasePublishableKeyOrUndefined();
  if (!key) {
    throw new Error(
      "Defina NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY ou NEXT_PUBLIC_SUPABASE_ANON_KEY no .env",
    );
  }
  return key;
}
