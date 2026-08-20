/*
 * O cardápio de serviços e as opções do formulário de pedido.
 *
 * >>> TODO MATHEUS: os preços abaixo são um ponto de partida de mercado, não uma
 *     decisão sua. Ajuste os três valores antes de publicar. Regra do framework:
 *     precificar pelo RESULTADO entregue, nunca pelo tempo gasto.
 */

export const PACOTES = [
  {
    id: 'landing-page',
    numero: '01',
    nome: 'Landing Page de Conversão',
    promessa: 'Uma página com um objetivo só: virar pedido.',
    para: 'Quem já tem tráfego (Instagram, anúncio, indicação) e precisa transformar visita em conversa.',
    precoDe: 1497,
    prazo: 'no ar em até 7 dias',
    itens: [
      'Uma página, um caminho, zero distração',
      'Copy de conversão escrita com você (não é "preenche o texto depois")',
      'Formulário que monta o pedido e cai no seu WhatsApp',
      'Mobile-first de verdade, é de onde vem seu tráfego',
      'Velocidade e SEO técnico no verde',
      'Domínio configurado e no ar',
    ],
  },
  {
    id: 'site-institucional',
    numero: '02',
    nome: 'Site Institucional',
    promessa: 'Seu negócio inteiro explicado, e vendendo em toda página.',
    para: 'Quem tem mais de um serviço, precisa aparecer no Google e ser levado a sério na primeira busca.',
    precoDe: 2897,
    prazo: 'no ar em até 14 dias',
    destaque: true,
    itens: [
      'Tudo do pacote 01',
      'Até 5 páginas (Início, Serviços, Sobre, Provas, Contato)',
      'SEO técnico e estrutura pra ranquear no seu bairro/nicho',
      'Botão de WhatsApp em todas as páginas',
      'Painel simples pra você trocar textos e fotos',
      'Google Analytics e Search Console configurados',
    ],
  },
  {
    id: 'sob-medida',
    numero: '03',
    nome: 'Sob Medida',
    promessa: 'Quando o site precisa fazer, não só falar.',
    para: 'Quem precisa de área de cliente, agendamento, catálogo, painel, integração ou automação.',
    precoDe: 5900,
    prazo: 'prazo fechado no diagnóstico',
    itens: [
      'Tudo do pacote 02',
      'Área de login, painel ou área de cliente',
      'Integrações (pagamento, CRM, planilha, API)',
      'Automação do que hoje é feito na mão',
      'Banco de dados modelado pra escalar sem retrabalho',
      'Acompanhamento nos primeiros 30 dias no ar',
    ],
  },
]

/**
 * O quarto caminho, para quem não se encaixa em nenhum dos três.
 *
 * Fica FORA de PACOTES de propósito: não tem preço de tabela nem lista fechada,
 * é o oposto de um pacote. Quem escolhe aqui monta o escopo no formulário e o
 * preço sai no diagnóstico.
 */
export const PACOTE_PERSONALIZADO = {
  id: 'personalizado',
  nome: 'Plano personalizado',
  promessa: 'Você diz o que precisa. Eu monto em cima disso.',
}

/**
 * As opções de pacote do formulário, na mesma ordem em que aparecem no
 * cardápio. Fonte única: mexer em PACOTES ou no personalizado muda os dois lados.
 */
export const OPCOES_PACOTE = [
  ...PACOTES.map((pacote) => ({ id: pacote.id, rotulo: pacote.nome })),
  { id: PACOTE_PERSONALIZADO.id, rotulo: PACOTE_PERSONALIZADO.nome },
]

/** Opções do formulário. Mudar aqui muda o formulário E a mensagem do WhatsApp. */
export const OBJETIVOS = [
  { id: 'vender', rotulo: 'Vender mais / receber pedido' },
  { id: 'orcamento', rotulo: 'Receber pedido de orçamento' },
  { id: 'autoridade', rotulo: 'Passar autoridade e confiança' },
  { id: 'lancamento', rotulo: 'Lançar um produto ou evento' },
  { id: 'refazer', rotulo: 'Refazer um site que não funciona' },
]

export const PRAZOS = [
  { id: 'urgente', rotulo: 'O quanto antes' },
  { id: 'quinze', rotulo: 'Até 15 dias' },
  { id: 'trinta', rotulo: 'Até 30 dias' },
  { id: 'planejando', rotulo: 'Ainda planejando' },
]

export const ORCAMENTOS = [
  { id: 'ate-1500', rotulo: 'Até R$ 1.500' },
  { id: '1500-3000', rotulo: 'R$ 1.500 a R$ 3.000' },
  { id: '3000-6000', rotulo: 'R$ 3.000 a R$ 6.000' },
  { id: 'acima-6000', rotulo: 'Acima de R$ 6.000' },
  { id: 'nao-sei', rotulo: 'Não sei ainda' },
]

/** Formata centavos/reais para o formato brasileiro exibido nos cartões. */
export function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}

/** Busca um pacote pelo id; devolve null se não existir (nunca lança). */
export function acharPacote(id) {
  return PACOTES.find((pacote) => pacote.id === id) ?? null
}
