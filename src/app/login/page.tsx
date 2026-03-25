import { Suspense } from "react";
import LoginForm from "./LoginForm";

function LoginFallback() {
  return (
    <article className="stat-card max-w-md w-full mx-auto">
      <div className="label">Acesso</div>
      <div className="value" style={{ fontSize: "1.5rem" }}>
        Entrar no LexPrep
      </div>
      <p
        className="text-muted"
        style={{ margin: 0, fontSize: "0.875rem", color: "var(--mid)" }}
      >
        Carregando…
      </p>
    </article>
  );
}

export default function LoginPage() {
  return (
    <div className="page active">
      <section className="hero animate-enter" aria-labelledby="login-title">
        <h1 id="login-title">Login</h1>
        <p>Autentique-se para acessar questões e simulado.</p>
      </section>
      <Suspense fallback={<LoginFallback />}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
