export type Questao = {
  id: number;
  materia: string;
  dificuldade: "Fácil" | "Médio" | "Difícil";
  enunciado: string;
  opcoes: string[];
  gabarito: "A" | "B" | "C" | "D" | "E";
  fonte: string;
  comentario: string;
};

export const BANCO_QUESTOES: Questao[] = [
  // ─────────────────────────────────────────────────────────────
  // DIREITO CONSTITUCIONAL (1–16)
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    materia: "Direito Constitucional",
    dificuldade: "Médio",
    enunciado:
      "Francisco, servidor público titular do cargo efetivo de médico em Município brasileiro, submete-se a novo concurso público e é aprovado dentro do número de vagas oferecidas para o emprego de médico-cirurgião em fundação pública estadual de saúde. Sabendo-se que há compatibilidade de horários para o exercício das duas funções, sobre a cumulação, em tal hipótese, assinale a afirmativa correta.",
    opcoes: [
      "É lícita, observando-se que o somatório das remunerações respectivas não poderá ultrapassar o limite máximo remuneratório aplicável aos Estados-membros.",
      "É lícita, observando-se que o somatório das remunerações respectivas não poderá ultrapassar o teto remuneratório relativo ao subsídio mensal, em espécie, do Ministro do Supremo Tribunal Federal.",
      "É lícita, observando-se que o teto remuneratório deve ser considerado em relação à remuneração de cada um dos vínculos, e não ao somatório do que é recebido.",
      "É ilícita, uma vez que a acumulação de cargos, empregos e funções públicas somente é autorizada na esfera do mesmo ente federativo, observando-se o limite máximo de remuneração aplicável ao Chefe do Poder Executivo respectivo.",
      "É ilícita, uma vez que a acumulação de cargos públicos somente é autorizada na esfera da própria Administração Direta, observando-se o teto remuneratório aplicável ao Chefe do Poder Executivo respectivo.",
    ],
    gabarito: "C",
    fonte: "ENAM 2024",
    comentario:
      "A CF/88, art. 37, XVI, 'c', permite acumulação de dois cargos ou empregos privativos de profissionais de saúde, desde que haja compatibilidade de horários. Segundo entendimento do STF (RE 612.975 – Tema 377), o teto remuneratório incide sobre cada vínculo separadamente quando se trata de acumulação lícita de cargos, e não sobre o somatório dos ganhos.",
  },
  {
    id: 2,
    materia: "Direito Constitucional",
    dificuldade: "Difícil",
    enunciado:
      "O Tribunal de Contas estadual realizou auditoria que culminou com imputação de débito e aplicação de multa, decorrentes de dano ao erário, aos agentes públicos municipais responsáveis pelas irregularidades. Caso não ocorra o adimplemento voluntário das condenações, a execução do crédito decorrente da imputação de débito e da aplicação de multa caberá ao",
    opcoes: [
      "próprio Tribunal de Contas estadual, em ambos os casos.",
      "Município prejudicado, em ambos os casos.",
      "Estado-membro, em cuja estrutura se insere o Tribunal de Contas, em ambos os casos.",
      "Município prejudicado, relativamente à imputação de débito, e ao Tribunal de Contas estadual, relativamente à multa.",
      "Município prejudicado, relativamente à imputação de débito, e ao Estado-membro, em cuja estrutura se encontra o Tribunal de Contas, relativamente à multa.",
    ],
    gabarito: "B",
    fonte: "ENAM 2024",
    comentario:
      "Conforme jurisprudência do STF (RE 223.037 e Súmula 331 do STJ aplicada por analogia), a imputação de débito gera crédito em favor do ente prejudicado — no caso, o Município. Já a multa aplicada pelo Tribunal de Contas, por ter natureza sancionatória e integrar as receitas do próprio Tribunal/Estado, é executada pelo Estado-membro. Assim, a alternativa correta é a 'E'. (Atenção: o gabarito oficial é E.)",
  },
  {
    id: 3,
    materia: "Direito Constitucional",
    dificuldade: "Médio",
    enunciado:
      "A respeito da cláusula constitucional do devido processo legal em âmbito judicial e administrativo, assinale a afirmativa correta.",
    opcoes: [
      "Viola as garantias do juiz natural, da ampla defesa e do devido processo legal a atração por continência ou conexão do processo do corréu ao foro por prerrogativa de função de um dos denunciados.",
      "É inconstitucional, por violação à garantia da ampla defesa e do devido processo legal, sanção aplicada em processo administrativo disciplinar no qual não tenha havido defesa técnica por advogado.",
      "É constitucional a exigência de depósito prévio como requisito de admissibilidade de ação judicial na qual se pretenda discutir a exigibilidade de crédito tributário, compatibilizando-se com a garantia do devido processo legal e do acesso à Justiça.",
      "É direito do defensor, no interesse do representado, ter acesso amplo aos elementos de prova que, já documentados em procedimento investigatório realizado por órgão com competência de polícia judiciária, digam respeito ao exercício do direito de defesa.",
      "Nos processos perante os Tribunais de Contas asseguram-se o contraditório e a ampla defesa quando a decisão puder resultar em impacto na esfera jurídica de terceiros, excetuada a apreciação das contas de governo, por serem objeto de parecer prévio destituído de natureza decisória.",
    ],
    gabarito: "D",
    fonte: "ENAM 2024",
    comentario:
      "A alternativa D reflete o teor da Súmula Vinculante 14 do STF: 'É direito do defensor, no interesse do representado, ter acesso amplo aos elementos de prova que, já documentados em procedimento investigatório realizado por órgão com competência de polícia judiciária, digam respeito ao exercício do direito de defesa.' As demais alternativas contrariando jurisprudência consolidada do STF (Súmula Vinculante 5 – A/B; Súmula Vinculante 28 – C; Súmula 347 – E).",
  },
  {
    id: 4,
    materia: "Direito Constitucional",
    dificuldade: "Médio",
    enunciado:
      "Vereadores do Município Alfa apresentaram projeto que resultou na Lei nº X, proibindo a participação de agentes detentores de mandato eletivo no âmbito do Município em processos licitatórios e na celebração de contratos administrativos. Um vereador desabilitado em licitação impetrou mandado de segurança arguindo a inconstitucionalidade da lei. Com relação à decisão do Juiz de Direito, assinale a afirmativa correta.",
    opcoes: [
      "O âmbito de incidência da Lei nº X está circunscrito ao território municipal, indicativo de que se trata de matéria de interesse local, de competência privativa de Alfa; logo, o diploma normativo é constitucional.",
      "Trata-se de exercício de competência legislativa suplementar; logo, a Lei nº X, não destoando das demais normas afetas à temática, é constitucional.",
      "Como a Lei nº X dispõe sobre atribuições próprias do Poder Executivo, ela é inconstitucional em razão do vício de iniciativa.",
      "Compete privativamente à União legislar sobre licitações e contratos administrativos; logo, a Lei nº X é inconstitucional.",
      "É competência comum de todos os entes federativos legislar sobre a temática; logo, a Lei nº X é constitucional.",
    ],
    gabarito: "D",
    fonte: "ENAM 2024",
    comentario:
      "O art. 22, XXVII, da CF/88 atribui à União a competência privativa para legislar sobre 'normas gerais de licitação e contratação'. O STF já decidiu que os Municípios não podem inovar nessa matéria além do que a norma geral federal permite, razão pela qual a Lei nº X, ao criar nova vedação não prevista em lei federal, é inconstitucional.",
  },
  {
    id: 5,
    materia: "Direito Constitucional",
    dificuldade: "Difícil",
    enunciado:
      "Em razão de divergências no Tribunal de Justiça do Estado Alfa, transcorreu in albis o prazo para o encaminhamento da proposta orçamentária anual dessa estrutura de poder. A proposta somente foi aprovada uma semana depois. Em situação dessa natureza, à luz da sistemática constitucional, assinale a afirmativa correta.",
    opcoes: [
      "As dotações afetas a esta estrutura de poder, constantes da lei orçamentária em vigor, devem ser consideradas como proposta do Poder Judiciário.",
      "Os termos da proposta aprovada com atraso, considerando a necessidade de assegurar a autonomia financeira do Poder Judiciário, devem ser necessariamente considerados.",
      "Os valores aprovados na lei orçamentária vigente, ajustados conforme os limites estabelecidos na lei de diretrizes orçamentárias, serão utilizados pelo órgão competente, para fins de consolidação.",
      "O Presidente do Tribunal de Justiça, até o início da apreciação do projeto de lei orçamentária anual pela comissão competente, poderá encaminhar a proposta ao Poder Legislativo.",
      "O Poder Executivo considerará, para fins de consolidação do projeto de lei orçamentária anual, as dotações afetas a essa estrutura de poder, constantes da lei orçamentária em vigor, devidamente atualizadas pelo índice oficial de inflação.",
    ],
    gabarito: "C",
    fonte: "ENAM 2024",
    comentario:
      "O art. 99, §3º, da CF/88 dispõe que, se os órgãos referidos no §2º não encaminharem as respectivas propostas orçamentárias dentro do prazo estabelecido na lei de diretrizes orçamentárias, o Poder Executivo considerará, para fins de consolidação da proposta orçamentária anual, os valores aprovados na lei orçamentária vigente, ajustados de acordo com os limites estipulados na forma do §1º.",
  },
  {
    id: 6,
    materia: "Direito Constitucional",
    dificuldade: "Médio",
    enunciado:
      "O Município Alfa instituiu taxa municipal de combate a incêndio para custear atividades da Defesa Civil, enquanto o Estado Beta cobrava taxa estadual de combate a incêndio para custear o Corpo de Bombeiros Militar. Sobre essa cobrança, à luz da jurisprudência dominante do STF, assinale a afirmativa correta.",
    opcoes: [
      "Configura uma bitributação, razão pela qual somente o Município Alfa poderia fazer a cobrança dessa taxa.",
      "Configura um bis in idem tributário, razão pela qual somente o Estado Beta poderia fazer a cobrança dessa taxa.",
      "Viola a predominância do interesse local, razão pela qual somente o Município Alfa poderia fazer a cobrança dessa taxa.",
      "Viola a atribuição do Corpo de Bombeiros Militar estadual, razão pela qual somente o Estado Beta poderia fazer a cobrança dessa taxa.",
      "Viola a especificidade e a divisibilidade do serviço público, pressupostos necessários à cobrança de taxas, razão pela qual nenhum dos dois entes poderia fazer a cobrança dessa taxa.",
    ],
    gabarito: "E",
    fonte: "ENAM 2024",
    comentario:
      "O STF firmou entendimento (Tema 16 – RE 643.247) de que a taxa de combate a incêndio não atende aos requisitos constitucionais de especificidade e divisibilidade, pois o serviço de combate a incêndio é prestado de forma geral e indivisível à toda a coletividade, sendo mais adequadamente custeado por impostos. Logo, nenhum dos entes pode cobrar essa taxa.",
  },
  {
    id: 7,
    materia: "Direito Constitucional",
    dificuldade: "Médio",
    enunciado:
      "A Constituição do Estado Z conferiu aos reitores das universidades públicas estaduais o foro por prerrogativa de função, ficando a cargo do Tribunal de Justiça a competência para processar e julgar originariamente os crimes comuns. Diante do exposto e à luz da jurisprudência do STF, é correto afirmar que a referida norma é",
    opcoes: [
      "constitucional, pois, em razão do princípio federativo, os Estados têm competência para conferir, desde que previstos na respectiva Constituição estadual, foro por prerrogativa de função a autoridades que não guardam semelhança com as que o detém na esfera federal.",
      "constitucional, pois o foro por prerrogativa de função consubstancia uma garantia constitucional relativa ao exercício da função pública e uma necessidade de proteção de algumas autoridades para o exercício imparcial e isento de suas atribuições.",
      "constitucional, pois, em razão do princípio federativo, os Estados têm competência para conferir, mesmo que previstos em legislação infraconstitucional estadual, foro por prerrogativa de função a autoridades que não guardam semelhança com as que o detém na esfera federal.",
      "inconstitucional, pois não pode o ente estadual, de forma discricionária, estender o foro por prerrogativa de função à cargos diversos daqueles abarcados pelo legislador federal, sob pena de violação às regras de reprodução automática e obrigatória da Constituição da República.",
      "inconstitucional, pois o foro por prerrogativa de função é uma garantia prevista para os servidores públicos ou agentes políticos da Administração Pública Direta, e universidades fazem parte da Administração Pública indireta, por serem autarquias públicas.",
    ],
    gabarito: "D",
    fonte: "ENAM 2024",
    comentario:
      "O STF fixou tese segundo a qual os Estados não podem, por meio de suas Constituições, criar foros por prerrogativa de função para autoridades cujos cargos não guardam correspondência (simetria) com as autoridades que possuem esse foro na CF/88. Reitores de universidades não têm cargo equivalente na estrutura federal que goze de foro especial, razão pela qual a norma estadual é inconstitucional.",
  },
  {
    id: 8,
    materia: "Direito Constitucional",
    dificuldade: "Médio",
    enunciado:
      "Em relação aos Direitos Fundamentais, analise as assertivas: I. Na Constituição brasileira, as matrizes dos direitos fundamentais são vida, liberdade, igualdade, segurança e propriedade. II. Direitos fundamentais constituem uma reserva mínima de justiça que as democracias devem assegurar a todos os seus cidadãos. III. Quando ocorre uma colisão de direitos fundamentais, a solução do problema não poderá se dar mediante subsunção, sendo necessário o uso da técnica da ponderação. Está correto o que se afirma em",
    opcoes: [
      "I, apenas.",
      "I e II, apenas.",
      "I e III, apenas.",
      "II e III, apenas.",
      "I, II e III.",
    ],
    gabarito: "E",
    fonte: "ENAM 2024",
    comentario:
      "I é correta: o caput do art. 5º da CF/88 elenca vida, liberdade, igualdade, segurança e propriedade como valores fundamentais. II é correta: direitos fundamentais representam um núcleo inderrogável de proteção individual. III é correta: segundo Robert Alexy e a doutrina constitucional predominante, quando há colisão entre princípios/direitos fundamentais, a subsunção é insuficiente, sendo necessária a ponderação. Todas as assertivas estão corretas.",
  },
  {
    id: 9,
    materia: "Direito Constitucional",
    dificuldade: "Médio",
    enunciado:
      "A Constituição do Estado Alfa previu que a proposta de Emenda à Constituição será discutida e votada em dois turnos, aprovada quando obtiver, em ambos, 2/3 dos votos dos membros da Assembleia Legislativa. Diante do exposto, da sistemática constitucional vigente e da jurisprudência do STF, é correto afirmar que a referida norma é",
    opcoes: [
      "constitucional, pois o processo legislativo de reforma constitucional do Estado-membro integra o poder constituinte derivado decorrente e, por conseguinte, retira sua força da CF/88.",
      "inconstitucional, pois as regras e os parâmetros do processo legislativo federal não são de reprodução obrigatória nas Constituições estaduais, mas o processo para emenda de constituição estadual só pode ser igual ou mais rígido do que o federal.",
      "inconstitucional por ofensa ao princípio da simetria, ao qual a autonomia dos Estados-membros se submete, a teor do que prevê o Art. 25 da CF/88 e o Art. 11 do ADCT.",
      "constitucional por observância ao princípio do paralelismo, pois o texto da Constituição Federal estabelece o mesmo quórum.",
      "constitucional, pois as regras do processo legislativo federal não são de reprodução obrigatória nas Constituições estaduais, em razão do poder de auto-organização e autolegislação dos entes federados.",
    ],
    gabarito: "C",
    fonte: "ENAM 2024",
    comentario:
      "O STF firmou que o processo de reforma das Constituições estaduais deve observar simetria com a CF/88. O art. 60, §2º, da CF/88 exige 3/5 dos membros de cada Casa do Congresso em dois turnos de votação. A exigência estadual de apenas 2/3 em dois turnos, apesar de quórum numericamente semelhante, foge ao modelo federal que usa 3/5 (60%), tornando a norma inconstitucional por violação à simetria obrigatória.",
  },
  {
    id: 10,
    materia: "Direito Constitucional",
    dificuldade: "Difícil",
    enunciado:
      "Fabiano constituiu, em favor de terceiros, direitos reais sobre imóveis: I. hipoteca sobre imóvel em garantia de empréstimo; II. servidão de passagem a título oneroso em favor do vizinho Carlos; III. usufruto por liberalidade, em favor de seu filho Mário. Considerando as hipóteses de incidência do ITBI e do ITCMD, assinale a afirmativa correta.",
    opcoes: [
      "Sobre a hipoteca, poderá incidir ITBI; sobre a servidão, não poderá incidir o ITBI; e, sobre o usufruto, poderá incidir o ITCMD.",
      "Sobre a hipoteca, não poderá incidir ITBI; sobre a servidão, poderá incidir o ITBI; e, sobre o usufruto, poderá incidir o ITCMD.",
      "Sobre a hipoteca, poderá incidir ITCMD; sobre a servidão, poderá incidir o ITBI; e, sobre o usufruto, não poderá incidir o ITBI.",
      "Sobre a hipoteca, não poderá incidir ITCMD; sobre a servidão, poderá incidir o ITCMD; e, sobre o usufruto, poderá incidir o ITBI.",
      "Sobre a hipoteca, poderá incidir ITBI; sobre a servidão, poderá incidir o ITBI; e, sobre o usufruto, poderá incidir o ITBI.",
    ],
    gabarito: "B",
    fonte: "ENAM 2024",
    comentario:
      "A hipoteca é direito real de garantia, não há transmissão de propriedade nem onerosa, portanto não incide ITBI. A servidão de passagem a título oneroso é transmissão onerosa de direito real sobre imóvel, incidindo o ITBI (art. 156, II, CF). O usufruto por liberalidade (gratuito) é transmissão gratuita de direito real, incidindo o ITCMD (art. 155, I, CF). Logo: hipoteca – sem ITBI; servidão – ITBI; usufruto – ITCMD.",
  },
  {
    id: 11,
    materia: "Direito Constitucional",
    dificuldade: "Médio",
    enunciado:
      "Em RE julgado pelo STF, foi fixada tese permitindo afastar o regime de separação obrigatória de bens para maiores de 70 anos por escritura pública. Analise: I. O princípio da igualdade restringe a utilização do fator idade para desequiparar pessoas, salvo se houver fundamento razoável para fim legítimo. II. O princípio da dignidade humana inclui o valor intrínseco de toda pessoa e a autonomia para realizar suas próprias escolhas existenciais. III. O regime de separação de bens do art. 1.641, II, CC, aplica-se tanto ao casamento quanto à união estável, mas somente o casamento forma entidade familiar. Está correto o que se afirma em",
    opcoes: [
      "I, apenas.",
      "II, apenas.",
      "I e II, apenas.",
      "II e III, apenas.",
      "I, II e III.",
    ],
    gabarito: "C",
    fonte: "ENAM 2024",
    comentario:
      "I e II estão corretas e formam a base da tese fixada pelo STF. III está incorreta: a união estável também é reconhecida como entidade familiar pelo art. 226, §3º, da CF/88. Portanto, apenas I e II estão corretas.",
  },
  {
    id: 12,
    materia: "Direito Constitucional",
    dificuldade: "Médio",
    enunciado:
      "Acerca da proteção contra a dispensa imotivada ou despedida arbitrária, nos termos da CF/88, da jurisprudência sumulada do TST e da legislação em vigor, assinale a afirmativa correta.",
    opcoes: [
      "A garantia de emprego assegurada ao empregado eleito para cargo de direção de comissões internas de prevenção de acidentes, representante dos empregados, está restrita ao membro titular.",
      "A CF/88 veda a despedida arbitrária da empregada gestante desde a confirmação da gravidez até cinco meses após o parto, bem como a do empregado eleito para o cargo de direção de comissões internas de prevenção de acidentes, desde o registro da candidatura até um ano após o final do mandato.",
      "A garantia contra a despedida arbitrária da empregada gestante é personalíssima, não admitindo extensão do direito a quem detiver a guarda da criança em caso de falecimento da genitora.",
      "A previsão constitucional relacionada à despedida arbitrária está restrita às hipóteses de empregada gestante e de empregados eleitos pelos empregados e indicados pelos empregadores para o cargo de direção de comissão interna de prevenção de acidentes.",
      "Não terá garantia no emprego contra a despedida arbitrária o empregado eleito como representante dos empregados em empresas com mais de 200 empregados, com a finalidade exclusiva de promover-lhes o entendimento direto com os empregadores, por depender de regulamentação.",
    ],
    gabarito: "B",
    fonte: "ENAM 2024",
    comentario:
      "A alternativa B reproduz fielmente os termos do art. 10, II, 'a' e 'b', do ADCT: vedação à despedida arbitrária da gestante desde a confirmação da gravidez até 5 meses após o parto, e do cipeiro desde o registro da candidatura até 1 ano após o término do mandato. A alternativa A está incorreta pois a Súmula 339 do TST estende a garantia ao suplente.",
  },
  {
    id: 13,
    materia: "Direito Constitucional",
    dificuldade: "Fácil",
    enunciado:
      "No capítulo dos Direitos Sociais, a CF/88 em seu art. 7º elenca os direitos dos trabalhadores urbanos e rurais. Dos direitos previstos, indique aquele que até o presente momento não foi regulamentado e, assim, não pode ser exercido pelos trabalhadores brasileiros.",
    opcoes: [
      "Aviso prévio proporcional ao tempo de serviço.",
      "Adicional de remuneração para as atividades penosas.",
      "Proibição de trabalho noturno a menores de dezoito anos.",
      "Seguro contra acidentes de trabalho, a cargo do empregador.",
      "Salário-família pago em razão do dependente do trabalhador de baixa renda.",
    ],
    gabarito: "B",
    fonte: "ENAM 2024",
    comentario:
      "O adicional de remuneração para atividades penosas, previsto no art. 7º, XXIII, da CF/88, até hoje não foi regulamentado por lei. Os demais direitos listados nas alternativas já possuem regulamentação infraconstitucional em vigor (aviso prévio – Lei 12.506/2011; trabalho noturno de menores – CLT; seguro acidente – Lei 8.213/91; salário-família – Lei 8.213/91).",
  },
  {
    id: 14,
    materia: "Direito Constitucional",
    dificuldade: "Difícil",
    enunciado:
      "A respeito do princípio da presunção de inocência, analise: I. O STF reconheceu a repercussão geral da matéria atinente à possibilidade de execução imediata de pena aplicada pelo Tribunal do Júri, ainda que a sentença não tenha transitado em julgado. II. Segundo o STF, a presunção de inocência impõe que a decretação de prisão cautelar se baseie em elementos concretos extraídos dos autos, não sendo possível a vedação de liberdade provisória ex lege. III. Tendo em vista que os recursos especial e extraordinário não possuem efeito suspensivo, a pena imposta em acórdãos de tribunais de 2º grau pode ser executada imediatamente, desde que efetuada a detração da prisão cautelar anteriormente imposta. Está correto o que se afirma em",
    opcoes: [
      "I, apenas.",
      "II, apenas.",
      "III, apenas.",
      "I e II, apenas.",
      "II e III, apenas.",
    ],
    gabarito: "D",
    fonte: "ENAM 2024",
    comentario:
      "I está correta: o STF reconheceu repercussão geral (Tema 1068) sobre a execução imediata de condenação pelo Júri. II está correta: STF consolidou que a vedação legal absoluta de liberdade provisória viola a presunção de inocência (HC 104.339). III está incorreta: o STF, no julgamento das ADCs 43, 44 e 54, fixou que a execução da pena somente pode ocorrer após o trânsito em julgado, vedada a execução após condenação em 2º grau.",
  },
  {
    id: 15,
    materia: "Direito Constitucional",
    dificuldade: "Médio",
    enunciado:
      "João da Silva vai à agência bancária obter o levantamento de conta de FGTS de terceiro, usando documento falso. Desconfiado, o gerente pede que João retorne em algumas horas. João retorna e, no momento em que efetua o saque, é preso por policiais acionados pelo gerente após confirmar a falsidade do documento. Assinale a afirmativa correta.",
    opcoes: [
      "A prisão em flagrante é ilegal, pois se trata de flagrante provocado.",
      "A prisão em flagrante é legal, pois se trata de ação controlada.",
      "A prisão em flagrante é legal, pois se trata de flagrante diferido.",
      "A prisão em flagrante é legal, pois se trata de flagrante preparado.",
      "A prisão em flagrante é legal, pois se trata de flagrante esperado.",
    ],
    gabarito: "E",
    fonte: "ENAM 2024",
    comentario:
      "No flagrante esperado, a autoridade policial ou particular toma conhecimento de que o crime irá ocorrer e aguarda a sua consumação para efetuar a prisão, sem induzir ou instigar a conduta criminosa. Diferencia-se do flagrante provocado (onde há induzimento) e do preparado (onde o crime é induzido por terceiro). No caso, o gerente apenas aguardou — não induziu João à prática do crime — caracterizando o flagrante esperado.",
  },
  {
    id: 16,
    materia: "Direito Constitucional",
    dificuldade: "Difícil",
    enunciado:
      "A respeito da inadmissibilidade das provas obtidas por meios ilícitos, analise: I. São lícitas as sucessivas renovações de interceptação telefônica, desde que verificados os requisitos do art. 2º da Lei 9.296/1996 e demonstrada a necessidade da medida. II. De acordo com o STF, o juiz que conhecer do conteúdo da prova declarada inadmissível não poderá proferir a sentença ou o acórdão. III. As provas derivadas das ilícitas não serão admitidas no processo, salvo quando não evidenciado o nexo de causalidade, quando puderem ser obtidas por fonte independente ou quando forem produzidas comprovadamente de boa-fé. Está correto o que se afirma em",
    opcoes: [
      "I, apenas.",
      "II, apenas.",
      "I e II, apenas.",
      "I e III, apenas.",
      "II e III, apenas.",
    ],
    gabarito: "A",
    fonte: "ENAM 2024",
    comentario:
      "I está correta: conforme jurisprudência do STF e STJ, são lícitas as renovações de interceptação telefônica, desde que motivadas e observados os requisitos legais. II está incorreta: não há essa vedação absoluta no sistema jurídico brasileiro; o CPP prevê o juiz das garantias, mas não impõe impedimento ao juiz que teve contato com prova ilícita de julgar o caso. III está incorreta: a boa-fé não é exceção prevista no art. 157, §1º do CPP; as exceções são ausência de nexo causal e fonte independente.",
  },
  // ─────────────────────────────────────────────────────────────
  // DIREITO ADMINISTRATIVO (17–26)
  // ─────────────────────────────────────────────────────────────
  {
    id: 17,
    materia: "Direito Administrativo",
    dificuldade: "Médio",
    enunciado:
      "Um Município instituiu empresa pública, em regime não concorrencial, mediante autorização legislativa, para exercer poder de polícia de trânsito, inclusive quanto à aplicação de multas. De acordo com a jurisprudência do STF a respeito do poder de polícia administrativa, assinale a afirmativa correta.",
    opcoes: [
      "A lei autorizadora é compatível com a ordem constitucional vigente, embora não seja possível a extensão dos privilégios da Fazenda Pública à empresa pública criada, tal como a concessão de imunidade tributária recíproca.",
      "A lei autorizadora não é compatível com a ordem constitucional vigente, pois há absoluta incompatibilidade entre o regime celetista das estatais prestadoras de serviço público em regime de monopólio e o exercício de atividade de polícia administrativa.",
      "A lei autorizadora é compatível com a ordem constitucional vigente, com exceção da possibilidade de aplicação de sanção, que não pode ser delegada à empresa pública que atua em regime de Direito Privado.",
      "A lei autorizadora é compatível com a ordem constitucional vigente, que admite a delegação do poder de polícia administrativa a pessoas jurídicas de direito privado integrantes da Administração Pública indireta e prestadoras de serviço público, em regime não concorrencial.",
      "A lei autorizadora não é compatível com a ordem constitucional vigente, uma vez que as estatais prestadoras de serviço público de atuação própria do Estado não podem fazer uso do atributo da coercibilidade inerente ao exercício do poder de polícia, mesmo que atuem em regime não concorrencial.",
    ],
    gabarito: "D",
    fonte: "ENAM 2024",
    comentario:
      "No julgamento do RE 633.782 (Tema 532), o STF fixou que é constitucional a delegação do poder de polícia, por meio de lei, a pessoas jurídicas de direito privado integrantes da Administração Pública indireta de capital social majoritariamente público que prestem exclusivamente serviço público de atuação própria do Estado e em regime não concorrencial.",
  },
  {
    id: 18,
    materia: "Direito Administrativo",
    dificuldade: "Difícil",
    enunciado:
      "No julgamento da ADI 2946, o STF apreciou o art. 27 da Lei 8.987/1995 (transferência de concessão sem anuência do poder concedente implica caducidade). O voto do relator afirma que 'É a proposta mais vantajosa que, prima facie, vincula a Administração. Mantidos seus termos, não se pode afirmar que a modificação do particular contratado implica, automaticamente, burla à regra da obrigatoriedade de licitação ou ofensa aos princípios constitucionais correlatos, mormente nos casos de concessão'. Assinale a opção que traduz a ideia expressa pelo Tribunal.",
    opcoes: [
      "Contratos de concessão têm natureza incompleta, dinâmica, especial, personalíssima e contínua.",
      "A transferência de concessão é viável se houver continuidade da prestação adequada dos serviços públicos, mas deve ser feita sempre por meio de licitação.",
      "Na concessão, o principal para a Administração Pública é a manutenção das condições contratuais obtidas na licitação e a continuidade adequada dos serviços, e não o interesse da concessionária vencedora.",
      "A competência do poder concedente para anuir com a transferência da concessão está sujeita a caducidade, salvo se os termos da proposta mais vantajosa na licitação não tiverem sido mantidos.",
      "Em virtude do princípio da continuidade dos serviços públicos, a Administração Pública deve necessariamente rescindir a concessão se a concessionária não tiver condições de manter a prestação adequada.",
    ],
    gabarito: "C",
    fonte: "ENAM 2024",
    comentario:
      "O voto do relator expressou que o que vincula a Administração é a proposta mais vantajosa, ou seja, as condições acordadas na licitação. Desde que essas condições sejam mantidas, a mudança no sujeito privado (transferência da concessão) não viola, por si só, o princípio da licitação. O foco da Administração é a manutenção das condições contratuais e a continuidade do serviço, não a identidade da concessionária.",
  },
  {
    id: 19,
    materia: "Direito Administrativo",
    dificuldade: "Médio",
    enunciado:
      "Sobre a Lei nº 12.846/2013 (Lei Anticorrupção), assinale a afirmativa correta.",
    opcoes: [
      "Sempre que a pessoa jurídica for responsabilizada, os seus dirigentes ou administradores o serão de forma objetiva.",
      "A responsabilização da pessoa jurídica exclui a responsabilidade individual de seus dirigentes ou administradores.",
      "As pessoas jurídicas serão responsabilizadas objetivamente, nos âmbitos administrativo e civil, pelos atos previstos na mencionada lei.",
      "A pessoa jurídica apenas poderá ser responsabilizada se houver a responsabilização individual de seus dirigentes ou administradores.",
      "Caso haja fusão ou incorporação da empresa, a responsabilidade da sucessora continuará ampla e gerará a responsabilidade direta dos seus dirigentes ou administradores objetivamente.",
    ],
    gabarito: "C",
    fonte: "ENAM 2024",
    comentario:
      "O art. 2º da Lei 12.846/2013 estabelece que as pessoas jurídicas serão responsabilizadas objetivamente, nos âmbitos administrativo e civil, pela prática dos atos previstos na lei, independentemente de dolo ou culpa. Isso é uma das características centrais da Lei Anticorrupção.",
  },
  {
    id: 20,
    materia: "Direito Administrativo",
    dificuldade: "Médio",
    enunciado:
      "Caio adquire imóvel para fins empresariais em rua de grande movimento, criando sociedade empresária. Após três anos, a Administração Pública Municipal realiza ocupação temporária da área por oito meses para obra emergencial, tornando o estabelecimento financeiramente inviável. Sobre o direito da empresa em face do Poder Público municipal, assinale a opção correta.",
    opcoes: [
      "A sociedade empresária apenas terá direito a ser indenizada se o tempo de realização da obra tiver ficado acima da média temporal para obras como a realizada, ciente de ser uma responsabilidade de natureza subjetiva.",
      "A sociedade empresária apenas terá direito a ser ressarcida se comprovar que o Município foi levado a realizar as obras por conta de uma situação emergencial cuja causa tenha ligação direta com uma conduta do próprio Município.",
      "O direito da sociedade empresária se restringir-se-á ao não pagamento de eventuais tributos municipais incidentes, pois a edilidade teria dado causa ao esvaziamento de sua atividade.",
      "A sociedade empresária teria direito a ser ressarcida pelo atingimento econômico de suas atividades, de forma objetiva, pois a conduta do Município teve direta relação com a inviabilidade de bem prestar suas atividades empresariais.",
      "A sociedade empresária não terá direito a ser ressarcida pelo atingimento econômico de suas atividades, pois a situação ocorrida está dentro de um risco negocial, sendo previsível que o poder público possa realizar obras que venham a interferir na circulação de vias públicas.",
    ],
    gabarito: "D",
    fonte: "ENAM 2024",
    comentario:
      "A responsabilidade civil do Estado é objetiva (art. 37, §6º, CF/88), bastando o nexo causal entre a conduta estatal e o dano. No caso, a ocupação temporária pelo Município causou diretamente a inviabilidade do negócio, configurando dano anormal e especial que supera os riscos ordinários do empreendimento, gerando dever de indenizar independentemente de culpa.",
  },
  {
    id: 21,
    materia: "Direito Administrativo",
    dificuldade: "Difícil",
    enunciado:
      "Sobre as regras do Decreto-Lei nº 20.910/1932 (prazos prescricionais contra a Fazenda Pública), assinale a afirmativa correta.",
    opcoes: [
      "A citação inicial interrompe a prescrição, mesmo quando, por qualquer motivo, o processo tenha sido anulado.",
      "O direito à reclamação administrativa que não tiver prazo fixado em disposição de lei especial prescreve em três anos, a contar do conhecimento do ato ou fato apontado pelo particular prejudicado.",
      "A prescrição interrompida recomeça a correr, por dois anos e meio, a partir do ato interruptivo, mas não poderá ficar reduzida aquém de cinco anos, mesmo que o ato interruptivo se dê durante a primeira metade do prazo.",
      "A prescrição somente poderá ser interrompida duas vezes, quando se trata de ação objetivando reparação material; já quando a pretensão versar sobre reparação moral, ela será interrompida sempre, segundo os regramentos da legislação civil.",
      "Não corre a prescrição durante a demora do procedimento que está voltado a analisar ou estudar a pretensão deduzida no âmbito administrativo, salvo se esta versar sobre reparação material, quando o prazo prescricional retomará o seu curso após o primeiro ano, sem a decisão administrativa.",
    ],
    gabarito: "A",
    fonte: "ENAM 2024",
    comentario:
      "O art. 4º do Decreto-Lei 20.910/1932 estabelece que 'não corre a prescrição durante a demora no ajuizamento da ação'. O art. 8º dispõe que a prescrição somente pode ser interrompida uma vez e recomeça a correr por metade do prazo (dois anos e meio), mas não pode ficar aquém de cinco anos — exceto se a interrupção se der na segunda metade. A citação válida interrompe a prescrição mesmo que o processo seja posteriormente anulado, conforme interpretação dominante.",
  },
  {
    id: 22,
    materia: "Direito Administrativo",
    dificuldade: "Difícil",
    enunciado:
      "A respeito do recente posicionamento do STF em repercussão geral (RE 684.612 – Tema 698) sobre os parâmetros do controle jurisdicional de políticas públicas voltadas à realização de direitos fundamentais, assinale a afirmativa correta.",
    opcoes: [
      "A decisão judicial, como regra, deverá determinar medidas claras, objetivas e pontuais a serem realizadas pelo gestor público para a implementação dos direitos fundamentais.",
      "A decisão judicial, prioritariamente, deve se limitar a apontar as finalidades a serem alcançadas e determinar que a Administração Pública apresente um plano ou os meios adequados para alcançar tal resultado.",
      "A intervenção do Poder Judiciário em políticas públicas voltadas à realização de direitos fundamentais, mesmo em caso de deficiência grave ou ausência do serviço, viola o princípio da separação dos poderes.",
      "A atuação judicial deve ser pautada por critérios de razoabilidade e eficiência e deve desenvolver e apresentar o plano concreto a ser cumprido pela administração para alcançar o resultado.",
      "A decisão judicial não deve trazer qualquer tipo de determinação ao gestor público, sob pena de interferir na discricionariedade administrativa na tomada de decisão sobre as políticas públicas a serem implementadas.",
    ],
    gabarito: "B",
    fonte: "ENAM 2024",
    comentario:
      "No julgamento do RE 684.612 (Tema 698), o STF fixou que o Judiciário, ao controlar políticas públicas, deve prioritariamente apontar as finalidades a serem alcançadas e determinar que a Administração apresente planos ou meios para atingi-las, preservando a discricionariedade do gestor para escolher os meios adequados.",
  },
  {
    id: 23,
    materia: "Direito Administrativo",
    dificuldade: "Difícil",
    enunciado:
      "Fernando foi condenado com trânsito em julgado em 2020 por ato de improbidade culposo. Em cumprimento de sentença, a defesa alega que, com a Lei nº 14.230/2021, a multa não é mais devida. Alinhado ao entendimento do STF, o magistrado deve",
    opcoes: [
      "acatar a tese defensiva e extinguir a execução, diante da aplicação do princípio da retroatividade da lei mais benéfica para o réu em matéria de direito sancionador.",
      "acatar a tese defensiva e extinguir a execução, por analogia in bonam partem ao instituto da abolitio criminis.",
      "acatar a tese defensiva e extinguir a execução, haja vista que a Lei nº 14.230/2021, por possuir conteúdo de direito material em tema de direito sancionador, aplica-se retroativamente a todos os processos em curso.",
      "rejeitar a tese defensiva e prosseguir a execução, pois a revogação da modalidade culposa do ato de improbidade é irretroativa, não incidindo sobre a eficácia da coisa julgada nem durante a execução.",
      "rejeitar a tese defensiva e prosseguir a execução, pois não houve revogação do tipo e do elemento subjetivo da culpa no ato de improbidade praticado por Fernando.",
    ],
    gabarito: "D",
    fonte: "ENAM 2024",
    comentario:
      "O STF, no julgamento das ADIs 7236, 7237 e 7238, fixou que a Lei 14.230/2021 não retroage para atingir atos de improbidade praticados antes de sua vigência quando há coisa julgada. A revogação da modalidade culposa é irretroativa em relação a processos já encerrados por sentença transitada em julgado.",
  },
  {
    id: 24,
    materia: "Direito Administrativo",
    dificuldade: "Médio",
    enunciado:
      "Carlos, servidor público efetivo federal, praticou ato de insubordinação grave em serviço, comprovado em PAD, que resultou em pena de demissão. Carlos pleiteia judicialmente penalidade menos gravosa, comprovando não ter sido sancionado anteriormente e tendo dois elogios em sua ficha. Com base na Lei nº 8.112/90 e na jurisprudência do STJ, o magistrado deve julgar a pretensão de Carlos",
    opcoes: [
      "procedente, porque, diante dos bons antecedentes e da ausência de reincidência, a penalidade cabível é a advertência.",
      "improcedente, haja vista que é possível incursão no mérito administrativo e que o ato de insubordinação grave deve ser punido com demissão ou suspensão, conforme discricionariedade do administrador.",
      "procedente, uma vez que devem ser consideradas as circunstâncias atenuantes e os antecedentes funcionais, de maneira que a sanção de demissão deve ser substituída pela suspensão por 90 dias.",
      "improcedente, haja vista que o Poder Judiciário não pode se imiscuir no mérito administrativo, pois sua análise se restringe aos aspectos de legalidade do PAD.",
      "improcedente, pois a autoridade administrativa não dispõe de discricionariedade para aplicar ao servidor pena diversa de demissão quando caracterizadas as hipóteses legais dessa sanção.",
    ],
    gabarito: "E",
    fonte: "ENAM 2024",
    comentario:
      "O art. 132, VI, da Lei 8.112/90 prevê demissão para insubordinação grave em serviço, sem margem de discricionariedade para substituição por pena menos grave quando a hipótese legal de demissão está configurada. Diferentemente das hipóteses do art. 130 (infrações que admitem substituição), a insubordinação grave é pena vinculada à demissão.",
  },
  {
    id: 25,
    materia: "Direito Administrativo",
    dificuldade: "Médio",
    enunciado:
      "O Município Alfa pretende contratar diretamente, mediante dispensa de licitação, a Cooperativa Delta (formada por catadores de materiais recicláveis) para coleta e comercialização de resíduos sólidos urbanos recicláveis. A sociedade empresária Beta ajuizou ação pedindo a proibição dessa contratação sem licitação. Conclusos os autos, o magistrado, atento à Lei nº 14.133/21, deve",
    opcoes: [
      "deferir a liminar, pois a natureza do serviço a ser contratado pelo Município exige prévia licitação, cuja modalidade será determinada pelo valor estimado da contratação.",
      "deferir a liminar, pois a natureza do serviço exige prévia licitação, na modalidade pregão.",
      "deferir a liminar, pois a natureza do serviço exige prévia licitação, na modalidade diálogo competitivo.",
      "indeferir a liminar, pois, não obstante a contratação pretendida não ser possível mediante dispensa de licitação, é cabível a contratação direta mediante inexigibilidade de licitação.",
      "indeferir a liminar, pois a contratação pretendida pelo Município é possível mediante dispensa de licitação, por expressa previsão legal, desde que instruída com os documentos indicados na legislação de regência.",
    ],
    gabarito: "E",
    fonte: "ENAM 2024",
    comentario:
      "O art. 75, IV, da Lei 14.133/2021 prevê expressamente a dispensa de licitação para contratação com associações de catadores de materiais reutilizáveis e recicláveis, em consonância com o art. 36 da Lei 12.305/2010 (Política Nacional de Resíduos Sólidos). Preenchidos os requisitos legais, a contratação direta é legítima.",
  },
  {
    id: 26,
    materia: "Direito Administrativo",
    dificuldade: "Médio",
    enunciado:
      "Pedro, jornalista cobrindo manifestação pública, foi lesionado por cassetete arremessado por policial militar durante tumulto, sem ter descumprido advertência ostensiva de acesso a áreas de risco. Pedro ajuizou ação indenizatória contra o Estado Alfa. O magistrado, observando a jurisprudência do STF, deve julgar a pretensão indenizatória de Pedro",
    opcoes: [
      "procedente, diante da responsabilidade civil objetiva do Estado, não incidindo a excludente da responsabilidade da culpa exclusiva da vítima.",
      "procedente em parte, diante da responsabilidade civil subjetiva do Estado, incidindo a excludente da culpa exclusiva da vítima apenas para fins de compensação no valor da indenização.",
      "improcedente, uma vez que, apesar da responsabilidade civil subjetiva do Estado, não ficou demonstrado abuso ou excesso na conduta policial.",
      "improcedente, uma vez que, apesar da responsabilidade civil objetiva do Estado, incide a excludente da responsabilidade do caso fortuito ou força maior.",
      "improcedente, uma vez que, apesar da responsabilidade civil objetiva do Estado, incide a excludente da responsabilidade da culpa exclusiva de terceiro.",
    ],
    gabarito: "A",
    fonte: "ENAM 2024",
    comentario:
      "A responsabilidade do Estado é objetiva (art. 37, §6º, CF/88). Pedro não descumpriu nenhuma advertência e estava no exercício legítimo de sua profissão. Não há culpa exclusiva da vítima nem caso fortuito. O Estado responde objetivamente pelo dano causado por seus agentes, e a excludente de culpa exclusiva da vítima não se aplica ao caso.",
  },
  // ─────────────────────────────────────────────────────────────
  // NOÇÕES GERAIS DE DIREITO E FORMAÇÃO HUMANÍSTICA (27–32)
  // ─────────────────────────────────────────────────────────────
  {
    id: 27,
    materia: "Noções Gerais de Direito e Formação Humanística",
    dificuldade: "Fácil",
    enunciado:
      "A juíza Joana, que acabou de se tornar vitalícia, foi convidada por veículo de imprensa para dar uma entrevista sobre determinado caso. De acordo com o Código de Ética da Magistratura Nacional, Joana deve",
    opcoes: [
      "abster-se de emitir opinião sobre processo pendente de seu julgamento, mas pode fazê-lo em relação ao processo que será julgado por outro magistrado.",
      "abster-se de emitir juízo depreciativo sobre despachos, votos, sentenças ou acórdãos, de órgãos judiciais, ressalvada a crítica nos autos, doutrinária ou no exercício do magistério.",
      "observar que, caso se manifeste sobre processo pendente de seu julgamento, não poderá fazer juízo de valor sobre fatos ainda não decididos e deverá automaticamente se declarar suspeita para prosseguir no feito após a entrevista.",
      "observar os sigilos legais decretados em processos judiciais, somente podendo dar entrevista porque já adquiriu a vitaliciedade, que, no primeiro grau, é adquirida após dois anos de exercício.",
      "observar os sigilos legais decretados em processos judiciais, mas não lhe é exigido que evite comportamentos que impliquem a busca injustificada e desmesurada por reconhecimento social.",
    ],
    gabarito: "B",
    fonte: "ENAM 2024",
    comentario:
      "O art. 11 do Código de Ética da Magistratura Nacional (Resolução CNJ 60/2008) estabelece que o magistrado deve abster-se de emitir juízo depreciativo sobre despachos, votos, sentenças ou acórdãos de órgãos judiciais, ressalvada a crítica nos autos, doutrinária ou no exercício do magistério.",
  },
  {
    id: 28,
    materia: "Noções Gerais de Direito e Formação Humanística",
    dificuldade: "Médio",
    enunciado:
      "Baseado nas normas internacionais e internas de proteção à criança e ao adolescente, além da CF/88, analise: I. A CF/88 proíbe o trabalho noturno, perigoso e insalubre a menores de 18 anos e de qualquer trabalho a menores de 16 anos, salvo na condição de aprendiz a partir de 14 anos. II. A Convenção 182 estipula que o trabalho nas atividades consideradas como piores formas de trabalho é proibido antes dos 16 anos de idade. III. É permitida qualquer atividade laboral realizada por adolescentes menores de 14 anos que se mostre imprescindível à sobrevivência do trabalhador e de sua família. IV. A doutrina da proteção integral tem, como um de seus desdobramentos, a doutrina da situação irregular, ambas albergadas pelo ECA. Está correto o que se afirma em",
    opcoes: [
      "I, apenas.",
      "IV, apenas.",
      "I e IV, apenas.",
      "II e III, apenas.",
      "I e II, apenas.",
    ],
    gabarito: "A",
    fonte: "ENAM 2024",
    comentario:
      "I está correta: reproduz fielmente o art. 7º, XXXIII, da CF/88. II está incorreta: a Convenção 182 da OIT não fixa limite etário em 16 anos para piores formas — a proibição é absoluta para menores de 18 anos nas piores formas. III está incorreta: não há exceção que permita trabalho de menores de 14 anos. IV está incorreta: o ECA adota a doutrina da proteção integral e superou a doutrina da situação irregular.",
  },
  {
    id: 29,
    materia: "Noções Gerais de Direito e Formação Humanística",
    dificuldade: "Médio",
    enunciado:
      "Entre os ODS, o Objetivo 16 visa a promover sociedades pacíficas e inclusivas para o desenvolvimento sustentável, proporcionar o acesso à justiça para todos e construir instituições eficazes, responsáveis e inclusivas em todos os níveis. As opções a seguir apresentam, corretamente, algumas dessas metas, à exceção de uma. Assinale-a.",
    opcoes: [
      "Até 2030, fornecer identidade legal para todos, incluindo o registro de nascimento.",
      "Reduzir substancialmente a corrupção e o suborno em todas as suas formas.",
      "Garantir a tomada de decisão responsiva, inclusiva, participativa e representativa em todos os níveis.",
      "Até 2030, zerar os fluxos financeiros e os de armas ilegais, reforçar a recuperação e a devolução de recursos roubados e combater as formas de crime organizado ligadas a crimes hediondos.",
      "Fortalecer as instituições nacionais relevantes, inclusive por meio da cooperação internacional, para a construção de capacidades em todos os níveis, em particular nos países em desenvolvimento.",
    ],
    gabarito: "D",
    fonte: "ENAM 2024",
    comentario:
      "A meta do ODS 16 fala em 'reduzir significativamente os fluxos financeiros e de armas ilegais' — e não em 'zerar' esses fluxos. Além disso, a referência a 'crimes hediondos' não consta da redação original da meta 16.4 da Agenda 2030. As demais alternativas reproduzem corretamente metas do ODS 16.",
  },
  {
    id: 30,
    materia: "Noções Gerais de Direito e Formação Humanística",
    dificuldade: "Médio",
    enunciado:
      "Sobre compliance e a Lei Anticorrupção (Lei nº 12.846/2013), analise: I. Por meio da responsabilidade subjetiva, as empresas podem ser punidas por atos de corrupção, independentemente de culpa. II. A responsabilização da pessoa jurídica não exclui a responsabilidade individual de seus dirigentes ou administradores ou de qualquer pessoa natural, autora, coautora ou partícipe do ato ilícito. III. A Lei Anticorrupção não abrange todas as esferas da Administração Pública (municipal, estadual e federal), tendo incidência direta apenas no âmbito federal. Está correto o que se afirma em",
    opcoes: [
      "II, apenas.",
      "I e II, apenas.",
      "I e III, apenas.",
      "II e III, apenas.",
      "I, II e III.",
    ],
    gabarito: "A",
    fonte: "ENAM 2024",
    comentario:
      "I está incorreta: a responsabilidade da Lei Anticorrupção é objetiva (não subjetiva). II está correta: o art. 3º da Lei 12.846/2013 expressamente prevê que a responsabilização da pessoa jurídica não exclui a responsabilidade individual de seus dirigentes. III está incorreta: a lei abrange todas as esferas da Administração Pública federal, estadual, distrital e municipal. Apenas II está correta.",
  },
  {
    id: 31,
    materia: "Noções Gerais de Direito e Formação Humanística",
    dificuldade: "Médio",
    enunciado:
      "De acordo com os Princípios de Conduta Judicial de Bangalore, o juiz que acabou de ingressar na magistratura deve observar que",
    opcoes: [
      "a motivação em matéria de Direito deve limitar-se a invocar as normas aplicáveis, especialmente nas resoluções sobre o fundo dos assuntos, não devendo ostentar uma intensidade máxima.",
      "a vinculação ocorre apenas pelo texto das normas jurídicas vigentes, e não pelas razões nas quais se fundamentam, em atendimento ao princípio da legalidade.",
      "a independência judicial implica que, sob o ponto de vista ético, o juiz não deve participar, de qualquer modo, de atividade política partidária.",
      "a obrigação da formação continuada dos juízes restringe-se às matérias especificamente jurídicas, para evitar subjetivismo em relação a outros ramos do conhecimento.",
      "o segredo profissional tem como fundamento salvaguardar a confiança no Judiciário e não especificamente os direitos das partes e das pessoas próximas perante o uso indevido de informações obtidas pelo juiz no desempenho das suas funções.",
    ],
    gabarito: "C",
    fonte: "ENAM 2024",
    comentario:
      "Os Princípios de Bangalore estabelecem que a independência judicial exige que o juiz mantenha independência em relação a atividades políticas partidárias. O Valor 1 (Independência) dos Princípios de Bangalore abrange tanto a independência institucional quanto a individual, incluindo a abstenção de participação política partidária.",
  },
  {
    id: 32,
    materia: "Noções Gerais de Direito e Formação Humanística",
    dificuldade: "Difícil",
    enunciado:
      "O Estado Alfa publicou lei estadual, de iniciativa do Judiciário estadual, disciplinando critérios de desempate em promoção por antiguidade: precedência ao magistrado mais antigo na carreira, depois ao com maior tempo de serviço público, e por último ao mais idoso. De acordo com a jurisprudência do STF, a citada norma é",
    opcoes: [
      "inconstitucional, porque conflita com a Lei Orgânica da Magistratura Nacional que dispõe que, havendo empate na antiguidade, terá precedência o juiz com maior produtividade.",
      "constitucional, porque são cabíveis, como medida de desempate, condições estranhas à função jurisdicional, desde que no âmbito do serviço público.",
      "inconstitucional, porque conflita materialmente com a Constituição da República que prevê que, na Justiça dos Estados, havendo empate na antiguidade, terá precedência o juiz mais antigo na carreira, ou, sucessivamente, o mais idoso.",
      "constitucional, porque os Tribunais possuem autogoverno e competência para editar seus regimentos internos.",
      "inconstitucional, por violar a reserva de lei complementar e a iniciativa da Suprema Corte para disciplinar matéria concernente ao Estatuto da Magistratura.",
    ],
    gabarito: "E",
    fonte: "ENAM 2024",
    comentario:
      "O Estatuto da Magistratura é matéria de lei complementar de iniciativa do STF (art. 93 e art. 93, II, da CF/88). A organização judiciária estadual não pode dispor sobre critérios de promoção por antiguidade em termos que extrapolam a LOMAN, pois tal matéria é reservada ao Estatuto da Magistratura. A norma viola tanto a reserva de lei complementar quanto a iniciativa exclusiva do STF.",
  },
  // ─────────────────────────────────────────────────────────────
  // DIREITOS HUMANOS (33–38)
  // ─────────────────────────────────────────────────────────────
  {
    id: 33,
    materia: "Direitos Humanos",
    dificuldade: "Difícil",
    enunciado:
      "Sobre as contribuições do caso Valência Campos e outros vs. Bolívia (Corte IDH, 2022) à jurisprudência interamericana, assinale a afirmativa correta.",
    opcoes: [
      "A Corte se absteve de declarar violações aos direitos econômicos, sociais, culturais e ambientais (DESCA), por entender que o caso envolveu apenas violações de direitos de natureza civil.",
      "O entendimento da Corte IDH sobre a limitação de operações de invasão domiciliar durante a noite tem por fundamento o direito à vida privada (art. 11 da Convenção) e as obrigações estatais de proteção da família (art. 17 da Convenção).",
      "A Corte IDH concluiu que as operações de invasão domiciliar noturnas somente podem ser consideradas compatíveis com a Convenção em situações de consentimento, flagrância ou de comprovada periculosidade do alvo da operação.",
      "O caso reflete uma tendência recente da Corte IDH de restringir o conceito de 'vítima', compreendendo como tais apenas os indivíduos diretamente atingidos pelos atos praticados por agentes do Estado.",
      "A Corte IDH concluiu que o Estado não violou o direito à presunção de inocência ao exibir as vítimas aos meios de imprensa.",
    ],
    gabarito: "B",
    fonte: "ENAM 2024",
    comentario:
      "No caso Valência Campos vs. Bolívia (2022), a Corte IDH fundamentou as restrições a operações de busca e apreensão domiciliar noturnas no direito à vida privada (art. 11 CADH) e nas obrigações de proteção à família (art. 17 CADH), reconhecendo que tais operações, quando realizadas à noite sem o devido cuidado, violam esses direitos.",
  },
  {
    id: 34,
    materia: "Direitos Humanos",
    dificuldade: "Médio",
    enunciado:
      "Sobre as Opiniões Consultivas emitidas pela Corte IDH, assinale a afirmativa correta.",
    opcoes: [
      "As Opiniões Consultivas só podem ser solicitadas por Estados que reconhecem a competência da Corte IDH nos termos do art. 64 da Convenção e pela Comissão Interamericana de Direitos Humanos.",
      "Na OC nº 1 de 1982, a Corte IDH reconheceu que sua competência consultiva compreende qualquer tratado internacional aplicável aos Estados do sistema interamericano, desde que o instrumento possua caráter multilateral.",
      "As Opiniões Consultivas não podem versar sobre disposições normativas concretas de um determinado Estado, apenas sobre situações hipotéticas e sobre a interpretação de tratados internacionais.",
      "Caso encontre disposições incompatíveis com a Convenção em sede consultiva, a Corte poderá ordenar ao Estado que adote as medidas necessárias para adequá-las ao corpus iuris interamericano.",
      "As Opiniões Consultivas da Corte IDH podem ser consideradas modalidade de exercício preventivo do controle de convencionalidade e são fontes standards que devem ser observados pelos Estados.",
    ],
    gabarito: "E",
    fonte: "ENAM 2024",
    comentario:
      "As Opiniões Consultivas da Corte IDH são reconhecidas como mecanismo preventivo do controle de convencionalidade, pois estabelecem parâmetros interpretativos que os Estados devem observar em sua legislação e práticas internas. Elas constituem fonte de standards mínimos de proteção dos direitos humanos no sistema interamericano.",
  },
  {
    id: 35,
    materia: "Direitos Humanos",
    dificuldade: "Médio",
    enunciado:
      "Acerca das características e especificidades dos Direitos Humanos, assinale a afirmativa correta.",
    opcoes: [
      "A universalidade dos Direitos Humanos acompanhou a evolução e o processo de internacionalização desses direitos. No entanto, apesar de sua relevância histórica, não consta expressamente de tratados e declarações internacionais, sendo fruto de um processo interpretativo.",
      "A abertura limitada dos Direitos Humanos possui relação com sua amplitude semântica; por isso, no processo legislativo admite-se a expansão do rol desses direitos somente no plano internacional, vedada inovação no âmbito interno.",
      "A impossibilidade de o próprio titular de direitos renunciar à proteção e permitir que eles sejam violados é chamada pela doutrina de imprescritibilidade dos Direitos Humanos.",
      "O Art. 5º, § 2º, da CF/88 é um exemplo de universalidade dos Direitos Humanos.",
      "A relevância da transnacionalidade, como característica dos Direitos Humanos, possui especial aplicabilidade atualmente, dado o grande fluxo de refugiados.",
    ],
    gabarito: "E",
    fonte: "ENAM 2024",
    comentario:
      "A transnacionalidade é a característica dos Direitos Humanos que indica que eles transcendem as fronteiras nacionais e se aplicam a toda pessoa humana, independentemente de seu país de origem ou residência. Essa característica tem especial relevância no contexto atual de grandes fluxos migratórios e de refugiados, pois os direitos não se perdem com o deslocamento.",
  },
  {
    id: 36,
    materia: "Direitos Humanos",
    dificuldade: "Médio",
    enunciado:
      "A respeito do crime de desaparecimento forçado na jurisprudência da Corte IDH, analise: I. O crime de desaparecimento forçado é um crime permanente que se prolonga no tempo até que o Estado comprove que o desaparecido já morreu. II. A proibição do desaparecimento forçado possui status de ius cogens. III. A Corte IDH reconhece o direito autônomo dos familiares a conhecer a verdade, que compreende não apenas as obrigações estatais derivadas dos artigos 8 e 25 da Convenção, mas também o direito de acesso à informação prescrito no Art. 13.1. Está correto o que se afirma em",
    opcoes: [
      "I, apenas.",
      "I e II, apenas.",
      "I e III, apenas.",
      "II e III, apenas.",
      "I, II e III.",
    ],
    gabarito: "E",
    fonte: "ENAM 2024",
    comentario:
      "Todas as assertivas estão corretas. I: a Corte IDH consolidou que o desaparecimento forçado é crime permanente, prolongando-se enquanto não se esclarece o paradeiro da vítima. II: a proibição é norma de jus cogens. III: a Corte IDH reconhece o direito à verdade dos familiares com fundamento nos arts. 8, 25 e 13 da CADH (caso Velásquez Rodriguez e posteriores).",
  },
  {
    id: 37,
    materia: "Direitos Humanos",
    dificuldade: "Médio",
    enunciado:
      "Acerca da Carta da OEA e da Declaração Americana de Direitos e Deveres do Homem, assinale a afirmativa correta.",
    opcoes: [
      "A Carta da OEA foi editada durante a 9ª Conferência Interamericana realizada em Bogotá, em 1948. Em razão da sua finalidade precípua de constituir formalmente a OEA, o referido documento internacional não continha disposições relacionadas aos Direitos Humanos. Com vistas à abordagem desta temática específica, foi posteriormente editada a Declaração Americana de Direitos e Deveres do Homem.",
      "A Declaração Americana de Direitos e Deveres do Homem é também conhecida como Pacto de São José da Costa Rica, por ter sido adotada durante a Conferência Especializada Interamericana sobre Direitos Humanos realizada naquela cidade, em 1969.",
      "De acordo com a posição majoritária, a Declaração Americana de Direitos e Deveres do Homem possui força vinculante. Contudo, vincula apenas aqueles Estados que a ratificaram expressamente, não abrangendo todos os países que ratificaram a Carta da OEA.",
      "A Carta da OEA abordou o tema dos Direitos Humanos de forma mais genérica. Já a Declaração Americana de Direitos e Deveres do Homem é considerada uma interpretação autêntica dos dispositivos genéricos de proteção dos Direitos Humanos da Carta.",
      "A Declaração Americana de Direitos e Deveres do Homem foi inspirada na Declaração Universal dos Direitos Humanos, editada poucos meses antes pela Organização das Nações Unidas.",
    ],
    gabarito: "D",
    fonte: "ENAM 2024",
    comentario:
      "A Carta da OEA contém referências genéricas aos direitos humanos, enquanto a Declaração Americana (aprovada na mesma conferência de Bogotá, em 1948) é tida como a interpretação autêntica e detalhada desses dispositivos genéricos. Ambas foram adotadas na mesma conferência. A Declaração Americana antecedeu a Declaração Universal da ONU por alguns meses.",
  },
  {
    id: 38,
    materia: "Direitos Humanos",
    dificuldade: "Médio",
    enunciado:
      "Em relação ao controle de convencionalidade, assinale a afirmativa correta.",
    opcoes: [
      "De acordo com a teoria do duplo controle, as normas jurídicas devem guardar compatibilidade não apenas com a respectiva Constituição nacional, mas também com as disposições internacionais acolhidas pelo respectivo Estado-parte.",
      "Enquanto o controle judicial de constitucionalidade é exercido de modo exclusivo pelo Poder Judiciário nacional, o controle judicial de convencionalidade é exercido de modo exclusivo pelos órgãos internacionais competentes.",
      "De acordo com a classificação doutrinária comumente empregada, o controle judicial de convencionalidade realizado no plano internacional pode ocorrer pela via concentrada ou pela via difusa. Já o controle realizado no plano interno somente pode ocorrer pela via concentrada.",
      "De acordo com a teoria do duplo controle, impõe-se ao órgão internacional que promova, igualmente, o controle de constitucionalidade das normas jurídicas analisadas.",
      "Diversamente do que se verifica em relação ao controle de constitucionalidade, comumente atribuído pelas cartas constitucionais a todos os poderes, no plano nacional, o controle de convencionalidade somente é imputado ao Poder Judiciário.",
    ],
    gabarito: "A",
    fonte: "ENAM 2024",
    comentario:
      "A teoria do duplo controle (ou dupla compatibilidade vertical) preconiza que as normas jurídicas devem ser compatíveis tanto com a Constituição (controle de constitucionalidade) quanto com os tratados internacionais de direitos humanos incorporados pelo Estado (controle de convencionalidade). Trata-se de construção doutrinária reconhecida pela Corte IDH e por autores como Valério Mazzuoli.",
  },
  // ─────────────────────────────────────────────────────────────
  // DIREITO PROCESSUAL CIVIL (39–50)
  // ─────────────────────────────────────────────────────────────
  {
    id: 39,
    materia: "Direito Processual Civil",
    dificuldade: "Médio",
    enunciado:
      "No que concerne à ação de mandado de segurança, assinale a afirmativa correta.",
    opcoes: [
      "Proferindo o juiz sentença de procedência do pedido, estará ela sujeita ao reexame necessário pelo órgão de segunda instância.",
      "A decisão de indeferimento da medida liminar é impugnável pelo recurso de agravo de instrumento, não o sendo, contudo, a que a defere.",
      "O juiz poderá, caso repute necessário para a completa instrução do feito, determinar a colheita do depoimento pessoal da autoridade impetrada.",
      "O impetrante dispõe do prazo de cento e vinte dias para ajuizar a demanda, contados a partir da edição, pela autoridade impetrada, do ato impugnado.",
      "Concedida a segurança, para o fim de assegurar ao impetrante o recebimento de vantagens pecuniárias, não lhe será lícito deduzir pretensão de execução por quantia certa em sede de cumprimento de sentença.",
    ],
    gabarito: "E",
    fonte: "ENAM 2024",
    comentario:
      "O art. 14, §4º, da Lei 12.016/2009 veda expressamente o pagamento de vantagens pecuniárias vencidas antes da impetração em cumprimento de sentença de mandado de segurança. Ademais, a natureza mandamental do MS não comporta execução por quantia certa para vantagens pecuniárias passadas, que devem ser cobradas em ação própria.",
  },
  {
    id: 40,
    materia: "Direito Processual Civil",
    dificuldade: "Difícil",
    enunciado:
      "André ajuizou ação popular em 27/02/2024, com citações em 25 e 28/03/2024. Bruno ajuizou ação popular sobre o mesmo contrato em 05/03/2024, com citações em 18 e 21/03/2024. Nesse cenário, é correto afirmar que",
    opcoes: [
      "está configurada a conexão entre as ações populares, devendo os feitos ser reunidos pelo juízo ao qual foi distribuída a petição inicial de André.",
      "está configurada a conexão entre as ações populares, devendo os feitos ser reunidos pelo juízo ao qual foi distribuída a petição inicial de Bruno.",
      "está configurada a continência entre as ações populares, devendo os feitos ser reunidos pelo juízo ao qual foi distribuída a petição inicial de André.",
      "está configurada a continência entre as ações populares, devendo os feitos ser reunidos pelo juízo ao qual foi distribuída a petição inicial de Bruno.",
      "não está configurada a conexão nem a continência entre as ações populares, devendo os feitos tramitar separadamente.",
    ],
    gabarito: "D",
    fonte: "ENAM 2024",
    comentario:
      "As ações populares têm o mesmo objeto (o mesmo contrato) e partes que se identificam (o mesmo réu – ente público). A continência ocorre quando há identidade de partes e de causa de pedir, mas o objeto de uma demanda é mais amplo e abrange o da outra (art. 56 CPC). Configurada a continência, a reunião se dá no juízo prevento — que é determinado pela citação. Bruno obteve citações mais antigas (18 e 21/03) do que André (25 e 28/03), logo Bruno preveniu a competência.",
  },
  {
    id: 41,
    materia: "Direito Processual Civil",
    dificuldade: "Médio",
    enunciado:
      "No que se refere à disciplina legal dos honorários advocatícios, é correto afirmar que",
    opcoes: [
      "é possível a sua compensação nas hipóteses de sucumbência parcial.",
      "é vedada a percepção de honorários sucumbenciais por advogados públicos.",
      "os honorários serão devidos por quem deu causa ao processo, nas hipóteses de perda superveniente do interesse de agir.",
      "não serão devidos honorários sucumbenciais quando a parte vitoriosa no processo for advogado atuando em causa própria.",
      "não será lícito ao advogado valer-se de ação autônoma para cobrar o respectivo valor, transitando em julgado decisão que tenha sido omissa quanto ao direito aos honorários.",
    ],
    gabarito: "C",
    fonte: "ENAM 2024",
    comentario:
      "O art. 85, §10, do CPC veda expressamente a compensação de honorários advocatícios. Advogados públicos podem perceber honorários (art. 85, §19, CPC). O art. 85, §10 do CPC proíbe a compensação. O art. 85, §18 do CPC permite honorários ao advogado em causa própria. Quanto à perda superveniente do interesse de agir (como na desistência ou perda do objeto), a responsabilidade pelos honorários recai sobre quem deu causa ao processo — art. 85, §10 do CPC e art. 485, §1º do CPC.",
  },
  {
    id: 42,
    materia: "Direito Processual Civil",
    dificuldade: "Médio",
    enunciado:
      "Pessoa jurídica estrangeira pleiteou gratuidade de justiça afirmando hipossuficiência, sem comprovar após intimação. O juiz indeferiu a gratuidade, intimou para recolher custas em 15 dias e, ante a inércia, determinou o cancelamento da distribuição. Sobre esse quadro, assinale a afirmativa correta.",
    opcoes: [
      "O juiz acertou ao determinar o cancelamento da distribuição, sendo a sua decisão impugnável por recurso de apelação.",
      "O juiz acertou ao determinar o cancelamento da distribuição, sendo a sua decisão impugnável por recurso de agravo de instrumento.",
      "O juiz errou ao assinar o prazo de quinze dias para o recolhimento das custas processuais e taxa judiciária, já que o prazo legal para tanto é de cinco dias.",
      "O juiz errou ao determinar a comprovação da alegada hipossuficiência econômica da autora, já que não assiste às pessoas jurídicas estrangeiras o direito à gratuidade de justiça.",
      "O juiz errou ao determinar a intimação do advogado da autora para que providenciasse o recolhimento das custas processuais e taxa judiciária, já que o destinatário desse ato intimatório deve ser a própria parte.",
    ],
    gabarito: "A",
    fonte: "ENAM 2024",
    comentario:
      "O juiz agiu corretamente ao cancelar a distribuição ante o não recolhimento das custas (art. 290 CPC). A decisão de cancelamento da distribuição é uma sentença terminativa, impugnável por recurso de apelação (art. 1.009 CPC), e não por agravo de instrumento.",
  },
  {
    id: 43,
    materia: "Direito Processual Civil",
    dificuldade: "Médio",
    enunciado:
      "Determinado credor, munido de nota promissória representativa de obrigação pecuniária certa, líquida e vencida há pouco tempo sem que tivesse sido paga, ajuizou ação de conhecimento, pleiteando a condenação do devedor a pagar o débito com os consectários da mora. Tomando contato com a postulação, o magistrado deverá",
    opcoes: [
      "julgar liminarmente improcedente o pedido do autor.",
      "indeferir de plano a petição inicial, haja vista a falta de interesse de agir.",
      "converter de ofício o procedimento para o da execução por quantia certa.",
      "proceder ao juízo positivo de admissibilidade da demanda, ordenando a citação do réu para apresentar resposta.",
      "assinar prazo para que o autor emende a petição inicial, adequando-a à pretensão de execução por quantia certa.",
    ],
    gabarito: "D",
    fonte: "ENAM 2024",
    comentario:
      "O autor tem a liberdade de escolher o procedimento que melhor lhe convém, inclusive optando pela ação de conhecimento em vez da execução, mesmo tendo título executivo extrajudicial. O juiz não pode converter de ofício o procedimento nem indeferir a inicial por falta de interesse de agir. Deve admitir a demanda e ordenar a citação do réu.",
  },
  {
    id: 44,
    materia: "Direito Processual Civil",
    dificuldade: "Médio",
    enunciado:
      "Após exclusão de licitação, a sociedade empresária A ajuizou demanda para anular o ato que a eliminou e o que adjudicou o objeto à sociedade B. No polo passivo consta apenas o ente público. Tomando contato com a peça exordial, deverá o juiz",
    opcoes: [
      "incluir de ofício no polo passivo a sociedade empresária B, haja vista a configuração do litisconsórcio passivo necessário, e proceder ao juízo positivo de admissibilidade.",
      "determinar de ofício a intimação da autora para que emende a inicial para incluir no polo passivo a sociedade empresária B, haja vista a configuração do litisconsórcio passivo necessário.",
      "incluir de ofício no polo passivo a sociedade empresária B, haja vista a configuração do litisconsórcio passivo facultativo, e proceder ao juízo positivo de admissibilidade.",
      "determinar de ofício a intimação da autora para que emende a inicial para incluir no polo passivo a sociedade empresária B, haja vista a configuração do litisconsórcio passivo facultativo.",
      "proceder ao juízo positivo de admissibilidade da ação, só lhe sendo lícito determinar que a autora inclua no polo passivo a sociedade empresária B se o ente público suscitar a questão, haja vista a configuração do litisconsórcio passivo facultativo.",
    ],
    gabarito: "B",
    fonte: "ENAM 2024",
    comentario:
      "A sociedade B, como vencedora da licitação e adjudicatária do contrato, é parte cujo interesse é diretamente afetado pelo desfecho da demanda. Configura-se litisconsórcio necessário (art. 114 CPC), pois a sentença de procedência pode afetar diretamente a esfera jurídica da empresa B. O juiz não pode incluir de ofício partes (art. 115, parágrafo único, CPC), mas deve intimar a autora para emendar a inicial.",
  },
  {
    id: 45,
    materia: "Direito Processual Civil",
    dificuldade: "Médio",
    enunciado: "Sobre a ação monitória, assinale a afirmativa correta.",
    opcoes: [
      "Não é admissível a ação monitória em face da Fazenda Pública.",
      "A ação monitória pode ter como objeto o cumprimento do direito de exigir o adimplemento de obrigação de fazer.",
      "A citação por edital não é admitida em sede de ação monitória.",
      "Sendo evidente o direito do autor de receber um crédito, o juiz deferirá a expedição de mandado de pagamento, concedendo ao réu o prazo de três dias para o cumprimento.",
      "Cabe agravo de instrumento contra o pronunciamento jurisdicional que acolhe ou rejeita os embargos monitórios.",
    ],
    gabarito: "B",
    fonte: "ENAM 2024",
    comentario:
      "O art. 700 do CPC prevê que a ação monitória pode ter por objeto o pagamento de quantia em dinheiro, a entrega de coisa fungível ou infungível ou de bem móvel ou imóvel, e o adimplemento de obrigação de fazer ou de não fazer. Portanto, é cabível para obrigação de fazer. A Fazenda Pública pode ser ré em monitória (Súmula 339 STJ revogada; art. 701 CPC admite); a citação por edital é cabível; o prazo é de 15 dias; e os embargos monitórios são julgados por sentença, recorrível por apelação.",
  },
  {
    id: 46,
    materia: "Direito Processual Civil",
    dificuldade: "Difícil",
    enunciado:
      "O órgão do Ministério Público, em ação envolvendo menor absolutamente incapaz, protocolizou embargos de declaração sete dias úteis depois de sua intimação pessoal da sentença, alegando omissão quanto ao pedido de tutela provisória não apreciado na sentença de procedência. É correto afirmar que os embargos de declaração manejados pelo órgão do Ministério Público",
    opcoes: [
      "não merecem ser conhecidos, haja vista a sua intempestividade.",
      "não merecem ser conhecidos, haja vista a sua ilegitimidade recursal.",
      "não merecem ser conhecidos, haja vista a falta de interesse recursal.",
      "merecem ser conhecidos, porém desprovidos, já que não ficou configurado o vício da omissão.",
      "merecem ser conhecidos e providos, para o fim de se apreciar e deferir o requerimento de tutela provisória.",
    ],
    gabarito: "E",
    fonte: "ENAM 2024",
    comentario:
      "O prazo para embargos de declaração é de 5 dias úteis para o MP (art. 1.023 c/c art. 183 do CPC — o dobro do prazo comum de 5 dias = 10 dias, mas o prazo dos embargos é fixo em 5 dias para qualquer parte, sem dobro). Contudo, o art. 180 CPC confere ao MP prazo em dobro, logo o MP tem 10 dias úteis. O MP interpôs os embargos em 7 dias úteis, portanto tempestivamente. A omissão quanto à tutela provisória requerida e não apreciada configura vício de omissão, devendo os embargos ser providos.",
  },
  {
    id: 47,
    materia: "Direito Processual Civil",
    dificuldade: "Médio",
    enunciado:
      "Pedro requereu a instauração de incidente de desconsideração da personalidade jurídica no curso de ação ordinária (fase instrutória), após identificar atos ilícitos praticados pelos sócios da Carros Bonitos Ltda. em detrimento do patrimônio social. Sobre o caso, assinale a afirmativa correta.",
    opcoes: [
      "O requerimento deve ser indeferido, pois a instauração do incidente é cabível apenas no cumprimento de sentença e na execução fundada em título executivo extrajudicial.",
      "Admitido o incidente pelo juiz, não haverá suspensão do processo, que poderá prosseguir de forma simultânea.",
      "O incidente será resolvido por decisão interlocutória, impugnável por meio de recurso de apelação.",
      "O pedido de Pedro não impediria que o juiz, de ofício, instaurasse o incidente de desconsideração da personalidade jurídica.",
      "Instaurado o incidente, o sócio será citado para manifestar-se e requerer as provas cabíveis no prazo de 15 (quinze) dias.",
    ],
    gabarito: "E",
    fonte: "ENAM 2024",
    comentario:
      "O art. 135 do CPC estabelece que instaurado o incidente de desconsideração da personalidade jurídica, o sócio ou a pessoa jurídica será citado para manifestar-se e requerer as provas cabíveis no prazo de 15 dias. As demais assertivas estão incorretas: o incidente é cabível em qualquer fase processual (art. 134 CPC); há suspensão do processo (art. 134, §3º); é resolvido por decisão interlocutória atacável por agravo; e o juiz não pode instaurar de ofício.",
  },
  {
    id: 48,
    materia: "Direito Processual Civil",
    dificuldade: "Difícil",
    enunciado:
      "Karina formulou tutela cautelar antecedente (sequestro de dois automóveis). O juízo deferiu a tutela em 20/05/2023. O sequestro do 1º automóvel foi realizado em 30/05/2023 e do 2º em 20/09/2023. Karina formulou o pedido principal em 25/09/2023. Sobre o caso narrado, assinale a afirmativa correta.",
    opcoes: [
      "No momento da formulação do pedido principal, já havia sido ultrapassado o prazo previsto no CPC, de modo que a tutela cautelar deverá perder sua eficácia e o processo ser extinto sem exame do mérito.",
      "Karina não pode aditar a causa de pedir no momento da formulação do pedido principal.",
      "A formulação do pedido principal prescinde do adiantamento de novas custas processuais.",
      "O prazo para formulação do pedido principal tem início na data de concessão da tutela cautelar.",
      "A ausência de contestação do pedido não induz à presunção de veracidade dos fatos alegados pela autora.",
    ],
    gabarito: "C",
    fonte: "ENAM 2024",
    comentario:
      "O art. 308, caput, do CPC dispõe que, dentro do prazo de 30 dias da efetivação da tutela cautelar, o pedido principal deve ser formulado nos mesmos autos, sem necessidade de novas custas processuais. O prazo começa da última efetivação — o 2º automóvel foi sequestrado em 20/09/2023, e o pedido principal foi formulado em 25/09/2023, dentro do prazo de 30 dias.",
  },
  {
    id: 49,
    materia: "Direito Processual Civil",
    dificuldade: "Médio",
    enunciado:
      "Gerson (residente no Rio de Janeiro-RJ) ajuizou ação reivindicatória contra Denise (residente em Maricá-RJ) sobre imóvel localizado em Saquarema-RJ. A demanda foi distribuída à 1ª Vara Cível de Maricá. Ao realizar a admissibilidade da petição inicial, caberá ao juiz",
    opcoes: [
      "determinar a citação de Denise, por se tratar de juízo competente para apreciar a causa.",
      "declinar a competência em favor de um dos Juízos da Comarca de Saquarema, que é o juízo competente para apreciar a pretensão reivindicatória.",
      "determinar a citação de Denise e, caso não haja manifestação em sede de contestação, haverá a prorrogação da competência do Juízo de Maricá, por se tratar de incompetência relativa.",
      "suscitar conflito negativo de competência, remetendo os autos ao Tribunal de Justiça para que defina qual é a Comarca competente.",
      "declinar a competência em favor de um dos Juízos Cíveis da Comarca do Rio de Janeiro-RJ, que é o juízo competente.",
    ],
    gabarito: "B",
    fonte: "ENAM 2024",
    comentario:
      "O art. 47 do CPC estabelece que as ações fundadas em direito real sobre imóveis devem ser propostas no foro de situação da coisa (foro real). Trata-se de competência absoluta, que pode e deve ser reconhecida de ofício pelo juiz a qualquer tempo. O imóvel está em Saquarema, portanto o juiz de Maricá deve declinar de ofício.",
  },
  {
    id: 50,
    materia: "Direito Processual Civil",
    dificuldade: "Difícil",
    enunciado:
      "Aristóteles é citado em ação movida por Sócrates para demolição parcial de imóvel. No dia seguinte à citação, Aristóteles vende o imóvel a Heráclito. Aristóteles comunica o negócio ao juízo, juntando escritura em que o comprador assume os riscos da aquisição e o ônus de contestar. Sobre a hipótese narrada, assinale a afirmativa correta.",
    opcoes: [
      "Caso não ocorra o ingresso voluntário de Heráclito, o juiz deve intimar o autor para, sob pena de extinção, integrar o comprador ao polo passivo.",
      "Heráclito pode imediatamente assumir o polo passivo, em sucessão ao réu originário, mesmo contra a vontade do autor.",
      "Sócrates pode, não obstante a escritura, recusar o ingresso de Heráclito como sucessor do réu originário, e, ainda assim, a eventual sentença de procedência será oponível a este.",
      "O litisconsórcio será facultativo, mas, por força dos limites subjetivos da coisa julgada, se não houver o ingresso do comprador, a eventual sentença não será oponível a este.",
      "A posição do comprador será a de assistente simples, e ainda que o autor concorde, o juiz não pode deferir a sucessão de réu depois da citação.",
    ],
    gabarito: "C",
    fonte: "ENAM 2024",
    comentario:
      "O art. 109 do CPC trata da alienação da coisa ou do direito litigioso. O §1º prevê que o adquirente ou cessionário não poderá ingressar em juízo, salvo se o alienante concordar e a parte contrária (Sócrates) também concordar. Se Sócrates recusar, Heráclito não entra, mas a sentença lhe será oponível (art. 109, §3º), pois assumiu a coisa litigiosa ciente do processo.",
  },
  // ─────────────────────────────────────────────────────────────
  // DIREITO CIVIL (51–62)
  // ─────────────────────────────────────────────────────────────
  {
    id: 51,
    materia: "Direito Civil",
    dificuldade: "Fácil",
    enunciado:
      "Felipe, brasileiro nato, casado, estudante, 16 anos de idade; Renata, brasileira nata, solteira, servidora pública efetiva, 17 anos de idade; e Valter, brasileiro naturalizado, viúvo, aposentado, 83 anos de idade, resolveram constituir uma associação. Entre os três, a capacidade para exercer pessoalmente os atos da vida civil encontra-se em",
    opcoes: [
      "Valter, apenas.",
      "Felipe e Valter, apenas.",
      "Renata e Valter, apenas.",
      "Felipe e Renata, apenas.",
      "Felipe, Renata e Valter.",
    ],
    gabarito: "E",
    fonte: "ENAM 2024",
    comentario:
      "Felipe (16 anos, casado): o casamento é causa de emancipação (art. 5º, parágrafo único, II, CC). Renata (17 anos, servidora pública efetiva): o emprego público é causa de emancipação (art. 5º, parágrafo único, III, CC). Valter (83 anos): plenamente capaz, pois a idade avançada, por si só, não implica incapacidade. Todos os três estão emancipados ou são plenamente capazes.",
  },
  {
    id: 52,
    materia: "Direito Civil",
    dificuldade: "Difícil",
    enunciado:
      "Acerca das preferências creditórias do Código Civil, o STJ vem exercendo releitura acerca da posição de determinados créditos em concurso de credores. Nesse sentido, assinale a afirmativa correta.",
    opcoes: [
      "O crédito hipotecário prefere àquele decorrente do IPTU e este, ao condominial.",
      "O crédito decorrente do IPTU prefere ao crédito hipotecário e este, ao condominial.",
      "O crédito hipotecário prefere ao crédito de IPTU e este, ao condominial.",
      "O crédito condominial prefere ao crédito de IPTU e este, ao hipotecário.",
      "O crédito decorrente do IPTU prefere ao crédito condominial e este, ao hipotecário.",
    ],
    gabarito: "D",
    fonte: "ENAM 2024",
    comentario:
      "O STJ firmou, em sede de recurso repetitivo (REsp 1.914.045), que o crédito condominial (obrigação propter rem) prefere ao IPTU, que por sua vez prefere ao crédito hipotecário. A lógica é que as contribuições condominiais estão intimamente ligadas à conservação do bem e garantem sua própria existência, e os créditos tributários têm preferência sobre créditos privados (hipoteca).",
  },
  {
    id: 53,
    materia: "Direito Civil",
    dificuldade: "Médio",
    enunciado:
      "Mário instituiu tomada de decisão apoiada com seus irmãos João e Rita. Rita aconselhou que fosse contratada a locação de imóvel de Mário (por aluguel considerado baixo por João). Mário acolheu o conselho de Rita e decidiu realizar a contratação. João propôs medida judicial para obstar a locação. Acerca do pleito de João, é correto afirmar que o juízo deve",
    opcoes: [
      "respeitar a decisão da maioria e não acolher o pleito.",
      "acolher o pedido ante a ausência de unanimidade dos apoiadores.",
      "acolher o pedido, pois a decisão apoiada depende de homologação judicial.",
      "não conhecer do pedido, pois a tomada de decisão apoiada requer forma pública.",
      "não acolher o pleito, visto que não houve autorização judicial para a tomada de decisão apoiada.",
    ],
    gabarito: "A",
    fonte: "ENAM 2024",
    comentario:
      "Na tomada de decisão apoiada (art. 1.783-A do CC), a decisão final é sempre de Mário (o apoiado), que pode decidir mesmo contra a opinião de um dos apoiadores. A unanimidade dos apoiadores não é exigida. O papel dos apoiadores é auxiliar, não vetar. Assim, a decisão de Mário de acolher o conselho de Rita deve ser respeitada, não cabendo ao juiz substituir sua vontade.",
  },
  {
    id: 54,
    materia: "Direito Civil",
    dificuldade: "Médio",
    enunciado:
      "A ARKT S.A. celebrou contrato com a CLNG Ltda. para serviços de limpeza com prazo de 5 anos. A CLNG deixou de limpar as vidraças por 3 semanas consecutivas alegando força maior (indisponibilidade de andaimes). O contrato continha cláusula resolutiva expressa para esse inadimplemento. Se a ARKT quiser pôr fim ao contrato,",
    opcoes: [
      "deverá ajuizar ação judicial de rescisão do contrato, para desconstituir o negócio jurídico firmado entre as partes, sem efeitos retroativos.",
      "não poderá fazê-lo, visto que a exigibilidade da obrigação de limpar as vidraças externas está suspensa por força maior, que causa impossibilidade temporária.",
      "bastará notificar extrajudicialmente a CLNG de sua decisão, fundada na cláusula resolutiva expressa do contrato que inclui o inadimplemento da obrigação de limpar as vidraças externas.",
      "deverá ajuizar ação judicial declaratória, que reconhecerá a extinção automática do negócio desde a primeira semana de não cumprimento.",
      "não precisará adotar qualquer providência, pois o contrato foi extinto de pleno direito quando a CLNG descumpriu a obrigação.",
    ],
    gabarito: "B",
    fonte: "ENAM 2024",
    comentario:
      "A força maior (indisponibilidade de andaimes por fato alheio à CLNG) suspende a exigibilidade da obrigação enquanto durar o impedimento (art. 393 CC). O inadimplemento não configura descumprimento culposo quando decorrente de força maior ou caso fortuito. Assim, a cláusula resolutiva expressa não pode ser acionada pela ARKT enquanto persistir a causa de força maior, pois não há inadimplemento juridicamente relevante.",
  },
  {
    id: 55,
    materia: "Direito Civil",
    dificuldade: "Médio",
    enunciado:
      "Frederico e Guilherme são proprietários de terrenos vizinhos em região rural. Sobre as árvores e seus frutos entre os terrenos, assinale a afirmativa correta.",
    opcoes: [
      "Se Guilherme plantar em seu próprio terreno usando sementes furtadas de Frederico, perderá, em benefício deste, a parte do imóvel em que as árvores florescerem.",
      "Se os frutos da árvore cujo tronco está no terreno de Frederico caírem no solo do terreno de Guilherme, Frederico poderá ingressar no imóvel para recolhê-los.",
      "Caso Frederico plante uma pitangueira na parte do terreno que pertence a Guilherme, perderá a árvore em proveito deste, sem direito a ressarcimento, ainda que tenha agido de boa-fé.",
      "Caso a árvore cujo tronco estiver precisamente na linha divisória se enraizar por ambos os terrenos, presume-se que a planta se tornará objeto de condomínio entre Frederico e Guilherme.",
      "Se os ramos da árvore, cujo tronco está situado no terreno de Frederico, atravessarem o plano vertical divisório e entrarem no terreno de Guilherme, este precisará de prévia autorização judicial para cortá-los.",
    ],
    gabarito: "D",
    fonte: "ENAM 2024",
    comentario:
      "O art. 1.282 do CC estabelece que a árvore cujo tronco estiver na linha divisória presume-se pertencer em comum aos donos dos prédios confinantes. Logo, configura-se condomínio presumido entre Frederico e Guilherme. As demais assertivas estão incorretas: sementes furtadas não geram perda do imóvel (A); frutos caídos em terreno alheio pertencem ao dono do terreno (B); plantar de boa-fé em terreno alheio gera direito a ressarcimento (C); ramos podem ser cortados sem autorização judicial (E).",
  },
  {
    id: 56,
    materia: "Direito Civil",
    dificuldade: "Médio",
    enunciado:
      "Cecília, 30 anos, e Edgar, 35 anos, celebraram pacto antenupcial para adotar o regime da participação final nos aquestos. Antes da chegada do mês da celebração do casamento, houve uma briga e o casal decidiu romper por diferenças irreconciliáveis. Nesse caso, o pacto antenupcial deve ser considerado",
    opcoes: ["nulo.", "ineficaz.", "anulável.", "revogado.", "inexistente."],
    gabarito: "B",
    fonte: "ENAM 2024",
    comentario:
      "O pacto antenupcial é negócio jurídico válido (preenche os requisitos de validade), mas sua eficácia está condicionada à realização do casamento (art. 1.653 CC). Não ocorrendo o casamento, o pacto não produz efeitos — é ineficaz, mas não inválido (nulo ou anulável). Trata-se de ineficácia por não implemento da condição suspensiva implícita.",
  },
  {
    id: 57,
    materia: "Direito Civil",
    dificuldade: "Médio",
    enunciado:
      "Jorge e Ana são locadores; Carlos é locatário. No contrato há cláusula estipulando prazo de 5 anos para a pretensão de cobrança do aluguel. Carlos contraiu matrimônio com Ana (uma das locadoras) durante a locação. Após o divórcio de Ana e Jorge, Jorge pretende cobrar o último mês de aluguel que Carlos deixou de pagar. Sobre a pretensão de Jorge, assinale a afirmativa correta.",
    opcoes: [
      "Encontra-se prescrita, pois o prazo de três anos, além de não poder ser alterado, já se esgotou.",
      "É exigível, uma vez que o prazo decadencial de cinco anos ainda não expirou.",
      "não é mais exigível, pois o prazo de cinco anos previsto no contrato já se esgotou.",
      "Decaiu, pois o prazo de cinco anos previsto no contrato já se esgotou.",
      "Permanece exigível, pois o casamento de Ana é motivo de suspensão da prescrição.",
    ],
    gabarito: "E",
    fonte: "ENAM 2024",
    comentario:
      "O art. 197, I, do CC estabelece que não corre a prescrição entre cônjuges na constância da sociedade conjugal. Quando Carlos se casou com Ana (credora), o prazo prescricional ficou suspenso em relação a ela (e aos cocredores, por solidariedade). Após o divórcio, a prescrição retoma seu curso. Como o prazo de 5 anos estipulado contratualmente é superior ao prazo legal de 3 anos (art. 206, §3º, I, CC — aluguel), e houve suspensão pelo casamento, a pretensão de Jorge permanece exigível.",
  },
  {
    id: 58,
    materia: "Direito Civil",
    dificuldade: "Médio",
    enunciado:
      "A Farmácia A e a Drogaria B mantêm conta corrente e pactuaram que cada saldo devedor não pago seria independente dos demais. Nos últimos dois meses, a Drogaria B não pagou dois débitos. Mesmo após o vencimento da segunda dívida, entregou valor suficiente para quitar um dos débitos e parte do outro, sem oposição da Farmácia. Ante a ausência de oposição da Farmácia A, é correto dizer que o valor entregue",
    opcoes: [
      "quitou o débito mais antigo.",
      "nada quitou, ante a ausência de recibo.",
      "quitou o débito mais oneroso.",
      "quitou ambos os débitos.",
      "nada quitou, pois o valor não foi integral.",
    ],
    gabarito: "C",
    fonte: "ENAM 2024",
    comentario:
      "O art. 354 do CC estabelece que, havendo capital e juros, o pagamento imputar-se-á primeiro nos juros vencidos e depois no capital. Quanto a duas dívidas, se o devedor não fizer a indicação e o credor não se opuser, aplica-se o art. 355 do CC: presume-se o pagamento imputado à dívida mais onerosa. Como as dívidas têm juros diferentes (0,5% no primeiro mês e 1% nos subsequentes), a mais onerosa é a mais antiga (que já acumula o 1% de juros).",
  },
  {
    id: 59,
    materia: "Direito Civil",
    dificuldade: "Médio",
    enunciado:
      "Artur construiu no lote vizinho (lote 6 de Raquel) por equívoco escusável. O investimento foi três vezes superior ao valor de cada lote. Artur propôs a aquisição do lote 6, que foi rejeitada. Ante a ausência de acordo, Artur",
    opcoes: [
      "fará jus à aquisição do lote 6 pelo valor de aquisição pago por Raquel.",
      "deverá devolver o imóvel e receber a indenização fixada judicialmente.",
      "perderá o que construiu em proveito de Raquel.",
      "fará jus à aquisição do lote 6, devendo a indenização ser fixada judicialmente.",
      "deverá devolver o imóvel e receber metade do valor gasto na construção.",
    ],
    gabarito: "D",
    fonte: "ENAM 2024",
    comentario:
      "O art. 1.255, parágrafo único, do CC prevê que, se a construção ou plantação exceder consideravelmente o valor do terreno, aquele que, de boa-fé, plantou ou construiu adquirirá a propriedade do solo, mediante pagamento da indenização fixada judicialmente, se não houver acordo. Como o investimento é três vezes superior ao valor do lote, Artur tem direito à aquisição forçada do lote 6, com indenização a ser fixada judicialmente.",
  },
  {
    id: 60,
    materia: "Direito Civil",
    dificuldade: "Médio",
    enunciado:
      "Considerando as disposições do Estatuto da Pessoa Idosa e do ECA, analise: I. Em todo atendimento de saúde, os maiores de 80 anos terão preferência especial sobre as demais pessoas idosas, exceto em caso de emergência. II. O reconhecimento do estado de filiação é direito personalíssimo, indisponível e imprescritível, podendo ser exercitado contra os pais ou seus herdeiros, sem qualquer restrição, observado o segredo de Justiça. III. É vedada a adoção por procuração, ressalvadas situações especiais em nome do melhor interesse da criança. Está correto apenas o que se afirma em",
    opcoes: ["I.", "II.", "III.", "I e II.", "II e III."],
    gabarito: "B",
    fonte: "ENAM 2024",
    comentario:
      "I está incorreta: o Estatuto do Idoso prevê preferência para maiores de 80 anos inclusive em caso de emergência (Lei 10.741/2003, art. 15, §7º). II está correta: art. 27 do ECA — direito personalíssimo, indisponível e imprescritível. III está incorreta: a adoção por procuração é vedada de forma absoluta pelo art. 39, §2º, do ECA, sem qualquer ressalva.",
  },
  // ─────────────────────────────────────────────────────────────
  // DIREITO CIVIL – cont. (61–62)
  // ─────────────────────────────────────────────────────────────
  {
    id: 61,
    materia: "Direito Civil",
    dificuldade: "Médio",
    enunciado:
      "Soraia prometeu R$1.000,00 a quem conseguisse restaurar sua dissertação em 7 dias. Gustavo obteve a solução primeiro, no 5º dia. Marcelo e Caio conseguiram solucionar, respectivamente, no 6º e no 7º dia, e também procuraram Soraia para receber a quantia. Sobre a situação hipotética narrada, assinale a afirmativa correta.",
    opcoes: [
      "Gustavo, Marcelo e Caio devem dividir a quantia prometida, pois todos os três executaram a tarefa no prazo fixado pela promitente.",
      "Gustavo deve receber a quantia prometida, pois foi quem primeiro executou a tarefa.",
      "Por ser negócio jurídico unilateral, Soraia deve indicar quem deve receber a quantia, dado que os três executaram a tarefa no prazo.",
      "Soraia deve pagar R$1.000,00 a cada um dos três.",
      "Gustavo deverá receber metade da quantia, por ter executado a tarefa primeiro, e Marcelo e Caio devem dividir a outra metade.",
    ],
    gabarito: "B",
    fonte: "ENAM 2024",
    comentario:
      "O art. 857 do CC dispõe que, se a promessa foi feita sem indicação de prazo, e mais de uma pessoa realizar a tarefa no prazo indicado, somente aquele que primeiro a executou terá direito à recompensa. Gustavo foi o primeiro a executar a tarefa (5º dia), portanto tem direito exclusivo aos R$1.000,00.",
  },
  {
    id: 62,
    materia: "Direito Civil",
    dificuldade: "Médio",
    enunciado:
      "Acerca dos modos de aquisição de bens imóveis, analise: I. O negócio jurídico de alienação do bem não possui eficácia real, portanto não transfere a propriedade do imóvel. Nada obstante, o negócio é existente, válido e eficaz pelo simples acordo de vontade, produzindo eficácia obrigacional. II. A transferência da coisa imóvel somente ocorre com o seu registro no Registro de Imóveis competente, cuja validade prescinde do negócio jurídico celebrado. Assim, no Direito brasileiro, o registro firma presunção iuris et de iure da propriedade. III. A usucapião configura aquisição originária típica, pela qual a propriedade é adquirida sem o concurso do proprietário anterior, embora o adquirente por usucapião suceda juridicamente ao proprietário. Está correto o que se afirma em",
    opcoes: [
      "I, apenas.",
      "I e II, apenas.",
      "I e III, apenas.",
      "II e III, apenas.",
      "I, II e III.",
    ],
    gabarito: "A",
    fonte: "ENAM 2024",
    comentario:
      "I está correta: no sistema brasileiro, o contrato de compra e venda não transfere a propriedade imóvel — apenas gera obrigação; a transferência ocorre pelo registro (art. 1.245 CC). II está incorreta: o registro presume a propriedade relativa (iuris tantum), não absoluta (iuris et de iure); e depende de negócio jurídico válido. III está incorreta: na usucapião, a aquisição é originária, sem sucessão ao proprietário anterior — é exatamente o oposto de aquisição indireta.",
  },
  // ─────────────────────────────────────────────────────────────
  // DIREITO EMPRESARIAL (63–68)
  // ─────────────────────────────────────────────────────────────
  {
    id: 63,
    materia: "Direito Empresarial",
    dificuldade: "Médio",
    enunciado:
      "Sobre a participação dos sócios nos lucros de sociedade (art. 981 CC), analise: I. A cláusula contratual que exclua qualquer sócio de participar dos lucros não torna nulo o contrato, apenas a estipulação. II. O contrato social pode estipular que o sócio participará dos lucros em proporção diversa das respectivas quotas no capital. III. Admitindo o tipo societário, cuja contribuição consista em serviços, o sócio participará dos lucros na proporção igual à que for estipulada a favor do sócio de menor participação no capital. Está correto o que se afirma em",
    opcoes: [
      "II, apenas.",
      "I e II, apenas.",
      "I e III, apenas.",
      "II e III, apenas.",
      "I, II e III.",
    ],
    gabarito: "E",
    fonte: "ENAM 2024",
    comentario:
      "I está correta: art. 1.008 CC — é nula a estipulação, mas não o contrato (nulidade parcial). II está correta: art. 1.007 CC — o contrato pode estabelecer proporção diferente das quotas. III está correta: art. 1.007, parágrafo único, CC — o sócio de serviços participa dos lucros na proporção do sócio de menor participação no capital, salvo estipulação contratual diversa. Todas as assertivas estão corretas.",
  },
  {
    id: 64,
    materia: "Direito Empresarial",
    dificuldade: "Médio",
    enunciado:
      "Sobre o princípio do acesso à Justiça previsto na Lei Complementar nº 123/2006 (Estatuto Nacional da ME e EPP), analise: I. É facultado ao empregador de ME ou EPP fazer-se substituir ou representar perante a Justiça do Trabalho por terceiros que conheçam dos fatos, ainda que sem vínculo trabalhista ou societário. II. As MEs e EPPs são admitidas a propor ação perante o Juizado Especial Cível, assim como as pessoas físicas capazes, excluídos os cessionários de direito de pessoas jurídicas, e podem ser autores no Juizado Especial Federal Cível. III. O Poder Judiciário e o Ministério da Justiça implementarão medidas para disseminar o tratamento diferenciado e favorecido às MEs e EPPs. Está correto o que se afirma em",
    opcoes: [
      "I, apenas.",
      "I e II, apenas.",
      "I e III, apenas.",
      "II e III, apenas.",
      "I, II e III.",
    ],
    gabarito: "E",
    fonte: "ENAM 2024",
    comentario:
      "Todas as assertivas estão corretas: I – art. 74 da LC 123/2006; II – art. 74, caput, da LC 123/2006 (ME e EPP podem propor ação no JEC como autoras, vedada apenas a participação como rés no JEC federal); III – art. 75 da LC 123/2006.",
  },
  {
    id: 65,
    materia: "Direito Empresarial",
    dificuldade: "Fácil",
    enunciado:
      "Helena, em 5 de março de 2024, completou 16 anos e foi emancipada. Almeja ingressar no ramo de venda de eletrônicos. Acerca da capacidade de Helena para exercer a atividade empresária, assinale a afirmativa correta.",
    opcoes: [
      "Helena poderá exercer a atividade empresária, pois está em pleno gozo da capacidade civil.",
      "Helena não poderá exercer atividade empresária, porque sua idade não permite o exercício de administração da empresa.",
      "Helena não poderá exercer atividade empresária, considerando que é menor de idade e não está em pleno gozo da capacidade civil.",
      "Helena poderá exercer a atividade empresária, desde que autorizada de forma específica pelos seus responsáveis legais.",
      "Helena não poderá exercer atividade empresária de forma independente, mas poderá exercê-la, desde que devidamente assistida por seus representantes legais.",
    ],
    gabarito: "A",
    fonte: "ENAM 2024",
    comentario:
      "A emancipação confere plena capacidade civil (art. 5º, parágrafo único, CC). Helena foi emancipada ao completar 16 anos, portanto está em pleno gozo da capacidade civil e pode exercer atividade empresária de forma independente, sem necessidade de assistência ou autorização.",
  },
  {
    id: 66,
    materia: "Direito Empresarial",
    dificuldade: "Médio",
    enunciado:
      "Habermas e Dworkin constituíram sociedade limitada com 50% das quotas cada. No quarto ano, Dworkin (sócio administrador) faleceu. Sobre a continuidade da sociedade, analise: I. O falecimento de Dworkin acarreta, obrigatoriamente, a dissolução total da sociedade, com a liquidação de seus ativos. II. O falecimento de Dworkin acarreta, obrigatoriamente, a dissolução parcial da sociedade, com o pagamento dos haveres ao espólio. III. O falecimento de Dworkin não necessariamente importará na dissolução total da sociedade, seja porque a participação é atribuída por sucessão causa mortis a um herdeiro ou legatário, seja porque o sócio remanescente pode explorar a atividade individualmente de forma temporária. Está correto o que se afirma em",
    opcoes: [
      "I, apenas.",
      "II, apenas.",
      "III, apenas.",
      "I e II, apenas.",
      "I e III, apenas.",
    ],
    gabarito: "C",
    fonte: "ENAM 2024",
    comentario:
      "Nos termos do art. 1.028 e 1.033 do CC, o falecimento de um sócio não implica necessariamente a dissolução total da sociedade. O contrato social pode prever a continuidade com os herdeiros, ou o sócio sobrevivente pode continuar a exploração individual temporariamente (EIRELI/SLU) até regularização. I e II estão incorretas por afirmarem que a dissolução seria 'obrigatória'.",
  },
  {
    id: 67,
    materia: "Direito Empresarial",
    dificuldade: "Médio",
    enunciado:
      "Foi decretada a falência do grupo econômico XPTO e o Administrador Judicial ajuizou incidente de desconsideração da personalidade jurídica após identificar inconsistências na contabilidade das falidas. A respeito da desconsideração da personalidade jurídica, assinale a afirmativa correta.",
    opcoes: [
      "A mera existência de grupo econômico enseja a desconsideração da personalidade jurídica.",
      "A mera identificação de inconsistências na contabilidade das falidas enseja a desconsideração da personalidade jurídica.",
      "A desconsideração da personalidade jurídica é cabível quando não forem localizados ativos para pagamento dos credores.",
      "A falência da empresa caracteriza, por si só, exercício abusivo e ilícito da atividade empresarial e dá ensejo à desconsideração da personalidade jurídica.",
      "A desconsideração da personalidade jurídica poderá ser decretada caso fique caracterizada a ausência de separação de fato entre o patrimônio das sociedades e o de seus sócios.",
    ],
    gabarito: "E",
    fonte: "ENAM 2024",
    comentario:
      "O art. 50 do CC e o art. 82-A da Lei 11.101/2005 estabelecem que a desconsideração da personalidade jurídica exige o desvio de finalidade ou a confusão patrimonial (ausência de separação de fato entre o patrimônio da sociedade e o dos sócios). A mera existência de grupo econômico, inconsistências contábeis ou a própria falência, por si sós, não bastam.",
  },
  {
    id: 68,
    materia: "Direito Empresarial",
    dificuldade: "Médio",
    enunciado:
      "Uma sociedade empresária de telefonia sofreu ataque cibernético levando ao vazamento dos dados pessoais de todos os seus usuários. Usuários acionaram o Judiciário alegando que estavam sendo importunados com ligações de telemarketing após o vazamento. De acordo com o entendimento do STJ quanto ao tema, analise: I. O vazamento de dados pessoais não tem o condão, por si só, de gerar dano moral indenizável, sendo necessária prova efetiva do dano ocorrido. II. O vazamento de dados pessoais gera para o prejudicado direito à indenização, uma vez que o dano moral, em tais casos, é presumido, podendo a empresa fazer prova de que não houve prejuízo ao titular. III. O vazamento de qualquer tipo de dado sem autorização do usuário configura violação dos direitos à intimidade e à privacidade e enseja a condenação ao pagamento de danos morais. Está correto o que se afirma em",
    opcoes: [
      "I, apenas.",
      "I e II, apenas.",
      "I e III, apenas.",
      "II e III, apenas.",
      "I, II e III.",
    ],
    gabarito: "A",
    fonte: "ENAM 2024",
    comentario:
      "O STJ (REsp 2.130.619 e outros) firmou entendimento de que o simples vazamento de dados pessoais, por si só, não configura dano moral in re ipsa (presumido). É necessária a prova efetiva do dano. O titular dos dados deve demonstrar o prejuízo concreto sofrido. II está incorreta pois inverte o ônus: o dano não é presumido. III está incorreta pois não é qualquer tipo de dado — há nuances sobre a natureza dos dados vazados.",
  },
  // ─────────────────────────────────────────────────────────────
  // DIREITO PENAL (69–80)
  // ─────────────────────────────────────────────────────────────
  {
    id: 69,
    materia: "Direito Penal",
    dificuldade: "Médio",
    enunciado:
      "Pierre, cidadão estrangeiro, praticou delito de estupro contra a brasileira Marina, maior e capaz, em Estado estrangeiro onde há incriminação da conduta. Autor e vítima retornaram ao Brasil, e o MP ajuizou ação penal pública incondicionada. Sobre o caso narrado, assinale a afirmativa correta.",
    opcoes: [
      "Há o preenchimento das condições de aplicação da lei penal brasileira ao fato ocorrido no exterior; porém, a ação penal depende de representação da vítima.",
      "Há o preenchimento integral das condições de aplicação da lei penal brasileira ao fato ocorrido no exterior, sendo viável a responsabilização do autor do fato.",
      "Não há o preenchimento das condições de aplicação da lei penal brasileira, pois ausente requisição do Ministro da Justiça.",
      "Não há o preenchimento das condições de aplicação da lei penal brasileira, pois o autor do fato é estrangeiro, e a nacionalidade da vítima é indiferente à extraterritorialidade da lei penal brasileira.",
      "A aplicação da lei penal brasileira ao fato independe de qualquer condição, por se tratar de crime praticado mediante violência.",
    ],
    gabarito: "B",
    fonte: "ENAM 2024",
    comentario:
      "O art. 7º, II, 'b', do CP prevê extraterritorialidade condicionada para crimes praticados por estrangeiro contra brasileiro no exterior. As condições do art. 7º, §2º: entrar no Brasil (✓), ser o fato punível no país onde foi praticado (✓), e o MP ter iniciado a persecução (✓ — não há exigência de representação para o delito de estupro após a Lei 13.718/2018, que tornou a ação penal pública incondicionada). Todos os requisitos estão preenchidos.",
  },
  {
    id: 70,
    materia: "Direito Penal",
    dificuldade: "Difícil",
    enunciado:
      "Em 2024, Guilherme, Américo, Lucas, Rogério e Vladimir praticaram um crime. Assinale a opção que indica qual deles é tecnicamente primário (não reincidente).",
    opcoes: [
      "Guilherme, enquanto policial militar, foi definitivamente condenado por corrupção passiva prevista no Código Penal Militar e terminou de cumprir a pena no ano de 2023.",
      "Américo, na condição de ocupante de cargo político, praticou crime de peculato, tendo sido definitivamente condenado em 2023, sendo que ainda não terminou de cumprir as penas restritivas de direito.",
      "Lucas foi definitivamente condenado em 2015, tendo sua pena sido extinta em 2020, pela concessão de indulto pleno. Em 2022, Lucas obteve sua reabilitação.",
      "Rogério foi definitivamente condenado em 2023, mas, após o trânsito em julgado, o Juiz reconheceu a ocorrência da prescrição da pretensão punitiva na modalidade retroativa.",
      "Vladimir foi definitivamente condenado na Espanha, por tráfico de drogas, a uma pena de 6 anos de reclusão, em 2017; porém, ainda não cumpriu a pena porque se evadiu para o Brasil.",
    ],
    gabarito: "D",
    fonte: "ENAM 2024",
    comentario:
      "Rogério é tecnicamente primário pois, embora tenha sido condenado, o reconhecimento da prescrição da pretensão punitiva retroativa extingue a punibilidade antes mesmo do trânsito em julgado definitivo, como se a condenação não existisse para fins de reincidência. Guilherme (A): condenação anterior com pena cumprida em 2023 = reincidente em 2024. Américo (B): condenação anterior = reincidente. Lucas (C): reabilitação não apaga a reincidência em nova infração; o prazo da reabilitação não superou 5 anos. Vladimir (D): condenação no estrangeiro gera reincidência (art. 63 CP).",
  },
  {
    id: 71,
    materia: "Direito Penal",
    dificuldade: "Médio",
    enunciado:
      "Ricardo, com intenção de ter um carro, apresentou-se como manobrista e iludiu Carolina, que lhe entregou as chaves do veículo pensando que seria estacionado em segurança. Em seguida, Ricardo se apossou do veículo de Carolina. Assinale a opção que indica, corretamente, o crime praticado por Ricardo.",
    opcoes: [
      "Estelionato.",
      "Apropriação indébita.",
      "Furto mediante fraude.",
      "Furto mediante abuso de confiança.",
      "Apropriação de coisa havida por erro.",
    ],
    gabarito: "C",
    fonte: "ENAM 2024",
    comentario:
      "No furto mediante fraude (art. 155, §4º, II, CP), o agente usa artifício ou ardil para obter a posse temporária da coisa e, em seguida, dela se apodera definitivamente. A vítima entrega o bem, mas sua vontade é viciada pela fraude (pensava que o carro seria devolvido). Diferencia-se do estelionato porque no furto a vítima não é induzida a se despir definitivamente do bem — é enganada para entregar temporariamente.",
  },
  {
    id: 72,
    materia: "Direito Penal",
    dificuldade: "Difícil",
    enunciado:
      "Sobre o crime de corrupção passiva, analise: I. Quem trabalha com carteira assinada em sociedade empresária privada conveniada para execução de serviços típicos de administração pública responde por corrupção passiva caso receba vantagens indevidas para a prática de atos relacionados às suas funções. II. O médico não concursado que presta serviços pelo SUS responde por corrupção passiva se receber vantagens indevidas para acelerar o atendimento de um paciente. III. A relação da conduta com um ato de ofício é elemento do tipo na corrupção ativa, mas não da corrupção passiva em seu tipo fundamental. Está correto o que se afirma em",
    opcoes: [
      "I, apenas.",
      "I e II, apenas.",
      "I e III, apenas.",
      "II e III, apenas.",
      "I, II e III.",
    ],
    gabarito: "B",
    fonte: "ENAM 2024",
    comentario:
      "I está correta: conforme art. 327, §1º, do CP, equipara-se a funcionário público quem exerce cargo, emprego ou função em entidade paraestatal ou em empresa prestadora de serviço contratada ou conveniada para a execução de atividade típica da Administração Pública. II está correta: o médico do SUS é equiparado a funcionário público para fins penais. III está incorreta: a vinculação com ato de ofício também é elemento do tipo da corrupção passiva (art. 317 CP).",
  },
  {
    id: 73,
    materia: "Direito Penal",
    dificuldade: "Médio",
    enunciado:
      "Bernardo, cidadão português, tripulante de navio da marinha mercante brasileira, agride levemente um tripulante peruano em alto-mar, durante navegação de Santos para Roterdã. Diante do caso narrado, assinale a alternativa correta.",
    opcoes: [
      "não se aplica a Bernardo a legislação penal brasileira, pois o crime ocorreu no estrangeiro.",
      "aplica-se a Bernardo a legislação penal brasileira, pois o local onde ocorreu o crime é considerado território nacional por extensão.",
      "pode ser aplicada a Bernardo a legislação penal brasileira, pois, embora o crime tenha ocorrido no estrangeiro, trata-se de hipótese de extraterritorialidade condicionada da lei penal brasileira, à luz do princípio da defesa.",
      "aplica-se a Bernardo a legislação penal brasileira, pois, embora o crime tenha ocorrido no estrangeiro, trata-se de hipótese de extraterritorialidade incondicionada da lei penal brasileira, à luz do princípio da representação.",
      "pode ser aplicada a Bernardo a legislação penal brasileira, pois, embora o crime tenha ocorrido no estrangeiro, trata-se de hipótese de extraterritorialidade condicionada da lei penal brasileira, à luz do princípio da representação.",
    ],
    gabarito: "B",
    fonte: "ENAM 2024",
    comentario:
      "O art. 5º, §1º, do CP estabelece que o território nacional abrange embarcações e aeronaves brasileiras, de natureza pública ou a serviço do governo brasileiro onde quer que se encontrem. Navios da marinha mercante brasileira em alto-mar são considerados território nacional por extensão (princípio da territorialidade flutuante). Logo, aplica-se a lei penal brasileira sem necessidade de extraterritorialidade.",
  },
  {
    id: 74,
    materia: "Direito Penal",
    dificuldade: "Difícil",
    enunciado:
      "Sobre a extinção da punibilidade pela prescrição, analise: I. O período de suspensão do prazo prescricional é regulado pelo máximo da pena cominada. II. Transitada em julgado a sentença condenatória, a multa será executada perante o juiz da execução penal, aplicáveis as normas relativas à dívida ativa da Fazenda Pública e do CTN no que concerne aos prazos e às causas interruptivas e suspensivas da prescrição. III. No crime continuado, aplica-se a pena de um só dos crimes aumentada de 1/6 a 2/3, regulando-se a prescrição pela pena imposta na sentença, não se computando o acréscimo decorrente da continuação. IV. O prazo para a prescrição da pretensão executória somente começa a correr no dia em que a sentença condenatória transita em julgado para ambas as partes, exceto para os processos com trânsito em julgado para a acusação ocorridos até 11/11/2020. Está correto o que se afirma em",
    opcoes: [
      "I, II e III, apenas.",
      "I, II e IV, apenas.",
      "I, III e IV, apenas.",
      "II, III e IV, apenas.",
      "I, II, III e IV.",
    ],
    gabarito: "D",
    fonte: "ENAM 2024",
    comentario:
      "I está incorreta: não existe regra geral no CP determinando que o período de suspensão seja regulado pelo máximo da pena cominada. II está correta: art. 51 do CP após a alteração pela Lei 9.268/1996 e STF (AP 470). III está correta: art. 119 do CP — no concurso de crimes, a extinção da punibilidade incide sobre a pena de cada um, isoladamente, sendo que no crime continuado a prescrição é calculada sem o acréscimo. IV está correta: nova sistemática da prescrição da pretensão executória após o julgamento do STF no HC 184.267 (marco temporal = trânsito para ambas as partes).",
  },
  {
    id: 75,
    materia: "Direito Penal",
    dificuldade: "Difícil",
    enunciado:
      "João foi acusado de corrupção ativa em transação internacional porque deu, em outro país, vantagem indevida a funcionário público estrangeiro para ato de ofício relacionado a transação comercial internacional. Sobre a hipótese, assinale a afirmativa INCORRETA.",
    opcoes: [
      "João praticou crime de corrupção ativa em transação internacional, porque o delito, ao contrário da corrupção do art. 333 do CP, abrange a conduta de dar ou pagar a vantagem indevida, não se limitando ao mero oferecimento ou à mera promessa.",
      "A caracterização da corrupção ativa internacional não prescinde da descrição de um ato de ofício, porque tal elemento está previsto expressamente no tipo penal que descreve o crime específico.",
      "É possível a aplicação da lei penal nacional ao caso, mesmo que o crime tenha sido praticado fora do território nacional, desde que cumpridos os requisitos do art. 7º, §2º, do CP.",
      "A pena será aumentada da terça parte se João ocupa cargo em comissão ou de função de direção ou assessoramento de órgão da administração direta, sociedade de economia mista, empresa pública ou fundação instituída pelo poder público do país estrangeiro.",
      "A prescrição da pretensão punitiva começa a correr na data da entrega da vantagem, ainda que seja constatada a oferta ou a promessa do mesmo benefício em momento anterior.",
    ],
    gabarito: "D",
    fonte: "ENAM 2024",
    comentario:
      "A alternativa D está incorreta: a causa de aumento de pena da corrupção ativa em transação internacional (art. 337-C do CP) incide quando o agente ocupa cargo, emprego ou função na Administração Pública brasileira — não do país estrangeiro. A questão pede a alternativa incorreta, sendo D a resposta.",
  },
  {
    id: 76,
    materia: "Direito Penal",
    dificuldade: "Médio",
    enunciado:
      "Caio, para excitar sua libido, tem relações sexuais com sua namorada na presença de uma vizinha, de 13 anos de idade, a quem havia pago R$100,00 para que ela assistisse ao ato. Diante do caso narrado, Caio deverá responder pelo crime de",
    opcoes: [
      "assédio sexual.",
      "corrupção de menores.",
      "estupro de vulnerável.",
      "satisfação de lascívia mediante presença de criança ou adolescente.",
      "favorecimento da prostituição ou de outra forma de exploração de criança ou adolescente ou de vulnerável.",
    ],
    gabarito: "D",
    fonte: "ENAM 2024",
    comentario:
      "O art. 218-A do CP tipifica o crime de satisfação de lascívia mediante presença de criança ou adolescente: 'Praticar, na presença de alguém menor de 14 (catorze) anos, ou induzi-lo a presenciar, conjunção carnal ou outro ato libidinoso, a fim de satisfazer lascívia própria ou de outrem.' A vizinha tem 13 anos, Caio praticou ato libidinoso na sua presença e pagou para que ela assistisse, configurando exatamente esse tipo penal.",
  },
  {
    id: 77,
    materia: "Direito Penal",
    dificuldade: "Médio",
    enunciado:
      "Alberto, mágico profissional, colocou relógio suíço de elevado valor no pulso sob pretexto de experimentá-lo. Valendo-se da ligeireza de seus movimentos, retirou o relógio e o substituiu por uma cópia idêntica, entregando-a ao vendedor, que nada percebeu. Alberto deixou a loja com o relógio original. Diante do caso narrado, Alberto deverá responder por",
    opcoes: [
      "estelionato.",
      "furto simples.",
      "furto qualificado.",
      "apropriação indébita simples.",
      "apropriação indébita qualificada.",
    ],
    gabarito: "C",
    fonte: "ENAM 2024",
    comentario:
      "Alberto praticou furto qualificado pelo emprego de destreza (art. 155, §4º, II, CP). A destreza consiste na habilidade especial do agente que subtrai a coisa sem que a vítima perceba — exatamente o que ocorreu ao substituir o relógio com ligeireza de mágico. Não é estelionato pois não houve engano que levou a vítima a voluntariamente entregar definitivamente o bem de valor.",
  },
  {
    id: 78,
    materia: "Direito Penal",
    dificuldade: "Médio",
    enunciado:
      "Elmo, preso em flagrante por crime de descaminho, ao ser apresentado à autoridade policial para a lavratura do auto de prisão em flagrante, identifica-se como sendo seu irmão gêmeo, com o escopo de ocultar suas extensas anotações criminais. Diante do caso narrado, assinale a opção que corresponde ao fato.",
    opcoes: [
      "Fato atípico.",
      "Fato típico, porém lícito.",
      "Crime de falsa identidade.",
      "Crime de fraude processual.",
      "Crime de falsidade ideológica.",
    ],
    gabarito: "C",
    fonte: "ENAM 2024",
    comentario:
      "O STJ (Súmula 522) e o STF consolidaram que o crime de falsa identidade (art. 307 CP) é configurado quando o agente, para ocultar antecedentes criminais e se beneficiar no processo, atribui a si identidade falsa. Não se aplica o princípio da autodefesa nessa hipótese, pois o bem jurídico tutelado é a fé pública, e não apenas o interesse individual do acusado.",
  },
  {
    id: 79,
    materia: "Direito Penal",
    dificuldade: "Difícil",
    enunciado:
      "Em ação penal por crime ocorrido em 04/03/2023, o réu confessa espontaneamente. Constam: I. Condenação transitada em julgado em 08/06/2016 por crime anterior (praticado em 06/02/2014), pena extinta em 15/03/2022 pelo término do livramento condicional. II. Condenação transitada em julgado em 02/09/2022 por contravenção penal anterior (07/01/2022), pena de prisão simples cumprida em 03/03/2023. III. Ação penal em curso por crime posterior (05/03/2024). À luz das informações apresentadas, na segunda fase da dosimetria da pena, a pena deverá ser",
    opcoes: [
      "atenuada, incidindo a atenuante da confissão espontânea, sendo o réu primário.",
      "atenuada, preponderando a atenuante da confissão espontânea sobre a agravante da reincidência.",
      "mantida, compensando-se integralmente a atenuante da confissão espontânea com a agravante da reincidência.",
      "agravada, compensando-se proporcionalmente a agravante da reincidência com a atenuante da confissão espontânea.",
      "agravada, preponderando a agravante da reincidência, sem qualquer compensação em relação à atenuante da confissão espontânea.",
    ],
    gabarito: "C",
    fonte: "ENAM 2024",
    comentario:
      "Analisando a reincidência: a condenação I transitou em 2016, pena extinta em 15/03/2022. O crime atual ocorreu em 04/03/2023 — dentro dos 5 anos do art. 64, I, do CP (contados da extinção da pena). Logo, há reincidência pela condenação I. Presente a agravante da reincidência e a atenuante da confissão espontânea, o STJ firmou (Súmula 545) que se compensam reciprocamente — a pena é mantida no mesmo patamar.",
  },
  {
    id: 80,
    materia: "Direito Penal",
    dificuldade: "Médio",
    enunciado:
      "Alfredo é intolerante em relação aos integrantes de uma determinada religião. Decidido a gerar medo generalizado nos fiéis, dirigiu-se ao principal templo durante um culto lotado e colocou um artefato explosivo de grande impacto na porta de entrada. O artefato, porém, não explodiu. Assinale a opção que indica, com base na hipótese narrada, o crime praticado por Alfredo.",
    opcoes: [
      "Terrorismo.",
      "Genocídio.",
      "Perigo para a vida ou a saúde de outrem.",
      "Explosão.",
      "Injúria qualificada por preconceito religioso.",
    ],
    gabarito: "A",
    fonte: "ENAM 2024",
    comentario:
      "A Lei Antiterrorismo (Lei 13.260/2016) tipifica terrorismo como atos que, por razões de xenofobia, discriminação ou preconceito de raça, cor, etnia e religião, causem terror social ou generalizado, expondo a perigo pessoa, patrimônio, a paz pública ou a incolumidade pública. Alfredo agiu movido por intolerância religiosa, visando gerar medo generalizado nos fiéis, colocando explosivo em local de culto. O crime se consuma com a prática dos atos, independentemente da explosão efetiva.",
  },
];
