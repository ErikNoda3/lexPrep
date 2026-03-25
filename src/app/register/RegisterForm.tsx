"use client";

import { useState } from "react";
import { AlertCircle, Loader2, Lock, Mail, User, UserPlus } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (password !== confirm) {
      setError("As senhas não coincidem.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim() || undefined,
          email,
          password,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };
      if (!res.ok) {
        setError(data.error ?? "Não foi possível criar a conta.");
        return;
      }
      const sign = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/dashboard",
      });
      if (sign?.error) {
        router.push("/login?registered=1");
        router.refresh();
        return;
      }
      if (sign?.ok) {
        router.push("/dashboard");
        router.refresh();
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <article className="stat-card max-w-md w-full mx-auto">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gold-pale)] text-[var(--gold)] mb-2">
        <UserPlus className="h-5 w-5" strokeWidth={1.75} aria-hidden />
      </div>
      <div className="label">Nova conta</div>
      <div className="value" style={{ fontSize: "1.5rem" }}>
        Criar conta no LexPrep
      </div>
      <p
        className="text-muted"
        style={{ margin: 0, fontSize: "0.875rem", color: "var(--mid)" }}
      >
        Já tem conta?{" "}
        <Link href="/login" className="text-[var(--gold)] underline underline-offset-2">
          Entrar
        </Link>
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
        <label className="flex flex-col gap-1 text-sm text-[var(--dark-2)]">
          <span className="inline-flex items-center gap-1.5">
            <User className="h-3.5 w-3.5 text-[var(--mid)]" strokeWidth={2} aria-hidden />
            Nome (opcional)
          </span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-[var(--lp-radius)] border border-[var(--lp-border)] bg-[var(--lp-input-bg)] px-3 py-2 text-[var(--dark)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40"
          />
        </label>
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
            Senha (mín. 8 caracteres)
          </span>
          <input
            name="password"
            type="password"
            autoComplete="new-password"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-[var(--lp-radius)] border border-[var(--lp-border)] bg-[var(--lp-input-bg)] px-3 py-2 text-[var(--dark)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm text-[var(--dark-2)]">
          <span className="inline-flex items-center gap-1.5">
            <Lock className="h-3.5 w-3.5 text-[var(--mid)]" strokeWidth={2} aria-hidden />
            Confirmar senha
          </span>
          <input
            name="confirm"
            type="password"
            autoComplete="new-password"
            required
            minLength={8}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
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
              Criando conta…
            </>
          ) : (
            <>
              <UserPlus className="h-4 w-4" strokeWidth={2} aria-hidden />
              Criar conta
            </>
          )}
        </button>
      </form>
    </article>
  );
}
