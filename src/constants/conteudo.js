/*
 * TODA a copy da página mora aqui. Nenhum texto é escrito dentro do JSX,
 * é isso que deixa você reescrever a página inteira sem abrir um componente,
 * e é o que permite reusar esta LP como template para um cliente depois.
 *
 * >>> TODO MATHEUS: os pontos marcados com [CONFIRMAR] são fatos sobre você.
 *     Troque pelos números e datas reais. Prova social inventada queima a marca,
 *     preferi deixar o campo honesto a preencher com case falso.
 */

export const HERO = {
  etiqueta: 'Sites e landing pages · Brasil',
  titulo: 'Seu site não precisa ser bonito.',
  tituloEnfase: 'Precisa dar pedido.',
  subtitulo:
    'A maioria dos sites é um cartão de visita caro: bonito, parado e mudo. Eu projeto site e landing page como produto, com funil, prova e medição, e o caminho termina sempre no mesmo lugar: uma conversa no seu WhatsApp.',
  ctaPrimario: 'Fazer meu pedido',
  ctaSecundario: 'Ver os pacotes',
  selos: [
    'No ar em até 7 dias',
    'Uma pessoa só, do briefing ao deploy',
    'Você fala comigo, não com atendente',
  ],
}

export const PROBLEMA = {
  numero: '01',
  etiqueta: 'O problema',
  titulo: 'Você não tem um problema de design.',
  texto:
    'Você tem um problema de caminho. O visitante chega, acha bonito, não entende em 5 segundos o que você resolve, não vê nenhuma razão pra confiar, não encontra um próximo passo óbvio, e vai embora. Design não conserta isso. Estrutura conserta.',
  sintomas: [
    {
      titulo: 'O site existe, mas não chega pedido',
      texto:
        'Ele conta a história da sua empresa em vez de resolver o problema de quem está lendo. Ninguém contrata uma "trajetória de excelência desde 2015".',
    },
    {
      titulo: 'Você depende só do Instagram',
      texto:
        'Um bloqueio, uma queda de alcance, uma mudança de algoritmo, e seu canal de venda inteiro some. Site é o único ativo digital que é seu.',
    },
    {
      titulo: 'A agência sumiu depois do "no ar"',
      texto:
        'Três meses de espera, um layout entregue, zero medição, e qualquer ajuste vira orçamento novo. Você virou refém do próprio site.',
    },
    {
      titulo: 'O lead chega frio e você recomeça do zero',
      texto:
        'Chega "oi, quanto custa?" sem contexto nenhum. Você gasta 20 mensagens pra descobrir se a pessoa tem orçamento. O site deveria ter feito essa triagem.',
    },
  ],
}

export const TRAJETORIA = {
  numero: '02',
  etiqueta: 'Quem constrói',
  titulo: 'Eu não vim do design. Vim de construir produto.',
  texto:
    'Antes de vender site, eu passei os últimos anos construindo sistemas que precisam funcionar de verdade, onde um bug significa venda perdida, nota fiscal errada ou cliente na porta sem atendimento. Aprendi funil, dado e operação pelo lado difícil: operando. É por isso que a landing page que eu entrego não é um layout com um botão. É a mesma engenharia, aplicada a um objetivo só: fazer o pedido chegar.',
  // [CONFIRMAR] Ajuste os anos e troque/adicione marcos reais da sua história.
  marcos: [
    {
      ano: '2022',
      titulo: 'Comecei pelo código, não pelo template',
      texto:
        'Nada de construtor drag-and-drop. Aprendi a construir do zero, porque template te limita exatamente no dia em que o negócio precisa crescer.',
    },
    {
      ano: '2023',
      titulo: 'Primeiros sites e páginas entregues',
      texto:
        'Descobri na prática que site bonito sem estrutura de conversão não muda o faturamento de ninguém. Passei a projetar o caminho antes do layout.',
    },
    {
      ano: '2026',
      titulo: 'Sistemas de verdade, em operação',
      texto:
        'Construí PDV com emissão fiscal, controle de estoque, integração de pagamento e SaaS multi-cliente. Software que gente usa todo dia, com dinheiro passando por dentro.',
    },
    {
      ano: 'Hoje',
      titulo: 'Essa engenharia aplicada a quem vende',
      texto:
        'Pego o rigor de quem constrói sistema e aplico em site e landing page: estrutura, prova, medição e um caminho único até o WhatsApp.',
    },
  ],
  oQueFaco: {
    titulo: 'O que eu faço, na prática',
    itens: [
      {
        titulo: 'Estrutura de conversão',
        texto:
          'Defino a ordem das seções pela cabeça de quem compra: dor, prova, oferta, ação. O layout vem depois, e serve à estrutura.',
      },
      {
        titulo: 'Copy que vende sem gritar',
        texto:
          'Escrevo com você, na sua voz. Promessa específica, objeção quebrada na hora certa, nada de "soluções inovadoras".',
      },
      {
        titulo: 'Código próprio, sem template',
        texto:
          'Site rápido, leve, que abre em segundo no 4G e não trava porque você instalou o plugin errado.',
      },
      {
        titulo: 'Pedido qualificado no WhatsApp',
        texto:
          'O formulário faz a triagem por você. O lead chega com pacote, prazo, orçamento e contexto já escritos.',
      },
      {
        titulo: 'Medição desde o primeiro dia',
        texto:
          'Analytics e eventos configurados. Você vê quantos entraram, quantos pediram e onde perdeu, não fica no achismo.',
      },
      {
        titulo: 'Sistema, quando precisa',
        texto:
          'Área de cliente, painel, agendamento, automação, integração. Se o site precisa fazer, e não só falar, eu faço.',
      },
    ],
  },
}

export const METODO = {
  numero: '03',
  etiqueta: 'Como funciona',
  titulo: 'Quatro passos. Sem sumiço, sem surpresa.',
  texto:
    'Você sabe onde o projeto está o tempo inteiro, e o que falta pra ficar pronto. Nenhuma etapa começa sem a anterior aprovada por você.',
  passos: [
    {
      numero: '01',
      titulo: 'Diagnóstico',
      duracao: '30 a 45 min',
      texto:
        'Conversa no WhatsApp ou chamada. Entendo o que você vende, pra quem, quanto vale um cliente e o que já tentou. Saio daqui com o objetivo do site definido em uma frase, e você já leva o diagnóstico, fechando comigo ou não.',
    },
    {
      numero: '02',
      titulo: 'Estrutura e proposta',
      duracao: 'até 2 dias',
      texto:
        'Monto a estrutura da página (seção por seção, com a copy principal) e mando junto do orçamento fechado, escopo e prazo. Você aprova antes de eu escrever a primeira linha de código.',
    },
    {
      numero: '03',
      titulo: 'Construção',
      duracao: '5 a 10 dias',
      texto:
        'Construo, te mando um link de preview e você acompanha em tempo real. Duas rodadas de ajuste inclusas, sem cobrança extra, sem "isso é escopo novo".',
    },
    {
      numero: '04',
      titulo: 'No ar e medindo',
      duracao: '1 dia',
      texto:
        'Domínio, velocidade, SEO técnico e analytics configurados. Te entrego o acesso, gravo um vídeo curto explicando como mexer, e acompanho os primeiros dias de tráfego.',
    },
  ],
}

export const PACOTES_SECAO = {
  numero: '04',
  etiqueta: 'O cardápio',
  titulo: 'Escolha o que você precisa.',
  texto:
    'Escopo fechado, prazo fechado, preço a partir de. Clique no pacote e ele já vai preenchido no seu pedido, o valor final sai no diagnóstico, depois de eu entender o tamanho real do projeto.',
  rodape:
    'Todos os pacotes incluem: domínio configurado, hospedagem rápida, versão mobile, duas rodadas de ajuste e o código sendo seu no fim.',
}

export const PROVAS = {
  numero: '05',
  etiqueta: 'Provas',
  titulo: 'Eu não falo de código. Eu construí isso.',
  texto:
    'A prova mais honesta que eu tenho não é depoimento, é sistema em operação, construído por mim, com problema real dentro.',
  // [CONFIRMAR] Ajuste as descrições e adicione link/print de cada um quando puder.
  projetos: [
    {
      nome: 'Kora PDV',
      tipo: 'PDV e operação de restaurante',
      texto:
        'Ponto de venda com emissão fiscal brasileira, controle de estoque por unidade de medida, integração de pagamento e relatórios. Dinheiro real passando, fisco no meio do caminho.',
    },
    {
      nome: 'Kora AI',
      tipo: 'SaaS multi-cliente',
      texto:
        'Plataforma multi-tenant com isolamento por cliente, white-label e automação. Arquitetura pensada pra escalar sem reescrever do zero.',
    },
    {
      nome: 'Casa Coffee Colab',
      tipo: 'Operação e marca',
      texto:
        'Projeto de operação e presença digital de cafeteria, do sistema interno à forma como a marca se apresenta pra quem chega.',
    },
    {
      nome: 'Atmosfera Viral',
      tipo: 'Marca e conteúdo',
      texto:
        'Marca de estética própria e distribuição de conteúdo. Aqui o desafio não é técnico, é fazer alguém parar de rolar a tela.',
    },
  ],
  cases: {
    titulo: 'Cases de cliente',
    // >>> TODO MATHEUS: quando tiver os prints e números, preencha a lista abaixo.
    //     Formato: { cliente, resultado, detalhe }. Vazia = a UI mostra o convite honesto.
    lista: [],
    convite:
      'Estou montando esta seção com número, print e nome de cliente, não com depoimento genérico. Se você fechar comigo agora, entra nela: entrego com prioridade e combinamos condição especial em troca do case documentado.',
  },
}

export const GARANTIA = {
  numero: '06',
  etiqueta: 'O risco é meu',
  titulo: 'Se não subir no prazo, você não paga.',
  texto:
    'Prazo é a primeira coisa que agência quebra, então eu coloco meu dinheiro nisso: se o seu site não estiver no ar dentro do prazo que eu fechei na proposta, e o atraso não for por material que ficou parado com você, eu devolvo 100% do que foi pago. Sem discussão e sem letra miúda.',
  itens: [
    'Orçamento fechado antes de começar: o preço que combinamos é o preço final.',
    'Duas rodadas de ajuste inclusas, sem virar escopo novo.',
    'O código e o domínio são seus. Se um dia quiser sair, você sai com tudo.',
  ],
}

export const DUVIDAS = {
  numero: '07',
  etiqueta: 'Dúvidas',
  titulo: 'O que costumam me perguntar antes de fechar.',
  perguntas: [
    {
      pergunta: 'Por que não usar Wix, WordPress ou um template pronto?',
      resposta:
        'Pode usar, e pra um site simples às vezes é a escolha certa, eu falo isso na cara. O problema aparece depois: template te trava exatamente quando o negócio cresce, carrega peso que você não usa, e cada ajuste depende de um plugin novo. Eu entrego código próprio: mais rápido, mais leve, e sem teto.',
    },
    {
      pergunta: 'Quanto tempo até estar no ar de verdade?',
      resposta:
        'Landing page: até 7 dias. Site institucional: até 14. Sob medida: prazo fechado no diagnóstico. O que costuma atrasar não é o código, é material que fica parado do seu lado, fotos, textos, acesso ao domínio. Eu te mando uma lista do que preciso logo no primeiro dia.',
    },
    {
      pergunta: 'Eu não tenho texto nem foto. Consigo mesmo assim?',
      resposta:
        'Consegue. A copy eu escrevo com você a partir do diagnóstico, é parte do serviço, não item extra. Foto a gente resolve com banco de imagem bem escolhido ou eu te oriento a fazer com o celular, que hoje resolve na maioria dos casos.',
    },
    {
      pergunta: 'Depois de pronto eu consigo mexer sozinho?',
      resposta:
        'Sim. No pacote 02 em diante vai um painel simples pra trocar texto e foto. Em todos os pacotes eu gravo um vídeo curto mostrando como mexer no que muda com frequência. Você não fica refém de mim.',
    },
    {
      pergunta: 'E se eu não gostar do resultado?',
      resposta:
        'Você aprova a estrutura e a copy antes de eu codar, e acompanha a construção por link de preview. Quando chega no fim, não tem surpresa, e ainda tem duas rodadas de ajuste. Se mesmo assim o prazo furar, a garantia acima vale.',
    },
    {
      pergunta: 'Você atende fora da minha cidade?',
      resposta:
        'Atendo o Brasil inteiro, tudo remoto, WhatsApp e chamada quando precisa. A maior parte dos projetos vai do começo ao fim sem uma única reunião presencial.',
    },
    {
      pergunta: 'Tem mensalidade?',
      resposta:
        'Não obrigatória. Hospedagem e domínio ficam no seu nome, e nos planos gratuitos que eu configuro isso custa perto de zero. Se você quiser manutenção e ajustes contínuos, a gente combina à parte, nunca vem embutido sem você saber.',
    },
  ],
}

export const PEDIDO = {
  numero: '08',
  etiqueta: 'Fazer pedido',
  titulo: 'Monte seu pedido.',
  texto:
    'Responda em menos de um minuto. No fim, o botão abre o WhatsApp com tudo isso já escrito, você só aperta enviar. Nada é salvo em servidor nenhum: a mensagem vai direto do seu aparelho pra minha conversa.',
  // Urgência real, não fabricada. >>> TODO MATHEUS: mantenha só se for verdade.
  escassez:
    'Eu toco 3 projetos por vez pra não atrasar ninguém. Quando a fila enche, o próximo prazo já entra pro mês seguinte.',
  botao: 'Enviar pedido no WhatsApp',
  botaoCarregando: 'Abrindo o WhatsApp…',
  aviso:
    'Ao enviar, você abre uma conversa comigo no WhatsApp com os dados que digitou. Só isso, sem cadastro, sem lista de e-mail, sem disparo automático.',
}

export const RODAPE = {
  frase: 'Feito por quem constrói produto, não por quem monta template.',
  chamada: 'Prefere falar direto?',
  ctaWhatsApp: 'Chamar no WhatsApp',
}
