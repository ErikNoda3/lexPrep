import { Suspense } from "react";
import RegisterForm from "./RegisterForm";

function RegisterFallback() {
  return (
    <article className="stat-card max-w-md w-full mx-auto">
      <div className="label">Nova conta</div>
      <div className="value" style={{ fontSize: "1.5rem" }}>
        Criar conta no LexPrep
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

export default function RegisterPage() {
  return (
    <div className="page active">
      <section className="hero animate-enter" aria-labelledby="register-title">
        <h1 id="register-title">Criar conta</h1>
        <p>Registe-se para aceder ao LexPrep.</p>
      </section>
      <Suspense fallback={<RegisterFallback />}>
        <RegisterForm />
      </Suspense>
    </div>
  );
}
