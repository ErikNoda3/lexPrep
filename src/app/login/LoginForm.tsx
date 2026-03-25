"use client";

import { useState } from "react";
import Link from "next/link";
import { AlertCircle, Globe, Loader2, Lock, LogIn, Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/dashboard";
  const registered = searchParams.get("registered") === "1";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleCredentials(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl,
      });
      if (res?.error) {
        setError("Email ou senha incorretos.");
        return;
      }
      if (res?.ok) {
        router.push(callbackUrl);
        router.refresh();
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <article className="stat-card max-w-md w-full mx-auto">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gold-pale)] text-[var(--gold)] mb-2">
        <LogIn className="h-5 w-5" strokeWidth={1.75} aria-hidden />
      </div>
      <div className="label">Acesso</div>
      <div className="value" style={{ fontSize: "1.5rem" }}>
        Entrar no LexPrep
      </div>
      <p
        className="text-muted"
        style={{ margin: 0, fontSize: "0.875rem", color: "var(--mid)" }}
      >
        Use sua conta Google ou email e senha cadastrados.{" "}
        <Link href="/register" className="text-[var(--gold)] underline underline-offset-2">
          Criar conta
        </Link>
      </p>

      {registered ? (
        <p
          role="status"
          className="mt-2 flex items-start gap-2 text-sm text-[var(--dark-2)] bg-[rgba(212,175,55,0.12)] px-3 py-2 rounded-[var(--lp-radius)]"
        >
          <Mail className="h-4 w-4 shrink-0 mt-0.5 text-[var(--gold)]" aria-hidden />
          Conta criada. Entre com email e senha.
        </p>
      ) : null}

      <div className="mt-2">
        <button
          type="button"
          className="btn btn-outline w-full justify-center gap-2"
          onClick={() => signIn("google", { callbackUrl })}
        >
          <Globe className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
          Entrar com Google
        </button>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          margin: "0.75rem 0",
          color: "var(--mid)",
          fontSize: "0.75rem",
        }}
      >
        <span style={{ flex: 1, height: 1, background: "var(--lp-border)" }} />
        ou email
        <span style={{ flex: 1, height: 1, background: "var(--lp-border)" }} />
      </div>

      <form onSubmit={handleCredentials} className="flex flex-col gap-3">
        <label className="flex flex-col gap-1 text-sm text-[var(--dark-2)]">
          <span className="inline-flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5 text-[var(--mid)]" strokeWidth={2} aria-hidden />
            Email
          </span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-[var(--lp-radius)] border border-[var(--lp-border)] bg-[var(--lp-input-bg)] px-3 py-2 text-[var(--dark)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm text-[var(--dark-2)]">
          <span className="inline-flex items-center gap-1.5">
            <Lock className="h-3.5 w-3.5 text-[var(--mid)]" strokeWidth={2} aria-hidden />
            Senha
          </span>
          <input
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-[var(--lp-radius)] border border-[var(--lp-border)] bg-[var(--lp-input-bg)] px-3 py-2 text-[var(--dark)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40"
          />
        </label>

        {error ? (
          <p
            role="alert"
            className="flex items-start gap-2 m-0 text-sm text-[var(--danger)] bg-[var(--danger-bg)] px-3 py-2 rounded-[var(--lp-radius)]"
          >
            <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" strokeWidth={2} aria-hidden />
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          className="btn btn-primary w-full justify-center gap-2"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              Entrando…
            </>
          ) : (
            <>
              <LogIn className="h-4 w-4" strokeWidth={2} aria-hidden />
              Entrar
            </>
          )}
        </button>
      </form>
    </article>
  );
}
