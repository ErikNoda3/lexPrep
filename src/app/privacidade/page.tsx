import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Política de privacidade do LexPrep ENAM: tratamento de dados pessoais na plataforma de preparação para o ENAM.",
  alternates: { canonical: "/privacidade" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Política de privacidade — LexPrep ENAM",
    description: "Como tratamos os seus dados no LexPrep ENAM.",
    url: "/privacidade",
  },
};

export default function PrivacidadePage() {
  return (
    <div className="page active max-w-3xl mx-auto">
      <div className="page-header">
        <h1>Política de privacidade</h1>
        <p className="text-muted text-sm" style={{ color: "var(--mid)" }}>
          Última atualização: março de 2025. Texto modelo — reveja com assessoria jurídica antes de
          produção.
        </p>
      </div>

      <article className="prose-legal space-y-6 text-[var(--dark-2)] text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-[var(--dark)] mt-0">1. Responsável pelo tratamento</h2>
          <p>
            O LexPrep trata dados pessoais no âmbito da prestação do Serviço de estudos jurídicos.
            Esta política descreve que dados recolhemos, para quê e com que base.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-[var(--dark)]">2. Dados recolhidos</h2>
          <p>
            Podemos tratar: identificadores de conta (nome, email), dados de autenticação (incluindo
            sessão via fornecedor OAuth, quando aplicável), dados de utilização do Serviço e,
            mediante cookies ou tecnologias similares, identificadores de sessão necessários ao
            funcionamento técnico (por exemplo, progresso de estudo associado a uma sessão).
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-[var(--dark)]">3. Finalidades</h2>
          <p>
            Os dados são utilizados para criar e manter a sua conta, prestar o Serviço, melhorar a
            experiência, cumprir obrigações legais e, quando aplicável, comunicar atualizações
            relevantes sobre o Serviço.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-[var(--dark)]">4. Base legal</h2>
          <p>
            O tratamento pode fundamentar-se na execução de contrato, no consentimento (quando
            exigido), no interesse legítimo (segurança e melhoria do Serviço) ou no cumprimento de
            obrigações legais, conforme o caso e a legislação aplicável (por exemplo, RGPD, se
            relevante).
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-[var(--dark)]">5. Conservação</h2>
          <p>
            Conservamos os dados apenas pelo tempo necessário às finalidades descritas ou às
            exigências legais, após o que podem ser anonimizados ou eliminados.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-[var(--dark)]">6. Os seus direitos</h2>
          <p>
            Dependendo da lei aplicável, pode solicitar acesso, retificação, eliminação, limitação
            do tratamento, portabilidade ou oposição. Para exercer direitos, contacte-nos através do
            canal indicado no site.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-[var(--dark)]">7. Cookies e sessão</h2>
          <p>
            Utilizamos cookies ou mecanismos equivalentes necessários à autenticação e à operação do
            Serviço. Pode configurar o navegador para bloquear cookies, mas algumas funcionalidades
            podem deixar de funcionar.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-[var(--dark)]">8. Alterações</h2>
          <p>
            Esta política pode ser atualizada; a data no topo indica a última revisão. O uso
            continuado após alterações pode constituir aceitação da versão nova.
          </p>
        </section>
      </article>

      <p className="mt-10">
        <Link href="/" className="text-[var(--gold)] underline underline-offset-2">
          Voltar à página inicial
        </Link>
      </p>
    </div>
  );
}
