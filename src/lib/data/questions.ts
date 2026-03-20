export type Questao = {
  id: number;
  materia: string;
  dificuldade: "Fácil" | "Médio" | "Difícil";
  enunciado: string;
  opcoes: string[];
  gabarito: number;
  comentario: string;
};

export const BANCO_QUESTOES: Questao[] = [
  // ──────────────────────────────────────────
  // DIREITO CONSTITUCIONAL (1–20)
  // ──────────────────────────────────────────
  {
    id: 1,
    materia: "Constitucional",
    dificuldade: "Médio",
    enunciado:
      "De acordo com a Constituição Federal de 1988, os direitos e garantias fundamentais têm aplicabilidade imediata. Nesse contexto, sobre os direitos sociais, é correto afirmar que:",
    opcoes: [
      "Os direitos sociais são normas de eficácia plena e, portanto, dispensam qualquer regulamentação legislativa.",
      "As normas definidoras dos direitos e garantias fundamentais têm aplicação imediata, conforme art. 5º, §1º da CF/88.",
      "Os direitos sociais previstos no art. 6º da CF/88 possuem caráter meramente programático, sem qualquer eficácia jurídica.",
      "O Poder Judiciário não pode impor ao Executivo a implementação de políticas públicas relativas a direitos sociais.",
      "Os direitos sociais só geram pretensão subjetiva após regulamentação por lei complementar.",
    ],
    gabarito: 1,
    comentario:
      "O §1º do art. 5º da CF/88 estabelece que as normas definidoras dos direitos e garantias fundamentais têm aplicação imediata. Isso significa que os direitos fundamentais — incluindo os sociais — não dependem de lei regulamentadora para produzir efeitos. O STF reconhece, contudo, graus variados de eficácia conforme a natureza da norma (plena, contida ou programática).",
  },
  {
    id: 2,
    materia: "Constitucional",
    dificuldade: "Fácil",
    enunciado:
      "Segundo a Constituição Federal de 1988, o Brasil constitui-se em Estado Democrático de Direito, tendo como fundamentos:",
    opcoes: [
      "A soberania, a cidadania, a dignidade da pessoa humana, os valores sociais do trabalho e da livre iniciativa e o pluralismo político.",
      "A soberania, a independência nacional, a prevalência dos direitos humanos e a autodeterminação dos povos.",
      "A independência nacional, a prevalência dos direitos humanos, a não intervenção e a igualdade entre os Estados.",
      "A cidadania, a dignidade da pessoa humana, a erradicação da pobreza e a redução das desigualdades regionais.",
      "A soberania, a cidadania, os valores sociais do trabalho, a vedação ao retrocesso social e o pluralismo político.",
    ],
    gabarito: 0,
    comentario:
      "O art. 1º da CF/88 elenca expressamente os cinco fundamentos da República Federativa do Brasil: soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa, e pluralismo político. As demais alternativas confundem fundamentos (art. 1º) com objetivos (art. 3º) e princípios de relações internacionais (art. 4º).",
  },
  {
    id: 3,
    materia: "Constitucional",
    dificuldade: "Difícil",
    enunciado:
      "Sobre o controle concentrado de constitucionalidade no Brasil, é correto afirmar:",
    opcoes: [
      "O Governador de Estado possui legitimidade ativa para propor ADI apenas quando a lei impugnada for do próprio Estado.",
      "A ADC tem por objeto exclusivo lei ou ato normativo federal, enquanto a ADI pode ter por objeto lei federal ou estadual.",
      "A decisão do STF em ADI produz eficácia erga omnes e efeito vinculante em relação ao Poder Legislativo, impedindo a edição de nova lei de igual teor.",
      "O amicus curiae pode recorrer das decisões proferidas no julgamento de ADI, conforme entendimento consolidado do STF.",
      "A ADPF tem caráter subsidiário e só é cabível quando não houver outro meio eficaz de sanar a lesividade.",
    ],
    gabarito: 4,
    comentario:
      "A ADPF (Arguição de Descumprimento de Preceito Fundamental) tem caráter subsidiário (art. 4º, §1º, da Lei 9.882/99), sendo cabível apenas quando não houver outro meio eficaz para sanar a lesividade. O efeito vinculante das decisões em ADI não alcança o Poder Legislativo em sua função típica de legislar (Tese da 'Fossilização da Constituição'). O amicus curiae, em regra, não tem legitimidade recursal.",
  },
  {
    id: 4,
    materia: "Constitucional",
    dificuldade: "Médio",
    enunciado: "O mandado de segurança coletivo pode ser impetrado por:",
    opcoes: [
      "Qualquer cidadão em defesa de interesse coletivo de uma comunidade.",
      "Partido político com representação no Congresso Nacional e organização sindical, entidade de classe ou associação legalmente constituída há pelo menos um ano.",
      "Partido político com representação no Congresso Nacional e associação constituída há pelo menos seis meses.",
      "Apenas pelo Ministério Público, quando se tratar de direitos coletivos indisponíveis.",
      "Organização sindical ou entidade de classe, independentemente de constituição formal.",
    ],
    gabarito: 1,
    comentario:
      "O art. 5º, LXX, da CF/88 prevê que o mandado de segurança coletivo pode ser impetrado por: partido político com representação no Congresso Nacional; e organização sindical, entidade de classe ou associação legalmente constituída e em funcionamento há pelo menos um ano, em defesa dos interesses de seus membros ou associados. O prazo de um ano é requisito apenas para associações, não para sindicatos e entidades de classe.",
  },
  {
    id: 5,
    materia: "Constitucional",
    dificuldade: "Médio",
    enunciado:
      "Sobre a intervenção federal nos Estados, conforme a Constituição Federal de 1988, assinale a alternativa correta:",
    opcoes: [
      "A intervenção federal é ato discricionário do Presidente da República, que pode decretá-la a qualquer tempo por razões de conveniência e oportunidade.",
      "Toda intervenção federal depende de autorização prévia do Congresso Nacional para ser efetivada.",
      "O STF pode requisitar intervenção federal para garantir o cumprimento de suas decisões, sem necessidade de aprovação do Congresso.",
      "A intervenção federal pode ser decretada para assegurar a observância dos princípios constitucionais sensíveis, mediante provocação do Governador do Estado.",
      "A intervenção federal suspende automaticamente a Constituição Estadual enquanto perdurar.",
    ],
    gabarito: 2,
    comentario:
      "Nos casos em que a intervenção tem por fim prover a execução de ordem ou decisão judicial, o STF, o STJ ou o TSE podem requisitar a intervenção ao Presidente da República (art. 36, II, CF/88). Nessa hipótese específica, não é necessária aprovação prévia do Congresso Nacional. A regra geral exige apreciação do Congresso, mas há exceções constitucionais expressas.",
  },
  {
    id: 6,
    materia: "Constitucional",
    dificuldade: "Difícil",
    enunciado:
      "Sobre as cláusulas pétreas previstas no art. 60, §4º, da CF/88, é correto afirmar:",
    opcoes: [
      "As cláusulas pétreas são absolutas e impedem qualquer modificação, ainda que para ampliar os direitos por elas protegidos.",
      "O voto secreto nas eleições gerais é cláusula pétrea, não podendo ser suprimido nem restringido por emenda constitucional.",
      "A separação dos Poderes é cláusula pétrea, mas pode ser relativizada por emenda constitucional aprovada por três quintos dos membros do Congresso.",
      "A proibição alcança apenas a supressão formal dos direitos protegidos, sendo lícita a emenda que reduza seu âmbito de proteção sem eliminá-los.",
      "O STF entende que as cláusulas pétreas vedam a abolição dos direitos protegidos, mas admitem a ampliação do seu conteúdo por emenda.",
    ],
    gabarito: 4,
    comentario:
      "Segundo o STF, as cláusulas pétreas (art. 60, §4º) vedam a abolição ('tendente a abolir') dos direitos e princípios protegidos, mas não impedem emendas que ampliem ou reforcem esses direitos. Também é vedada a erosão do núcleo essencial, ainda que sem supressão formal. O voto direto, secreto, universal e periódico é cláusula pétrea, mas o voto secreto em votações parlamentares não está necessariamente protegido.",
  },
  {
    id: 7,
    materia: "Constitucional",
    dificuldade: "Fácil",
    enunciado: "O habeas corpus é ação constitucional que visa proteger:",
    opcoes: [
      "Direito líquido e certo não amparado por habeas data ou mandado de segurança.",
      "O direito de obter informações relativas à pessoa do impetrante constantes em registros públicos.",
      "A liberdade de locomoção, quando alguém sofre ou se acha ameaçado de sofrer violência ou coação em sua liberdade de ir e vir.",
      "Direitos e interesses coletivos de determinado grupo social.",
      "O direito à privacidade e à autodeterminação informativa.",
    ],
    gabarito: 2,
    comentario:
      "O habeas corpus, previsto no art. 5º, LXVIII, da CF/88, é o remédio constitucional destinado a proteger a liberdade de locomoção — o direito de ir, vir e permanecer — quando houver ilegalidade ou abuso de poder. O mandado de segurança protege direito líquido e certo; o habeas data protege acesso a informações pessoais; o mandado de injunção supre a omissão legislativa.",
  },
  {
    id: 8,
    materia: "Constitucional",
    dificuldade: "Médio",
    enunciado:
      "Acerca da imunidade parlamentar material (inviolabilidade), prevista no art. 53 da CF/88, é correto afirmar que:",
    opcoes: [
      "Abrange apenas os crimes de opinião praticados dentro do recinto do Congresso Nacional.",
      "Os Deputados e Senadores são invioláveis, civil e penalmente, por quaisquer de suas opiniões, palavras e votos, no exercício do mandato e em razão dele.",
      "A imunidade material é relativa e pode ser afastada pelo Plenário da Casa respectiva por maioria absoluta.",
      "Estende-se aos suplentes de parlamentares quando estes estejam no exercício do mandato.",
      "Protege o parlamentar apenas na esfera penal, não alcançando a responsabilidade civil por danos morais.",
    ],
    gabarito: 1,
    comentario:
      "O art. 53, caput, da CF/88 estabelece que Deputados e Senadores são invioláveis, civil e penalmente, por quaisquer de suas opiniões, palavras e votos. A imunidade material é absoluta quanto ao nexo com o exercício do mandato e alcança tanto a esfera penal quanto a civil. Não se confunde com a imunidade formal (processual), esta sim sujeita a afastamento pelo plenário da Casa.",
  },
  {
    id: 9,
    materia: "Constitucional",
    dificuldade: "Difícil",
    enunciado:
      "Sobre o processo legislativo na Constituição Federal de 1988, assinale a alternativa correta:",
    opcoes: [
      "A medida provisória pode tratar de qualquer matéria, desde que haja relevância e urgência devidamente justificadas.",
      "A lei delegada pode delegar ao Presidente da República competência para legislar sobre direitos individuais.",
      "As leis complementares exigem quórum de maioria absoluta para aprovação e se distinguem das leis ordinárias pelo critério material definido na Constituição.",
      "O veto presidencial a projeto de lei pode ser derrubado pela maioria simples dos membros do Congresso Nacional em sessão conjunta.",
      "A iniciativa popular de lei federal exige subscrição por, no mínimo, 0,5% do eleitorado nacional, distribuído por pelo menos três Estados.",
    ],
    gabarito: 2,
    comentario:
      "As leis complementares distinguem-se das leis ordinárias por dois critérios: material (a CF reserva expressamente certas matérias à lei complementar) e formal (exige maioria absoluta dos membros de cada Casa para aprovação). A rejeição do veto presidencial exige maioria absoluta, em escrutínio secreto, em sessão conjunta do Congresso. A iniciativa popular requer 1% do eleitorado, em pelo menos 5 Estados, com 0,3% dos eleitores em cada.",
  },
  {
    id: 10,
    materia: "Constitucional",
    dificuldade: "Fácil",
    enunciado:
      "De acordo com a Constituição Federal de 1988, é vedado à União, aos Estados, ao Distrito Federal e aos Municípios:",
    opcoes: [
      "Instituir contribuições de melhoria decorrentes de obras públicas.",
      "Estabelecer cultos religiosos ou igrejas, subvencioná-los, embaraçar-lhes o funcionamento ou manter com eles ou seus representantes relações de dependência ou aliança.",
      "Cobrar tributos em relação a fatos geradores ocorridos antes do início da vigência da lei que os houver instituído.",
      "Instituir impostos sobre patrimônio, renda ou serviços uns dos outros.",
      "Todas as alternativas anteriores estão corretas.",
    ],
    gabarito: 4,
    comentario:
      "Todas as vedações listadas estão previstas na CF/88: a vedação à subvenção de cultos religiosos e embaraço ao seu funcionamento (art. 19, I); a irretroatividade tributária (art. 150, III, 'a'); e a imunidade recíproca dos entes federativos (art. 150, VI, 'a'). A contribuição de melhoria, por sua vez, é um tributo que pode ser instituído por todos os entes — não é vedação. O enunciado pedia a vedação, e todas as demais alternativas contêm itens vedados.",
  },
  {
    id: 11,
    materia: "Constitucional",
    dificuldade: "Médio",
    enunciado:
      "Sobre o Poder Judiciário na Constituição Federal de 1988, é correto afirmar que:",
    opcoes: [
      "O CNJ possui competência jurisdicional e pode rever decisões judiciais transitadas em julgado.",
      "Os membros do STF são nomeados pelo Presidente da República após aprovação pela maioria absoluta do Senado Federal.",
      "A vitaliciedade dos magistrados é adquirida no momento da posse no cargo.",
      "O STJ é competente para processar e julgar originariamente o Presidente da República nos crimes comuns.",
      "A súmula vinculante pode ser proposta por qualquer tribunal do país e aprovada pelo STF por maioria simples.",
    ],
    gabarito: 1,
    comentario:
      "O art. 101, parágrafo único, da CF/88 prevê que os membros do STF são nomeados pelo Presidente da República, depois de aprovada a escolha pela maioria absoluta do Senado Federal. A vitaliciedade é adquirida após dois anos de exercício (art. 95, I). O CNJ não exerce função jurisdicional. O STF julga o Presidente da República nos crimes comuns. A súmula vinculante exige aprovação por dois terços dos membros do STF.",
  },
  {
    id: 12,
    materia: "Constitucional",
    dificuldade: "Difícil",
    enunciado:
      "Acerca da teoria dos direitos fundamentais, o fenômeno pelo qual os direitos fundamentais irradiam seus efeitos para as relações entre particulares é denominado:",
    opcoes: [
      "Efeito cliquet dos direitos fundamentais.",
      "Eficácia horizontal dos direitos fundamentais.",
      "Eficácia vertical dos direitos fundamentais.",
      "Dimensão objetiva dos direitos fundamentais.",
      "Proibição do retrocesso social.",
    ],
    gabarito: 1,
    comentario:
      "A eficácia horizontal (ou eficácia privada) dos direitos fundamentais é o fenômeno pelo qual esses direitos, originalmente concebidos para reger a relação Estado-particular (eficácia vertical), também incidem nas relações entre particulares. O STF reconhece a eficácia horizontal direta (RE 201.819/RJ — caso UBC). A eficácia vertical diz respeito à relação Estado-cidadão; a dimensão objetiva trata dos direitos fundamentais como valores objetivos do ordenamento.",
  },
  {
    id: 13,
    materia: "Constitucional",
    dificuldade: "Médio",
    enunciado:
      "Sobre o estado de defesa e o estado de sítio previstos na Constituição Federal de 1988, é correto afirmar que:",
    opcoes: [
      "O estado de defesa pode ser decretado pelo Presidente da República sem qualquer consulta prévia ao Congresso Nacional.",
      "O estado de sítio pode ser decretado por um prazo inicial de 30 dias, prorrogável uma única vez.",
      "Durante o estado de defesa, é possível a suspensão do habeas corpus nos casos de crimes políticos.",
      "O estado de defesa pode ser decretado para preservar ou restabelecer a ordem pública em locais restritos e determinados.",
      "O estado de sítio somente pode ser decretado mediante autorização prévia do Senado Federal.",
    ],
    gabarito: 3,
    comentario:
      "O art. 136 da CF/88 autoriza o Presidente a decretar estado de defesa para preservar ou prontamente restabelecer, em locais restritos e determinados, a ordem pública ou a paz social ameaçadas por grave e iminente instabilidade institucional ou calamidade de grandes proporções. A decretação é precedida de oitiva do Conselho da República e do Conselho de Defesa Nacional (não do Congresso). O estado de sítio exige autorização do Congresso Nacional (não apenas do Senado).",
  },
  {
    id: 14,
    materia: "Constitucional",
    dificuldade: "Fácil",
    enunciado:
      "O princípio da publicidade, previsto no art. 37 da Constituição Federal, admite exceção quando:",
    opcoes: [
      "O agente público requerer sigilo por motivo de interesse pessoal.",
      "A divulgação puder colocar em risco a segurança da sociedade e do Estado, ou quando imprescindível à segurança da sociedade ou do Estado.",
      "O ato administrativo não tiver repercussão financeira para o erário.",
      "A Administração entender que a publicidade pode expor servidores a constrangimentos.",
      "O interesse público, a critério exclusivo do administrador, assim recomendar.",
    ],
    gabarito: 1,
    comentario:
      "O art. 5º, XXXIII, da CF/88 garante a todos o direito de receber informações dos órgãos públicos, ressalvadas aquelas cujo sigilo seja imprescindível à segurança da sociedade e do Estado. O sigilo não é uma prerrogativa discricionária do administrador, mas uma exceção constitucionalmente qualificada. A Lei de Acesso à Informação (Lei 12.527/2011) regulamenta essas hipóteses.",
  },
  {
    id: 15,
    materia: "Constitucional",
    dificuldade: "Difícil",
    enunciado:
      "Sobre a reclamação constitucional perante o STF, é correto afirmar que:",
    opcoes: [
      "Somente as partes do processo originário têm legitimidade para propor reclamação.",
      "A reclamação não é cabível para garantir a observância de enunciado de súmula vinculante.",
      "A reclamação tem natureza jurídica de recurso e deve observar os pressupostos recursais.",
      "A procedência da reclamação implica a cassação da decisão impugnada e determinação de que outra seja proferida.",
      "A reclamação pode ser proposta após o trânsito em julgado da decisão impugnada, sem prazo definido.",
    ],
    gabarito: 3,
    comentario:
      "A reclamação constitucional é ação de natureza constitucional (não recurso) cujo julgamento de procedência implica a cassação da decisão exorbitante e a determinação de que outra seja proferida com observância da autoridade do STF. É cabível para preservar a competência do STF, garantir a autoridade de suas decisões e a observância de súmulas vinculantes. O STF admite reclamação por terceiros prejudicados, não apenas pelas partes originárias.",
  },
  {
    id: 16,
    materia: "Constitucional",
    dificuldade: "Médio",
    enunciado:
      "Nos termos da Constituição Federal de 1988, a desapropriação por necessidade ou utilidade pública, ou por interesse social, será realizada mediante:",
    opcoes: [
      "Decreto do Poder Executivo, sem necessidade de indenização quando o bem estiver sendo utilizado para fins ilícitos.",
      "Prévia e justa indenização em dinheiro, ressalvados os casos previstos na própria Constituição.",
      "Indenização em títulos da dívida pública, independentemente do fundamento da desapropriação.",
      "Decisão judicial transitada em julgado, após manifestação favorável do Ministério Público.",
      "Justa indenização, podendo ser parcelada em até dez anos a critério do Poder Público.",
    ],
    gabarito: 1,
    comentario:
      "O art. 5º, XXIV, da CF/88 estabelece que a desapropriação por necessidade ou utilidade pública, ou por interesse social, será realizada mediante justa e prévia indenização em dinheiro, ressalvados os casos previstos na Constituição. As exceções constitucionais são: a desapropriação-sanção para fins de reforma agrária (indenização em TDA) e a desapropriação para fins urbanísticos (indenização em títulos da dívida pública), previstas nos arts. 182 e 184.",
  },
  {
    id: 17,
    materia: "Constitucional",
    dificuldade: "Médio",
    enunciado:
      "Sobre a organização do Ministério Público na Constituição Federal de 1988, assinale a alternativa correta:",
    opcoes: [
      "O Procurador-Geral da República pode ser destituído pelo Presidente da República ad nutum, a qualquer tempo.",
      "O Ministério Público integra o Poder Executivo e está subordinado ao Ministério da Justiça.",
      "Os membros do Ministério Público gozam de vitaliciedade, inamovibilidade e irredutibilidade de subsídios.",
      "O Ministério Público pode exercer a advocacia pública, representando judicialmente os entes federativos.",
      "A iniciativa da ação penal pública é função exclusiva do Ministério Público, não admitindo exceções constitucionais.",
    ],
    gabarito: 2,
    comentario:
      "O art. 128, §5º, I, da CF/88 assegura aos membros do Ministério Público as garantias de vitaliciedade (após dois anos de exercício), inamovibilidade (salvo por motivo de interesse público) e irredutibilidade de subsídios. O MP é instituição permanente, essencial à função jurisdicional, e não integra nenhum dos três Poderes. O PGR pode ser destituído pelo Senado Federal (não ad nutum pelo Presidente). A ação penal privada subsidiária da pública é uma exceção constitucional (art. 5º, LIX).",
  },
  {
    id: 18,
    materia: "Constitucional",
    dificuldade: "Fácil",
    enunciado:
      "Segundo a Constituição Federal de 1988, é assegurado o direito de greve aos trabalhadores, competindo a eles:",
    opcoes: [
      "Exercê-lo nos limites definidos em lei complementar, que definirá os serviços essenciais.",
      "Exercê-lo somente mediante prévia autorização do sindicato representativo da categoria.",
      "Decidir sobre a oportunidade de exercê-lo e sobre os interesses que devam por meio dele defender.",
      "Exercê-lo apenas para reivindicações de natureza salarial, vedadas as pautas de natureza política.",
      "Exercê-lo com prévia comunicação ao empregador com antecedência mínima de 15 dias.",
    ],
    gabarito: 2,
    comentario:
      "O art. 9º da CF/88 assegura o direito de greve, competindo aos trabalhadores decidir sobre a oportunidade de exercê-lo e sobre os interesses que devam por meio dele defender. A lei definirá os serviços ou atividades essenciais e disporá sobre o atendimento das necessidades inadiáveis da comunidade, mas não restringe a iniciativa da greve. A Lei 7.783/89 regulamenta o exercício, exigindo comunicação prévia de 72h para serviços essenciais.",
  },
  {
    id: 19,
    materia: "Constitucional",
    dificuldade: "Difícil",
    enunciado:
      "Sobre o controle difuso de constitucionalidade no Brasil, assinale a alternativa correta:",
    opcoes: [
      "A declaração de inconstitucionalidade no controle difuso produz efeitos erga omnes automaticamente.",
      "Qualquer juiz ou tribunal pode declarar a inconstitucionalidade de lei, sendo dispensável a observância da cláusula de reserva de plenário nos casos de turma.",
      "O Senado Federal, ao suspender a execução de lei declarada inconstitucional pelo STF no controle difuso, dá eficácia erga omnes à decisão, com efeitos ex nunc.",
      "A teoria da abstrativização do controle difuso, adotada pelo STF, defende que as decisões proferidas pelo pleno do STF em sede de controle difuso têm efeitos vinculantes independentemente de resolução do Senado.",
      "No controle difuso, o STF aprecia a inconstitucionalidade como questão principal da demanda, e não como questão prejudicial.",
    ],
    gabarito: 3,
    comentario:
      "A teoria da abstrativização (ou objetivação) do controle difuso, defendida por ministros como Gilmar Mendes, sustenta que as decisões do STF em controle incidental, especialmente em julgamento plenário, devem ter eficácia vinculante e erga omnes sem necessidade de resolução senatorial (art. 52, X). Embora controvertida, essa tese ganhou força no STF. A cláusula de reserva de plenário (art. 97) exige que a declaração de inconstitucionalidade seja feita pelo pleno ou órgão especial do tribunal — não pela turma.",
  },
  {
    id: 20,
    materia: "Constitucional",
    dificuldade: "Médio",
    enunciado:
      "A respeito da repartição de competências na Constituição Federal de 1988, é correto afirmar que:",
    opcoes: [
      "A competência comum dos entes federativos (art. 23) é de natureza legislativa.",
      "Os Municípios têm competência para legislar sobre direito civil e penal em assuntos de interesse local.",
      "A competência concorrente permite que Estados e Municípios legislem plenamente sobre matérias listadas no art. 24 na ausência de lei federal.",
      "A competência privativa da União para legislar pode ser delegada aos Municípios por lei complementar.",
      "Os Municípios não possuem competência legislativa própria, exercendo apenas competência delegada.",
    ],
    gabarito: 2,
    comentario:
      "O art. 24, §3º, da CF/88 prevê que, inexistindo lei federal sobre normas gerais, os Estados exercerão a competência legislativa plena. A competência comum do art. 23 é de natureza material (administrativa), não legislativa. A delegação de competência privativa da União (art. 22, parágrafo único) pode ser feita aos Estados — não diretamente aos Municípios — por lei complementar. Os Municípios têm competência legislativa própria para assuntos de interesse local (art. 30, I).",
  },

  // ──────────────────────────────────────────
  // DIREITO CIVIL (21–40)
  // ──────────────────────────────────────────
  {
    id: 21,
    materia: "Civil",
    dificuldade: "Difícil",
    enunciado:
      "João, maior e capaz, celebrou contrato de compra e venda com Pedro, que à época dos fatos era relativamente incapaz por embriaguez habitual, porém sem curador nomeado. Sobre a validade desse negócio jurídico, assinale a alternativa correta:",
    opcoes: [
      "O negócio é nulo de pleno direito, pois Pedro não tinha capacidade civil plena.",
      "O negócio é válido, pois a incapacidade relativa só pode ser arguida pelo próprio incapaz ou por seu representante legal.",
      "O negócio é anulável, podendo ser arguido por qualquer interessado no prazo de 4 anos.",
      "O negócio é anulável, e apenas Pedro — ou seu representante — pode arguir a anulabilidade no prazo de 4 anos.",
      "O negócio é válido porque Pedro não tinha curador nomeado, logo não havia incapacidade formal.",
    ],
    gabarito: 3,
    comentario:
      "Conforme o art. 171, I, do CC/02, é anulável o negócio jurídico celebrado por relativamente incapaz. A anulabilidade só pode ser alegada pelos interessados (no caso, pelo incapaz ou seu representante), não podendo ser declarada de ofício. O prazo decadencial é de 4 anos (art. 178, II, CC). A ausência de curador não afasta a incapacidade relativa reconhecida em lei.",
  },
  {
    id: 22,
    materia: "Civil",
    dificuldade: "Fácil",
    enunciado:
      "Segundo o Código Civil de 2002, são absolutamente incapazes de exercer pessoalmente os atos da vida civil:",
    opcoes: [
      "Os menores de 16 anos e os ébrios habituais.",
      "Os menores de 18 anos.",
      "Os menores de 16 anos.",
      "Os menores de 18 anos e os que, por enfermidade mental, não puderem exprimir sua vontade.",
      "Os menores de 16 anos e os que por causa transitória não puderem exprimir sua vontade.",
    ],
    gabarito: 2,
    comentario:
      "Após a Lei 13.146/2015 (Estatuto da Pessoa com Deficiência), o art. 3º do CC passou a prever como absolutamente incapazes apenas os menores de 16 anos. As demais hipóteses anteriores (ébrios habituais, deficientes mentais etc.) foram removidas da incapacidade absoluta e realocadas na incapacidade relativa ou eliminadas, em respeito à capacidade legal das pessoas com deficiência.",
  },
  {
    id: 23,
    materia: "Civil",
    dificuldade: "Médio",
    enunciado:
      "Sobre o instituto da prescrição no Código Civil de 2002, é correto afirmar que:",
    opcoes: [
      "A prescrição pode ser renunciada antecipadamente, antes de consumada.",
      "O juiz pode suprir de ofício a alegação de prescrição em qualquer hipótese.",
      "A prescrição extingue o direito subjetivo em si, tornando-o inexistente.",
      "A interrupção da prescrição por protesto judicial só pode ocorrer uma única vez.",
      "O prazo prescricional geral previsto no Código Civil é de 10 anos.",
    ],
    gabarito: 3,
    comentario:
      "O art. 202 do CC/02 dispõe que a interrupção da prescrição somente poderá ocorrer uma única vez. A prescrição extingue a pretensão (e não o direito em si), conforme o art. 189 do CC. A renúncia prévia à prescrição é vedada (art. 191). O prazo geral é de 10 anos (art. 205). O juiz pode reconhecer de ofício a prescrição quando não prejudicar a parte a quem aproveita (art. 332, §1º, CPC).",
  },
  {
    id: 24,
    materia: "Civil",
    dificuldade: "Médio",
    enunciado:
      "Sobre o contrato de doação no Código Civil de 2002, assinale a alternativa correta:",
    opcoes: [
      "A doação de bem imóvel de pequeno valor pode ser feita verbalmente.",
      "A doação é sempre irrevogável após a aceitação do donatário.",
      "A doação com encargo é modalidade de doação onerosa, equiparando-se ao contrato bilateral.",
      "É anulável a doação do cônjuge adúltero ao seu cúmplice, podendo ser impugnada pelo cônjuge traído ou seus herdeiros.",
      "A doação universal de bens do doador é válida desde que ele reserve meios para subsistência.",
    ],
    gabarito: 3,
    comentario:
      "O art. 550 do CC/02 prevê que a doação do cônjuge adúltero ao seu cúmplice pode ser anulada pelo cônjuge prejudicado ou por seus herdeiros necessários, até 2 anos após a dissolução da sociedade conjugal. A doação com encargo (modal) não é equivalente ao contrato bilateral puro — o encargo é uma liberalidade com ônus, e o descumprimento pode gerar revogação. A doação universal de bens é nula se o doador não reservar o suficiente para a própria subsistência (art. 548).",
  },
  {
    id: 25,
    materia: "Civil",
    dificuldade: "Difícil",
    enunciado:
      "Sobre a responsabilidade civil objetiva no Código Civil de 2002, assinale a alternativa correta:",
    opcoes: [
      "A responsabilidade objetiva exige a demonstração de culpa grave do agente causador do dano.",
      "O Código Civil adota a teoria do risco criado como fundamento geral da responsabilidade objetiva, no parágrafo único do art. 927.",
      "A responsabilidade pelo fato do produto, prevista no art. 931 do CC, exige que o fabricante tenha conhecimento do defeito.",
      "A responsabilidade objetiva exclui completamente o nexo causal como elemento necessário à reparação.",
      "O dono de animal ressarcirá o dano por ele causado independentemente de qualquer prova em sentido contrário.",
    ],
    gabarito: 1,
    comentario:
      "O parágrafo único do art. 927 do CC/02 prevê a obrigação de reparar o dano independentemente de culpa, nos casos especificados em lei, ou quando a atividade normalmente desenvolvida pelo autor do dano implicar risco para os direitos de outrem — consagrando a teoria do risco criado como fundamento geral da responsabilidade objetiva. O nexo causal jamais é dispensado, mesmo na responsabilidade objetiva. O dono do animal pode exonerar-se provando culpa da vítima, de terceiro, ou força maior (art. 936).",
  },
  {
    id: 26,
    materia: "Civil",
    dificuldade: "Médio",
    enunciado:
      "Sobre o usufruto no Código Civil de 2002, é correto afirmar que:",
    opcoes: [
      "O usufruto pode ser alienado pelo usufrutuário a terceiros, assim como os imóveis gravados com ele.",
      "O usufruto pode ser instituído em favor de pessoa jurídica, com prazo máximo de 30 anos.",
      "Extingue-se o usufruto pela morte do usufrutuário, mesmo que o prazo ainda não tenha se esgotado.",
      "O usufrutuário não pode exigir do nu-proprietário a realização de reparos extraordinários.",
      "O usufruto é direito real sobre coisa alheia de caráter perpétuo e transmissível por herança.",
    ],
    gabarito: 2,
    comentario:
      "O art. 1.411 do CC/02 dispõe que o usufruto constituído em favor de pessoa jurídica extingue-se em 30 anos. O usufruto constituído em favor de pessoa natural extingue-se com a morte do usufrutuário (art. 1.410, I), mesmo que haja prazo ainda não esgotado. O usufruto é intransmissível e inalienável, embora o exercício possa ser cedido. Não é perpétuo nem hereditário — extingue-se com a morte.",
  },
  {
    id: 27,
    materia: "Civil",
    dificuldade: "Fácil",
    enunciado:
      "O princípio da boa-fé objetiva no Código Civil de 2002 tem como principal função:",
    opcoes: [
      "Avaliar a intenção subjetiva das partes no momento da celebração do contrato.",
      "Impor às partes um padrão de conduta leal, honesta e cooperativa ao longo de toda a relação contratual.",
      "Restringir a autonomia privada das partes nos contratos de adesão.",
      "Substituir a vontade das partes sempre que ela conflitar com os interesses sociais.",
      "Estabelecer a responsabilidade objetiva nas relações contratuais de consumo.",
    ],
    gabarito: 1,
    comentario:
      "A boa-fé objetiva (art. 422 do CC/02) impõe às partes um dever geral de lealdade, honestidade e cooperação durante toda a vida do contrato — da fase pré-contratual à pós-contratual. Distingue-se da boa-fé subjetiva, que diz respeito ao estado psicológico do agente (crença ou ignorância). A boa-fé objetiva tem três funções: interpretativa, integrativa (criação de deveres laterais) e limitativa (controle de condutas abusivas).",
  },
  {
    id: 28,
    materia: "Civil",
    dificuldade: "Difícil",
    enunciado:
      "Sobre a teoria da imprevisão e a resolução por onerosidade excessiva no Código Civil de 2002, é correto afirmar:",
    opcoes: [
      "Basta que a prestação se torne mais onerosa para que o devedor possa pedir a resolução do contrato.",
      "A resolução por onerosidade excessiva é cabível nos contratos aleatórios quando o risco assumido for muito superior ao previsto.",
      "O credor pode, para evitar a resolução, oferecer a modificação equitativa das condições do contrato.",
      "A onerosidade excessiva pode ser invocada nos contratos de execução imediata, desde que haja fato extraordinário e imprevisível.",
      "A revisão judicial do contrato por onerosidade excessiva é vedada, cabendo apenas a resolução.",
    ],
    gabarito: 2,
    comentario:
      "O art. 479 do CC/02 permite que o réu (credor), para evitar a resolução do contrato por onerosidade excessiva, ofereça modificar equitativamente as condições do contrato. A resolução exige que os fatos sejam extraordinários e imprevisíveis, que tornem a prestação excessivamente onerosa para uma parte, com vantagem extrema para a outra. Os contratos aleatórios só admitem resolução quando o risco assumido extrapola o álea normal do negócio. Os contratos de execução imediata não são alcançados pelo art. 478.",
  },
  {
    id: 29,
    materia: "Civil",
    dificuldade: "Médio",
    enunciado:
      "Sobre o condomínio edilício (Lei 4.591/64 e Código Civil de 2002), assinale a alternativa correta:",
    opcoes: [
      "O condômino que não pagar as contribuições condominiais pode perder sua unidade, sendo ela levada a leilão para quitação da dívida, mesmo que seja seu único imóvel e bem de família.",
      "O condômino inadimplente está sujeito a multa de até 10% sobre o débito, conforme previsto na convenção de condomínio.",
      "As decisões da assembleia condominial só produzem efeitos para os condôminos que estiveram presentes e votaram favoravelmente.",
      "O condômino pode, por ato unilateral, renunciar à sua fração ideal das partes comuns e, assim, eximir-se do pagamento das despesas.",
      "A convenção de condomínio, para ter eficácia perante terceiros, deve ser registrada no Registro de Imóveis.",
    ],
    gabarito: 0,
    comentario:
      "O STJ, por sua Corte Especial (EREsp 1.619.609/RJ), firmou o entendimento de que o imóvel gravado como bem de família pode ser penhorado para satisfação de dívida de condomínio edilício, pois a exclusão do bem de família nesse caso está implicitamente reconhecida como exceção, dada a natureza propter rem da obrigação. O condômino inadimplente sujeita-se a multa de até 2% (não 10%) sobre o débito, salvo disposição diversa na convenção (art. 1.336, §1º, CC).",
  },
  {
    id: 30,
    materia: "Civil",
    dificuldade: "Fácil",
    enunciado:
      "Quanto ao casamento no Código Civil de 2002, assinale a alternativa correta:",
    opcoes: [
      "O casamento religioso não produz efeitos civis em nenhuma hipótese.",
      "A emancipação do menor de 16 anos pelo casamento é vedada pelo Código Civil após a Lei 13.811/2019.",
      "O pacto antenupcial pode ser celebrado após o casamento, desde que haja concordância de ambos os cônjuges.",
      "O regime de bens legal supletivo é o da separação obrigatória de bens.",
      "O casamento pode ser realizado por procuração, desde que a procuração seja pública e contenha poderes especiais.",
    ],
    gabarito: 4,
    comentario:
      "O art. 1.542 do CC/02 autoriza o casamento por procuração, desde que ela seja pública, com poderes especiais, e o mandante revogue antes da celebração se assim desejar. A Lei 13.811/2019 vedou o casamento de menores de 16 anos, eliminando a exceção que permitia o casamento infantil para evitar imposição de pena ou em caso de gravidez. O regime supletivo (na falta de pacto) é o da comunhão parcial (art. 1.640). O pacto antenupcial deve ser celebrado antes do casamento.",
  },
  {
    id: 31,
    materia: "Civil",
    dificuldade: "Médio",
    enunciado: "Sobre a posse no Código Civil de 2002, é correto afirmar que:",
    opcoes: [
      "A posse de má-fé e a posse violenta são tratadas da mesma forma pelo Código Civil para fins de usucapião.",
      "O possuidor de boa-fé tem direito à indenização pelas benfeitorias necessárias e úteis, e poderá exercer o direito de retenção pelas úteis.",
      "O possuidor de má-fé tem direito apenas à indenização pelas benfeitorias necessárias, sem direito de retenção.",
      "A posse pode ser adquirida pelo próprio interessado ou por seu representante, mas não por terceiro sem mandato.",
      "A posse de má-fé não dá direito à indenização de qualquer natureza pelas benfeitorias.",
    ],
    gabarito: 2,
    comentario:
      "O art. 1.220 do CC/02 dispõe que o possuidor de má-fé responde por todos os frutos colhidos e percebidos, bem como os que por culpa sua deixou de perceber, mas tem direito a ser indenizado pelas despesas de conservação (benfeitorias necessárias) que houver feito. Não lhe assiste o direito de retenção pela realização dessas benfeitorias, nem indenização pelas voluptuárias. O possuidor de boa-fé tem direito à indenização pelas necessárias e úteis, com direito de retenção pelas úteis (art. 1.219).",
  },
  {
    id: 32,
    materia: "Civil",
    dificuldade: "Difícil",
    enunciado:
      "No âmbito do direito das sucessões, sobre a legítima e os herdeiros necessários, é correto afirmar:",
    opcoes: [
      "O cônjuge sobrevivente é sempre herdeiro necessário, concorrendo com descendentes independentemente do regime de bens.",
      "A legítima corresponde a dois terços dos bens da herança quando há herdeiros necessários.",
      "O testador pode incluir cláusula de inalienabilidade sobre bens da legítima, desde que haja justa causa.",
      "O herdeiro necessário pode ser privado da legítima por indignidade ou deserdação, sendo os efeitos idênticos nos dois institutos.",
      "Os ascendentes são herdeiros necessários e sempre concorrem com o cônjuge sobrevivente, independentemente do grau de parentesco.",
    ],
    gabarito: 2,
    comentario:
      "O art. 1.848 do CC/02 permite ao testador estabelecer cláusula de inalienabilidade, impenhorabilidade e incomunicabilidade sobre os bens da legítima, desde que haja justa causa declarada no testamento. A legítima corresponde à metade dos bens (art. 1.846) — não dois terços. O cônjuge concorre com descendentes apenas em alguns regimes de bens (art. 1.829). Indignidade e deserdação têm efeitos semelhantes mas processos distintos: a indignidade exige ação judicial; a deserdação é feita por testamento.",
  },
  {
    id: 33,
    materia: "Civil",
    dificuldade: "Médio",
    enunciado:
      "Sobre a locação de imóvel urbano regulada pela Lei 8.245/91, é correto afirmar que:",
    opcoes: [
      "O locador pode reajustar o aluguel a qualquer tempo, independentemente de previsão contratual.",
      "Nas locações residenciais por tempo indeterminado, o locador pode denunciar o contrato a qualquer momento, desde que notifique o locatário com 30 dias de antecedência.",
      "O locatário tem direito de preferência na compra do imóvel locado, devendo ser notificado pelo locador antes de aliená-lo a terceiros.",
      "A sublocação total do imóvel é permitida independentemente de autorização do locador.",
      "O fiador pode exonerar-se da fiança a qualquer tempo, mediante simples notificação ao locador.",
    ],
    gabarito: 2,
    comentario:
      "O art. 27 da Lei 8.245/91 garante ao locatário o direito de preferência para adquirir o imóvel locado, em igualdade de condições com terceiros. O locador deve notificá-lo com antecedência mínima de 30 dias, com informações sobre preço, condições de pagamento e demais dados. A sublocação total depende de autorização expressa do locador (art. 13). Nas locações por tempo indeterminado, o locador deve conceder prazo de 30 dias após a denúncia, mas deve haver hipótese legal.",
  },
  {
    id: 34,
    materia: "Civil",
    dificuldade: "Fácil",
    enunciado:
      "No direito de família, a guarda compartilhada no Código Civil e na Lei 13.058/2014:",
    opcoes: [
      "É aplicada apenas quando há acordo entre os genitores.",
      "É a regra a ser observada pelo juiz, salvo quando um dos genitores declarar que não deseja a guarda.",
      "Implica necessariamente que a criança viverá metade do tempo com cada genitor.",
      "É a regra preferencial, devendo ser aplicada mesmo quando não há acordo, salvo se um dos genitores estiver inapto ou se a medida não for do melhor interesse da criança.",
      "Pode ser concedida apenas em casamentos dissolvidos por divórcio, não se aplicando a uniões estáveis.",
    ],
    gabarito: 3,
    comentario:
      "A Lei 13.058/2014 alterou o art. 1.584 do CC para estabelecer a guarda compartilhada como regra, determinando que o juiz a aplique mesmo quando não houver acordo entre os genitores, salvo quando um deles declarar ao magistrado que não deseja a guarda ou quando houver motivo grave que a desaconselhe. A guarda compartilhada não exige residência alternada em tempo igual — significa compartilhamento de decisões sobre a vida do filho.",
  },
  {
    id: 35,
    materia: "Civil",
    dificuldade: "Difícil",
    enunciado:
      "Sobre o abuso do direito no Código Civil de 2002, é correto afirmar:",
    opcoes: [
      "O abuso do direito exige a comprovação de dolo ou culpa do agente para gerar responsabilidade civil.",
      "O abuso do direito é tratado pelo CC/02 como ato ilícito, e gera responsabilidade civil objetiva.",
      "O abuso do direito só pode ocorrer no âmbito das relações contratuais, não nas extracontratuais.",
      "A responsabilidade civil decorrente do abuso do direito é sempre subsidiária em relação à responsabilidade subjetiva.",
      "O exercício regular de um direito reconhecido exclui, sempre, a responsabilidade por abuso do direito.",
    ],
    gabarito: 1,
    comentario:
      "O art. 187 do CC/02 define o abuso do direito como ato ilícito, ao equiparar a ele o titular de direito que, ao exercê-lo, excede manifestamente os limites impostos pelo seu fim econômico ou social, pela boa-fé ou pelos bons costumes. O STJ (REsp 1.346.171) consolidou o entendimento de que a responsabilidade civil decorrente do abuso do direito é objetiva — dispensa comprovação de dolo ou culpa, bastando demonstrar o comportamento abusivo e o dano.",
  },
  {
    id: 36,
    materia: "Civil",
    dificuldade: "Médio",
    enunciado: "Sobre o testamento no Código Civil de 2002, é correto afirmar:",
    opcoes: [
      "O testamento particular pode ser elaborado de próprio punho ou digitado, desde que assinado pelo testador.",
      "O testamento público é elaborado pelo próprio testador e depositado em cartório para guarda.",
      "O testamento cerrado tem como característica ser lido publicamente pelo tabelião antes de ser cerrado e lacrado.",
      "O testamento hológrafo é uma espécie de testamento especial, aplicável apenas em situações de emergência.",
      "O testamento público é lavrado por tabelião em seu livro de notas, lido ao testador e assinado por ele e por duas testemunhas.",
    ],
    gabarito: 4,
    comentario:
      "O art. 1.864 do CC/02 prevê que o testamento público é lavrado por tabelião ou seu substituto em livro de notas, devendo ser lido ao testador e às duas testemunhas presentes, e assinado por todos. O testamento particular deve ser escrito e assinado de próprio punho pelo testador (não pode ser digitado em regra). O testamento cerrado é escrito pelo testador (ou por terceiro), aprovado e cerrado pelo tabelião. O testamento hológrafo não é modalidade especial no direito brasileiro.",
  },
  {
    id: 37,
    materia: "Civil",
    dificuldade: "Fácil",
    enunciado:
      "Sobre a usucapião ordinária de imóvel urbano, prevista no art. 1.242 do Código Civil de 2002, é correto afirmar que o prazo é de:",
    opcoes: [
      "5 anos, com posse mansa, pacífica e com justo título e boa-fé.",
      "10 anos, com posse mansa, pacífica e com justo título e boa-fé.",
      "15 anos, independentemente de título ou boa-fé.",
      "5 anos, desde que o imóvel haja sido adquirido onerosamente e registrado, sendo o registro cancelado posteriormente.",
      "10 anos, apenas se o possuidor nele estabelecer sua moradia habitual ou realizar obras de caráter produtivo.",
    ],
    gabarito: 1,
    comentario:
      "O art. 1.242 do CC/02 prevê a usucapião ordinária com prazo de 10 anos, exigindo posse contínua, mansa e pacífica, com justo título e boa-fé. O prazo cai para 5 anos se o imóvel houver sido adquirido onerosamente, com base no registro constante do respectivo cartório, cancelado posteriormente, desde que os possuidores nele tiverem estabelecido sua moradia ou realizado investimentos de interesse social e econômico (parágrafo único do art. 1.242 — usucapião ordinária tabular).",
  },
  {
    id: 38,
    materia: "Civil",
    dificuldade: "Difícil",
    enunciado:
      "Sobre as obrigações solidárias no Código Civil de 2002, assinale a alternativa correta:",
    opcoes: [
      "A solidariedade se presume; não é necessário que decorra da lei ou da vontade das partes.",
      "O credor solidário que receber a prestação integralmente fica obrigado a dividir o valor recebido com os demais credores, na proporção de seus quinhões.",
      "Na solidariedade passiva, o devedor que pagar integralmente a dívida não tem ação regressiva contra os demais devedores.",
      "A interrupção da prescrição em favor de um dos credores solidários prejudica os demais credores.",
      "A remissão concedida a um dos devedores solidários pelo credor exonera todos os demais pela dívida inteira.",
    ],
    gabarito: 1,
    comentario:
      "O art. 272 do CC/02 estabelece que o credor que tiver remitido a dívida ou recebido o pagamento responderá aos outros pela parte que lhes caiba. Em outras palavras, o credor solidário que receber o total deverá dividir com os demais co-credores o valor recebido na proporção de cada quota. A solidariedade não se presume (art. 265). O devedor que pagar integralmente tem ação regressiva (art. 283). A remissão de um devedor solidário exonera apenas ele, mantida a dívida dos demais com desconto proporcional (art. 277).",
  },
  {
    id: 39,
    materia: "Civil",
    dificuldade: "Médio",
    enunciado:
      "Sobre a responsabilidade dos pais pelos atos dos filhos menores no Código Civil de 2002, é correto afirmar:",
    opcoes: [
      "Os pais respondem objetivamente pelos atos dos filhos menores que estiverem sob sua autoridade e em sua companhia.",
      "A responsabilidade dos pais é subjetiva e exige comprovação de negligência na vigilância dos filhos.",
      "Os pais não respondem pelos atos dos filhos emancipados, mesmo que a emancipação seja voluntária.",
      "A responsabilidade dos pais é subsidiária em relação à responsabilidade direta do menor.",
      "Os pais respondem pelos atos dos filhos independentemente de a criança ter discernimento ou não.",
    ],
    gabarito: 0,
    comentario:
      "O art. 932, I, do CC/02 prevê que os pais são responsáveis pelos atos dos filhos menores que estiverem sob sua autoridade e em sua companhia, e o art. 933 estabelece que essa responsabilidade é objetiva — independe de culpa. O STJ consolidou o entendimento de que a responsabilidade dos pais é objetiva e solidária com a do filho. A emancipação (voluntária ou não) não isenta os pais — o STJ entende que a emancipação voluntária não afasta a responsabilidade solidária dos pais.",
  },
  {
    id: 40,
    materia: "Civil",
    dificuldade: "Fácil",
    enunciado:
      "O contrato de mútuo no Código Civil de 2002 é caracterizado como:",
    opcoes: [
      "Contrato real, unilateral e translativo de propriedade, pelo qual uma parte entrega à outra coisas fungíveis para que as utilize e restitua do mesmo gênero, qualidade e quantidade.",
      "Contrato consensual, bilateral e oneroso, pelo qual uma parte se obriga a transferir temporariamente o uso de bem a outra.",
      "Contrato real, bilateral e gratuito, pelo qual uma das partes entrega bem infungível a outra para uso temporário.",
      "Contrato consensual, unilateral e gratuito, pelo qual uma parte se obriga a pagar uma renda periódica à outra.",
      "Contrato real, bilateral e translativo de posse, pelo qual se transfere a posse temporária de bem móvel ou imóvel.",
    ],
    gabarito: 0,
    comentario:
      "O mútuo (art. 586 do CC/02) é o empréstimo de coisas fungíveis, como dinheiro. É contrato real (aperfeiçoa-se com a entrega da coisa), unilateral (após a entrega, só o mutuário tem obrigações) e translativo de propriedade (o mutuário torna-se proprietário das coisas e deve restituir outras tantas do mesmo gênero, qualidade e quantidade). O mútuo pode ser gratuito ou oneroso (mútuo feneratício, com cobrança de juros).",
  },

  // ──────────────────────────────────────────
  // DIREITO PENAL (41–60)
  // ──────────────────────────────────────────
  {
    id: 41,
    materia: "Penal",
    dificuldade: "Médio",
    enunciado:
      "Maria, funcionária pública, no exercício de sua função, recebe vantagem indevida antes de praticar ato de ofício. Segundo o Código Penal brasileiro, a conduta de Maria tipifica-se como:",
    opcoes: [
      "Concussão, prevista no art. 316 do CP.",
      "Corrupção passiva antecedente, prevista no art. 317 do CP.",
      "Peculato, prevista no art. 312 do CP.",
      "Prevaricação, prevista no art. 319 do CP.",
      "Emprego irregular de verbas, previsto no art. 315 do CP.",
    ],
    gabarito: 1,
    comentario:
      "O art. 317 do CP tipifica a corrupção passiva: solicitar ou receber vantagem indevida, em razão da função, ainda que antes de assumi-la. A hipótese narrada é de corrupção passiva antecedente. A concussão (art. 316) exige que o funcionário exija — não apenas receba — a vantagem.",
  },
  {
    id: 42,
    materia: "Penal",
    dificuldade: "Fácil",
    enunciado: "Segundo o Código Penal, o crime é doloso quando:",
    opcoes: [
      "O agente pratica a conduta sem intenção, mas assumindo o risco de produzir o resultado.",
      "O agente dá causa ao resultado por imprudência, negligência ou imperícia.",
      "O agente quis o resultado ou assumiu o risco de produzi-lo.",
      "O resultado é consequência imprevisível da conduta do agente.",
      "O agente age com culpa consciente, prevendo o resultado mas acreditando que ele não ocorrerá.",
    ],
    gabarito: 2,
    comentario:
      "O art. 18, I, do CP define o dolo: o crime é doloso quando o agente quis o resultado (dolo direto) ou assumiu o risco de produzi-lo (dolo eventual). O crime culposo (art. 18, II) ocorre quando o agente dá causa ao resultado por imprudência, negligência ou imperícia. A culpa consciente é modalidade de culpa — não de dolo — em que o agente prevê o resultado mas acredita poder evitá-lo.",
  },
  {
    id: 43,
    materia: "Penal",
    dificuldade: "Médio",
    enunciado:
      "Sobre as causas excludentes de ilicitude no Código Penal, é correto afirmar que:",
    opcoes: [
      "Na legítima defesa, é admissível a repulsa a agressão futura, desde que iminente e injusta.",
      "O estado de necessidade exige que o perigo não tenha sido provocado pelo próprio agente, em qualquer hipótese.",
      "O excesso na legítima defesa é sempre punível a título de dolo, sendo vedada a punição por culpa.",
      "O estrito cumprimento do dever legal aplica-se apenas a agentes públicos, não a particulares.",
      "A legítima defesa pode ser invocada contra ação de inimputável, desde que a agressão seja injusta.",
    ],
    gabarito: 4,
    comentario:
      "A legítima defesa (art. 25 do CP) pode ser exercida contra agressão injusta de qualquer pessoa, incluindo inimputáveis — o que importa é a injustiça objetiva da agressão, não a culpabilidade do agressor. A agressão deve ser atual ou iminente (não futura). O estado de necessidade pode ser reconhecido mesmo que o agente tenha contribuído para criar a situação de perigo (em alguns casos). O excesso pode ser punido tanto por dolo quanto por culpa (art. 23, parágrafo único, CP).",
  },
  {
    id: 44,
    materia: "Penal",
    dificuldade: "Difícil",
    enunciado:
      "Sobre o iter criminis e o crime tentado no Código Penal, é correto afirmar:",
    opcoes: [
      "A tentativa é punida com a mesma pena do crime consumado, salvo quando a lei dispõe de forma diferente.",
      "Na tentativa perfeita (crime falho), o agente não realiza todos os atos de execução por circunstâncias alheias à sua vontade.",
      "A desistência voluntária impede a punição pelo crime tentado, mas não por atos já praticados que constituam crime.",
      "O arrependimento eficaz ocorre quando o agente, após iniciar os atos executórios, desiste de prosseguir.",
      "A tentativa é admissível em todos os crimes dolosos, inclusive nos omissivos próprios.",
    ],
    gabarito: 2,
    comentario:
      "O art. 15 do CP dispõe sobre a desistência voluntária e o arrependimento eficaz, estabelecendo que o agente que voluntariamente desiste de prosseguir na execução ou impede que o resultado se produza responde pelos atos já praticados. Portanto, a desistência voluntária não exclui a responsabilidade pelos atos já praticados que constituam crime autônomo. A tentativa é punida com a pena do crime consumado reduzida de um a dois terços (art. 14, parágrafo único). Na tentativa perfeita, o agente esgota os atos executórios mas o resultado não ocorre.",
  },
  {
    id: 45,
    materia: "Penal",
    dificuldade: "Médio",
    enunciado:
      "Sobre o concurso de pessoas no Código Penal, assinale a alternativa correta:",
    opcoes: [
      "A participação de somenos importância obriga o juiz a reduzir a pena do partícipe.",
      "Todos os que concorrem para o crime recebem as mesmas penas, independentemente da forma de participação.",
      "A comunicabilidade das circunstâncias de caráter pessoal é regra geral no concurso de pessoas.",
      "O instigador que determina outrem a praticar crime doloso contra vítima determinada responde pelo crime do determinado.",
      "As condições de caráter pessoal do autor comunicam-se ao partícipe quando este as conhecia.",
    ],
    gabarito: 3,
    comentario:
      "O art. 29, caput, do CP adota a teoria monística temperada: quem, de qualquer modo, concorre para o crime incide nas penas a ele cominadas. No entanto, as penas podem ser diferenciadas (art. 29, §1º — participação de menor importância: redução de 1/6 a 1/3). O art. 30 estabelece que as circunstâncias e condições de caráter pessoal não se comunicam, salvo quando elementares do crime. O §2º do art. 29 prevê que se um dos concorrentes pratica crime mais grave, responde por ele o instigador que o quis.",
  },
  {
    id: 46,
    materia: "Penal",
    dificuldade: "Fácil",
    enunciado:
      "O crime de furto qualificado pelo concurso de pessoas (art. 155, §4º, IV, do CP) exige:",
    opcoes: [
      "A participação de, no mínimo, três agentes.",
      "Que os agentes sejam armados durante a subtração.",
      "A participação de, no mínimo, duas pessoas.",
      "Que haja prévia combinação (associação criminosa) entre os agentes.",
      "Que a subtração seja de coisa de grande valor.",
    ],
    gabarito: 2,
    comentario:
      "O art. 155, §4º, IV, do CP qualifica o furto quando praticado com concurso de duas ou mais pessoas. Não exige três agentes, nem armamento, nem associação criminosa prévia — basta a reunião de dois ou mais indivíduos, ainda que de forma eventual, para a prática do furto. O STJ entende que é suficiente que dois indivíduos participem da execução do delito, ainda que somente um pratique o núcleo do tipo.",
  },
  {
    id: 47,
    materia: "Penal",
    dificuldade: "Difícil",
    enunciado:
      "Sobre a teoria da imputação objetiva aplicada ao direito penal brasileiro, é correto afirmar:",
    opcoes: [
      "A teoria da imputação objetiva substitui completamente o nexo de causalidade natural no direito penal.",
      "Segundo a teoria, mesmo que exista nexo causal, não haverá imputação se o risco criado pelo agente for permitido ou o resultado estiver fora do âmbito de proteção da norma.",
      "A teoria é aplicada apenas aos crimes culposos, sendo irrelevante para os crimes dolosos.",
      "A imputação objetiva está expressamente prevista no Código Penal brasileiro.",
      "Segundo a teoria, a autocolocação da vítima em risco nunca exclui a responsabilidade do terceiro que criou o risco.",
    ],
    gabarito: 1,
    comentario:
      "A teoria da imputação objetiva, desenvolvida principalmente por Roxin, acrescenta ao nexo causal natural dois filtros normativos: (i) a criação de um risco juridicamente desaprovado e (ii) a realização desse risco no resultado concreto, dentro do âmbito de proteção da norma. Assim, mesmo havendo nexo causal físico, não haverá imputação se o risco for permitido (criação de risco não proibido) ou o resultado estiver fora do escopo da norma. A autocolocação voluntária da vítima em risco é reconhecida pela doutrina como causa excludente da imputação.",
  },
  {
    id: 48,
    materia: "Penal",
    dificuldade: "Médio",
    enunciado:
      "Sobre o crime de homicídio privilegiado (art. 121, §1º, do CP), é correto afirmar:",
    opcoes: [
      "O homicídio privilegiado é incompatível com as qualificadoras de natureza objetiva.",
      "O homicídio privilegiado é sempre considerado crime hediondo.",
      "A aplicação do privilégio é obrigatória quando presentes os requisitos legais, tratando-se de circunstância legal obrigatória.",
      "O homicídio privilegiado ocorre quando o agente comete o crime sob domínio de violenta emoção provocada por ato injusto da vítima.",
      "O homicídio privilegiado não admite concurso com o homicídio qualificado.",
    ],
    gabarito: 2,
    comentario:
      "O STJ e o STF pacificaram o entendimento de que o homicídio pode ser ao mesmo tempo privilegiado e qualificado, desde que a qualificadora seja de natureza objetiva (modo de execução) e o privilégio seja de natureza subjetiva (estado emocional do agente). O privilégio do art. 121, §1º é de natureza subjetiva e, se reconhecido pelo júri, é de aplicação obrigatória — não facultativa — reduzindo a pena de 1/6 a 1/3.",
  },
  {
    id: 49,
    materia: "Penal",
    dificuldade: "Fácil",
    enunciado:
      "O crime de estelionato (art. 171 do CP) exige, para sua configuração, os seguintes elementos:",
    opcoes: [
      "Uso de violência ou grave ameaça para obtenção de vantagem indevida.",
      "Obtenção de vantagem ilícita mediante subtração de coisa alheia.",
      "Obtenção de vantagem ilícita, em prejuízo alheio, induzindo ou mantendo alguém em erro mediante artifício, ardil ou qualquer meio fraudulento.",
      "Uso de documento falso para obtenção de benefício junto ao poder público.",
      "Subtração de coisa alheia móvel, para si ou para outrem, com emprego de fraude.",
    ],
    gabarito: 2,
    comentario:
      "O art. 171 do CP define o estelionato: obter vantagem ilícita, em prejuízo alheio, induzindo ou mantendo alguém em erro, mediante artifício, ardil, ou qualquer outro meio fraudulento. Os elementos essenciais são: (i) fraude como meio; (ii) erro da vítima; (iii) vantagem ilícita; (iv) prejuízo alheio. Distingue-se do roubo (violência/grave ameaça) e do furto (subtração sem fraude que induz ao erro).",
  },
  {
    id: 50,
    materia: "Penal",
    dificuldade: "Difícil",
    enunciado:
      "Sobre a aplicação da pena no sistema brasileiro, é correto afirmar:",
    opcoes: [
      "O juiz deve fixar a pena-base sempre no mínimo legal quando não há circunstâncias agravantes.",
      "As circunstâncias atenuantes podem reduzir a pena abaixo do mínimo legal, conforme entendimento do STJ.",
      "O método trifásico de aplicação da pena é obrigatório apenas para os crimes dolosos.",
      "Na segunda fase, as agravantes e atenuantes só incidem se expressamente previstas em lei.",
      "O sistema trifásico prevê: fixação da pena-base, aplicação de agravantes e atenuantes, e causas de aumento e diminuição de pena.",
    ],
    gabarito: 4,
    comentario:
      "O método trifásico de Nelson Hungria, adotado pelo CP, envolve: 1ª fase — fixação da pena-base conforme o art. 59; 2ª fase — aplicação das circunstâncias agravantes (art. 61-62) e atenuantes (art. 65-66); 3ª fase — causas de aumento e diminuição de pena. O STJ (Súmula 231) consolidou que as atenuantes não podem reduzir a pena abaixo do mínimo legal, assim como as agravantes não podem elevá-la acima do máximo.",
  },
  {
    id: 51,
    materia: "Penal",
    dificuldade: "Médio",
    enunciado:
      "Sobre o crime de tráfico de drogas (Lei 11.343/2006), assinale a alternativa correta:",
    opcoes: [
      "A posse de qualquer quantidade de droga configura, necessariamente, o crime de tráfico.",
      "O porte de drogas para consumo pessoal é crime com pena de detenção de 6 meses a 1 ano.",
      "O tráfico de drogas é crime hediondo e não admite fiança nem graça.",
      "O tráfico privilegiado (art. 33, §4º) é crime hediondo, conforme entendimento atual do STF.",
      "A figura do tráfico privilegiado permite redução de pena de 1/6 a 2/3 quando o agente for primário, de bons antecedentes, não se dedique a atividades criminosas nem integre organização criminosa.",
    ],
    gabarito: 4,
    comentario:
      "O art. 33, §4º, da Lei 11.343/2006 prevê redução de pena de 1/6 a 2/3 para o agente primário, de bons antecedentes, que não se dedique a atividades criminosas nem integre organização criminosa — o chamado tráfico privilegiado. O STF, no HC 118.533 (2016), firmou que o tráfico privilegiado não é crime hediondo. O porte para consumo pessoal (art. 28) não é mais punido com pena privativa de liberdade — as sanções são advertência, prestação de serviços à comunidade e medida educativa.",
  },
  {
    id: 52,
    materia: "Penal",
    dificuldade: "Fácil",
    enunciado:
      "Sobre a ação penal no Código de Processo Penal, o crime de estupro (art. 213 do CP) é de ação penal:",
    opcoes: [
      "Pública incondicionada em todos os casos.",
      "Privada, dependendo exclusivamente da queixa-crime da vítima.",
      "Pública condicionada à representação da vítima quando a vítima for maior de 18 anos e não for vulnerável.",
      "Privada subsidiária da pública.",
      "Pública incondicionada apenas quando a vítima for menor de 14 anos.",
    ],
    gabarito: 0,
    comentario:
      "A Lei 13.718/2018 alterou o art. 225 do CP para tornar pública incondicionada a ação penal nos crimes contra a dignidade sexual, independentemente da idade da vítima ou de sua vulnerabilidade. Antes dessa lei, o crime de estupro praticado contra maior de 18 anos era de ação penal pública condicionada à representação. Atualmente, o Ministério Público age de ofício em todos os casos.",
  },
  {
    id: 53,
    materia: "Penal",
    dificuldade: "Difícil",
    enunciado:
      "Sobre o erro de tipo e o erro de proibição no Código Penal, é correto afirmar:",
    opcoes: [
      "O erro de tipo escusável exclui o dolo e a culpa, enquanto o inescusável exclui apenas o dolo.",
      "O erro de proibição escusável exclui o crime por afastar a tipicidade da conduta.",
      "O erro sobre elemento constitutivo do tipo legal exclui o dolo, e, se escusável, isenta o agente de pena por afastar também a culpa.",
      "O erro de proibição incide sobre os fatos e exclui a tipicidade quando inevitável.",
      "Tanto o erro de tipo quanto o erro de proibição, quando inevitáveis, excluem a ilicitude da conduta.",
    ],
    gabarito: 2,
    comentario:
      "O art. 20 do CP dispõe que o erro sobre elemento constitutivo do tipo legal de crime exclui o dolo (erro de tipo), mas permite a punição por crime culposo se o erro for inescusável (evitável) e se houver previsão legal para a modalidade culposa. Se o erro for escusável (inevitável), exclui dolo e culpa, isentando o agente de pena. O erro de proibição (art. 21) recai sobre a consciência da ilicitude — se inevitável, isenta de pena; se evitável, reduz a pena.",
  },
  {
    id: 54,
    materia: "Penal",
    dificuldade: "Médio",
    enunciado:
      "Sobre a Lei Maria da Penha (Lei 11.340/2006), é correto afirmar que:",
    opcoes: [
      "Aplica-se exclusivamente às mulheres casadas com o agressor.",
      "A ação penal nos crimes de lesão corporal leve praticados no contexto de violência doméstica é pública condicionada à representação da vítima.",
      "A Lei veda a aplicação de penas de cesta básica ou outras de prestação pecuniária nos casos de violência doméstica.",
      "Para a aplicação da Lei, é necessário que a vítima e o agressor coabitem no mesmo imóvel.",
      "A Lei aplica-se somente nos casos em que a agressão seja praticada por homem contra mulher.",
    ],
    gabarito: 2,
    comentario:
      "O art. 17 da Lei 11.340/2006 veda a aplicação, nos casos de violência doméstica e familiar contra a mulher, de penas de cesta básica ou outras de prestação pecuniária, bem como a substituição de pena que implique o pagamento isolado de multa. A ação penal por lesão corporal leve no contexto da Lei Maria da Penha é pública incondicionada, conforme o STJ (Súmula 542). A Lei se aplica independentemente de coabitação ou de vínculo matrimonial, alcançando qualquer relação íntima de afeto.",
  },
  {
    id: 55,
    materia: "Penal",
    dificuldade: "Fácil",
    enunciado:
      "O crime de receptação dolosa simples (art. 180, caput, do CP) consiste em:",
    opcoes: [
      "Adquirir, receber, transportar, conduzir ou ocultar coisa alheia móvel cuja origem ilícita o agente conhecia ou devia conhecer.",
      "Adquirir, receber, transportar, conduzir ou ocultar coisa que sabe ser produto de crime.",
      "Receber produto de crime a título gratuito, por culpa.",
      "Transportar mercadoria roubada em proveito de terceiro, sem ter participado do crime anterior.",
      "Vender produto de crime em estabelecimento comercial, em nome de terceiro.",
    ],
    gabarito: 1,
    comentario:
      "O art. 180, caput, do CP tipifica a receptação dolosa simples: adquirir, receber, transportar, conduzir ou ocultar, em proveito próprio ou alheio, coisa que sabe ser produto de crime. O elemento subjetivo é o dolo — o agente sabe que a coisa é produto de crime. O §1º traz a receptação dolosa qualificada (para quem pratica o crime no exercício de atividade comercial) e o §3º a receptação culposa (devia conhecer).",
  },
  {
    id: 56,
    materia: "Penal",
    dificuldade: "Difícil",
    enunciado:
      "Sobre a lavagem de dinheiro (Lei 9.613/98, com as alterações da Lei 12.683/2012), é correto afirmar:",
    opcoes: [
      "Após a Lei 12.683/2012, o crime de lavagem de dinheiro passou a exigir que a infração antecedente seja um crime hediondo.",
      "A lavagem de dinheiro pressupõe que o agente tenha participado da infração penal antecedente.",
      "A Lei 9.613/98 não prevê a figura do crime de lavagem por omissão.",
      "A denúncia por lavagem de dinheiro pode ser recebida independentemente do processo da infração antecedente, que pode ser investigada em paralelo.",
      "A lavagem de dinheiro exige que o produto ocultado seja proveniente exclusivamente de crimes contra o sistema financeiro.",
    ],
    gabarito: 3,
    comentario:
      "Após a Lei 12.683/2012, o rol de crimes antecedentes foi eliminado — qualquer infração penal (crime ou contravenção) pode ser antecedente da lavagem. O art. 2º, §1º, da Lei 9.613/98 estabelece que a denúncia será instruída com indícios suficientes da existência da infração penal antecedente, sendo os crimes de lavagem apurados independentemente do processo e julgamento das infrações penais precedentes.",
  },
  {
    id: 57,
    materia: "Penal",
    dificuldade: "Médio",
    enunciado:
      "Sobre os crimes contra a honra no Código Penal, é correto afirmar que:",
    opcoes: [
      "A calúnia consiste em ofender a dignidade ou decoro de alguém.",
      "A difamação consiste em imputar falsamente a alguém fato definido como crime.",
      "A injúria consiste em imputar a alguém fato ofensivo à sua reputação, sem que seja necessariamente falso.",
      "A exceção da verdade é admitida em todos os crimes contra a honra.",
      "A injúria racial é modalidade qualificada de injúria, com pena mais grave que a injúria simples.",
    ],
    gabarito: 4,
    comentario:
      "O art. 140, §3º, do CP tipifica a injúria racial (preconceito de raça, cor, etnia, religião, origem ou condição de pessoa idosa ou portadora de deficiência) com pena de reclusão de 1 a 3 anos e multa. A calúnia (art. 138) é imputar falsamente crime; a difamação (art. 139) é imputar fato ofensivo à reputação (não precisa ser crime nem falso); a injúria (art. 140) é ofender dignidade ou decoro. A exceção da verdade não é admitida na injúria; na difamação, é admitida apenas em casos específicos.",
  },
  {
    id: 58,
    materia: "Penal",
    dificuldade: "Fácil",
    enunciado:
      "Sobre a prescrição penal, o prazo prescricional começa a correr, em regra, para o crime consumado:",
    opcoes: [
      "Da data do indiciamento do suspeito.",
      "Da data do recebimento da denúncia pelo juiz.",
      "Do dia em que o crime se consumou.",
      "Da data em que o Ministério Público teve conhecimento do fato.",
      "Da data em que a autoridade policial instaurou o inquérito policial.",
    ],
    gabarito: 2,
    comentario:
      "O art. 111, I, do CP estabelece que a prescrição, antes de transitar em julgado a sentença final, começa a correr do dia em que o crime se consumou (para crimes consumados). Para crimes permanentes, começa a correr do dia em que cessa a permanência; para bigamia e falsidade, do dia em que o fato se tornou conhecido.",
  },
  {
    id: 59,
    materia: "Penal",
    dificuldade: "Médio",
    enunciado:
      "Sobre o crime de peculato (art. 312 do CP), assinale a alternativa correta:",
    opcoes: [
      "O peculato culposo é punido com a mesma pena do peculato doloso.",
      "O peculato mediante erro de outrem (art. 313) exige que o funcionário induza ativamente a vítima ao erro.",
      "No peculato-furto, o funcionário público subtrai coisa alheia móvel de que não tem a posse em razão do cargo.",
      "O peculato-desvio ocorre quando o funcionário se apropria de dinheiro em razão de erro de outrem.",
      "A reparação do dano antes do trânsito em julgado extingue a punibilidade no peculato culposo.",
    ],
    gabarito: 4,
    comentario:
      "O art. 312, §3º, do CP prevê que no peculato culposo, se o funcionário público reparar o dano antes da sentença irrecorrível, a punibilidade é extinta. Se o fizer após, a pena é reduzida pela metade. O peculato-furto (art. 312, §1º) é praticado por funcionário que subtrai ou concorre para que terceiro subtraia bem de que não tem posse. O peculato mediante erro de outrem (art. 313) é cometido por funcionário que, em proveito próprio ou alheio, recebe importância indevida aproveitando-se de erro de outrem — sem necessidade de induzimento ativo.",
  },
  {
    id: 60,
    materia: "Penal",
    dificuldade: "Difícil",
    enunciado: "Sobre o crime organizado (Lei 12.850/2013), é correto afirmar:",
    opcoes: [
      "A organização criminosa exige a participação de, no mínimo, 5 pessoas.",
      "A colaboração premiada pode beneficiar apenas o investigado que for o primeiro a colaborar com as autoridades.",
      "O acordo de colaboração premiada é meio de prova suficiente, por si só, para fundamentar a condenação do colaborador ou de terceiros.",
      "A infiltração de agente policial em organização criminosa depende de ordem judicial e pode ser renovada.",
      "A Lei 12.850/2013 define organização criminosa como associação de 4 ou mais pessoas com caráter permanente, voltada à prática de infrações penais com penas máximas superiores a 4 anos.",
    ],
    gabarito: 4,
    comentario:
      "O art. 1º, §1º, da Lei 12.850/2013 define organização criminosa como a associação de 4 ou mais pessoas estruturalmente ordenada e caracterizada pela divisão de tarefas, ainda que informalmente, com objetivo de obter vantagem de qualquer natureza, mediante a prática de infrações penais cujas penas máximas sejam superiores a 4 anos, ou que sejam de caráter transnacional. As declarações do colaborador não podem, sozinhas, fundamentar condenação (art. 4º, §16).",
  },

  // ──────────────────────────────────────────
  // DIREITO DO TRABALHO (61–80)
  // ──────────────────────────────────────────
  {
    id: 61,
    materia: "Trabalho",
    dificuldade: "Fácil",
    enunciado:
      "Sobre o aviso prévio na rescisão contratual sem justa causa por iniciativa do empregador, conforme a legislação trabalhista vigente, é correto afirmar:",
    opcoes: [
      "O aviso prévio é sempre de 30 dias, independentemente do tempo de serviço.",
      "O aviso prévio é proporcional ao tempo de serviço, sendo de 30 dias para até 1 ano e acrescido de 3 dias por ano trabalhado, até o máximo de 90 dias.",
      "O empregado pode optar por não cumprir o aviso prévio, sem qualquer desconto salarial.",
      "O aviso prévio proporcional não se aplica a contratos de experiência.",
      "O empregador pode dispensar o aviso prévio apenas em caso de justa causa do empregado.",
    ],
    gabarito: 1,
    comentario:
      "A Lei 12.506/2011 regulamentou o aviso prévio proporcional: mínimo de 30 dias, acrescido de 3 dias por ano de serviço, até o máximo de 90 dias. O contrato de experiência encerra-se pelo advento do termo ou pela resilição antecipada, com regras próprias.",
  },
  {
    id: 62,
    materia: "Trabalho",
    dificuldade: "Médio",
    enunciado:
      "De acordo com a CLT e a Constituição Federal, a jornada de trabalho em turnos ininterruptos de revezamento é de:",
    opcoes: [
      "8 horas diárias e 44 horas semanais.",
      "6 horas diárias, salvo negociação coletiva que estabeleça jornada diversa.",
      "6 horas diárias, sendo vedada qualquer negociação coletiva para ampliação.",
      "8 horas diárias, com intervalo obrigatório de 1 hora.",
      "4 horas diárias, aplicando-se o regime de compensação quinzenal.",
    ],
    gabarito: 1,
    comentario:
      "O art. 7º, XIV, da CF/88 estabelece a jornada de 6 horas para o trabalho realizado em turnos ininterruptos de revezamento, salvo negociação coletiva. O STF, no Tema 1.046 da repercussão geral, reconheceu a validade de negociação coletiva que amplie esta jornada, desde que haja contrapartida.",
  },
  {
    id: 63,
    materia: "Trabalho",
    dificuldade: "Difícil",
    enunciado:
      "Sobre a terceirização trabalhista após a Lei 13.429/2017 e a reforma trabalhista (Lei 13.467/2017), é correto afirmar:",
    opcoes: [
      "A terceirização é permitida apenas para atividades-meio da empresa tomadora, sendo vedada para atividades-fim.",
      "A empresa tomadora de serviços responde solidariamente pelas obrigações trabalhistas da prestadora.",
      "A terceirização é permitida para qualquer atividade da empresa, inclusive a atividade-fim, e a responsabilidade da tomadora é subsidiária.",
      "A empresa prestadora de serviços deve ter capital mínimo de R$ 100.000,00 e registro no Ministério do Trabalho.",
      "A terceirização para atividade-fim é permitida desde que haja autorização expressa em convenção coletiva.",
    ],
    gabarito: 2,
    comentario:
      "Com a Lei 13.429/2017 e a confirmação pelo STF no julgamento da ADPF 324 e RE 958.252 (Tema 725), a terceirização passou a ser permitida para qualquer atividade da empresa tomadora, inclusive a atividade-fim. A responsabilidade da empresa tomadora é subsidiária (não solidária) em relação às obrigações trabalhistas da prestadora, conforme o art. 5º-A, §5º, da Lei 6.019/74.",
  },
  {
    id: 64,
    materia: "Trabalho",
    dificuldade: "Médio",
    enunciado:
      "Sobre o contrato de trabalho por tempo determinado na CLT, é correto afirmar que:",
    opcoes: [
      "O contrato por prazo determinado pode ser celebrado por prazo máximo de 1 ano.",
      "O contrato de experiência é modalidade de contrato por prazo determinado, com prazo máximo de 90 dias.",
      "O contrato por prazo determinado pode ser prorrogado por mais de uma vez, desde que o prazo total não supere 2 anos.",
      "A rescisão antecipada pelo empregador do contrato por prazo determinado obriga apenas ao pagamento dos salários do período restante.",
      "O contrato por prazo determinado, uma vez prorrogado, converte-se automaticamente em contrato por prazo indeterminado.",
    ],
    gabarito: 1,
    comentario:
      "O art. 445 da CLT estabelece que o contrato de experiência, como espécie de contrato por prazo determinado, não poderá exceder 90 dias. O contrato por prazo determinado em geral pode ser celebrado por até 2 anos (art. 445, caput). A prorrogação por mais de uma vez converte-o em indeterminado (art. 451). A rescisão antecipada pelo empregador obriga ao pagamento de indenização de metade dos salários a que teriam direito até o final do contrato (art. 479).",
  },
  {
    id: 65,
    materia: "Trabalho",
    dificuldade: "Fácil",
    enunciado:
      "Segundo a CLT, o empregado tem direito a férias anuais remuneradas. Sobre o abono pecuniário das férias, é correto afirmar que:",
    opcoes: [
      "O empregado pode converter um terço das férias em abono pecuniário.",
      "O abono pecuniário é obrigatório e deve ser pago independentemente de requerimento do empregado.",
      "O empregado pode converter até a metade das férias em abono pecuniário, desde que haja anuência do empregador.",
      "O abono pecuniário é concedido apenas ao empregado que não utilizou as férias no período concessivo.",
      "O abono pecuniário é calculado sobre a remuneração integral, incluindo horas extras habitualmente pagas.",
    ],
    gabarito: 0,
    comentario:
      "O art. 143 da CLT permite ao empregado converter um terço das férias em abono pecuniário, no valor correspondente a esse período. O requerimento deve ser feito até 15 dias antes do término do período aquisitivo. O abono pecuniário não é obrigatório — depende de iniciativa do empregado e não pode ser recusado pelo empregador se feito no prazo.",
  },
  {
    id: 66,
    materia: "Trabalho",
    dificuldade: "Médio",
    enunciado:
      "Sobre a estabilidade da gestante no emprego, conforme a CF/88 e a jurisprudência do TST e do STF:",
    opcoes: [
      "A estabilidade da gestante depende de comunicação formal da gravidez ao empregador.",
      "A gestante admitida por contrato de experiência não tem direito à estabilidade.",
      "A estabilidade da gestante é objetiva — basta a confirmação da gravidez durante o contrato, independentemente de a empresa saber da gravidez.",
      "A estabilidade vai até o nascimento do filho, não alcançando o período pós-parto.",
      "A empregada doméstica gestante não tem direito à estabilidade provisória.",
    ],
    gabarito: 2,
    comentario:
      "O STF, no julgamento do RE 629.053 (Tema 497), fixou a tese de que a proteção da gestante é objetiva: o direito à estabilidade provisória independe da comunicação ao empregador e do desconhecimento da própria empregada sobre a gravidez no momento da dispensa. A estabilidade vai da confirmação da gravidez até 5 meses após o parto (art. 10, II, 'b', ADCT). Inclui contratos por prazo determinado, como o de experiência, conforme Súmula 244, III, do TST.",
  },
  {
    id: 67,
    materia: "Trabalho",
    dificuldade: "Difícil",
    enunciado:
      "Sobre o teletrabalho (trabalho remoto) após a Reforma Trabalhista (Lei 13.467/2017), é correto afirmar:",
    opcoes: [
      "O empregado em regime de teletrabalho tem direito ao controle de jornada e, por conseguinte, às horas extras.",
      "O contrato de teletrabalho pode ser estabelecido tanto no ato de contratação quanto de forma superveniente, mediante acordo individual escrito.",
      "A empresa é sempre responsável por fornecer os equipamentos necessários ao teletrabalho, não podendo repassar esse ônus ao empregado.",
      "O teletrabalho é permitido apenas para atividades que possam ser mensuradas por produção ou tarefa.",
      "O empregado em teletrabalho não pode ser convocado para comparecer às dependências do empregador.",
    ],
    gabarito: 1,
    comentario:
      "O art. 75-C da CLT permite que o regime de teletrabalho seja acordado no ato de admissão ou de forma superveniente, mediante mútuo acordo formalizado em aditivo contratual. A alteração do presencial para o teletrabalho depende de acordo individual; a volta ao presencial pode ser determinada pelo empregador com prazo de 15 dias de aviso. O empregado em teletrabalho é excluído do controle de jornada (art. 62, III, CLT), salvo se houver controle efetivo. A responsabilidade pelos equipamentos é definida em contrato.",
  },
  {
    id: 68,
    materia: "Trabalho",
    dificuldade: "Médio",
    enunciado:
      "Sobre o poder disciplinar do empregador e a justa causa para rescisão do contrato de trabalho, é correto afirmar:",
    opcoes: [
      "A justa causa pode ser reconhecida pelo empregador apenas após decisão judicial transitada em julgado.",
      "A embriaguez fora do serviço é causa de justa causa, desde que habitual e comprovada.",
      "O empregador deve aplicar as penalidades disciplinares (advertência, suspensão e demissão por justa causa) obrigatoriamente nessa ordem.",
      "A desídia no desempenho das funções é justa causa que dispensa comprovação de caráter habitual.",
      "A condenação criminal do empregado, por si só, sem trânsito em julgado, já configura justa causa para demissão.",
    ],
    gabarito: 1,
    comentario:
      "O art. 482, 'f', da CLT prevê como justa causa a embriaguez habitual ou em serviço. A embriaguez fora do serviço só é causa de justa causa quando habitual e quando afetar a execução do contrato. O empregador não precisa esgotar advertências antes da demissão por justa causa — a graduação é recomendável mas não obrigatória para todas as faltas. A desídia exige habitualidade. A condenação criminal irrecorrível, que não seja revertida ou que impeça a prestação laboral, pode ensejar justa causa — mas não qualquer condenação sem trânsito em julgado.",
  },
  {
    id: 69,
    materia: "Trabalho",
    dificuldade: "Fácil",
    enunciado:
      "O salário mínimo no Brasil, segundo a Constituição Federal de 1988, deve atender às necessidades vitais básicas do trabalhador e de sua família. Sobre o salário mínimo, é correto afirmar que:",
    opcoes: [
      "O salário mínimo pode ser substituído por salário profissional menor, desde que haja previsão em acordo individual.",
      "É vedada a vinculação do salário mínimo para qualquer fim, inclusive para reajuste de benefícios previdenciários.",
      "O salário mínimo é fixado em lei e não pode ser vinculado para fins de cálculo de vantagens salariais.",
      "O empregador pode pagar salário inferior ao mínimo legal quando o empregado não cumprir integralmente a jornada.",
      "O salário mínimo é fixado em lei, sendo vedado utilizar o salário mínimo como indexador ou base de cálculo de vantagem de qualquer natureza.",
    ],
    gabarito: 4,
    comentario:
      "O art. 7º, IV, da CF/88 fixa o salário mínimo nacionalmente unificado e veda sua vinculação para qualquer fim. O STF, na Súmula Vinculante 4, proibiu a utilização do salário mínimo como indexador de base de cálculo de vantagem de servidor público ou de empregado, nem como substituto de remuneração, mas tal vedação não impede o reajuste de benefícios previdenciários pagos com base no salário mínimo (conforme EC 20/98 e legislação superveniente).",
  },
  {
    id: 70,
    materia: "Trabalho",
    dificuldade: "Difícil",
    enunciado:
      "Sobre os dissídios coletivos no processo do trabalho, é correto afirmar:",
    opcoes: [
      "O dissídio coletivo de natureza jurídica tem por objeto a criação de novas condições de trabalho.",
      "O dissídio coletivo pode ser ajuizado por qualquer das partes, independentemente de tentativa prévia de negociação.",
      "A CF/88, com a EC 45/2004, exige o mútuo acordo das partes como condição para o ajuizamento do dissídio coletivo de natureza econômica.",
      "O poder normativo da Justiça do Trabalho foi completamente extinto pela EC 45/2004.",
      "O dissídio coletivo de natureza econômica visa à interpretação de normas preexistentes, sem criar novas condições.",
    ],
    gabarito: 2,
    comentario:
      "O art. 114, §2º, da CF/88 (com redação dada pela EC 45/2004) estabelece que, recusando-se qualquer das partes à negociação coletiva ou à arbitragem, é facultado às mesmas, de comum acordo, ajuizar dissídio coletivo de natureza econômica perante o TST. Ou seja, exige mútuo acordo para o ajuizamento. O dissídio econômico cria novas condições de trabalho; o jurídico interpreta normas. O poder normativo foi limitado, não extinto.",
  },
  {
    id: 71,
    materia: "Trabalho",
    dificuldade: "Médio",
    enunciado:
      "Sobre o FGTS (Fundo de Garantia do Tempo de Serviço), é correto afirmar que:",
    opcoes: [
      "A alíquota de recolhimento do FGTS é de 10% sobre a remuneração do trabalhador.",
      "O trabalhador pode sacar o FGTS a qualquer tempo, independentemente de situação de desemprego.",
      "Na rescisão sem justa causa, o empregador deve depositar multa de 50% sobre o saldo do FGTS.",
      "O FGTS é obrigatório para todos os trabalhadores regidos pela CLT, incluindo trabalhadores domésticos.",
      "A multa rescisória do FGTS, na dispensa sem justa causa, corresponde a 40% dos depósitos realizados durante o contrato.",
    ],
    gabarito: 4,
    comentario:
      "O art. 18, §1º, da Lei 8.036/90 estabelece que, na rescisão sem justa causa, o empregador deverá depositar na conta vinculada do empregado importância igual a 40% do montante de todos os depósitos realizados na conta durante a vigência do contrato. A alíquota de recolhimento é de 8% (não 10%). O trabalhador pode sacar o FGTS em hipóteses específicas previstas em lei (desemprego involuntário, compra de imóvel, aposentadoria, doenças graves, etc.).",
  },
  {
    id: 72,
    materia: "Trabalho",
    dificuldade: "Fácil",
    enunciado:
      "Sobre o adicional de insalubridade previsto na CLT, é correto afirmar que:",
    opcoes: [
      "O adicional de insalubridade incide sobre o salário contratual do empregado.",
      "O adicional de insalubridade é calculado sobre o salário mínimo, conforme a Súmula Vinculante 4 do STF.",
      "Os percentuais de adicional de insalubridade são: 10%, 20% e 40%, conforme o grau mínimo, médio e máximo.",
      "O adicional de insalubridade pode ser eliminado pelo uso de EPI adequado, a critério do empregador.",
      "O adicional de insalubridade e o adicional de periculosidade são cumuláveis.",
    ],
    gabarito: 2,
    comentario:
      "O art. 192 da CLT estabelece os percentuais de 10%, 20% e 40% para os graus mínimo, médio e máximo de insalubridade, respectivamente. Quanto à base de cálculo, a Súmula Vinculante 4 do STF vedou o uso do salário mínimo como indexador — o adicional deve incidir sobre o salário básico da categoria, e não sobre o mínimo. O adicional de insalubridade e o de periculosidade não são cumuláveis (art. 193, §2º, CLT). O uso de EPI eficaz neutraliza o direito ao adicional, mas exige comprovação técnica (Súmula 289, TST).",
  },
  {
    id: 73,
    materia: "Trabalho",
    dificuldade: "Difícil",
    enunciado:
      "Sobre o reconhecimento da relação de emprego com o tomador de serviços (vínculo empregatício direto) nas hipóteses de trabalho intermitente e autônomo exclusivo, assinale a alternativa correta:",
    opcoes: [
      "O contrato de trabalho intermitente, previsto na CLT após a Reforma de 2017, sempre gera vínculo empregatício pleno com todos os direitos trabalhistas.",
      "O trabalhador autônomo exclusivo que presta serviços a uma única empresa tem reconhecido automaticamente o vínculo empregatício pelo TST.",
      "O simples uso de aplicativo de transporte por motorista não gera, por si só, relação de emprego, conforme o art. 442-B da CLT.",
      "O trabalho intermitente não admite período de inatividade remunerado; nos intervalos entre convocações, o trabalhador não tem qualquer direito.",
      "O contrato de trabalho autônomo exclusivo é vedado pela CLT após a Reforma Trabalhista.",
    ],
    gabarito: 2,
    comentario:
      "O art. 442-B da CLT (inserido pela Lei 13.467/2017) prevê que a contratação do autônomo, cumpridas por este todas as formalidades legais, com ou sem exclusividade, de forma contínua ou não, afasta a qualidade de empregado. O contrato de trabalho intermitente gera vínculo empregatício, mas os direitos são proporcionais às horas trabalhadas (salário, FGTS, férias, 13º). O TST analisa os elementos da relação de emprego caso a caso para motoristas de aplicativo.",
  },
  {
    id: 74,
    materia: "Trabalho",
    dificuldade: "Médio",
    enunciado: "Sobre a prescrição trabalhista, é correto afirmar que:",
    opcoes: [
      "O prazo prescricional para créditos trabalhistas é de 5 anos durante o contrato e 3 anos após o término do contrato.",
      "A prescrição trabalhista não pode ser pronunciada de ofício pelo juiz.",
      "O prazo prescricional para ação trabalhista é de 2 anos após a extinção do contrato, com prescrição de 5 anos para créditos exigíveis antes dessa data.",
      "A prescrição do menor de 18 anos começa a correr a partir do nascimento do direito, sendo o prazo de 5 anos.",
      "A prescrição pode ser interrompida pelo ajuizamento de reclamação trabalhista, mas apenas uma vez.",
    ],
    gabarito: 2,
    comentario:
      "O art. 7º, XXIX, da CF/88 e o art. 11 da CLT estabelecem: prazo de 2 anos para ajuizar ação após a extinção do contrato de trabalho; e prescrição quinquenal para créditos exigíveis nos 5 anos anteriores ao ajuizamento (ou à extinção do contrato, nos contratos em vigor). O menor de 18 anos não tem prescrição correndo contra si (art. 440, CLT). A prescrição pode ser declarada de ofício pelo juiz (Súmula 153, TST, cancelada; hoje aplica-se o art. 487, II, CPC).",
  },
  {
    id: 75,
    materia: "Trabalho",
    dificuldade: "Fácil",
    enunciado:
      "Sobre o 13º salário (gratificação natalina), é correto afirmar que:",
    opcoes: [
      "O 13º salário é pago em parcela única, obrigatoriamente até o dia 20 de dezembro.",
      "O 13º salário é calculado com base na remuneração integral de dezembro, incluindo horas extras, adicionais e comissões habituais.",
      "O empregado que pediu demissão não tem direito ao 13º proporcional.",
      "O 13º salário pode ser substituído por gratificação semestral de valor equivalente, mediante acordo coletivo.",
      "O 13º salário deve ser pago em duas parcelas: a primeira entre fevereiro e novembro, e a segunda até o dia 20 de dezembro.",
    ],
    gabarito: 4,
    comentario:
      "A Lei 4.749/65 estabelece que o 13º salário deve ser pago em duas parcelas: a 1ª entre 1º de fevereiro e 30 de novembro (antecipação de metade do salário de dezembro do ano anterior) e a 2ª parcela (saldo) até o dia 20 de dezembro. O trabalhador que pede demissão tem direito ao 13º proporcional aos meses trabalhados. O cálculo considera a remuneração de dezembro (inclusive variáveis habituais como horas extras, adicional noturno, comissões).",
  },
  {
    id: 76,
    materia: "Trabalho",
    dificuldade: "Difícil",
    enunciado:
      "Sobre a responsabilidade do sócio retirante nas obrigações trabalhistas da empresa, o TST adota o entendimento de que:",
    opcoes: [
      "O sócio retirante não responde por quaisquer obrigações trabalhistas após a averbação da alteração contratual no registro empresarial.",
      "O sócio retirante responde solidariamente pelas obrigações trabalhistas contraídas até a data de sua retirada, por prazo de até 2 anos após a averbação.",
      "O sócio retirante nunca pode ser incluído no polo passivo de execução trabalhista.",
      "O sócio retirante responde apenas pelas obrigações trabalhistas relativas ao seu período de gestão.",
      "A responsabilidade do sócio retirante é ilimitada e permanente, independentemente da data de retirada.",
    ],
    gabarito: 1,
    comentario:
      "A Súmula 430 do TST estabelece que o inadimplemento das obrigações trabalhistas por parte do empregador implica a responsabilidade subsidiária do tomador de serviços. Quanto ao sócio retirante, o TST aplica subsidiariamente o art. 1.032 do CC/02, que limita a responsabilidade do sócio retirante às obrigações contraídas durante sua participação na sociedade, pelo prazo de 2 anos após a averbação de sua saída, o que é compatível com a Reforma Trabalhista (art. 10-A da CLT).",
  },
  {
    id: 77,
    materia: "Trabalho",
    dificuldade: "Médio",
    enunciado:
      "Sobre o contrato coletivo de trabalho e a negociação coletiva após o Tema 1046 do STF, é correto afirmar:",
    opcoes: [
      "Nenhuma norma coletiva pode reduzir direitos previstos na CF/88.",
      "A negociação coletiva pode flexibilizar qualquer direito trabalhista, inclusive os previstos na CF/88, desde que haja acordo das partes.",
      "Prevalece o negociado sobre o legislado apenas quando a norma coletiva ampliar direitos trabalhistas.",
      "O STF fixou a tese de que normas coletivas que suprimem ou reduzem direitos trabalhistas são válidas se não atingirem direitos absolutamente indisponíveis.",
      "A negociação coletiva pode estabelecer jornada de trabalho superior a 10 horas diárias, desde que haja compensação semanal.",
    ],
    gabarito: 3,
    comentario:
      "No Tema 1.046 (RE 1.121.633), o STF fixou a tese: são constitucionais os acordos e as convenções coletivas que, ao considerarem as especificidades dos serviços, reduzam ou suprimam direitos que a legislação assegura genericamente, desde que não se trate de direitos absolutamente indisponíveis. Portanto, a negociação pode flexibilizar direitos relativamente disponíveis, mas não pode suprimir patamares mínimos civilizatórios (FGTS, 13º, férias com 1/3, salário mínimo, etc.).",
  },
  {
    id: 78,
    materia: "Trabalho",
    dificuldade: "Fácil",
    enunciado:
      "Sobre o intervalo intrajornada previsto na CLT, é correto afirmar que:",
    opcoes: [
      "O intervalo mínimo de 1 hora é obrigatório para jornadas superiores a 6 horas, podendo ser reduzido para 30 minutos por acordo individual.",
      "A supressão total do intervalo intrajornada implica o pagamento do período suprimido acrescido de 50%, com natureza indenizatória.",
      "O intervalo intrajornada pode ser suprimido por acordo coletivo de trabalho sem qualquer contraprestação.",
      "Para jornadas de 4 a 6 horas, o intervalo mínimo obrigatório é de 30 minutos.",
      "O intervalo intrajornada não integra a jornada de trabalho e não é remunerado em nenhuma hipótese.",
    ],
    gabarito: 3,
    comentario:
      "O art. 71 da CLT estabelece: para jornadas superiores a 6 horas, intervalo mínimo de 1 hora (podendo ser reduzido por ACT/CCT); para jornadas entre 4 e 6 horas, intervalo mínimo de 15 minutos (não 30). A Reforma Trabalhista (Lei 13.467/2017) alterou o art. 71, §4º, para prever que a supressão ou redução do intervalo implica o pagamento apenas do período suprimido (não da hora integral) com acréscimo de 50%, tendo natureza indenizatória (não salarial).",
  },
  {
    id: 79,
    materia: "Trabalho",
    dificuldade: "Médio",
    enunciado:
      "Sobre a equiparação salarial prevista no art. 461 da CLT, após a Reforma Trabalhista de 2017, é correto afirmar:",
    opcoes: [
      "A equiparação salarial é cabível entre empregados que trabalhem em estabelecimentos distintos da mesma empresa, independentemente da localidade.",
      "Para fins de equiparação, o paradigma e o reclamante devem ter diferença de tempo no cargo de até 2 anos, e o paradigma deve ter sido admitido antes do reclamante.",
      "A existência de quadro de carreira homologado pelo Ministério do Trabalho afasta automaticamente o direito à equiparação.",
      "A equiparação salarial exige que o empregado e o paradigma trabalhem para o mesmo empregador, na mesma localidade, exercendo a mesma função, com igual produtividade e perfeição técnica.",
      "A equiparação salarial pode ser obtida mesmo quando o empregado e o paradigma têm diferença de tempo de empresa superior a 4 anos.",
    ],
    gabarito: 3,
    comentario:
      "O art. 461 da CLT, após a Reforma, exige para equiparação: mesma função, mesma produtividade e mesma perfeição técnica, trabalho para o mesmo empregador, no mesmo estabelecimento empresarial, com diferença de tempo na função não superior a 4 anos, e entre os dois últimos que ocuparam o cargo não superior a 2 anos. Quadro de carreira por ato de empresa (não precisando mais ser homologado) afasta a equiparação. A reforma restringiu a equiparação ao mesmo estabelecimento.",
  },
  {
    id: 80,
    materia: "Trabalho",
    dificuldade: "Difícil",
    enunciado:
      "Sobre a sucessão de empregadores (arts. 10 e 448 da CLT), é correto afirmar:",
    opcoes: [
      "A sucessão de empregadores ocorre apenas nas hipóteses de incorporação, fusão ou cisão de empresas.",
      "A sucessão trabalhista exige que a totalidade do estabelecimento seja transferida, sendo inválida a sucessão parcial.",
      "Na sucessão de empregadores, o sucessor responde pelos créditos trabalhistas dos empregados nascidos durante a gestão do sucedido, e o sucedido fica inteiramente isento.",
      "Para que haja sucessão de empregadores, é necessário que os contratos de trabalho se mantenham com os mesmos empregados após a transferência.",
      "O TST reconhece a possibilidade de responsabilidade solidária entre sucedido e sucessor, especialmente quando houver fraude na sucessão.",
    ],
    gabarito: 4,
    comentario:
      "O TST, em sua jurisprudência (OJ 411 da SDI-1 e Súmula 129), reconhece a responsabilidade solidária do sucedido quando houver elementos indicativos de simulação ou fraude na operação de sucessão, a fim de prejudicar os créditos dos empregados. A regra geral é que o sucessor assume integralmente as obrigações, eximindo o sucedido — mas a fraude afasta essa proteção. A sucessão pode ser parcial e não exige manutenção de todos os contratos.",
  },

  // ──────────────────────────────────────────
  // DIREITO TRIBUTÁRIO (81–100)
  // ──────────────────────────────────────────
  {
    id: 81,
    materia: "Tributário",
    dificuldade: "Difícil",
    enunciado:
      "O Código Tributário Nacional estabelece hipóteses de suspensão da exigibilidade do crédito tributário. Sobre este tema, assinale a alternativa INCORRETA:",
    opcoes: [
      "O depósito do montante integral do crédito tributário suspende sua exigibilidade.",
      "A concessão de medida liminar em mandado de segurança suspende a exigibilidade do crédito tributário.",
      "O parcelamento do crédito tributário é modalidade de suspensão de exigibilidade.",
      "A impugnação administrativa do crédito, mesmo após o prazo legal, suspende sua exigibilidade.",
      "A moratória é modalidade de suspensão da exigibilidade do crédito tributário.",
    ],
    gabarito: 3,
    comentario:
      "O art. 151 do CTN elenca taxativamente as hipóteses de suspensão. A impugnação administrativa suspende a exigibilidade apenas quando apresentada dentro do prazo legal — fora do prazo, não produz efeito suspensivo.",
  },
  {
    id: 82,
    materia: "Tributário",
    dificuldade: "Médio",
    enunciado:
      "Sobre o princípio da anterioridade tributária previsto na Constituição Federal de 1988, é correto afirmar que:",
    opcoes: [
      "O princípio da anterioridade veda a cobrança de tributos no mesmo exercício financeiro em que haja sido publicada a lei que os instituiu ou aumentou, sem exceções.",
      "O IPI está sujeito apenas à anterioridade anual, não à noventena.",
      "O ICMS sobre combustíveis pode ter suas alíquotas reduzidas por convênio com efeitos imediatos, sem observar a anterioridade.",
      "O Imposto de Renda está sujeito à anterioridade anual, mas não à noventena.",
      "A anterioridade nonagesimal (noventena) aplica-se igualmente a todos os tributos federais.",
    ],
    gabarito: 3,
    comentario:
      "O art. 150, §1º, da CF/88 prevê exceções às anterioridades. O IR está sujeito à anterioridade anual (art. 150, III, 'b'), mas é exceção à noventena (art. 150, III, 'c'). Portanto, uma lei que aumente o IR publicada em dezembro entra em vigor em 1º de janeiro do ano seguinte, sem necessidade de aguardar 90 dias. O IPI, ao contrário, é exceção à anterioridade anual, mas se sujeita à noventena.",
  },
  {
    id: 83,
    materia: "Tributário",
    dificuldade: "Fácil",
    enunciado:
      "Segundo o CTN, a obrigação tributária principal tem por objeto:",
    opcoes: [
      "O cumprimento de deveres instrumentais, como a entrega de declarações fiscais.",
      "O pagamento de tributo ou penalidade pecuniária.",
      "A realização de comportamentos previstos na legislação tributária.",
      "A prática ou abstenção de ato que não configure pagamento de tributo.",
      "A manutenção de escrituração fiscal e contábil pelo sujeito passivo.",
    ],
    gabarito: 1,
    comentario:
      "O art. 113, §1º, do CTN define que a obrigação principal surge com a ocorrência do fato gerador, tem por objeto o pagamento de tributo ou penalidade pecuniária e extingue-se juntamente com o crédito dela decorrente. A obrigação acessória (§2º) tem por objeto as prestações positivas ou negativas nela previstas no interesse da arrecadação ou da fiscalização dos tributos.",
  },
  {
    id: 84,
    materia: "Tributário",
    dificuldade: "Médio",
    enunciado:
      "Sobre a responsabilidade tributária dos sucessores prevista no CTN, é correto afirmar que:",
    opcoes: [
      "O adquirente de fundo de comércio responde pelos tributos relativos ao fundo adquirido, ainda que o alienante prossiga na exploração da atividade ou inicie nova atividade no mesmo ou em outro ramo.",
      "O cônjuge meeiro não responde pelos tributos do de cujus nos processos de inventário e arrolamento.",
      "A responsabilidade do adquirente de fundo de comércio é sempre subsidiária à do alienante.",
      "Na fusão de pessoas jurídicas, a empresa resultante responde pelos tributos da fusionada apenas se houver previsão contratual.",
      "A responsabilidade por sucessão imobiliária aplica-se apenas aos tributos cujos fatos geradores tenham ocorrido após a transmissão da propriedade.",
    ],
    gabarito: 0,
    comentario:
      "O art. 133, §1º, do CTN estabelece que o adquirente de fundo de comércio responde pelos tributos relativos ao estabelecimento adquirido. Essa responsabilidade é integral se o alienante cessar a exploração do comércio, e subsidiária se o alienante continuar ou reiniciar atividade no mesmo ou em outro ramo dentro de 6 meses. Portanto, se o alienante prosseguir na exploração de qualquer atividade, a responsabilidade do adquirente é subsidiária — a afirmativa da alternativa A descreve a hipótese de responsabilidade integral corretamente ao indicar que o alienante continua.",
  },
  {
    id: 85,
    materia: "Tributário",
    dificuldade: "Difícil",
    enunciado: "Sobre o lançamento tributário, assinale a alternativa correta:",
    opcoes: [
      "O lançamento por homologação ocorre quando a autoridade fiscal, verificando o cumprimento da obrigação pelo contribuinte, homologa expressamente o pagamento.",
      "No lançamento de ofício, o contribuinte apura e recolhe o tributo, sujeitando-se à posterior verificação da autoridade.",
      "O lançamento por declaração ocorre quando o sujeito passivo presta informações à autoridade, que com base nelas efetua o lançamento.",
      "A homologação tácita do lançamento ocorre somente quando há pagamento integral, nunca em caso de pagamento parcial.",
      "O lançamento constitui o crédito tributário e tem natureza jurídica declaratória quanto à obrigação e constitutiva quanto ao crédito.",
    ],
    gabarito: 4,
    comentario:
      "O CTN adota a tese de que o lançamento tem natureza mista: é declaratório quanto à obrigação tributária (que nasce com o fato gerador) e constitutivo quanto ao crédito tributário (que só existe após o lançamento). O lançamento por declaração (art. 147) exige que o sujeito passivo preste informações à autoridade, que então efetua o lançamento. No lançamento por homologação (art. 150), o contribuinte apura e paga antecipadamente; a autoridade tem 5 anos para homologar (expressa ou tacitamente).",
  },
  {
    id: 86,
    materia: "Tributário",
    dificuldade: "Médio",
    enunciado:
      "Sobre as imunidades tributárias previstas na Constituição Federal de 1988, é correto afirmar que:",
    opcoes: [
      "A imunidade recíproca entre os entes federativos aplica-se a todos os impostos e taxas.",
      "As entidades de assistência social sem fins lucrativos gozam de imunidade sobre todos os tributos, incluindo contribuições sociais.",
      "A imunidade dos templos de qualquer culto abrange somente os imóveis utilizados para a prática religiosa.",
      "A imunidade dos partidos políticos e suas fundações, entidades sindicais dos trabalhadores e instituições de educação ou de assistência social sem fins lucrativos, prevista no art. 150, VI, 'c', da CF/88, aplica-se apenas aos impostos.",
      "A imunidade cultural sobre livros, jornais, periódicos e o papel destinado à sua impressão abrange também os e-books e audiolivros.",
    ],
    gabarito: 3,
    comentario:
      "A imunidade do art. 150, VI, 'c', da CF/88 refere-se expressamente a impostos — não a todos os tributos. As entidades beneficiadas não pagam impostos sobre patrimônio, renda e serviços, mas podem ser obrigadas a pagar taxas e contribuições especiais (como contribuições previdenciárias, por exemplo). O STF reconhece que a imunidade dos templos abrange o patrimônio, renda e serviços relacionados às atividades essenciais da entidade religiosa, não apenas o local de culto.",
  },
  {
    id: 87,
    materia: "Tributário",
    dificuldade: "Fácil",
    enunciado:
      "Sobre a decadência do direito de lançar o crédito tributário no CTN, é correto afirmar que:",
    opcoes: [
      "O prazo decadencial é de 10 anos, contados da data do fato gerador.",
      "O prazo decadencial é de 5 anos, e sua contagem varia conforme a modalidade de lançamento.",
      "A decadência não pode ser reconhecida de ofício pelo juiz, dependendo de arguição do contribuinte.",
      "O prazo decadencial, uma vez iniciado, não pode ser interrompido ou suspenso em nenhuma hipótese.",
      "A decadência e a prescrição tributária são institutos equivalentes, ambos extinguindo o crédito tributário.",
    ],
    gabarito: 1,
    comentario:
      "O prazo decadencial do CTN é de 5 anos (art. 173), mas sua contagem varia: nos lançamentos de ofício e por declaração, o prazo conta-se do 1º dia do exercício seguinte àquele em que o lançamento poderia ter sido efetuado; nos lançamentos por homologação, do fato gerador. A decadência extingue o direito de lançar (antes do crédito). A prescrição extingue a pretensão de cobrar (após o crédito constituído). São institutos distintos, ambos extinguindo o crédito (art. 156, V, CTN).",
  },
  {
    id: 88,
    materia: "Tributário",
    dificuldade: "Difícil",
    enunciado:
      "Sobre o ICMS (Imposto sobre Operações relativas à Circulação de Mercadorias e sobre Prestações de Serviços de Transporte Interestadual e Intermunicipal e de Comunicação), assinale a alternativa correta:",
    opcoes: [
      "O ICMS é tributo federal de competência da União, repartido entre os Estados.",
      "O ICMS não incide sobre operações que destinem mercadorias ao exterior, mas incide sobre serviços prestados a não contribuintes no exterior.",
      "A alíquota do ICMS nas operações interestaduais é sempre definida pelo Senado Federal, não pelo Estado de origem.",
      "O ICMS incide sobre a entrada de bem ou mercadoria importados do exterior, ainda que o importador não seja contribuinte habitual.",
      "O ICMS não incide sobre serviços de comunicação prestados ao exterior.",
    ],
    gabarito: 3,
    comentario:
      "A EC 33/2001 e a Súmula 661 do STF confirmam que o ICMS incide na importação de bem por pessoa física ou jurídica, mesmo que esta não seja contribuinte habitual do imposto. O ICMS é tributo estadual (e do DF), não federal. A imunidade às exportações está prevista no art. 155, §2º, X, 'a', da CF/88, abrangendo tanto mercadorias quanto serviços destinados ao exterior. As alíquotas interestaduais são fixadas pelo Senado Federal por resolução.",
  },
  {
    id: 89,
    materia: "Tributário",
    dificuldade: "Médio",
    enunciado:
      "Sobre o ISS (Imposto Sobre Serviços de Qualquer Natureza), de competência dos Municípios, é correto afirmar:",
    opcoes: [
      "O ISS pode ser instituído pelos Municípios sobre qualquer prestação de serviços, independentemente de lista federal.",
      "A alíquota máxima do ISS é de 5%, conforme a Lei Complementar 116/2003.",
      "O ISS incide sobre a exportação de serviços para o exterior, quando o resultado do serviço se verifique no Brasil.",
      "O ISS e o ICMS incidem cumulativamente sobre o serviço de comunicação prestado a consumidor final.",
      "O ISS tem alíquota mínima de 2%, vedada a concessão de isenções que resultem em alíquota inferior.",
    ],
    gabarito: 4,
    comentario:
      "A Lei Complementar 157/2016 vedou a concessão de isenções, incentivos e benefícios tributários que resultem em alíquota de ISS inferior a 2%, como forma de combater a guerra fiscal entre Municípios (lei tributária de planejamento predatório). A alíquota máxima é de 5% (LC 116/2003). O ISS não incide sobre exportação de serviços cujos resultados se verificam integralmente no exterior. A alíquota mínima de 2% está na LC 157/2016.",
  },
  {
    id: 90,
    materia: "Tributário",
    dificuldade: "Fácil",
    enunciado:
      "O imposto de renda das pessoas físicas (IRPF) tem como fato gerador:",
    opcoes: [
      "A disponibilidade econômica ou jurídica de renda ou de proventos de qualquer natureza.",
      "A obtenção de renda exclusivamente oriunda do trabalho assalariado.",
      "A circulação de moeda e câmbio entre pessoas físicas.",
      "A titularidade de patrimônio de valor superior ao mínimo definido em lei.",
      "O auferimento de lucro em operações de compra e venda de bens.",
    ],
    gabarito: 0,
    comentario:
      "O art. 43 do CTN define o fato gerador do imposto de renda como a aquisição da disponibilidade econômica ou jurídica de renda (produto do capital, do trabalho ou da combinação de ambos) ou de proventos de qualquer natureza (acréscimos patrimoniais não compreendidos como renda). A disponibilidade econômica é a efetiva percepção da renda; a jurídica é o direito adquirido sobre ela, ainda que não recebida fisicamente.",
  },
  {
    id: 91,
    materia: "Tributário",
    dificuldade: "Difícil",
    enunciado:
      "Sobre a substituição tributária progressiva (para frente) no ICMS, o STF, no RE 593.849 (Tema 201), fixou a seguinte tese:",
    opcoes: [
      "É vedada a restituição do ICMS pago a maior no regime de substituição tributária, pois o substituto assume o risco do negócio.",
      "É devida a restituição da diferença do ICMS pago a mais, se a base de cálculo efetiva da operação for inferior à presumida.",
      "A substituição tributária progressiva é inconstitucional por violar o princípio da capacidade contributiva.",
      "O contribuinte substituído não tem legitimidade para pleitear a restituição do ICMS-ST pago a maior.",
      "É devida a complementação do ICMS se a base de cálculo real for superior à presumida, mas não é devida a restituição no caso inverso.",
    ],
    gabarito: 1,
    comentario:
      "No RE 593.849, o STF superou a tese da irreversibilidade da substituição tributária e fixou que: é devida a restituição da diferença do ICMS-ST pago a mais sempre que a base de cálculo efetiva da operação for inferior à presumida. Simétricamente, se a base real for superior à presumida, cabe a complementação. Isso representa uma virada jurisprudencial que assegura a tributação sobre a riqueza efetivamente circulada.",
  },
  {
    id: 92,
    materia: "Tributário",
    dificuldade: "Médio",
    enunciado:
      "Sobre as contribuições sociais previstas na Constituição Federal de 1988, é correto afirmar:",
    opcoes: [
      "As contribuições sociais podem ser instituídas pela União, Estados e Municípios, desde que destinadas ao custeio da seguridade social.",
      "A CSLL (Contribuição Social sobre o Lucro Líquido) pode ser majorada por decreto presidencial, por ter natureza de contribuição social.",
      "As contribuições sociais se sujeitam ao princípio da anterioridade anual, mas não à noventena.",
      "As contribuições para a seguridade social se sujeitam à noventena, mas não à anterioridade anual.",
      "As contribuições para o PIS e a COFINS têm natureza jurídica de impostos disfarçados de contribuições.",
    ],
    gabarito: 3,
    comentario:
      "O art. 195, §6º, da CF/88 estabelece que as contribuições para a seguridade social (CSLL, PIS, COFINS, etc.) só poderão ser exigidas após decorridos 90 dias da data de publicação da lei que as houver instituído ou modificado — ou seja, estão sujeitas à noventena, mas não à anterioridade anual. Apenas a União tem competência para instituir contribuições para a seguridade social. A majoração da CSLL exige lei, não decreto.",
  },
  {
    id: 93,
    materia: "Tributário",
    dificuldade: "Fácil",
    enunciado: "Sobre as taxas como espécie tributária, é correto afirmar que:",
    opcoes: [
      "A taxa pode ter base de cálculo idêntica à de um imposto.",
      "A taxa é contraprestacional: vincula-se ao exercício regular do poder de polícia ou à utilização de serviço público específico e divisível.",
      "A taxa pode ser instituída por qualquer ente federativo para o custeio de serviços públicos gerais, como a segurança pública.",
      "As taxas judiciárias (custas) não têm natureza de taxa, sendo receitas originárias do Poder Judiciário.",
      "A União pode instituir taxa com fato gerador ou base de cálculo próprios de imposto.",
    ],
    gabarito: 1,
    comentario:
      "O art. 77 do CTN e o art. 145, II, da CF/88 definem as taxas como tributos vinculados a uma atividade estatal específica: o exercício regular do poder de polícia ou a utilização efetiva ou potencial de serviços públicos específicos e divisíveis. A taxa não pode ter base de cálculo idêntica à de imposto (art. 77, parágrafo único, CTN). Serviços gerais (como segurança pública) financiam-se por impostos, não por taxas.",
  },
  {
    id: 94,
    materia: "Tributário",
    dificuldade: "Médio",
    enunciado:
      "Sobre a responsabilidade tributária pessoal dos sócios e administradores de pessoas jurídicas (art. 135 do CTN), é correto afirmar:",
    opcoes: [
      "O mero inadimplemento da obrigação tributária é suficiente para responsabilizar pessoalmente o sócio-administrador.",
      "A dissolução regular da sociedade gera automaticamente a responsabilidade pessoal dos sócios pelas dívidas tributárias.",
      "O redirecionamento da execução fiscal ao sócio-gerente exige a demonstração de atos praticados com excesso de poderes, infração à lei, contrato social ou estatuto.",
      "Os sócios quotistas sem poder de gestão respondem solidariamente com os sócios-gerentes pelas dívidas tributárias.",
      "A responsabilidade do art. 135 do CTN exclui a responsabilidade da própria pessoa jurídica.",
    ],
    gabarito: 2,
    comentario:
      "A Súmula 430 do STJ consolida que o inadimplemento da obrigação tributária pela sociedade não gera, por si só, a responsabilidade solidária do sócio-gerente. Para o redirecionamento da execução ao sócio, é necessário demonstrar a ocorrência de excesso de poderes, infração à lei, ao contrato social ou ao estatuto (art. 135, III, CTN), ou a dissolução irregular da sociedade (Súmula 435 do STJ).",
  },
  {
    id: 95,
    materia: "Tributário",
    dificuldade: "Difícil",
    enunciado:
      "Sobre o planejamento tributário (elisão fiscal) e a norma geral antielisiva do art. 116, parágrafo único, do CTN, é correto afirmar:",
    opcoes: [
      "O art. 116, parágrafo único, do CTN permite à autoridade fiscal desconsiderar atos ou negócios jurídicos praticados com a finalidade de dissimular a ocorrência do fato gerador sem necessidade de lei específica regulamentadora.",
      "A elisão fiscal (planejamento tributário lícito) e a evasão fiscal (sonegação) são tratadas de forma idêntica pelo sistema tributário.",
      "O art. 116, parágrafo único, exige que a lei ordinária estabeleça os procedimentos para a desconsideração dos atos abusivos, não sendo autoaplicável.",
      "O planejamento tributário que resulte em economia de imposto é sempre considerado abuso do direito pela jurisprudência do STJ.",
      "A simulação de negócio jurídico não pode ser desconsiderada pela autoridade fiscal, pois prevalece a vontade declarada das partes.",
    ],
    gabarito: 2,
    comentario:
      "O art. 116, parágrafo único, do CTN (incluído pela LC 104/2001) autoriza a autoridade administrativa a desconsiderar atos ou negócios jurídicos praticados com a finalidade de dissimular a ocorrência do fato gerador ou a natureza dos elementos constitutivos da obrigação tributária, observados os procedimentos a serem estabelecidos em lei ordinária. A doutrina e o STJ entendem que a norma não é autoaplicável, dependendo de regulamentação. A elisão lícita é permitida; a evasão (sonegação) é ilícita.",
  },
  {
    id: 96,
    materia: "Tributário",
    dificuldade: "Fácil",
    enunciado: "O ITR (Imposto Territorial Rural) é de competência:",
    opcoes: [
      "Dos Municípios, que podem fiscalizar e cobrar o imposto sobre imóveis rurais em seus territórios.",
      "Da União, podendo ser fiscalizado e cobrado pelos Municípios que optarem por assumir essa atribuição.",
      "Conjunta da União e dos Estados, com repartição de receitas conforme a localização do imóvel.",
      "Dos Estados, com percentual de repasse obrigatório aos Municípios.",
      "Exclusivamente da União, sem possibilidade de delegação.",
    ],
    gabarito: 1,
    comentario:
      "O ITR é de competência da União (art. 153, VI, da CF/88). No entanto, o art. 153, §4º, III, da CF/88 permite que seja fiscalizado e cobrado pelos Municípios que assim optarem, na forma da lei, desde que não implique redução do imposto ou qualquer outra forma de renúncia fiscal. Nesse caso, 100% da arrecadação fica com o Município (em vez dos 50% que lhe caberiam se fosse arrecadado pela União).",
  },
  {
    id: 97,
    materia: "Tributário",
    dificuldade: "Médio",
    enunciado:
      "Sobre a consulta tributária como instrumento de segurança jurídica, é correto afirmar:",
    opcoes: [
      "A consulta tributária suspende o prazo para pagamento do tributo indefinidamente.",
      "A resposta à consulta tributária vincula a administração e o consulente, e não pode ser modificada retroativamente em prejuízo do consulente de boa-fé.",
      "A consulta pode ser formulada por qualquer pessoa, mesmo sem interesse direto na matéria consultada.",
      "Durante a pendência de consulta, a autoridade fiscal pode lavrar auto de infração sobre a matéria consultada.",
      "A consulta tributária produz efeitos retroativos, beneficiando o contribuinte por todos os períodos anteriores.",
    ],
    gabarito: 1,
    comentario:
      "A consulta tributária gera proteção ao consulente: enquanto não respondida, veda a lavratura de auto de infração sobre a matéria consultada; após a resposta, garante que não haja penalidade por conduta anterior à resposta se o contribuinte agiu de boa-fé conforme sua interpretação. Mudanças de entendimento da Fazenda não têm efeito retroativo prejudicial ao contribuinte que agiu conforme a orientação anterior (proteção da confiança legítima). O CTN e o Decreto 70.235/72 regulam o processo de consulta.",
  },
  {
    id: 98,
    materia: "Tributário",
    dificuldade: "Difícil",
    enunciado:
      "Sobre o IPTU (Imposto Predial e Territorial Urbano) e o ITBI (Imposto de Transmissão de Bens Imóveis), é correto afirmar:",
    opcoes: [
      "O IPTU progressivo no tempo, previsto no art. 182, §4º, II, da CF/88, tem natureza tributária e arrecadatória.",
      "O ITBI não incide sobre a transmissão de bens imóveis nas operações de integralização de capital de pessoa jurídica, quando a atividade preponderante do adquirente for imobiliária.",
      "O IPTU pode ter alíquotas progressivas em razão do valor do imóvel, mas não em função de sua localização ou uso.",
      "O ITBI é de competência dos Municípios e do Distrito Federal, e tem como fato gerador a transmissão inter vivos, a qualquer título, por ato oneroso, de bens imóveis.",
      "O IPTU incide sobre imóveis rurais localizados em zonas urbanas, prevalecendo o critério da localização sobre a destinação do imóvel.",
    ],
    gabarito: 3,
    comentario:
      "O ITBI é de competência dos Municípios (e DF) e tem como fato gerador a transmissão inter vivos, a qualquer título, por ato oneroso, de bens imóveis por natureza ou por acessão física (art. 156, II, CF/88). O IPTU progressivo no tempo tem natureza extrafiscal (sancionatória ao não cumprimento da função social), não meramente arrecadatória. O ITBI não incide na integralização de capital, salvo se a atividade preponderante da adquirente for compra e venda de imóveis (art. 156, §2º, I, CF). O STF usa o critério da destinação para o ITR x IPTU.",
  },
  {
    id: 99,
    materia: "Tributário",
    dificuldade: "Médio",
    enunciado:
      "Sobre o lançamento por homologação e a 'tese dos 5+5' quanto à decadência e prescrição, após a Lei Complementar 118/2005, é correto afirmar:",
    opcoes: [
      "A LC 118/2005 não alterou o prazo para repetição de indébito tributário em lançamento por homologação.",
      "Após a LC 118/2005, o prazo para a ação de repetição de indébito tributário é de 10 anos, contados do pagamento.",
      "A LC 118/2005 estabeleceu que, para fins do art. 168, I, do CTN, a extinção do crédito ocorre na data do pagamento antecipado, encerrando com a tese dos 5+5.",
      "O STF declarou inconstitucional a LC 118/2005 por retroagir a situações já consolidadas, mantendo a tese dos 5+5 para todos os casos.",
      "O prazo de 5 anos para repetição de indébito conta-se, após a LC 118/2005, da data do lançamento por homologação.",
    ],
    gabarito: 2,
    comentario:
      "A LC 118/2005 estabeleceu, com interpretação retroativa, que a extinção do crédito tributário no lançamento por homologação ocorre na data do pagamento antecipado — e não na data da homologação. O STF, no RE 566.621 (Tema 313), declarou inconstitucional a retroatividade da LC 118 para casos anteriores à sua vigência, mas reconheceu sua validade para fatos posteriores. Assim, para pagamentos realizados após 09/06/2005, o prazo de 5 anos conta-se da data do pagamento (e não mais da homologação).",
  },
  {
    id: 100,
    materia: "Tributário",
    dificuldade: "Fácil",
    enunciado:
      "Sobre o princípio da capacidade contributiva no sistema tributário brasileiro, é correto afirmar:",
    opcoes: [
      "O princípio da capacidade contributiva aplica-se apenas aos impostos pessoais, como o IR.",
      "O princípio impede a tributação de atividades ilícitas, pois não há capacidade contributiva legítima.",
      "Sempre que possível, os impostos terão caráter pessoal e serão graduados segundo a capacidade econômica do contribuinte.",
      "O princípio da capacidade contributiva veda a criação de alíquotas diferenciadas para o ICMS.",
      "O princípio da capacidade contributiva é idêntico ao princípio do não confisco.",
    ],
    gabarito: 2,
    comentario:
      "O art. 145, §1º, da CF/88 prevê que, sempre que possível, os impostos terão caráter pessoal e serão graduados segundo a capacidade econômica do contribuinte, facultado à administração tributária identificar o patrimônio, os rendimentos e as atividades econômicas do contribuinte. O STF tem reconhecido a aplicação do princípio também a impostos reais (como ITCMD e IPTU), admitindo progressividade. O princípio não veda a tributação de atividades ilícitas — pecunia non olet (art. 118, CTN).",
  },

  // ──────────────────────────────────────────
  // DIREITO ADMINISTRATIVO (101–120)
  // ──────────────────────────────────────────
  {
    id: 101,
    materia: "Administrativo",
    dificuldade: "Médio",
    enunciado:
      "Sobre os atributos dos atos administrativos, assinale a alternativa correta:",
    opcoes: [
      "A autoexecutoriedade é atributo presente em todos os atos administrativos.",
      "A imperatividade consiste na possibilidade de a Administração executar seus atos sem necessidade de intervenção judicial prévia.",
      "A presunção de legitimidade significa que os atos administrativos são absolutos e não podem ser contestados pelo administrado.",
      "A tipicidade é o atributo pelo qual o ato administrativo deve corresponder a figuras definidas em lei como aptas a produzir determinados resultados.",
      "A autoexecutoriedade permite à Administração executar qualquer ato diretamente sem prévia autorização legislativa.",
    ],
    gabarito: 3,
    comentario:
      "A tipicidade é o atributo pelo qual os atos administrativos devem estar previamente definidos em lei. Já a autoexecutoriedade não está presente em todos os atos — exige previsão legal ou urgência. A presunção de legitimidade é relativa, admitindo prova em contrário.",
  },
  {
    id: 102,
    materia: "Administrativo",
    dificuldade: "Fácil",
    enunciado:
      "Sobre o princípio da legalidade na Administração Pública, é correto afirmar que:",
    opcoes: [
      "A Administração pode fazer tudo o que não for expressamente proibido por lei, à semelhança do particular.",
      "A Administração só pode agir quando houver expressa previsão legal autorizando o ato.",
      "O princípio da legalidade administrativa é mitigado pelo princípio da eficiência.",
      "Atos administrativos de gestão interna não precisam de previsão legal expressa.",
      "O princípio da legalidade se aplica apenas ao Poder Executivo, não ao Judiciário e ao Legislativo.",
    ],
    gabarito: 1,
    comentario:
      "Na Administração Pública, o princípio da legalidade tem sentido diverso do privado: enquanto o particular pode fazer tudo o que a lei não proíbe, a Administração só pode fazer o que a lei autoriza. Esse é o chamado princípio da legalidade estrita administrativa, decorrente do art. 37, caput, da CF/88 e do art. 5º, II. Ele não é mitigado pela eficiência — os princípios convivem de forma harmônica.",
  },
  {
    id: 103,
    materia: "Administrativo",
    dificuldade: "Difícil",
    enunciado:
      "Sobre a teoria dos motivos determinantes no direito administrativo, é correto afirmar:",
    opcoes: [
      "Quando a Administração motiva voluntariamente um ato discricionário, ela fica vinculada aos motivos declarados.",
      "A teoria dos motivos determinantes aplica-se apenas aos atos vinculados, não aos discricionários.",
      "O vício nos motivos declarados não invalida o ato administrativo se o resultado for o mesmo.",
      "A exoneração de servidor ocupante de cargo em comissão, por ser ato discricionário, não está sujeita à teoria dos motivos determinantes.",
      "A motivação dos atos administrativos é obrigatória apenas nos atos que restrinjam direitos dos administrados.",
    ],
    gabarito: 0,
    comentario:
      "A teoria dos motivos determinantes estabelece que, quando a Administração motiva um ato administrativo — mesmo que a motivação não seja obrigatória, como ocorre nos atos discricionários —, ela fica vinculada à veracidade e à suficiência dos motivos declarados. Se os motivos forem falsos ou inexistentes, o ato será inválido. O STJ aplica amplamente essa teoria, inclusive à exoneração de cargos em comissão (STJ, MS 21.515).",
  },
  {
    id: 104,
    materia: "Administrativo",
    dificuldade: "Médio",
    enunciado:
      "Sobre as concessões de serviço público na Lei 8.987/95, é correto afirmar que:",
    opcoes: [
      "A concessão transfere a titularidade do serviço público ao concessionário.",
      "O concessionário responde objetivamente pelos danos causados a terceiros na prestação do serviço, nos termos do art. 37, §6º, da CF/88.",
      "A concessão somente pode ser extinta pela expiração do prazo contratual.",
      "O poder concedente pode intervir na concessão apenas nas hipóteses expressamente previstas no contrato.",
      "O concessionário assume o risco integral do negócio, sendo vedada a revisão do equilíbrio econômico-financeiro do contrato.",
    ],
    gabarito: 1,
    comentario:
      "O art. 25 da Lei 8.987/95 e o art. 37, §6º, da CF/88 impõem ao concessionário a responsabilidade objetiva pelos danos causados a usuários e a terceiros. A concessão transfere apenas a execução do serviço, não a titularidade — esta permanece com o poder público. A concessão pode ser extinta por diversas formas: término do prazo, encampação, caducidade, rescisão judicial, anulação e falência. O equilíbrio econômico-financeiro é direito do concessionário e deve ser mantido.",
  },
  {
    id: 105,
    materia: "Administrativo",
    dificuldade: "Fácil",
    enunciado:
      "Sobre a responsabilidade civil do Estado por atos comissivos de seus agentes, a Constituição Federal adota a teoria:",
    opcoes: [
      "Subjetiva, exigindo prova de culpa do Estado.",
      "Objetiva, baseada no risco administrativo, dispensando a prova de culpa.",
      "Objetiva, baseada no risco integral, que admite a responsabilidade mesmo nos casos de força maior.",
      "Subjetiva, com culpa presumida do Estado.",
      "Objetiva apenas para os atos do Poder Executivo, sendo subjetiva para os demais Poderes.",
    ],
    gabarito: 1,
    comentario:
      "O art. 37, §6º, da CF/88 adota a teoria da responsabilidade objetiva baseada no risco administrativo para atos comissivos dos agentes públicos. Nessa teoria, o Estado responde independentemente de culpa, bastando o nexo de causalidade entre o ato do agente e o dano — mas admite excludentes como culpa exclusiva da vítima, caso fortuito e força maior. Difere do risco integral, que não admite excludentes (adotado em casos específicos como danos nucleares e acidentes de aeronave).",
  },
  {
    id: 106,
    materia: "Administrativo",
    dificuldade: "Médio",
    enunciado:
      "Sobre o poder regulamentar da Administração Pública, é correto afirmar que:",
    opcoes: [
      "O Presidente da República pode expedir regulamentos autônomos sobre qualquer matéria administrativa.",
      "Os regulamentos podem inovar na ordem jurídica, criando direitos e obrigações não previstos em lei.",
      "O poder regulamentar é privativo do Chefe do Poder Executivo e não pode ser delegado a Ministros de Estado.",
      "Os regulamentos executivos têm por finalidade dar fiel execução às leis, sem criar obrigações além das previstas na lei regulamentada.",
      "A deslegalização permite que o Executivo discipline, por decreto, matérias reservadas à lei ordinária.",
    ],
    gabarito: 3,
    comentario:
      "Os regulamentos executivos (de execução) visam detalhar e viabilizar a aplicação da lei, sem inovar na ordem jurídica. Não podem criar obrigações, direitos ou proibições não previstos em lei — caso contrário, haveria regulamento autônomo indevido. O art. 84, VI, da CF/88 admite decretos autônomos apenas para organização e funcionamento da administração federal que não implique aumento de despesa ou criação de órgãos, e extinção de funções ou cargos vagos.",
  },
  {
    id: 107,
    materia: "Administrativo",
    dificuldade: "Difícil",
    enunciado:
      "Sobre a improbidade administrativa (Lei 8.429/92, com as alterações da Lei 14.230/2021), é correto afirmar:",
    opcoes: [
      "Os atos de improbidade administrativa que causam enriquecimento ilícito dispensam a comprovação de dolo.",
      "A Lei 14.230/2021 manteve a responsabilidade culposa para os atos de improbidade que causam dano ao erário.",
      "Após a Lei 14.230/2021, o Ministério Público tem legitimidade exclusiva para propor a ação de improbidade administrativa.",
      "A pessoa jurídica privada pode ser sujeito ativo de ato de improbidade, independentemente de sua relação com o poder público.",
      "A condenação por improbidade exige sentença criminal transitada em julgado como condição prejudicial.",
    ],
    gabarito: 2,
    comentario:
      "A Lei 14.230/2021 reformou profundamente a LIA: (i) exigiu dolo específico para todos os atos de improbidade (art. 1º, §1º) — eliminando a modalidade culposa; (ii) conferiu ao Ministério Público a legitimidade exclusiva para propor a ação de improbidade, retirando a do cidadão e da Fazenda Pública. O STF, no julgamento das ADIs 6.518 e outras, reconheceu a constitucionalidade da legitimidade exclusiva do MP.",
  },
  {
    id: 108,
    materia: "Administrativo",
    dificuldade: "Médio",
    enunciado:
      "Sobre as modalidades licitatórias previstas na Nova Lei de Licitações (Lei 14.133/2021), é correto afirmar que:",
    opcoes: [
      "O pregão substituiu a concorrência como modalidade principal para aquisição de bens e serviços comuns.",
      "A lei manteve as modalidades tomada de preços e convite, apenas renomeando-as.",
      "O diálogo competitivo é modalidade aplicável a contratações em que a Administração não consegue definir com precisão a solução técnica.",
      "A concorrência é cabível apenas para contratos de obras e serviços de engenharia acima do limite legal.",
      "O leilão pode ser utilizado para a contratação de serviços de qualquer natureza, desde que o valor estimado seja elevado.",
    ],
    gabarito: 2,
    comentario:
      "O diálogo competitivo (art. 32 da Lei 14.133/2021) é modalidade criada para situações em que a Administração não consegue previamente especificar a solução técnica mais adequada para atender suas necessidades, ou não é capaz de identificar o melhor arranjo jurídico ou financeiro para o contrato. Permite um diálogo com os licitantes para desenvolvimento de soluções. A tomada de preços e o convite foram extintos pela nova lei. O pregão é obrigatório para bens e serviços comuns.",
  },
  {
    id: 109,
    materia: "Administrativo",
    dificuldade: "Fácil",
    enunciado:
      "Sobre o mandado de segurança contra atos da Administração Pública, é correto afirmar que:",
    opcoes: [
      "O mandado de segurança é cabível para a proteção de direito líquido e certo, violado por ato de autoridade pública ou equiparada.",
      "O prazo para a impetração do mandado de segurança é de 1 ano, contado da ciência do ato impugnado.",
      "O mandado de segurança pode ser impetrado para discutir questões de fato que demandem instrução probatória.",
      "O mandado de segurança preventivo não é admitido pelo ordenamento jurídico brasileiro.",
      "O mandado de segurança pode ser utilizado para questionar atos políticos do Chefe do Poder Executivo.",
    ],
    gabarito: 0,
    comentario:
      "O mandado de segurança (art. 5º, LXIX, CF/88) protege direito líquido e certo — aquele que pode ser provado de plano, sem necessidade de instrução probatória — contra ato ilegal ou abusivo de autoridade pública ou agente de pessoa jurídica no exercício de atribuições do Poder Público. O prazo é de 120 dias (não 1 ano) da ciência do ato. É cabível tanto repressivamente (contra ato consumado) quanto preventivamente (contra ameaça iminente).",
  },
  {
    id: 110,
    materia: "Administrativo",
    dificuldade: "Difícil",
    enunciado:
      "Sobre o controle externo da Administração Pública pelo Tribunal de Contas da União (TCU), é correto afirmar:",
    opcoes: [
      "O TCU exerce atividade jurisdicional, sendo suas decisões definitivas e irrecorríveis ao Poder Judiciário.",
      "O TCU pode apreciar a constitucionalidade das leis e atos normativos em caráter difuso.",
      "As decisões do TCU que imputem débito ou multa têm eficácia de título executivo extrajudicial.",
      "O TCU pode sustar contratos administrativos de forma direta e imediata, dispensando o Congresso Nacional.",
      "O TCU aprecia a legalidade dos atos de concessão de aposentadoria, reforma e pensão, mesmo após 5 anos de registro.",
    ],
    gabarito: 2,
    comentario:
      "O art. 71, §3º, da CF/88 estabelece que as decisões do TCU de que resulte imputação de débito ou multa terão eficácia de título executivo. A execução se dá pela Fazenda Pública na Justiça Federal. O TCU não exerce atividade jurisdicional — suas decisões podem ser revistas pelo Poder Judiciário. A sustação de contratos envolve o Congresso Nacional (art. 71, §1º). O STF (MS 25.116) limitou a possibilidade de o TCU rever atos de concessão de aposentadoria após 5 anos sem contraditório.",
  },
  {
    id: 111,
    materia: "Administrativo",
    dificuldade: "Médio",
    enunciado:
      "Sobre os bens públicos no direito brasileiro, é correto afirmar que:",
    opcoes: [
      "Os bens dominicais são inalienáveis por natureza e não podem ser afetados a qualquer uso.",
      "A usucapião de bens públicos é admitida quando há posse mansa e pacífica por prazo superior a 15 anos.",
      "Os bens de uso comum do povo (como praças e estradas) podem ser alienados mediante desafetação prévia e autorização legislativa.",
      "Os bens públicos são imprescritíveis, impenhoráveis e inalienáveis quando afetados ao uso público.",
      "Os bens de uso especial, quando desafetados, passam automaticamente à categoria de bens dominicais.",
    ],
    gabarito: 3,
    comentario:
      "Os bens públicos afetados ao uso público (bens de uso comum e de uso especial) são inalienáveis, imprescritíveis (não sujeitos à usucapião) e impenhoráveis. A CF/88 (arts. 183, §3º, e 191, parágrafo único) veda expressamente a usucapião de imóveis públicos. Os bens dominicais podem ser alienados mediante lei autorizadora e desafetação. A desafetação não é automática — exige ato formal competente.",
  },
  {
    id: 112,
    materia: "Administrativo",
    dificuldade: "Fácil",
    enunciado:
      "O princípio da supremacia do interesse público sobre o privado manifesta-se, no âmbito do direito administrativo, por meio de:",
    opcoes: [
      "Prerrogativas exclusivas dos particulares em contratos administrativos.",
      "Cláusulas exorbitantes nos contratos administrativos, que permitem à Administração modificar, rescindir e fiscalizar unilateralmente o contrato.",
      "Vedação ao exercício do direito de greve pelos servidores públicos.",
      "Proibição de interposição de mandado de segurança contra atos administrativos.",
      "Impossibilidade de responsabilização civil do Estado por danos causados a particulares.",
    ],
    gabarito: 1,
    comentario:
      "As cláusulas exorbitantes (ou prerrogativas públicas) são a expressão mais clara da supremacia do interesse público nos contratos administrativos. Permitem à Administração: modificar unilateralmente o contrato; rescindi-lo unilateralmente; fiscalizar a execução; aplicar sanções; e reter o pagamento em caso de inadimplemento. Essas cláusulas são consideradas abusivas em contratos privados, mas legítimas nos contratos administrativos por força da supremacia do interesse público.",
  },
  {
    id: 113,
    materia: "Administrativo",
    dificuldade: "Difícil",
    enunciado:
      "Sobre a autotutela administrativa e a teoria dos atos administrativos, assinale a alternativa correta:",
    opcoes: [
      "A Administração pode revogar atos administrativos nulos ou anuláveis, desde que seja conveniente e oportuno.",
      "A anulação de atos administrativos inválidos deve ser sempre feita de ofício, sendo vedado ao administrado solicitá-la.",
      "A revogação de atos vinculados é possível quando há mudança de interesse público superveniente.",
      "O prazo decadencial para a Administração anular atos de que decorram efeitos favoráveis ao administrado de boa-fé é de 5 anos.",
      "A revogação produz efeitos ex tunc, apagando os efeitos do ato desde a sua edição.",
    ],
    gabarito: 3,
    comentario:
      "O art. 54 da Lei 9.784/99 fixa em 5 anos o prazo decadencial para a Administração anular atos de que decorram efeitos favoráveis para os destinatários de boa-fé, salvo má-fé. A revogação opera efeitos ex nunc (para o futuro) — não ex tunc. A anulação opera ex tunc. Atos vinculados não podem ser revogados por conveniência — a Administração é obrigada a praticá-los quando preenchidos os requisitos legais. A revogação não se aplica a atos inválidos — estes devem ser anulados.",
  },
  {
    id: 114,
    materia: "Administrativo",
    dificuldade: "Médio",
    enunciado:
      "Sobre as organizações sociais (OS) e organizações da sociedade civil de interesse público (OSCIP) no direito brasileiro, é correto afirmar:",
    opcoes: [
      "As organizações sociais são entidades de direito público, integrantes da Administração indireta.",
      "O contrato de gestão entre o Poder Público e a organização social dispensa licitação para as contratações feitas pela OS com recursos públicos.",
      "A qualificação como OSCIP exige aprovação do Congresso Nacional por lei específica.",
      "As organizações sociais podem receber recursos públicos, bens e servidores cedidos pelo Estado, mediante contrato de gestão.",
      "OSCIPs são formalizadas por meio de contratos de gestão, à semelhança das organizações sociais.",
    ],
    gabarito: 3,
    comentario:
      "A Lei 9.637/98 permite que as OS recebam dotações orçamentárias, cessão de servidores e uso de bens públicos mediante contrato de gestão firmado com o Poder Público. O STF, no julgamento da ADI 1.923, reconheceu a constitucionalidade do modelo. As OS são entidades privadas de direito privado sem fins lucrativos — não integram a Administração. A formalização com OSCIPs se dá por termo de parceria (não contrato de gestão). A qualificação como OS é por ato do Executivo (não do Congresso).",
  },
  {
    id: 115,
    materia: "Administrativo",
    dificuldade: "Fácil",
    enunciado:
      "Segundo a Constituição Federal de 1988, o acesso a cargos, empregos e funções públicas exige:",
    opcoes: [
      "Concurso público de provas ou provas e títulos, para qualquer cargo da Administração direta e indireta.",
      "Concurso público de provas ou provas e títulos, ressalvadas as nomeações para cargo em comissão declarado em lei de livre nomeação e exoneração.",
      "Concurso público apenas para os cargos de carreira, sendo livres as nomeações para todos os demais.",
      "Aprovação em concurso público e formação em curso superior jurídico para cargos do quadro permanente.",
      "Concurso público de provas, vedada a modalidade de provas e títulos, para garantir a isonomia.",
    ],
    gabarito: 1,
    comentario:
      "O art. 37, II, da CF/88 exige aprovação prévia em concurso público de provas ou de provas e títulos, de acordo com a natureza e a complexidade do cargo ou emprego, para o acesso a cargos ou empregos públicos na administração direta e indireta, ressalvadas as nomeações para cargo em comissão declarado em lei de livre nomeação e exoneração.",
  },
  {
    id: 116,
    materia: "Administrativo",
    dificuldade: "Médio",
    enunciado:
      "Sobre a desapropriação indireta no direito administrativo, é correto afirmar que:",
    opcoes: [
      "A desapropriação indireta ocorre quando o Poder Público adquire imóvel particular por compra e venda.",
      "A desapropriação indireta é aquela em que o Estado apossa-se de bem particular sem observar o devido processo legal, gerando direito de indenização ao proprietário.",
      "O proprietário cujo bem foi objeto de desapropriação indireta pode reivindicar o bem a qualquer tempo.",
      "A desapropriação indireta não gera direito à indenização quando realizada em prol do interesse público.",
      "A ação de indenização por desapropriação indireta prescreve em 5 anos, contados da ocupação.",
    ],
    gabarito: 1,
    comentario:
      "A desapropriação indireta é o esbulho possessório praticado pelo Estado ao se apossar de bem particular sem seguir o procedimento expropriatório constitucional. O proprietário tem direito à indenização, mas não pode reivindicar o bem quando este já estiver incorporado a obra ou serviço público — restando-lhe apenas a ação indenizatória. O STJ e o STF reconhecem que a prescrição da ação de desapropriação indireta é de 10 anos (Súmula 119, STJ), tendo havido evolução jurisprudencial.",
  },
  {
    id: 117,
    materia: "Administrativo",
    dificuldade: "Difícil",
    enunciado:
      "Sobre o regime jurídico dos servidores públicos federais (Lei 8.112/90), é correto afirmar:",
    opcoes: [
      "A estabilidade é adquirida após 2 anos de efetivo exercício, sem necessidade de avaliação especial de desempenho.",
      "O servidor público estável pode ser demitido por insuficiência de desempenho, desde que assegurado o contraditório.",
      "A acumulação de cargos públicos é absolutamente vedada pela Constituição, sem exceções.",
      "A aposentadoria compulsória do servidor público ocorre aos 70 anos de idade em todos os casos.",
      "O servidor exonerado a pedido tem direito à indenização pelo período de férias não gozadas.",
    ],
    gabarito: 1,
    comentario:
      "O art. 41, §1º, III, da CF/88 prevê que o servidor público estável pode perder o cargo mediante procedimento de avaliação periódica de desempenho, na forma de lei complementar, assegurada ampla defesa. A estabilidade é adquirida após 3 anos de efetivo exercício (EC 19/98), com avaliação especial de desempenho por comissão instituída para essa finalidade. A aposentadoria compulsória é aos 75 anos (EC 88/2015), não 70. A acumulação de cargos é vedada, com exceções (dois cargos de professor, médico com cargo técnico etc.).",
  },
  {
    id: 118,
    materia: "Administrativo",
    dificuldade: "Médio",
    enunciado:
      "Sobre o poder de polícia da Administração Pública, é correto afirmar que:",
    opcoes: [
      "O poder de polícia é sempre autoexecutório, dispensando a intervenção do Poder Judiciário.",
      "O poder de polícia só pode ser exercido diretamente pelos entes federativos, sendo vedada sua delegação a particulares.",
      "As sanções de polícia aplicadas pela Administração são sempre de natureza penal.",
      "O poder de polícia pode ser delegado integralmente a pessoas jurídicas de direito privado integrantes da Administração indireta.",
      "O poder de polícia tem como fundamento o princípio da supremacia do interesse público e limita o exercício de direitos individuais.",
    ],
    gabarito: 4,
    comentario:
      "O poder de polícia fundamenta-se na supremacia do interesse público, consistindo na prerrogativa da Administração de restringir e condicionar o exercício de liberdades e direitos individuais em benefício da coletividade. O STF, no RE 633.782 (Tema 532), fixou que os atos de consentimento, fiscalização e aplicação de sanções do poder de polícia podem ser delegados a pessoas jurídicas de direito privado integrantes da Administração indireta, desde que não haja coerção física. Atividades que envolvam coerção física são indelegáveis.",
  },
  {
    id: 119,
    materia: "Administrativo",
    dificuldade: "Fácil",
    enunciado:
      "Sobre a ação popular prevista na Constituição Federal de 1988, é correto afirmar que:",
    opcoes: [
      "Qualquer pessoa com capacidade civil plena pode propor ação popular para anular ato lesivo ao patrimônio público.",
      "Apenas o cidadão (eleitor) pode propor ação popular para anular ato lesivo ao patrimônio público.",
      "A ação popular pode ser proposta pelo Ministério Público, quando o cidadão não o fizer.",
      "A ação popular exige o pagamento de custas processuais pelo autor popular.",
      "A ação popular não pode ser utilizada para questionar atos lesivos à moralidade administrativa.",
    ],
    gabarito: 1,
    comentario:
      "O art. 5º, LXXIII, da CF/88 prevê que qualquer cidadão é parte legítima para propor ação popular que vise anular ato lesivo ao patrimônio público, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural. Cidadão, para fins de ação popular, é o eleitor (pessoa que possui título de eleitor). O autor popular fica isento de custas, salvo se comprovada má-fé. O MP acompanha a ação, mas não a propõe originalmente.",
  },
  {
    id: 120,
    materia: "Administrativo",
    dificuldade: "Difícil",
    enunciado:
      "Sobre a parceria público-privada (PPP) na Lei 11.079/2004, é correto afirmar:",
    opcoes: [
      "A PPP na modalidade patrocinada não admite o pagamento de contraprestação pelo poder público.",
      "A PPP na modalidade administrativa tem como parceiro privado uma entidade privada que presta serviço à Administração como usuária direta.",
      "O contrato de PPP pode ter valor mínimo de R$ 5 milhões e prazo de 5 a 25 anos.",
      "Na PPP, o parceiro público assume integralmente os riscos do negócio, sendo vedada a transferência de riscos ao parceiro privado.",
      "O contrato de PPP dispensa licitação quando a contratação for de entidade da Administração indireta.",
    ],
    gabarito: 1,
    comentario:
      "A PPP na modalidade administrativa (art. 2º, §2º, da Lei 11.079/2004) é o contrato de prestação de serviços em que a Administração Pública é a usuária direta ou indireta, ainda que envolva execução de obra ou fornecimento e instalação de bens. O valor mínimo do contrato de PPP é de R$ 10 milhões (não 5) e o prazo varia de 5 a 35 anos (não 25). Na PPP patrocinada, há cobrança de tarifas dos usuários mais contraprestação do poder público. A repartição de riscos é característica essencial da PPP.",
  },

  // ──────────────────────────────────────────
  // PROCESSO CIVIL (121–140)
  // ──────────────────────────────────────────
  {
    id: 121,
    materia: "Processual",
    dificuldade: "Médio",
    enunciado:
      "Sobre os princípios do CPC/2015, assinale a alternativa correta:",
    opcoes: [
      "O princípio da cooperação impõe apenas ao juiz o dever de agir com boa-fé processual.",
      "O princípio da primazia do julgamento de mérito determina que o juiz sempre decida o processo por sentença definitiva, sendo vedadas as extinções sem resolução do mérito.",
      "O contraditório substancial, previsto nos arts. 9º e 10 do CPC, veda ao juiz proferir decisão, ainda que interlocutória, com base em fundamento que não tenha sido objeto de prévia manifestação das partes.",
      "O princípio da eficiência processual permite ao juiz desconsiderar prazos processuais para acelerar o julgamento.",
      "O dever de cooperação no CPC/2015 vincula apenas as partes, não o juiz.",
    ],
    gabarito: 2,
    comentario:
      "O art. 10 do CPC/2015 veda ao juiz decidir com base em fundamento de direito ou de fato sobre o qual não tenha sido dada às partes a oportunidade de se manifestar — mesmo em matérias que o juiz possa conhecer de ofício. Esse é o contraditório substancial ou dinâmico, que garante real participação das partes na formação da decisão. O princípio da cooperação (art. 6º) obriga todos os sujeitos do processo — partes e juiz — a atuar cooperativamente.",
  },
  {
    id: 122,
    materia: "Processual",
    dificuldade: "Fácil",
    enunciado: "Sobre a competência no CPC/2015, é correto afirmar que:",
    opcoes: [
      "A incompetência relativa pode ser declarada de ofício pelo juiz, independentemente de arguição pela parte.",
      "A competência territorial é, em regra, de natureza absoluta e não pode ser modificada pela vontade das partes.",
      "O foro de eleição em contratos de adesão pode ser afastado pelo juiz de ofício quando houver desequilíbrio manifesto.",
      "A incompetência absoluta deve ser alegada em preliminar de contestação, sob pena de preclusão.",
      "A conexão e a continência são causas de modificação da competência absoluta.",
    ],
    gabarito: 2,
    comentario:
      "O art. 63, §3º, do CPC/2015 permite ao juiz declinar de ofício da competência quando o foro de eleição figurar em contrato de adesão e sua aplicação tornar excessivamente oneroso o acesso do aderente à justiça. A incompetência relativa não pode ser declarada de ofício (Súmula 33, STJ). A competência territorial é, em regra, relativa. A incompetência absoluta pode ser arguida a qualquer tempo e grau de jurisdição e declarada de ofício. Conexão e continência modificam a competência relativa, não a absoluta.",
  },
  {
    id: 123,
    materia: "Processual",
    dificuldade: "Médio",
    enunciado:
      "Sobre os negócios processuais atípicos previstos no art. 190 do CPC/2015, é correto afirmar:",
    opcoes: [
      "Os negócios processuais só podem ser celebrados antes do início do processo.",
      "Os negócios processuais atípicos permitem às partes, desde que capazes e o processo verse sobre direitos que admitam autocomposição, ajustar mudanças no procedimento.",
      "O juiz não pode controlar a validade de negócios processuais celebrados entre partes capazes.",
      "Os negócios processuais não vinculam o juiz, podendo este ignorá-los se entender inconveniente.",
      "Os negócios processuais atípicos só podem versar sobre ônus probatório e prazos processuais.",
    ],
    gabarito: 1,
    comentario:
      "O art. 190 do CPC/2015 prevê o negócio jurídico processual atípico, permitindo que as partes, sendo plenamente capazes e o processo versando sobre direitos que admitam autocomposição, ajustem mudanças no procedimento e convencionem sobre seus ônus, poderes, faculdades e deveres. O juiz controla a validade dos negócios, recusando-os se nulos ou inseridos em contrato de adesão, em situação de vulnerabilidade ou que violem garantias processuais. Os negócios vinculam o juiz quando válidos.",
  },
  {
    id: 124,
    materia: "Processual",
    dificuldade: "Difícil",
    enunciado:
      "Sobre o incidente de resolução de demandas repetitivas (IRDR) no CPC/2015, é correto afirmar:",
    opcoes: [
      "O IRDR pode ser instaurado pelo juiz de ofício ou a requerimento das partes, do Ministério Público ou da Defensoria Pública.",
      "O IRDR pode ser instaurado perante o STJ ou o STF para questionar teses de direito constitucional.",
      "A decisão proferida no IRDR tem autoridade de coisa julgada, vinculando apenas as partes dos processos suspensos.",
      "Durante a tramitação do IRDR, fica vedado o ajuizamento de novas ações que versem sobre a mesma questão de direito.",
      "O IRDR é instaurado perante Tribunal de Justiça ou TRF e visa à fixação de tese jurídica que se aplica a casos repetitivos nos juízos de primeiro grau.",
    ],
    gabarito: 4,
    comentario:
      "O IRDR (arts. 976-987 do CPC) é instaurado perante o Tribunal de Justiça estadual ou Tribunal Regional Federal, quando houver efetiva repetição de processos que contenham controvérsia sobre a mesma questão unicamente de direito. A tese fixada no IRDR vincula todos os juízes e órgãos fracionários na área de jurisdição do tribunal. O IRDR não é instaurado no STJ/STF — o instrumento equivalente lá são os recursos repetitivos. A suspensão dos processos é obrigatória (art. 982, I).",
  },
  {
    id: 125,
    materia: "Processual",
    dificuldade: "Médio",
    enunciado:
      "Sobre a tutela provisória de urgência no CPC/2015, é correto afirmar que:",
    opcoes: [
      "A tutela de urgência antecipada requerida em caráter antecedente converte-se automaticamente em definitiva após 30 dias sem contestação do réu.",
      "Para a concessão de tutela de urgência cautelar, exige-se demonstração de probabilidade do direito e perigo de dano ou risco ao resultado útil do processo.",
      "A tutela de urgência pode ser concedida de ofício pelo juiz, sem requerimento da parte.",
      "Não é possível a concessão de tutela de urgência em caráter liminar, isto é, sem ouvir a parte contrária.",
      "A tutela de evidência não dispensa a demonstração de urgência, diferenciando-se da tutela antecipada apenas pelo grau de probabilidade do direito.",
    ],
    gabarito: 1,
    comentario:
      "O art. 300 do CPC/2015 exige para a tutela de urgência (cautelar ou antecipada): (i) probabilidade do direito (fumus boni iuris) e (ii) perigo de dano ou risco ao resultado útil do processo (periculum in mora). A tutela de urgência em caráter antecedente, não contestada pelo réu, torna-se estável (art. 304), não 'definitiva' automaticamente. A tutela de evidência (art. 311) dispensa o requisito de urgência, exigindo apenas a evidência do direito. O juiz não pode conceder tutela de urgência de ofício.",
  },
  {
    id: 126,
    materia: "Processual",
    dificuldade: "Fácil",
    enunciado:
      "Sobre os prazos processuais no CPC/2015, é correto afirmar que:",
    opcoes: [
      "O prazo para contestação é de 15 dias corridos, contados da citação do réu.",
      "O prazo para interposição de recursos é geralmente de 15 dias úteis, exceto para os embargos de declaração, cujo prazo é de 5 dias úteis.",
      "Os prazos processuais contam-se em dias corridos, sendo excluído o dia do começo e incluído o dia do vencimento.",
      "O prazo de 15 dias corridos para a Fazenda Pública é o mesmo das partes comuns.",
      "O prazo para resposta do réu começa a correr da data em que o advogado do réu recebe a citação.",
    ],
    gabarito: 1,
    comentario:
      "O CPC/2015 adotou a contagem dos prazos em dias úteis (art. 219), excluídos sábados, domingos e feriados. O prazo para interposição da maioria dos recursos é de 15 dias úteis. O prazo para embargos de declaração é de 5 dias úteis (art. 1.023). O prazo para a Fazenda Pública é em quádruplo para contestar e em dobro para recorrer (art. 183, CPC — mas a contestação da Fazenda também é de 30 dias úteis — o prazo expandido se aplica a certas situações).",
  },
  {
    id: 127,
    materia: "Processual",
    dificuldade: "Difícil",
    enunciado:
      "Sobre o cumprimento de sentença que reconhece a exigibilidade de obrigação de pagar quantia certa no CPC/2015, é correto afirmar:",
    opcoes: [
      "O credor deve requerer a expedição de mandado executivo imediatamente após o trânsito em julgado.",
      "Após o prazo de 15 dias para pagamento voluntário, aplica-se multa de 10% e honorários advocatícios de 10% sobre o valor do débito.",
      "A Fazenda Pública cumpre a sentença que a condena ao pagamento de quantia por meio de precatório ou RPV, conforme o valor.",
      "O devedor pode apresentar impugnação ao cumprimento de sentença antes da penhora.",
      "A impugnação ao cumprimento de sentença tem efeito suspensivo automático.",
    ],
    gabarito: 1,
    comentario:
      "O art. 523 do CPC/2015 estabelece que, após o trânsito em julgado, o devedor é intimado para pagar em 15 dias. Não havendo pagamento voluntário, o valor será acrescido de multa de 10% e de honorários advocatícios de 10% (honorários de cumprimento). A Fazenda Pública submete-se ao regime de precatórios ou RPV (art. 100, CF). A impugnação pode ser apresentada depois da penhora (art. 525) e não tem efeito suspensivo automático — este depende de requerimento e demonstração de probabilidade de êxito e risco de dano.",
  },
  {
    id: 128,
    materia: "Processual",
    dificuldade: "Médio",
    enunciado:
      "Sobre a litispendência e a coisa julgada no CPC/2015, é correto afirmar que:",
    opcoes: [
      "A litispendência ocorre quando há duas ações idênticas em curso, com mesmas partes, mesma causa de pedir e mesmo pedido.",
      "A coisa julgada material alcança as questões decididas incidentalmente no processo, como as prejudiciais ao mérito.",
      "A litispendência é causa de extinção do processo com resolução de mérito.",
      "A coisa julgada formal é oponível a terceiros que não participaram do processo.",
      "A coisa julgada material ocorre quando a sentença de mérito transita em julgado somente nos casos de procedência do pedido.",
    ],
    gabarito: 1,
    comentario:
      "O art. 337, §2º, do CPC/2015 define litispendência quando se reproduz ação anteriormente ajuizada, com mesmas partes, mesma causa de pedir e mesmo pedido. O CPC/2015 inovou ao extender a coisa julgada material às questões prejudiciais decididas de forma expressa, incidental e após contraditório (art. 503, §1º). A litispendência extingue o processo sem resolução de mérito (art. 485, V). A coisa julgada formal é endoprocessual — só vincula dentro do processo.",
  },
  {
    id: 129,
    materia: "Processual",
    dificuldade: "Fácil",
    enunciado: "Sobre a ação rescisória no CPC/2015, é correto afirmar que:",
    opcoes: [
      "A ação rescisória pode ser proposta para desconstituir qualquer decisão judicial transitada em julgado.",
      "O prazo para a propositura da ação rescisória é de 2 anos, contados do trânsito em julgado da última decisão proferida no processo.",
      "A ação rescisória pode ser proposta com fundamento em erro de fato sem necessidade de demonstrar que o juiz desconhecia o fato à época do julgamento.",
      "A ação rescisória é processada e julgada pelo mesmo órgão que proferiu a decisão rescindenda.",
      "A ação rescisória pode ser proposta pelo Ministério Público apenas nos casos em que ele era parte no processo rescindendo.",
    ],
    gabarito: 1,
    comentario:
      "O art. 975 do CPC/2015 estabelece que o direito à rescisão se extingue em 2 anos contados do trânsito em julgado da última decisão proferida no processo. A ação rescisória é proposta perante o tribunal que proferiu a decisão rescindenda (não pelo mesmo órgão fracionário). O MP pode propor ação rescisória nos casos do art. 967, III, do CPC, inclusive quando não foi parte. O rol de hipóteses rescisórias é taxativo (art. 966).",
  },
  {
    id: 130,
    materia: "Processual",
    dificuldade: "Difícil",
    enunciado: "Sobre os recursos no CPC/2015, assinale a alternativa correta:",
    opcoes: [
      "O recurso ordinário constitucional (ROC) é o recurso cabível contra as decisões dos Tribunais Regionais Federais em causas de competência originária.",
      "O agravo de instrumento é cabível contra toda e qualquer decisão interlocutória proferida no processo.",
      "O recurso especial exige prequestionamento, ou seja, que a matéria federal tenha sido decidida pelo tribunal de origem.",
      "O efeito suspensivo é consequência natural de todos os recursos previstos no CPC/2015.",
      "Os embargos de divergência são cabíveis para uniformizar a jurisprudência entre turmas do mesmo tribunal de segunda instância.",
    ],
    gabarito: 2,
    comentario:
      "O prequestionamento é pressuposto de admissibilidade do recurso especial e do recurso extraordinário: a matéria federal ou constitucional deve ter sido decidida pelo tribunal de origem. O agravo de instrumento não é cabível contra toda decisão interlocutória — o CPC/2015 adotou o taxatividade mitigada (rol do art. 1.015 ampliado por interpretação extensiva pelo STJ). O efeito suspensivo não é automático para todos os recursos. O ROC é cabível de decisões de TJs e TRFs em mandados de segurança de competência originária, habeas corpus, etc.",
  },
  {
    id: 131,
    materia: "Processual",
    dificuldade: "Médio",
    enunciado:
      "Sobre a execução por quantia certa contra devedor solvente no CPC/2015, é correto afirmar:",
    opcoes: [
      "O juiz deve determinar a penhora dos bens do devedor logo após o requerimento de execução, sem necessidade de citação prévia.",
      "A impenhorabilidade do bem de família pode ser afastada para o pagamento de dívidas trabalhistas.",
      "A penhora de dinheiro em conta corrente (penhora online/BACENJUD) tem prioridade sobre qualquer outro bem.",
      "O devedor pode nomear bens à penhora, mas a nomeação vincula o credor e o juiz.",
      "A Fazenda Pública pode ser executada pelo rito da execução por quantia certa, sujeitando-se à penhora de bens.",
    ],
    gabarito: 2,
    comentario:
      "O art. 835 do CPC/2015 estabelece a preferência de penhora de dinheiro, em espécie ou em depósito ou aplicação em instituição financeira — a chamada ordem de preferência, na qual o dinheiro ocupa o primeiro lugar. A penhora online (BACENJUD/SISBAJUD) é o instrumento preferencial. O devedor é citado antes da penhora (art. 829). O bem de família pode ser afastado apenas para débito de natureza condominial (STJ). A Fazenda submete-se ao sistema de precatórios, não a penhora.",
  },
  {
    id: 132,
    materia: "Processual",
    dificuldade: "Fácil",
    enunciado:
      "Sobre os sujeitos do processo no CPC/2015, é correto afirmar que:",
    opcoes: [
      "A capacidade de ser parte é equivalente à capacidade processual.",
      "A capacidade postulatória é a aptidão para estar em juízo, podendo ser exercida por qualquer pessoa capaz.",
      "O litisconsórcio necessário ocorre quando a lei ou a natureza jurídica da relação determina que a lide seja decidida de modo uniforme para todos.",
      "O amicus curiae no CPC/2015 tem poderes recursais amplos, podendo recorrer de qualquer decisão.",
      "A substituição processual dispensa qualquer autorização legal, podendo ocorrer a critério das partes.",
    ],
    gabarito: 2,
    comentario:
      "O litisconsórcio necessário (art. 114 do CPC) ocorre quando, por disposição legal ou pela natureza da relação jurídica controvertida, a eficácia da sentença depender da citação de todos que devam ser litisconsortes. A capacidade de ser parte (personalidade judiciária) é mais ampla que a capacidade processual (capacidade de estar em juízo). A capacidade postulatória exige representação por advogado. O amicus curiae pode recorrer apenas da decisão que julgar o incidente (art. 138, §3º).",
  },
  {
    id: 133,
    materia: "Processual",
    dificuldade: "Difícil",
    enunciado:
      "Sobre o sistema de precedentes vinculantes no CPC/2015, é correto afirmar:",
    opcoes: [
      "Os precedentes vinculantes no CPC/2015 são apenas os enunciados de súmula do STF e do STJ.",
      "A técnica da distinção (distinguishing) permite ao juiz ou tribunal deixar de aplicar o precedente vinculante quando houver diferença relevante entre o caso concreto e o paradigma.",
      "A superação de precedente (overruling) pode ser feita por qualquer órgão jurisdicional que o considere equivocado.",
      "Os precedentes do IRDR vinculam apenas os casos suspensos durante sua tramitação.",
      "O descumprimento de precedente vinculante pelo juiz não permite a interposição de reclamação ao tribunal competente.",
    ],
    gabarito: 1,
    comentario:
      "O art. 489, §1º, VI, do CPC/2015 determina que o juiz que deixar de seguir enunciado de súmula, jurisprudência ou precedente invocado pela parte deve demonstrar a existência de distinção no caso em julgamento ou a superação do entendimento. A técnica da distinção (distinguishing) é, portanto, o instrumento legítimo para não aplicar um precedente quando há diferença fática relevante. O overruling é técnica de superação, que deve partir do próprio tribunal que firmou o precedente. A reclamação é cabível para garantir a observância de precedentes vinculantes (art. 988).",
  },
  {
    id: 134,
    materia: "Processual",
    dificuldade: "Médio",
    enunciado: "Sobre a citação no CPC/2015, é correto afirmar que:",
    opcoes: [
      "A citação por edital é a modalidade preferencial, utilizada sempre que o réu não for encontrado no primeiro ato de comunicação.",
      "A citação pelo correio é vedada nos processos de competência da Justiça Federal.",
      "A citação realiza-se pessoalmente ao réu ou, nas hipóteses legais, por carta precatória, rogatória, de ordem, edital ou meio eletrônico.",
      "A citação por hora certa é cabível quando o réu estiver em local incerto e não sabido.",
      "A citação é nula quando realizada fora dos dias e horários úteis, independentemente do comparecimento espontâneo do réu.",
    ],
    gabarito: 2,
    comentario:
      "O CPC/2015 prevê diversas modalidades de citação: pelo correio, por oficial de justiça, por meio eletrônico, por edital e por hora certa. A citação por hora certa (art. 252) é cabível quando o oficial de justiça, por 2 vezes, não encontrar o réu em seu domicílio, suspeitar que ele está se ocultando para evitar a citação — não quando estiver em local incerto. A citação por edital é subsidiária. O comparecimento espontâneo do réu supre a nulidade da citação (art. 239, §1º).",
  },
  {
    id: 135,
    materia: "Processual",
    dificuldade: "Fácil",
    enunciado:
      "Sobre o procedimento dos Juizados Especiais Cíveis (Lei 9.099/95), é correto afirmar que:",
    opcoes: [
      "As causas de valor até 40 salários mínimos são de competência obrigatória dos Juizados Especiais.",
      "Nos Juizados Especiais, é obrigatória a assistência de advogado em todas as fases do processo.",
      "Nos Juizados, a execução de sentença pode ser feita no mesmo processo, sem necessidade de ação autônoma.",
      "O recurso cabível contra sentença dos Juizados é o recurso inominado, com prazo de 15 dias corridos.",
      "Pessoas jurídicas não podem ser parte nos Juizados Especiais Cíveis estaduais.",
    ],
    gabarito: 2,
    comentario:
      "A Lei 9.099/95 prevê o sincretismo processual: a execução da sentença pode ser realizada nos próprios autos do processo de conhecimento, sem necessidade de ação autônoma (art. 52). A competência dos Juizados é opcional para causas até 40 salários mínimos (o autor pode escolher o Juizado ou o procedimento comum). A assistência de advogado é facultativa nas causas até 20 salários mínimos. O recurso é o recurso inominado, com prazo de 10 dias. Pessoas jurídicas podem ser rés, mas não autoras (exceto microempresas e EPP).",
  },
  {
    id: 136,
    materia: "Processual",
    dificuldade: "Difícil",
    enunciado:
      "Sobre a intervenção de terceiros no CPC/2015, assinale a alternativa correta:",
    opcoes: [
      "O chamamento ao processo pode ser requerido tanto pelo autor quanto pelo réu.",
      "A denunciação da lide é obrigatória nos casos do art. 125 do CPC, sob pena de perda do direito de regresso.",
      "O assistente simples pode praticar todos os atos processuais que o assistido poderia praticar, inclusive contrariar a vontade do assistido.",
      "O amicus curiae pode ser admitido em qualquer processo, desde que demonstre relevância do tema para terceiros.",
      "No CPC/2015, a denunciação da lide e o chamamento ao processo têm o mesmo âmbito de aplicação.",
    ],
    gabarito: 3,
    comentario:
      "O art. 138 do CPC/2015 permite a intervenção do amicus curiae no processo em que a questão seja relevante por sua relevância, especificidade do tema ou repercussão social da controvérsia. O juiz pode deferi-la de ofício ou a requerimento. O chamamento ao processo (art. 130) só pode ser requerido pelo réu. A denunciação da lide, no CPC/2015, é faculdade (não mais obrigatória), sem perda do direito de regresso. O assistente simples atua subordinadamente ao assistido — não pode contrariá-lo.",
  },
  {
    id: 137,
    materia: "Processual",
    dificuldade: "Médio",
    enunciado: "Sobre as provas no CPC/2015, é correto afirmar que:",
    opcoes: [
      "O ônus da prova é distribuído de forma estática: o autor prova o fato constitutivo e o réu prova o fato impeditivo, modificativo ou extintivo.",
      "A prova emprestada pode ser utilizada no processo, mas apenas se as partes são as mesmas do processo de origem.",
      "O CPC/2015 prevê a distribuição dinâmica do ônus da prova, permitindo ao juiz atribuí-lo à parte que tiver mais facilidade de produzi-la.",
      "A confissão judicial é irrevogável em qualquer hipótese.",
      "A prova ilícita é absolutamente vedada no processo civil, não podendo ser utilizada nem mesmo para beneficiar a parte que sofreu a violação.",
    ],
    gabarito: 2,
    comentario:
      "O art. 373, §1º, do CPC/2015 prevê a distribuição dinâmica do ônus da prova: o juiz pode atribuir o ônus à parte que tiver maior facilidade de produzir a prova, desde que haja impossibilidade ou excessiva dificuldade de cumprir o ônus ou maior facilidade de obtenção da prova do fato contrário. A prova emprestada (art. 372) pode ser utilizada independentemente de identidade de partes, mas sua eficácia é menor se as partes forem distintas. A confissão pode ser anulada por erro de fato ou coação (art. 393).",
  },
  {
    id: 138,
    materia: "Processual",
    dificuldade: "Fácil",
    enunciado:
      "Sobre a sentença e a coisa julgada no CPC/2015, é correto afirmar que:",
    opcoes: [
      "A sentença terminativa resolve o mérito da causa e, por isso, faz coisa julgada material.",
      "A coisa julgada material impede a rediscussão da matéria decidida em qualquer processo posterior.",
      "A sentença que extingue o processo sem resolução do mérito faz coisa julgada material.",
      "A coisa julgada formal é suficiente para impedir a propositura de nova ação com os mesmos elementos.",
      "O CPC/2015 veda a aplicação da coisa julgada secundum eventum litis em qualquer hipótese.",
    ],
    gabarito: 1,
    comentario:
      "A coisa julgada material é a qualidade que torna imutável e indiscutível a decisão de mérito não mais sujeita a recurso (art. 502). Ela tem eficácia negativa (impede nova ação sobre a mesma questão) e positiva (vincula as partes em processos futuros). A sentença terminativa (sem mérito) faz apenas coisa julgada formal — que é a imutabilidade dentro do processo, mas não impede nova propositura. O CPC/2015 admite a coisa julgada secundum eventum litis em ações coletivas (art. 103 do CDC aplicado subsidiariamente).",
  },
  {
    id: 139,
    materia: "Processual",
    dificuldade: "Difícil",
    enunciado:
      "Sobre a tutela de evidência no CPC/2015, assinale a alternativa correta:",
    opcoes: [
      "A tutela de evidência exige a demonstração de urgência para ser deferida.",
      "A tutela de evidência pode ser concedida, independentemente de urgência, nos casos expressamente previstos no art. 311 do CPC.",
      "A tutela de evidência é modalidade de tutela cautelar, destinada a assegurar o resultado útil do processo.",
      "A tutela de evidência não pode ser concedida de forma liminar, antes da oitiva da parte contrária.",
      "A tutela de evidência é cabível apenas nos casos em que o réu é revel.",
    ],
    gabarito: 1,
    comentario:
      "O art. 311 do CPC/2015 estabelece que a tutela de evidência pode ser concedida independentemente da demonstração de perigo de dano ou risco ao resultado útil do processo — dispensando o requisito da urgência. As hipóteses taxativas são: (i) abuso de direito de defesa ou manifesto propósito protelatório do réu; (ii) as alegações de fato puderem ser comprovadas apenas documentalmente e houver tese firmada em julgamento repetitivo ou súmula vinculante; (iii) se tratar de pedido reipersecutório fundado em prova documental adequada; (iv) petição inicial instruída com prova documental suficiente.",
  },
  {
    id: 140,
    materia: "Processual",
    dificuldade: "Médio",
    enunciado: "Sobre a ação monitória no CPC/2015, é correto afirmar que:",
    opcoes: [
      "A ação monitória é cabível quando o credor dispõe de título executivo extrajudicial, para obter de forma mais rápida o pagamento.",
      "Não oferecidos embargos pelo réu, o mandado inicial é convertido em mandado executivo, e o processo prossegue na forma do cumprimento de sentença.",
      "A ação monitória só pode ter por objeto o pagamento de quantia em dinheiro.",
      "Os embargos monitórios têm os mesmos requisitos e efeitos dos embargos à execução.",
      "A ação monitória é de competência exclusiva dos Juizados Especiais Cíveis.",
    ],
    gabarito: 1,
    comentario:
      "O art. 701, §2º, do CPC/2015 prevê que, não havendo embargos, o mandado monitório é convertido em mandado executivo, constituindo de pleno direito o título executivo judicial, prosseguindo-se na forma do cumprimento de sentença. A ação monitória (art. 700) é cabível quando o credor dispõe de prova escrita sem eficácia de título executivo — não se confunde com a execução de título extrajudicial. Pode ter por objeto o pagamento de quantia, entrega de coisa fungível ou infungível ou bem móvel ou imóvel, ou cumprimento de obrigação de fazer ou não fazer.",
  },

  // ──────────────────────────────────────────
  // ÉTICA E ESTATUTO (141–160)
  // ──────────────────────────────────────────
  {
    id: 141,
    materia: "Ética",
    dificuldade: "Fácil",
    enunciado:
      "Sobre o sigilo profissional do advogado previsto no Estatuto da OAB (Lei 8.906/94), é correto afirmar que:",
    opcoes: [
      "O sigilo profissional pode ser afastado por determinação judicial fundamentada.",
      "O sigilo profissional abrange todas as comunicações entre advogado e cliente, sendo de natureza relativa.",
      "O sigilo profissional é absoluto, sendo direito e dever do advogado, não podendo ser quebrado nem por ordem judicial.",
      "O advogado pode revelar segredo do cliente quando necessário para se defender em processo disciplinar.",
      "O sigilo profissional não abrange as informações prestadas pelo cliente a outros advogados do mesmo escritório.",
    ],
    gabarito: 2,
    comentario:
      "O art. 7º, XIX, do EOAB garante ao advogado recusar-se a depor como testemunha em processo no qual funcionou ou deva funcionar, ou sobre fato relacionado com pessoa de quem seja ou foi advogado, mesmo quando autorizado ou solicitado pelo constituinte. O sigilo é considerado absoluto — nem determinação judicial o afasta. O Código de Ética (art. 25) reforça: o sigilo profissional é inerente à profissão e constitui direito e dever do advogado.",
  },
  {
    id: 142,
    materia: "Ética",
    dificuldade: "Médio",
    enunciado:
      "Sobre os impedimentos e incompatibilidades para o exercício da advocacia previstos no EOAB, é correto afirmar que:",
    opcoes: [
      "O membro do Poder Executivo municipal pode advogar contra o respectivo ente público.",
      "Os servidores da Administração Pública direta, autárquica e fundacional não podem exercer a advocacia contra o Estado, na área de sua atuação funcional.",
      "A incompatibilidade impede o exercício da advocacia apenas em causas relacionadas ao cargo público ocupado.",
      "O advogado que toma posse em cargo de dedicação exclusiva pode continuar a advogar em causas anteriores ao cargo.",
      "Os magistrados e membros do Ministério Público podem advogar após 1 ano do afastamento do cargo.",
    ],
    gabarito: 1,
    comentario:
      "O art. 30, I, do EOAB prevê que são impedidos de exercer a advocacia os servidores da Administração Pública direta, indireta e fundacional, contra a Fazenda Pública que os remunera ou à qual seja vinculada a entidade empregadora. A incompatibilidade (art. 28) é mais ampla e impede o exercício da advocacia em geral (ex.: membros do Poder Executivo, chefes do Poder Legislativo etc.). Magistrados e membros do MP, ao se aposentarem, só podem advogar após 3 anos do afastamento (quarentena — art. 95, parágrafo único, V, CF).",
  },
  {
    id: 143,
    materia: "Ética",
    dificuldade: "Fácil",
    enunciado:
      "Sobre as prerrogativas do advogado previstas no EOAB, é correto afirmar que:",
    opcoes: [
      "O advogado pode ser preso em flagrante durante o exercício da advocacia, ainda que por ato relacionado ao exercício da profissão.",
      "O advogado tem direito à inviolabilidade de seu escritório ou local de trabalho, bem como de seus instrumentos de trabalho, de sua correspondência escrita, eletrônica, telefônica e telemática, desde que relativas ao exercício da advocacia.",
      "As prerrogativas do advogado são absolutas e não podem ser afastadas por nenhum fundamento.",
      "O advogado pode tomar assento à direita dos juízes em qualquer auditório, sem exceção.",
      "O advogado tem direito à vista dos autos de qualquer processo, mesmo nos casos de sigilo decretado pela Constituição.",
    ],
    gabarito: 1,
    comentario:
      "O art. 7º, II, do EOAB garante ao advogado a inviolabilidade de seu escritório ou local de trabalho, bem como de seus instrumentos de trabalho, de sua correspondência escrita, eletrônica, telefônica e telemática, desde que relativas ao exercício da advocacia. O STF tem reconhecido que essa inviolabilidade não é absoluta — pode ser afastada por decisão judicial fundamentada em caso de suspeita de crime cometido pelo próprio advogado. A prisão em flagrante de advogado, por ato no exercício da profissão, só pode ser feita pelo Presidente da seccional da OAB (art. 7º, §3º).",
  },
  {
    id: 144,
    materia: "Ética",
    dificuldade: "Médio",
    enunciado:
      "Sobre a publicidade na advocacia conforme o Código de Ética e Disciplina da OAB, é correto afirmar que:",
    opcoes: [
      "O advogado pode fazer publicidade ostensiva e mercantil de seus serviços, desde que veiculada apenas na internet.",
      "É permitida a publicidade que prometa resultados concretos e específicos ao cliente.",
      "O advogado pode divulgar seu nome e especialidade, mas não pode revelar o resultado de processos anteriores como forma de captação.",
      "A publicidade advocatícia é inteiramente vedada pelo Código de Ética da OAB.",
      "O advogado pode usar o nome de ex-cliente em publicidade com autorização expressa do cliente.",
    ],
    gabarito: 2,
    comentario:
      "O Código de Ética da OAB e o Provimento 205/2021 do CFOAB regulamentam a publicidade na advocacia: é permitida a publicidade informativa (nome, especialidade, formas de contato, distinções acadêmicas), mas são vedadas a publicidade com promessa de resultado, a publicidade ostensiva e mercantil, a captação indevida de clientela e o uso de informações de clientes ou ex-clientes sem autorização. Revelar resultados de processos anteriores como instrumento de captação viola o sigilo e os princípios éticos.",
  },
  {
    id: 145,
    materia: "Ética",
    dificuldade: "Difícil",
    enunciado: "Sobre o processo disciplinar na OAB, é correto afirmar que:",
    opcoes: [
      "O processo disciplinar da OAB é tramitado pelo Tribunal de Ética e Disciplina e suas decisões são definitivas, sendo vedado o recurso ao Poder Judiciário.",
      "A suspensão do exercício profissional pode ser aplicada pelo prazo de até 12 meses.",
      "A exclusão dos quadros da OAB é sanção disciplinar que pode ser aplicada na primeira infração quando considerada gravíssima.",
      "As sanções disciplinares previstas no EOAB são: advertência, censura, suspensão, exclusão e multa.",
      "O processo disciplinar da OAB tem natureza administrativa e não possui prazo prescricional.",
    ],
    gabarito: 1,
    comentario:
      "O art. 39 do EOAB prevê que a suspensão do exercício profissional pode ser aplicada pelo prazo de 30 dias a 12 meses. As sanções disciplinares do art. 36 são: censura, suspensão, exclusão e multa. Não há a sanção de 'advertência' no EOAB (diferente de como é em outros estatutos). O processo disciplinar da OAB tem prazo prescricional de 5 anos (art. 43). As decisões disciplinares da OAB podem ser revistas pelo Poder Judiciário.",
  },
  {
    id: 146,
    materia: "Ética",
    dificuldade: "Fácil",
    enunciado:
      "Sobre os honorários advocatícios contratados conforme o EOAB e o Código de Ética, é correto afirmar que:",
    opcoes: [
      "Os honorários advocatícios podem ser fixados exclusivamente em percentual sobre a causa, vedada a forma de valor fixo.",
      "O contrato de honorários advocatícios deve ser sempre escrito, sob pena de nulidade.",
      "Os honorários de sucumbência pertencem ao advogado e não podem ser objeto de renúncia ou compensação sem autorização do causídico.",
      "O contrato de honorários pode prever o pacto de quota litis para qualquer tipo de causa, inclusive criminal.",
      "Os honorários advocatícios são objeto de partilha no divórcio e no inventário quando constituídos durante a constância do casamento.",
    ],
    gabarito: 2,
    comentario:
      "O art. 23 do EOAB estabelece que os honorários incluídos na condenação, por arbitramento ou sucumbência, pertencem ao advogado e têm natureza alimentar, com os mesmos privilégios dos créditos oriundos da legislação do trabalho. Não podem ser renunciados ou compensados sem expressa autorização do advogado. O pacto de quota litis (art. 38 do CDE) é admitido, mas vedado em causas penais e nas que envolvam questões de estado. O contrato de honorários pode ser verbal ou escrito — a lei não exige a forma escrita como requisito de validade.",
  },
  {
    id: 147,
    materia: "Ética",
    dificuldade: "Médio",
    enunciado:
      "Sobre o dever de urbanidade do advogado no processo, previsto no Código de Ética da OAB, é correto afirmar que:",
    opcoes: [
      "O dever de urbanidade impõe ao advogado tratar todas as pessoas do processo com respeito, mesmo quando provocado ou tratado de forma descortês.",
      "O advogado pode usar linguagem agressiva nas petições quando necessário para defender o interesse do cliente.",
      "O dever de urbanidade se aplica apenas às relações com os magistrados, não com a parte adversa.",
      "O advogado que receber tratamento descortês do juiz está autorizado a responder de forma equivalente.",
      "O dever de urbanidade é incompatível com o dever de combatividade, devendo o advogado sempre preferir a cordialidade.",
    ],
    gabarito: 0,
    comentario:
      "O Código de Ética da OAB (art. 44) impõe ao advogado o dever de urbanidade no trato com os clientes, adversários, servidores, autoridades e qualquer pessoa com quem se relacione profissionalmente. Esse dever de urbanidade não é incompatível com a combatividade técnica — o advogado pode e deve ser veemente na defesa de seus clientes, mas sem perder o decoro e o respeito. Linguagem desrespeitosa, ainda que em defesa do cliente, viola o Código de Ética e pode ensejar processo disciplinar.",
  },
  {
    id: 148,
    materia: "Ética",
    dificuldade: "Difícil",
    enunciado:
      "Sobre o conflito de interesses na advocacia, previsto no Código de Ética da OAB, é correto afirmar:",
    opcoes: [
      "O advogado pode representar simultaneamente clientes com interesses opostos, desde que ambos expressem consentimento escrito.",
      "O advogado que atuou em determinada causa pode, após o encerramento da relação, assumir o patrocínio da parte adversa na mesma causa.",
      "O advogado que tem parente em cargo de chefia do escritório de advocacia adversário deve declinar do patrocínio para evitar conflito de interesses.",
      "O advogado pode adquirir bens de seu cliente quando o fizer pelo preço de mercado devidamente documentado.",
      "É vedado ao advogado patrocinar causa contra pessoa com quem tenha mantido ou mantém vínculo de parentesco, mesmo que de grau distante.",
    ],
    gabarito: 2,
    comentario:
      "O Código de Ética da OAB veda o patrocínio simultâneo de clientes com interesses conflitantes (art. 19). Também é vedado ao advogado, mesmo após o encerramento da relação, assumir o patrocínio da parte adversa na mesma causa. A aquisição de bens do cliente é vedada em regra (art. 21 do CDE), pois pode caracterizar conflito de interesses — exceção somente com autorização expressa e cumprimento de requisitos rigorosos. O parentesco com membros do escritório adversário pode configurar impedimento ou conflito de interesses, mas a análise é casuística.",
  },
  {
    id: 149,
    materia: "Ética",
    dificuldade: "Médio",
    enunciado:
      "Sobre a inscrição nos quadros da OAB e o exercício da advocacia, é correto afirmar que:",
    opcoes: [
      "O bacharel em direito pode advogar imediatamente após a colação de grau, antes de aprovação no Exame da OAB.",
      "A inscrição na OAB não é necessária para o exercício da advocacia no Tribunal do Júri.",
      "O estagiário inscrito na OAB pode praticar todos os atos privativos de advogado, exceto substabelecer.",
      "A aprovação no Exame da OAB é condição necessária mas não suficiente para a inscrição no quadro de advogados.",
      "O bacharel em direito que passa no Exame da OAB pode se inscrever diretamente como advogado, sem passar pela condição de estagiário.",
    ],
    gabarito: 3,
    comentario:
      "A aprovação no Exame da OAB é requisito necessário, mas a inscrição também exige: diploma ou certidão de graduação em direito, idoneidade moral, inexistência de incompatibilidade ou impedimento, e o pagamento de anuidade. O estagiário inscrito na OAB pode praticar atos privativos de advogado, desde que supervisionado — e pode substabelecer apenas para outro advogado, não para outro estagiário. O bacharel aprovado no Exame pode se inscrever diretamente como advogado (sem passar pela condição de estagiário) — a inscrição como estagiário é opcional, para quem ainda não concluiu o curso.",
  },
  {
    id: 150,
    materia: "Ética",
    dificuldade: "Fácil",
    enunciado:
      "O advogado que abandona a causa sem motivo justo, causando prejuízo ao cliente:",
    opcoes: [
      "Não comete infração ética, pois pode renunciar ao mandato a qualquer tempo.",
      "Comete infração ética passível de sanção disciplinar, além de responder civilmente pelos danos causados ao cliente.",
      "Comete infração ética, mas não pode ser responsabilizado civilmente, pois a relação advocatícia não é contratual.",
      "Pode ser sancionado apenas com advertência verbal pelo Tribunal de Ética e Disciplina.",
      "Não comete infração se notificar o cliente com antecedência mínima de 10 dias.",
    ],
    gabarito: 1,
    comentario:
      "O art. 13 do Código de Ética da OAB impõe ao advogado o dever de não abandonar a causa sem justo motivo. O abandono injustificado viola o dever de diligência e lealdade ao cliente, constituindo infração ética passível de processo disciplinar. Além disso, o advogado pode responder civilmente pelos danos causados ao cliente em razão do abandono (perdas e danos, lucros cessantes). A renúncia ao mandato é direita, mas o advogado deve continuar representando o cliente por 10 dias após a notificação para evitar prejuízo (art. 16, §3º, EOAB).",
  },
  {
    id: 151,
    materia: "Ética",
    dificuldade: "Médio",
    enunciado:
      "Sobre a relação entre advogado e cliente, o princípio da lealdade implica:",
    opcoes: [
      "Que o advogado deva obrigatoriamente aceitar todas as causas que lhe forem propostas, mesmo que contrariem suas convicções.",
      "Que o advogado deve prestar ao cliente todas as informações sobre o andamento da causa, mesmo que desfavoráveis.",
      "Que o advogado deve omitir fatos desfavoráveis ao cliente nos autos para melhor defendê-lo.",
      "Que o cliente tem o direito de exigir que o advogado minta em juízo em seu benefício.",
      "Que o advogado deve preferir os interesses do cliente em detrimento da verdade em juízo.",
    ],
    gabarito: 1,
    comentario:
      "O dever de lealdade do advogado para com o cliente inclui o dever de informação: o cliente deve ser mantido informado sobre o andamento da causa, inclusive sobre perspectivas desfavoráveis. Isso decorre da boa-fé e da relação de confiança que funda o mandato. O advogado não é obrigado a aceitar causas que contrariem sua consciência (art. 5º do CDE), e jamais pode mentir ou omitir fatos de forma fraudulenta em juízo — o dever de lealdade ao cliente encontra limite no dever de lealdade processual.",
  },
  {
    id: 152,
    materia: "Ética",
    dificuldade: "Difícil",
    enunciado:
      "Sobre a responsabilidade civil do advogado perante o cliente, é correto afirmar:",
    opcoes: [
      "A responsabilidade civil do advogado é objetiva, respondendo pelo resultado independentemente de culpa.",
      "A obrigação do advogado é de resultado, devendo entregar ao cliente o êxito pretendido na ação.",
      "A obrigação do advogado é de meio: ele deve empregar técnica, diligência e competência, sem garantir resultado.",
      "O advogado só responde civilmente se houver conduta dolosa, sendo a culpa leve insuficiente para gerar responsabilidade.",
      "O advogado responde objetivamente pela perda de prazo processual, pois se trata de obrigação de resultado.",
    ],
    gabarito: 2,
    comentario:
      "A responsabilidade civil do advogado perante o cliente é subjetiva (depende de culpa ou dolo) e a obrigação é de meio — o advogado deve empregar toda a sua técnica, diligência e competência, sem obrigação de garantir o êxito da demanda. O STJ tem reiteradamente reconhecido que a advocacia é obrigação de meio, salvo nas hipóteses em que o objeto do contrato é prestação específica e determinada (como uma consultoria específica ou elaboração de documento). A perda de prazo processual pode ensejar responsabilidade por culpa (negligência).",
  },
  {
    id: 153,
    materia: "Ética",
    dificuldade: "Fácil",
    enunciado:
      "O advogado pode recusar-se a patrocinar determinada causa quando:",
    opcoes: [
      "O valor dos honorários oferecidos pelo cliente for inferior ao mínimo da tabela da OAB.",
      "A causa contrariar suas convicções morais, desde que não seja o único advogado na localidade.",
      "O cliente não fornecer todas as informações sobre o caso na primeira consulta.",
      "O juiz da causa for seu desafeto pessoal.",
      "A causa for de natureza criminal, que o advogado considera socialmente reprovável.",
    ],
    gabarito: 1,
    comentario:
      "O art. 5º do Código de Ética da OAB estabelece que o advogado tem o dever de recusar seu patrocínio quando este importar em violação manifesta de norma ética, mas tem a faculdade de recusar quando a causa contrariar suas convicções morais — exceto quando se tratar de defensor dativo ou de curador especial nomeado pelo juiz. A recusa por convicções morais deve ser exercida sem causar dano ao cliente, com antecedência suficiente para que ele encontre outro advogado.",
  },
  {
    id: 154,
    materia: "Ética",
    dificuldade: "Médio",
    enunciado:
      "Sobre a advocacia preventiva e consultiva no âmbito do EOAB e do Código de Ética, é correto afirmar:",
    opcoes: [
      "A advocacia consultiva (emissão de pareceres) não é atividade privativa do advogado.",
      "O advogado que emite parecer contrário ao interesse do cliente não comete infração ética, desde que seja tecnicamente fundamentado.",
      "O advogado que emite parecer encomendado deve sempre chegar à conclusão pretendida pelo cliente, para ser leal a ele.",
      "O parecer jurídico vincula o cliente, que é obrigado a seguir a orientação do advogado.",
      "A advocacia preventiva, por não envolver litígio, não está sujeita às normas éticas da OAB.",
    ],
    gabarito: 1,
    comentario:
      "O advogado tem o dever de independência técnica: ao emitir parecer, deve expressar sua opinião técnica fundamentada, mesmo que seja contrária ao interesse do cliente ou ao que este esperava ouvir. O parecer contrário ao interesse do cliente é eticamente correto e protege o advogado de eventuais responsabilidades. O Código de Ética veda o parecer 'de encomenda' — aquele em que o advogado formula conclusão favorável independentemente dos fundamentos jurídicos. A assessoria jurídica preventiva é atividade privativa do advogado (art. 1º, II, EOAB).",
  },
  {
    id: 155,
    materia: "Ética",
    dificuldade: "Fácil",
    enunciado:
      "O Exame da Ordem dos Advogados do Brasil (ENAM/Exame da OAB) tem por finalidade:",
    opcoes: [
      "Avaliar os conhecimentos técnicos do bacharel em direito para fins exclusivamente acadêmicos.",
      "Verificar a aptidão técnica e ética do bacharel para o exercício da advocacia, sendo condição para a inscrição na OAB.",
      "Selecionar candidatos para o ingresso no quadro de estagiários da OAB.",
      "Certificar especializações em áreas jurídicas específicas para fins de atualização profissional.",
      "Avaliar os advogados inscritos a cada 5 anos, para fins de revalidação do registro.",
    ],
    gabarito: 1,
    comentario:
      "O Exame da Ordem (Exame Nacional da Advocacia — ENAM, conforme Resolução do CFO) tem por finalidade verificar a aptidão técnica e ética do bacharel em direito para o exercício da advocacia. A aprovação no Exame é condição necessária para a inscrição nos quadros da OAB como advogado (art. 8º do EOAB). O STF, no julgamento da ADI 4.263, reconheceu a constitucionalidade do Exame da Ordem, por ser compatível com os princípios constitucionais da livre iniciativa e do exercício profissional.",
  },
  {
    id: 156,
    materia: "Ética",
    dificuldade: "Difícil",
    enunciado:
      "Sobre a mediação e a conciliação como instrumentos de resolução de conflitos no âmbito da advocacia e do Código de Ética, é correto afirmar:",
    opcoes: [
      "O advogado que atua como mediador pode, após o encerramento da mediação sem acordo, patrocinar uma das partes na causa relacionada.",
      "O advogado é obrigado pelo Código de Ética a orientar o cliente a sempre buscar a solução judicial como meio principal de resolução de conflitos.",
      "O advogado que atuou como mediador fica impedido de patrocinar qualquer das partes em litígio decorrente do conflito mediado.",
      "A mediação e a conciliação são incompatíveis com o dever de combatividade do advogado.",
      "O advogado que estimula a autocomposição viola o dever de busca da melhor tese jurídica para o cliente.",
    ],
    gabarito: 2,
    comentario:
      "O Código de Ética da OAB e a Lei de Mediação (Lei 13.140/2015) estabelecem o impedimento do mediador de atuar como advogado ou árbitro em litígios relacionados ao conflito que mediou. Isso decorre do dever de imparcialidade e do conflito de interesses que surgiria. O advogado deve estimular meios alternativos de solução de controvérsias, conforme o CPC/2015 e o próprio Código de Ética — a autocomposição é vista positivamente. O dever de combatividade não impede que o advogado oriente o cliente para a mediação quando esta for do seu interesse.",
  },
];
