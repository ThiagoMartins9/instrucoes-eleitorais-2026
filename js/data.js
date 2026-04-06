// ============================================================
// data.js — Dados de conteúdo: Instruções Eleitorais 2026
// Fonte: Resoluções TSE (Res. 23.749, 23.752, 23.754, 23.755, 23.757, 23.760)
// ============================================================

const APP_DATA = {

  // ----------------------------------------------------------
  // CALENDÁRIO ELEITORAL (Res. 23.760)
  // ----------------------------------------------------------
  calendario: [
    // JANEIRO 2026
    {
      id: 'cal-001',
      data: '2026-01-01',
      dataFormatada: '01/01/2026',
      mes: 'Janeiro 2026',
      titulo: 'Proibição de distribuição de bens pela Administração Pública',
      descricao: 'Fica vedada a distribuição gratuita de bens, valores ou benefícios pela Administração Pública. Vigência até 31/12/2026.',
      tipo: 'vedacao',
      icone: '🚫',
      resolucao: 'Res. 23.760',
      destaque: false
    },
    {
      id: 'cal-002',
      data: '2026-01-01',
      dataFormatada: '01/01/2026',
      mes: 'Janeiro 2026',
      titulo: 'Obrigatoriedade de registro de pesquisas no PesqEle',
      descricao: 'Pesquisas eleitorais devem ser registradas no sistema PesqEle até 5 dias antes de sua divulgação.',
      tipo: 'prazo',
      icone: '📋',
      resolucao: 'Res. 23.747',
      destaque: false
    },
    // MARÇO 2026
    {
      id: 'cal-003',
      data: '2026-03-05',
      dataFormatada: '05/03/2026',
      mes: 'Março 2026',
      titulo: 'Início da janela de migração partidária',
      descricao: 'Início do período em que detentores de mandato podem migrar de partido sem perda do mandato.',
      tipo: 'prazo',
      icone: '📅',
      resolucao: 'Res. 23.760',
      destaque: false
    },
    // ABRIL 2026
    {
      id: 'cal-004',
      data: '2026-04-03',
      dataFormatada: '03/04/2026',
      mes: 'Abril 2026',
      titulo: 'Último dia da janela de migração partidária',
      descricao: 'Encerra-se o prazo para migração partidária sem perda de mandato.',
      tipo: 'prazo',
      icone: '⏰',
      resolucao: 'Res. 23.760',
      destaque: false
    },
    {
      id: 'cal-005',
      data: '2026-04-04',
      dataFormatada: '04/04/2026',
      mes: 'Abril 2026',
      titulo: 'Data-limite: domicílio eleitoral e filiação partidária',
      descricao: 'Prazo final para que os candidatos comprovem domicílio eleitoral na circunscrição e filiação ao partido (mínimo 6 meses antes).',
      tipo: 'prazo',
      icone: '⏰',
      resolucao: 'Res. 23.754',
      destaque: false
    },
    {
      id: 'cal-006',
      data: '2026-04-04',
      dataFormatada: '04/04/2026',
      mes: 'Abril 2026',
      titulo: 'Prazo para renúncia de mandato',
      descricao: 'Último dia para Presidente, Governadores e Prefeitos renunciarem ao mandato caso queiram concorrer a outro cargo.',
      tipo: 'prazo',
      icone: '⏰',
      resolucao: 'Res. 23.760',
      destaque: false
    },
    {
      id: 'cal-007',
      data: '2026-04-06',
      dataFormatada: '06/04/2026',
      mes: 'Abril 2026',
      titulo: 'Último dia para alistamento eleitoral sem biometria via internet',
      descricao: 'Encerra-se o prazo para alistamento, transferência e revisão do domicílio eleitoral sem necessidade de biometria pelo atendimento virtual.',
      tipo: 'prazo',
      icone: '⏰',
      resolucao: 'Res. 23.760',
      destaque: true
    },
    {
      id: 'cal-008',
      data: '2026-04-07',
      dataFormatada: '07/04/2026',
      mes: 'Abril 2026',
      titulo: 'Início da vedação de revisão geral de remuneração de servidores',
      descricao: 'A partir de 180 dias antes do 1º turno fica vedada a revisão geral de remuneração de servidores, salvo recomposição da perda do poder aquisitivo.',
      tipo: 'vedacao',
      icone: '🚫',
      resolucao: 'Res. 23.760',
      destaque: false
    },
    // MAIO 2026
    {
      id: 'cal-009',
      data: '2026-05-06',
      dataFormatada: '06/05/2026',
      mes: 'Maio 2026',
      titulo: 'Último dia para alistamento eleitoral com biometria',
      descricao: 'Prazo final para alistamento eleitoral presencial com biometria (151 dias antes das eleições).',
      tipo: 'prazo',
      icone: '⏰',
      resolucao: 'Res. 23.760',
      destaque: false
    },
    {
      id: 'cal-010',
      data: '2026-05-07',
      dataFormatada: '07/05/2026',
      mes: 'Maio 2026',
      titulo: 'Início da suspensão do alistamento eleitoral',
      descricao: 'A partir de 150 dias antes das eleições, o alistamento eleitoral fica suspenso até 02/11/2026.',
      tipo: 'vedacao',
      icone: '🚫',
      resolucao: 'Res. 23.760',
      destaque: false
    },
    {
      id: 'cal-011',
      data: '2026-05-15',
      dataFormatada: '15/05/2026',
      mes: 'Maio 2026',
      titulo: 'Início da arrecadação prévia em financiamento coletivo',
      descricao: 'Pré-candidatos podem iniciar arrecadação via crowdfunding eleitoral a partir desta data.',
      tipo: 'prazo',
      icone: '💰',
      resolucao: 'Res. 23.749',
      destaque: false
    },
    // JUNHO 2026
    {
      id: 'cal-012',
      data: '2026-06-01',
      dataFormatada: '01/06/2026',
      mes: 'Junho 2026',
      titulo: 'FEFC disponibilizado ao TSE',
      descricao: 'O Fundo Especial de Financiamento de Campanha (FEFC) é disponibilizado à União e repassado ao TSE para distribuição.',
      tipo: 'prazo',
      icone: '💰',
      resolucao: 'Res. 23.749',
      destaque: false
    },
    {
      id: 'cal-013',
      data: '2026-06-30',
      dataFormatada: '30/06/2026',
      mes: 'Junho 2026',
      titulo: 'Vedação para emissoras transmitirem programa apresentado por pré-candidato',
      descricao: 'Emissoras de rádio e TV ficam proibidas de transmitir programas em que pré-candidatos atuem como apresentadores.',
      tipo: 'vedacao',
      icone: '🚫',
      resolucao: 'Res. 23.755',
      destaque: false
    },
    {
      id: 'cal-014',
      data: '2026-06-30',
      dataFormatada: '30/06/2026',
      mes: 'Junho 2026',
      titulo: 'Fim da proibição de publicidade pública acima de 6x a média mensal',
      descricao: 'Encerra-se o período em que era vedada publicidade institucional acima de 6 vezes a média mensal dos últimos 3 anos.',
      tipo: 'prazo',
      icone: '📅',
      resolucao: 'Res. 23.760',
      destaque: false
    },
    // JULHO 2026
    {
      id: 'cal-015',
      data: '2026-07-04',
      dataFormatada: '04/07/2026',
      mes: 'Julho 2026',
      titulo: 'Início das vedações dos 3 meses (art. 73 da Lei 9.504)',
      descricao: 'A partir de 3 meses antes do 1º turno, entram em vigor múltiplas vedações: proibição de nomear/contratar/dispensar servidores sem justa causa; vedação de transferência voluntária de recursos da União; proibição de publicidade institucional (exceto urgência grave); vedação de shows artísticos pagos em inaugurações; proibição para candidatos comparecerem a inaugurações; remoção de nomes e slogans de autoridades em sites oficiais.',
      tipo: 'vedacao',
      icone: '🚫',
      resolucao: 'Res. 23.760',
      destaque: true
    },
    {
      id: 'cal-016',
      data: '2026-07-05',
      dataFormatada: '05/07/2026',
      mes: 'Julho 2026',
      titulo: 'Permitida propaganda intrapartidária',
      descricao: 'A partir de 15 dias antes do início das convenções partidárias, é permitida propaganda intrapartidária para escolha de candidatos.',
      tipo: 'prazo',
      icone: '📢',
      resolucao: 'Res. 23.755',
      destaque: false
    },
    {
      id: 'cal-017',
      data: '2026-07-20',
      dataFormatada: '20/07/2026',
      mes: 'Julho 2026',
      titulo: 'Início das convenções partidárias',
      descricao: 'Início do período para realização de convenções partidárias para escolha de candidatos. Prazo encerra em 05/08/2026.',
      tipo: 'prazo',
      icone: '🗳️',
      resolucao: 'Res. 23.760',
      destaque: false
    },
    // AGOSTO 2026
    {
      id: 'cal-018',
      data: '2026-08-05',
      dataFormatada: '05/08/2026',
      mes: 'Agosto 2026',
      titulo: 'Último dia das convenções partidárias',
      descricao: 'Prazo final para realização das convenções partidárias e escolha dos candidatos.',
      tipo: 'prazo',
      icone: '⏰',
      resolucao: 'Res. 23.760',
      destaque: false
    },
    {
      id: 'cal-019',
      data: '2026-08-15',
      dataFormatada: '15/08/2026',
      mes: 'Agosto 2026',
      titulo: 'Último dia para registro de candidaturas no TSE',
      descricao: 'Prazo final para que os partidos e candidatos registrem as candidaturas perante a Justiça Eleitoral.',
      tipo: 'prazo',
      icone: '⏰',
      resolucao: 'Res. 23.754',
      destaque: true
    },
    {
      id: 'cal-020',
      data: '2026-08-16',
      dataFormatada: '16/08/2026',
      mes: 'Agosto 2026',
      titulo: 'Início da propaganda eleitoral gratuita no rádio e TV',
      descricao: 'Começa o horário eleitoral gratuito nas emissoras de rádio e televisão.',
      tipo: 'campanha',
      icone: '📢',
      resolucao: 'Res. 23.755',
      destaque: false
    },
    {
      id: 'cal-021',
      data: '2026-08-16',
      dataFormatada: '16/08/2026',
      mes: 'Agosto 2026',
      titulo: 'Início da campanha eleitoral',
      descricao: 'A partir desta data é permitida a veiculação de material de campanha, realização de carreatas, comícios e demais atividades eleitorais.',
      tipo: 'campanha',
      icone: '🗳️',
      resolucao: 'Res. 23.755',
      destaque: true
    },
    // SETEMBRO/OUTUBRO 2026
    {
      id: 'cal-022',
      data: '2026-09-26',
      dataFormatada: '26/09/2026',
      mes: 'Setembro 2026',
      titulo: 'Último dia de propagandas eleitorais em rádio e TV',
      descricao: 'Encerra-se o horário eleitoral gratuito no rádio e na televisão para o 1º turno.',
      tipo: 'campanha',
      icone: '📢',
      resolucao: 'Res. 23.755',
      destaque: false
    },
    {
      id: 'cal-023',
      data: '2026-10-03',
      dataFormatada: '03/10/2026',
      mes: 'Outubro 2026',
      titulo: 'Véspera das eleições — Silêncio Eleitoral',
      descricao: 'Dia anterior ao 1º turno. É vedada qualquer forma de propaganda eleitoral (silêncio eleitoral).',
      tipo: 'eleicao',
      icone: '🗳️',
      resolucao: 'Res. 23.760',
      destaque: true
    },
    {
      id: 'cal-024',
      data: '2026-10-04',
      dataFormatada: '04/10/2026',
      mes: 'Outubro 2026',
      titulo: '1º TURNO DAS ELEIÇÕES',
      descricao: 'Dia da votação do 1º turno das Eleições Gerais de 2026. Eleição de Presidente, Governadores, Senadores, Deputados Federais e Estaduais.',
      tipo: 'eleicao',
      icone: '🗳️',
      resolucao: 'Res. 23.760',
      destaque: true
    },
    {
      id: 'cal-025',
      data: '2026-10-25',
      dataFormatada: '25/10/2026',
      mes: 'Outubro 2026',
      titulo: '2º TURNO DAS ELEIÇÕES (se necessário)',
      descricao: 'Dia da votação do 2º turno, se necessário para os cargos de Presidente da República e Governadores de Estado.',
      tipo: 'eleicao',
      icone: '🗳️',
      resolucao: 'Res. 23.760',
      destaque: true
    },
    // NOVEMBRO 2026
    {
      id: 'cal-026',
      data: '2026-11-02',
      dataFormatada: '02/11/2026',
      mes: 'Novembro 2026',
      titulo: 'Retorno das operações de alistamento eleitoral',
      descricao: 'Encerrada a suspensão do alistamento eleitoral, as operações de cadastramento retornam ao normal.',
      tipo: 'prazo',
      icone: '📅',
      resolucao: 'Res. 23.760',
      destaque: false
    },
    {
      id: 'cal-027',
      data: '2026-11-19',
      dataFormatada: '19/11/2026',
      mes: 'Novembro 2026',
      titulo: 'Diplomação dos eleitos',
      descricao: 'Cerimônia de diplomação dos candidatos eleitos no 1º ou 2º turno.',
      tipo: 'prazo',
      icone: '📋',
      resolucao: 'Res. 23.760',
      destaque: false
    }
  ],

  // ----------------------------------------------------------
  // CONDUTAS VEDADAS (Manual de Agentes Públicos)
  // ----------------------------------------------------------
  condutas: [
    {
      id: 'con-001',
      categoria: 'Bens e Materiais',
      icone: '🏛️',
      items: [
        'Cessão ou uso de bens móveis ou imóveis públicos para fins eleitorais.',
        'Utilização de veículos, equipamentos e serviços públicos em campanhas eleitorais.',
        'Distribuição gratuita de bens e serviços sociais em período eleitoral com fins eleitoreiros.'
      ]
    },
    {
      id: 'con-002',
      categoria: 'Pessoal',
      icone: '👥',
      items: [
        'Cessão de servidores públicos para atividades político-eleitorais.',
        'Nomeações, contratações ou demissões com fins eleitoreiros (a partir de 04/07/2026).',
        'Revisão geral de remuneração de servidores além da recomposição da perda de poder aquisitivo (a partir de 07/04/2026).'
      ]
    },
    {
      id: 'con-003',
      categoria: 'Recursos Orçamentários',
      icone: '💰',
      items: [
        'Transferência voluntária de recursos da União/Estados para Municípios (a partir de 04/07/2026).',
        'Distribuição gratuita de bens, valores ou benefícios pela Administração Pública (a partir de 01/01/2026).',
        'Execução de programas sociais vinculados a candidatos (a partir de 01/01/2026).'
      ]
    },
    {
      id: 'con-004',
      categoria: 'Publicidade Institucional',
      icone: '📺',
      items: [
        'Publicidade institucional em período eleitoral (a partir de 04/07/2026, exceto grave urgência).',
        'Uso de publicidade institucional para promoção pessoal do agente público.',
        'Despesas com publicidade que excedam 6 vezes a média mensal dos últimos 3 anos (01/01 a 30/06/2026).',
        'Pronunciamentos em cadeia de rádio/TV fora do horário eleitoral gratuito (a partir de 04/07/2026).',
        'Manutenção de nomes, slogans e símbolos de autoridades em sites oficiais (a partir de 04/07/2026).'
      ]
    },
    {
      id: 'con-005',
      categoria: 'Inaugurações e Obras',
      icone: '🏗️',
      items: [
        'Contratação de shows artísticos pagos com recursos públicos em inaugurações (a partir de 04/07/2026).',
        'Comparecimento de candidatos a inaugurações de obras públicas (a partir de 04/07/2026).',
        'Emissoras transmitindo programas apresentados por pré-candidatos (a partir de 30/06/2026).'
      ]
    }
  ],

  // ----------------------------------------------------------
  // PROPAGANDA ELEITORAL (Res. 23.755)
  // ----------------------------------------------------------
  propaganda: {
    periodo: {
      inicio: '16 de agosto de 2026',
      fim: '3 de outubro de 2026 (véspera do 1º turno)',
      inicioData: '2026-08-16',
      fimData: '2026-10-03'
    },
    permitido: [
      'Distribuição de material gráfico, volantes e outros impressos.',
      'Carreatas, caminhadas, comícios e reuniões com eleitores.',
      'Alto-falantes e amplificadores de som (exceto das 22h às 8h).',
      'Propaganda por correspondência, internet e aplicativos.',
      'Cavaletes, placas, faixas e bandeiras (sem limitação de tamanho nos comícios).',
      'Sites, blogs e perfis em redes sociais com identificação clara do candidato/partido.'
    ],
    vedado: [
      'Outdoors e painéis luminosos em vias públicas.',
      'Propaganda em postes, árvores, muros e fachadas públicas (exceto placas de até 0,5m²).',
      'Distribuição de camisetas, brindes e outros materiais que caracterizem distribuição de vantagem.',
      'Propaganda que degrade o meio ambiente.',
      'Impulsionamento pago de conteúdo eleitoral no dia da eleição.',
      'Contratação de serviços de publicidade nas redes sociais por terceiros (pessoas não vinculadas à campanha).'
    ],
    internet: [
      'Permitida desde a data do registro de candidatura (a partir de 15/08/2026).',
      'Criação de sites, blogs e redes sociais com identificação clara do candidato.',
      'Contratação de impulsionamento permitida apenas pelo candidato, partido ou coligação.',
      'Vedado o uso de perfis falsos e robôs para propagação massiva de conteúdo.',
      'Vedada propaganda paga por terceiros nas redes sociais.'
    ],
    radioTV: {
      descricao: 'Horário Eleitoral Gratuito no Rádio e na TV',
      inicio1turno: '16/08/2026',
      fim1turno: '01/10/2026',
      inicio2turno: '08/10/2026',
      fim2turno: '22/10/2026'
    }
  },

  // ----------------------------------------------------------
  // REGISTRO DE CANDIDATURA (Res. 23.754)
  // ----------------------------------------------------------
  registro: {
    requisitos: [
      'Filiação partidária mínima de 6 meses antes das eleições (prazo: até 04/04/2026).',
      'Domicílio eleitoral na circunscrição pelo prazo mínimo exigido (até 04/04/2026).',
      'Plena capacidade eleitoral ativa (ser eleitor) e passiva (poder ser votado).',
      'Não estar enquadrado em nenhuma hipótese de inelegibilidade prevista em lei.',
      'Quitação eleitoral comprovada.'
    ],
    prazo: 'Até 15 de agosto de 2026',
    documentos: [
      'Certidão de quitação eleitoral.',
      'Certidão de antecedentes criminais.',
      'Declaração de bens atualizada.',
      'Declaração de origem de bens.',
      'Foto digital recente.'
    ],
    cargos: [
      { cargo: 'Presidente da República', obs: '2 turnos possíveis', icon: '🏛️' },
      { cargo: 'Vice-Presidente da República', obs: 'Chapa com o Presidente', icon: '🏛️' },
      { cargo: 'Governador de Estado / DF', obs: '2 turnos possíveis', icon: '🏛️' },
      { cargo: 'Vice-Governador', obs: 'Chapa com o Governador', icon: '🏛️' },
      { cargo: 'Senador Federal', obs: '1/3 das vagas renovadas', icon: '🏛️' },
      { cargo: 'Deputado Federal', obs: 'Eleição proporcional', icon: '🏛️' },
      { cargo: 'Deputado Estadual / Distrital', obs: 'Eleição proporcional', icon: '🏛️' }
    ]
  },

  // ----------------------------------------------------------
  // FUNDOS DE CAMPANHA (Res. 23.749)
  // ----------------------------------------------------------
  fundos: {
    fontesPermitidas: [
      'FEFC — Fundo Especial de Financiamento de Campanha (recursos públicos).',
      'Fundo Partidário — repasse do partido ao candidato.',
      'Doações de pessoas físicas (limitadas a 10% dos rendimentos brutos do doador no ano anterior).',
      'Financiamento coletivo (crowdfunding eleitoral) — a partir de 15/05/2026.',
      'Recursos próprios do candidato.'
    ],
    fefc: {
      descricao: 'Fundo Especial de Financiamento de Campanha',
      disponibilizacao: 'Até 01/06/2026',
      criterios: 'Distribuído conforme critérios legais: número de deputados eleitos, desempenho nas últimas eleições e outros fatores.'
    },
    vedacoes: [
      'Doações de pessoas jurídicas (exceto partidos políticos).',
      'Doações de entidades estrangeiras.',
      'Doações anônimas (qualquer valor).',
      'Recursos oriundos de fontes ilícitas.',
      'Doações de entidades do sistema financeiro nacional.'
    ],
    prazos: [
      'Início da arrecadação prévia (crowdfunding): 15/05/2026.',
      'FEFC disponibilizado: 01/06/2026.',
      'Encerramento da arrecadação: no dia da eleição (04/10/2026 — 1º turno).'
    ]
  },

  // ----------------------------------------------------------
  // PRESTAÇÃO DE CONTAS (Res. 23.752)
  // ----------------------------------------------------------
  prestacaoContas: {
    obrigados: [
      'Todos os candidatos registrados, inclusive os não eleitos.',
      'Comitês financeiros dos partidos políticos.'
    ],
    prazos: [
      { quem: 'Candidatos a Presidente (1º turno)', prazo: 'Até 30 dias após o 1º turno (até 03/11/2026)' },
      { quem: 'Candidatos em 2º turno', prazo: 'Até 30 dias após o 2º turno (até 24/11/2026)' },
      { quem: 'Demais candidatos (Governador, Senador, Dep.)', prazo: 'Até 30 dias após a eleição' }
    ],
    resultados: [
      { resultado: 'Aprovadas', desc: 'Contas em conformidade com as normas eleitorais.', cor: 'verde' },
      { resultado: 'Aprovadas com ressalvas', desc: 'Irregularidades presentes, mas de natureza sanável.', cor: 'amarelo' },
      { resultado: 'Desaprovadas', desc: 'Irregularidades graves que comprometem a lisura das contas.', cor: 'vermelho' },
      { resultado: 'Não prestadas', desc: 'Candidato que não entregou as contas no prazo.', cor: 'cinza' }
    ],
    consequencias: [
      'Multa de 20% a 100% do valor considerado irregular.',
      'Inelegibilidade por 8 anos para candidatos com contas desaprovadas por irregularidades graves.'
    ]
  },

  // ----------------------------------------------------------
  // ILÍCITOS ELEITORAIS (Res. 23.757)
  // ----------------------------------------------------------
  ilicitos: {
    crimes: [
      {
        nome: 'Corrupção Eleitoral',
        base: 'Art. 299 do Código Eleitoral',
        desc: 'Dar, oferecer, prometer dinheiro, dádiva ou qualquer outra vantagem para obter ou dar voto ou para conseguir abstencão.',
        pena: 'Reclusão de 1 a 4 anos + multa'
      },
      {
        nome: 'Captação Ilícita de Sufrágio',
        base: 'Art. 41-A da Lei 9.504/97',
        desc: 'Oferecer, prometer ou entregar ao eleitor bem ou vantagem pessoal de qualquer natureza para obter voto.',
        pena: 'Suspensão dos direitos políticos de 3 a 5 anos + multa'
      },
      {
        nome: 'Condutas Vedadas a Agentes Públicos',
        base: 'Art. 73 da Lei 9.504/97',
        desc: 'Uso da máquina administrativa para fins eleitorais: nomeações, obras, publicidade, transferências de recursos, etc.',
        pena: 'Detenção de 3 meses a 1 ano, com alternativa de prestação de serviços à comunidade'
      },
      {
        nome: 'Uso Indevido dos Meios de Comunicação',
        base: 'Art. 45 da Lei 9.504/97',
        desc: 'Emissoras de rádio e TV que favorecerem candidatos ou partidos fora das normas do horário eleitoral gratuito.',
        pena: 'Multa e suspensão do horário eleitoral gratuito'
      },
      {
        nome: 'Propaganda Eleitoral Irregular',
        base: 'Art. 36 da Lei 9.504/97',
        desc: 'Veiculação de propaganda eleitoral fora do período permitido ou em desacordo com as normas eleitorais.',
        pena: 'Multa de R$ 1.000,00 a R$ 10.000,00 ou equivalente ao custo da propaganda'
      }
    ],
    abusoDePoder: [
      {
        tipo: 'Abuso de Poder Econômico',
        desc: 'Uso indevido de recursos financeiros de forma a desequilibrar a disputa eleitoral.',
        consequencia: 'Cassação do registro de candidatura ou do diploma'
      },
      {
        tipo: 'Abuso de Poder Político',
        desc: 'Uso indevido de cargos, funções ou aparato do Estado para beneficiar candidatos.',
        consequencia: 'Cassação do registro de candidatura ou do diploma'
      }
    ],
    representacoes: [
      'Prazo geral para representações: 15 dias contados da data do conhecimento do fato.',
      'Direito de resposta: candidato ofendido tem 24h para requerer; Justiça tem 72h para decidir.',
      'Representações podem ser feitas por partidos, candidatos, coligações ou pelo Ministério Público Eleitoral.'
    ]
  },

  // ----------------------------------------------------------
  // DOCUMENTOS (PDFs disponíveis no diretório)
  // ----------------------------------------------------------
  documentos: [
    {
      id: 'doc-001',
      titulo: 'Manual de Agentes Públicos — Eleições 2026',
      subtitulo: 'Comportamento dos agentes públicos da Administração Estadual',
      arquivo: './Manual-de-comportamento-dos-agentes-publicos-da-Administracao-Estadual-para-as-Eleicoes-de-2026.pdf',
      tipo: 'manual',
      icone: '📖'
    },
    {
      id: 'doc-002',
      titulo: 'Res. 23.760 — Calendário Eleitoral 2026',
      subtitulo: 'Calendário oficial das Eleições Gerais de 2026',
      arquivo: './RESOLUÇÃO Nº 23.760, DE 2 DE MARÇO DE 2026 — Tribunal Superior Eleitoral - Calendário Eleitoral.pdf',
      tipo: 'resolucao',
      icone: '📅'
    },
    {
      id: 'doc-003',
      titulo: 'Res. 23.755 — Propaganda Eleitoral 2026',
      subtitulo: 'Regras para propaganda eleitoral nas Eleições de 2026',
      arquivo: './RESOLUÇÃO Nº 23.755, DE 2 DE MARÇO DE 2026 — Tribunal Superior Eleitoral - Propaganda Eleitoral 2.pdf',
      tipo: 'resolucao',
      icone: '📢'
    },
    {
      id: 'doc-004',
      titulo: 'Res. 23.754 — Registro de Candidatura 2026',
      subtitulo: 'Normas para registro de candidaturas nas Eleições de 2026',
      arquivo: './RESOLUÇÃO Nº 23.754, DE 2 DE MARÇO DE 2026 — Tribunal Superior Eleitoral - Registro de Candidatura 2.pdf',
      tipo: 'resolucao',
      icone: '📋'
    },
    {
      id: 'doc-005',
      titulo: 'Res. 23.752 — Prestação de Contas 2026',
      subtitulo: 'Normas para prestação de contas de campanha 2026',
      arquivo: './RESOLUÇÃO Nº 23.752, DE 26 DE FEVEREIRO DE 2026. — Tribunal Superior Eleitoral - Prestaçãod e Contas 2.pdf',
      tipo: 'resolucao',
      icone: '💰'
    },
    {
      id: 'doc-006',
      titulo: 'Res. 23.749 — Fundos de Campanha 2026',
      subtitulo: 'Regras sobre o FEFC e financiamento de campanhas 2026',
      arquivo: './RESOLUÇÃO Nº 23.749, DE 26 DE FEVEREIRO DE 2026 — Tribunal Superior Eleitoral - Fundos de Campanha 2.pdf',
      tipo: 'resolucao',
      icone: '💰'
    },
    {
      id: 'doc-007',
      titulo: 'Res. 23.757 — Ilícitos Eleitorais 2026',
      subtitulo: 'Normas sobre crimes e infrações eleitorais 2026',
      arquivo: './RESOLUÇÃO Nº 23.757, DE 2 DE MARÇO DE 2026 — Tribunal Superior Eleitoral - Ilícitos Eleitorais 2.pdf',
      tipo: 'resolucao',
      icone: '⚖️'
    },
    {
      id: 'doc-008',
      titulo: 'Res. 23.751 — Atos Gerais do Processo Eleitoral',
      subtitulo: 'Normas gerais do processo eleitoral 2026',
      arquivo: './RESOLUÇÃO Nº 23.751, DE 26 DE FEVEREIRO DE 2026 — Tribunal Superior Eleitoral - atos gerais do processo eleitoral.pdf',
      tipo: 'resolucao',
      icone: '📋'
    },
    {
      id: 'doc-009',
      titulo: 'Res. 23.747 — Pesquisa Eleitoral 2026',
      subtitulo: 'Normas para pesquisas eleitorais nas Eleições de 2026',
      arquivo: './RESOLUÇÃO Nº 23.747, DE 26 DE FEVEREIRO DE 2026 — Tribunal Superior Eleitoral - Pesquisa Eleitoral 2.pdf',
      tipo: 'resolucao',
      icone: '🔍'
    },
    {
      id: 'doc-010',
      titulo: 'Res. 23.756 — Representações e Reclamações',
      subtitulo: 'Normas para representações e reclamações eleitorais 2026',
      arquivo: './RESOLUÇÃO Nº 23.756, DE 2 DE MARÇO DE 2026 — Tribunal Superior Eleitoral - Representações e Reclamações.pdf',
      tipo: 'resolucao',
      icone: '⚖️'
    },
    {
      id: 'doc-011',
      titulo: 'Calendário Eleitoral (resumo)',
      subtitulo: 'Versão resumida do calendário eleitoral',
      arquivo: './calendario.pdf',
      tipo: 'resumo',
      icone: '📅'
    },
    {
      id: 'doc-012',
      titulo: 'Ato da Mesa — ALESC 2026',
      subtitulo: 'Procedimentos administrativos da Assembleia Legislativa de SC para as eleições de 2026',
      arquivo: './SEI_2175544_Ato_da_Mesa.pdf',
      tipo: 'ato',
      icone: '🏛️'
    }
  ]
};

// Data de referência para o app (data atual do sistema para comparações)
const DATA_REFERENCIA = new Date('2026-04-06');
