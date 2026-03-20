export type ResumoKey =
  | "constitucional"
  | "civil"
  | "penal"
  | "trabalho"
  | "tributario"
  | "administrativo"
  | "processual"
  | "etica";

export type Resumo = {
  chave: ResumoKey;
  titulo: string;
  html: string;
};

// Conteúdo inicial vinda do seu `enam-estudos.html`.
export const RESUMOS: Record<ResumoKey, Resumo> = {
  constitucional: {
    chave: "constitucional",
    titulo: "Direito Constitucional",
    html: `<h3>1. Direitos e Garantias Fundamentais</h3>
<p>Os direitos fundamentais estão previstos no Título II da CF/88 (arts. 5º a 17) e possuem aplicabilidade imediata (art. 5º, §1º). Classificam-se em direitos individuais e coletivos, sociais, de nacionalidade, políticos e de partidos políticos.</p>
<h3>2. Controle de Constitucionalidade</h3>
<p>O sistema brasileiro adota o controle difuso (qualquer juízo pode afastar lei inconstitucional) e o controle concentrado (STF julga ADI, ADC, ADPF e ADO). A cláusula de reserva de plenário (art. 97 da CF) exige maioria absoluta do tribunal para declarar inconstitucionalidade.</p>
<h3>3. Organização do Estado</h3>
<p>O Brasil é uma república federativa composta pela União, Estados, DF e Municípios. A Constituição distribui competências legislativas e materiais entre os entes federativos, sendo as competências privativas da União (art. 22) distintas das concorrentes (art. 24).</p>
<h3>4. Princípios Constitucionais</h3>
<ul>
  <li>Dignidade da pessoa humana (fundamento da República)</li>
  <li>Legalidade, moralidade, publicidade, impessoalidade e eficiência (art. 37)</li>
  <li>Proporcionalidade e razoabilidade (implícitos na CF/88)</li>
</ul>`,
  },
  civil: {
    chave: "civil",
    titulo: "Direito Civil",
    html: `<h3>1. Negócio Jurídico</h3>
<p>O negócio jurídico é nulo quando: praticado por absolutamente incapaz, tiver objeto ilícito ou impossível, for simulado, entre outros (art. 166 do CC). É anulável quando praticado por relativamente incapaz ou viciado por erro, dolo, coação, estado de perigo ou lesão (art. 171 do CC).</p>
<h3>2. Responsabilidade Civil</h3>
<p>A responsabilidade civil subjetiva exige conduta, dano, nexo causal e culpa (art. 186 do CC). A responsabilidade objetiva prescinde da culpa — baseia-se na teoria do risco (art. 927, parágrafo único do CC). O CC prevê responsabilidade pelo fato do produto (art. 931) e por atos de terceiros (arts. 932-933).</p>
<h3>3. Contratos</h3>
<p>Os contratos nascem do acordo de vontades e se submetem aos princípios da autonomia privada, boa-fé objetiva, função social e equilíbrio contratual. A teoria da imprevisão (art. 478) permite a revisão ou resolução do contrato por onerosidade excessiva superveniente.</p>`,
  },
  penal: {
    chave: "penal",
    titulo: "Direito Penal",
    html: `<h3>1. Teoria do Crime</h3>
<p>O crime é fato típico, ilícito e culpável (teoria tripartida). O fato típico é composto por conduta, resultado, nexo causal e tipicidade. A ilicitude pode ser excluída por legítima defesa, estado de necessidade, estrito cumprimento do dever legal e exercício regular de direito (art. 23 do CP).</p>
<h3>2. Culpabilidade</h3>
<p>A culpabilidade é composta por imputabilidade, potencial consciência da ilicitude e exigibilidade de conduta diversa. São inimputáveis os menores de 18 anos e os que, por doença mental ou desenvolvimento incompleto, eram inteiramente incapazes de entender o caráter ilícito do fato (art. 26 do CP).</p>
<h3>3. Penas</h3>
<p>O CP prevê penas privativas de liberdade (reclusão, detenção e prisão simples), restritivas de direitos e multa. As penas restritivas de direitos substituem as privativas de liberdade quando preenchidos os requisitos legais. A lei penal não retroage, salvo para beneficiar o réu (irretroatividade da lei penal mais severa).</p>`,
  },
  trabalho: {
    chave: "trabalho",
    titulo: "Direito do Trabalho",
    html: `<h3>1. Contrato de Trabalho</h3>
<p>O contrato de trabalho pode ser por prazo indeterminado (regra) ou determinado (exceção). Os elementos da relação de emprego são: pessoalidade, onerosidade, não eventualidade e subordinação jurídica. A CLT é a principal fonte normativa, complementada pela CF/88 e legislação especial.</p>
<h3>2. Jornada de Trabalho</h3>
<p>A CF/88 limita a jornada a 8h diárias e 44h semanais (art. 7º, XIII). As horas extras têm adicional mínimo de 50% (art. 7º, XVI). A Reforma Trabalhista (Lei 13.467/2017) criou o regime de teletrabalho e ampliou a possibilidade de compensação de jornada.</p>
<h3>3. Rescisão Contratual</h3>
<p>Na demissão sem justa causa, o empregado tem direito a: aviso prévio proporcional, FGTS + 40% de multa, férias proporcionais + 1/3, 13º proporcional e seguro-desemprego. O aviso prévio proporcional varia de 30 a 90 dias (Lei 12.506/2011).</p>`,
  },
  tributario: {
    chave: "tributario",
    titulo: "Direito Tributário",
    html: `<h3>1. Fato Gerador e Obrigação Tributária</h3>
<p>O fato gerador é a situação prevista em lei que, uma vez ocorrida, faz surgir a obrigação tributária. A obrigação pode ser principal (pagar tributo) ou acessória (obrigações instrumentais como emitir nota fiscal). O sujeito ativo é o Estado; o passivo é o contribuinte ou responsável.</p>
<h3>2. Crédito Tributário</h3>
<p>O crédito tributário é constituído pelo lançamento (arts. 142-150 do CTN), que pode ser: de ofício, por declaração ou por homologação. Pode ser suspenso (art. 151), extinto (art. 156) ou excluído por isenção ou anistia (art. 175). Prescrição e decadência são causas de extinção (5 anos).</p>
<h3>3. Princípios Tributários</h3>
<ul>
  <li>Legalidade: tributo só por lei</li>
  <li>Anterioridade: não pode cobrar no mesmo exercício</li>
  <li>Irretroatividade: lei não retroage para fatos já ocorridos</li>
  <li>Capacidade contributiva: tributação conforme a riqueza</li>
  <li>Não confisco: vedado usar tributo com efeito confiscatório</li>
</ul>`,
  },
  administrativo: {
    chave: "administrativo",
    titulo: "Direito Administrativo",
    html: `<h3>1. Atos Administrativos</h3>
<p>O ato administrativo tem cinco elementos essenciais: competência, finalidade, forma, motivo e objeto. Os atributos do ato são: presunção de legitimidade, imperatividade, autoexecutoriedade e tipicidade. Os vícios nos elementos geram nulidade; a ausência de motivo ou motivo falso (desvio de poder) também vicia o ato.</p>
<h3>2. Licitação</h3>
<p>A lei geral de licitações (Lei 14.133/2021) prevê as modalidades: concorrência, pregão, concurso, leilão e diálogo competitivo. O pregão eletrônico é obrigatório para bens e serviços comuns. A dispensa e a inexigibilidade são hipóteses excepcionais de contratação direta (arts. 74 e 75 da Nova Lei).</p>
<h3>3. Agentes Públicos</h3>
<p>A CF/88 exige concurso público para cargos efetivos (art. 37, II). Os agentes públicos estão sujeitos à Lei de Improbidade Administrativa (Lei 8.429/1992, alterada pela Lei 14.230/2021), que exige dolo para configuração de ato ímprobo. As sanções incluem suspensão de direitos políticos e ressarcimento ao erário.</p>`,
  },
  processual: {
    chave: "processual",
    titulo: "Processo Civil",
    html: `<h3>1. Princípios do CPC/2015</h3>
<p>O CPC/2015 (Lei 13.105/2015) estabelece como normas fundamentais: o contraditório substancial (arts. 9º e 10), a boa-fé processual (art. 5º), a cooperação entre as partes (art. 6º), a duração razoável do processo e a primazia do julgamento de mérito.</p>
<h3>2. Petição Inicial e Resposta</h3>
<p>A petição inicial deve conter os requisitos do art. 319 do CPC. A contestação deve ser apresentada em 15 dias úteis (regra geral) e alegar toda a matéria de defesa, pena de preclusão (princípio da eventualidade). A reconvenção é apresentada simultaneamente à contestação.</p>
<h3>3. Recursos</h3>
<p>Os recursos previstos no CPC são: apelação, agravo de instrumento, agravo interno, embargos de declaração, recurso ordinário, recurso especial (STJ), recurso extraordinário (STF) e agravo em recurso especial/extraordinário. O prazo geral é de 15 dias úteis, exceto embargos de declaração (5 dias úteis).</p>`,
  },
  etica: {
    chave: "etica",
    titulo: "Ética e Estatuto da OAB",
    html: `<h3>1. Estatuto da Advocacia (Lei 8.906/1994)</h3>
<p>O EOAB regula o exercício da advocacia no Brasil. São atividades privativas do advogado: postulação em juízo (com exceções constitucionais) e assessoria jurídica. A inscrição nos quadros da OAB é condição para o exercício profissional. A OAB é entidade federal de classe, dotada de personalidade jurídica própria.</p>
<h3>2. Código de Ética e Disciplina</h3>
<p>O advogado deve observar: sigilo profissional (absoluto), lealdade processual, vedação de captação indevida de clientela e publicidade irregular, incompatibilidades e impedimentos. O sigilo profissional protege as comunicações entre advogado e cliente, não podendo ser violado nem por ordem judicial.</p>
<h3>3. Infrações e Sanções Disciplinares</h3>
<ul>
  <li>Censura: falta leve</li>
  <li>Suspensão: falta grave (até 12 meses)</li>
  <li>Exclusão dos quadros: falta gravíssima</li>
  <li>Multa: cumulável com outras sanções</li>
</ul>
<p>O processo disciplinar tramita perante o Tribunal de Ética e Disciplina da OAB.</p>`,
  },
};

