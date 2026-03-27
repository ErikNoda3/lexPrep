import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de uso",
  description:
    "Termos de uso do LexPrep ENAM: condições de acesso à plataforma de estudos jurídicos para o Exame Nacional da Magistratura.",
  alternates: { canonical: "/termos" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Termos de uso — LexPrep ENAM",
    description: "Condições de utilização do serviço LexPrep ENAM.",
    url: "/termos",
  },
};

export default function TermosPage() {
  return (
    <div className="page active max-w-3xl mx-auto">
      <div className="page-header">
        <h1>Termos de uso</h1>
        <p className="text-muted text-sm" style={{ color: "var(--mid)" }}>
          Última atualização: março de 2025. Texto modelo — reveja com assessoria jurídica antes de
          produção.
        </p>
      </div>

      <article className="prose-legal space-y-6 text-[var(--dark-2)] text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-[var(--dark)] mt-0">1. Aceitação</h2>
          <p>
            Ao aceder ou utilizar o LexPrep (&quot;Serviço&quot;), concorda em ficar vinculado a estes
            Termos de uso. Se não concordar, não utilize o Serviço.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-[var(--dark)]">2. Descrição do Serviço</h2>
          <p>
            O LexPrep oferece conteúdos e ferramentas de estudo (incluindo súmulas, questões e
            simulados) destinados à preparação para exames jurídicos. O Serviço é fornecido
            &quot;no estado em que se encontra&quot;, sem garantias expressas ou implícitas.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-[var(--dark)]">3. Conta e credenciais</h2>
          <p>
            É responsável pela confidencialidade da sua conta e pela exatidão dos dados fornecidos.
            Deve notificar-nos em caso de uso não autorizado.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-[var(--dark)]">4. Uso permitido</h2>
          <p>
            Compromete-se a não utilizar o Serviço de forma ilegal, a não tentar aceder a sistemas
            ou dados sem autorização, e a não copiar ou redistribuir conteúdos de forma que viole
            direitos de terceiros ou estes Termos.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-[var(--dark)]">5. Limitação de responsabilidade</h2>
          <p>
            O LexPrep não substitui orientação jurídica profissional. Não nos responsabilizamos por
            decisões tomadas com base nos materiais do Serviço, nem por danos indiretos ou lucros
            cessantes, na medida permitida pela lei aplicável.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-[var(--dark)]">6. Alterações</h2>
          <p>
            Podemos alterar estes Termos; a continuação de uso após alterações constitui aceitação.
            Recomendamos revisitar esta página periodicamente.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-[var(--dark)]">7. Contacto</h2>
          <p>
            Para questões sobre estes Termos, utilize o canal de contacto indicado no site ou na
            Política de privacidade.
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
