/*
 * CAMADA DE SERVIÇOS, a única fronteira entre a página e o mundo externo.
 * Hoje o "backend" do pedido é o WhatsApp. Se um dia virar Supabase, e-mail ou
 * CRM, muda só este arquivo: nenhum componente sabe como o pedido viaja.
 *
 * Tudo aqui é função pura (entra objeto, sai string), testado em whatsapp.test.js.
 */

import { PACOTES, OBJETIVOS, PRAZOS, ORCAMENTOS, formatarPreco } from '../constants/pacotes.js'
import { limitar, normalizarEspacos } from '../utils/formatar.js'
import { LIMITE_CONTEXTO } from './validacao.js'

const BASE_WHATSAPP = 'https://wa.me/'

/** Traduz o id guardado no formulário para o rótulo que a pessoa leu na tela. */
function rotuloDe(lista, id, alternativo = 'não informado') {
  return lista.find((item) => item.id === id)?.rotulo ?? alternativo
}

function rotuloPacote(id) {
  const pacote = PACOTES.find((item) => item.id === id)
  if (!pacote) return 'ainda não escolhido'
  return `${pacote.nome} (a partir de ${formatarPreco(pacote.precoDe)})`
}

/**
 * Monta a mensagem que a pessoa vai enviar. Escrita na PRIMEIRA pessoa dela,
 * quem envia é o cliente, então o texto precisa soar como o cliente falando.
 */
export function montarMensagemPedido(pedido = {}) {
  const nome = String(pedido.nome ?? '').trim() || 'Alguém'
  const linhas = [
    `Oi, Matheus! Vim pela sua página e montei meu pedido.`,
    '',
    `*Nome:* ${nome}`,
  ]

  const negocio = String(pedido.negocio ?? '').trim()
  if (negocio) linhas.push(`*Negócio / @ / site:* ${negocio}`)

  linhas.push(
    `*O que eu preciso:* ${rotuloPacote(pedido.pacote)}`,
    `*Objetivo principal:* ${rotuloDe(OBJETIVOS, pedido.objetivo)}`,
    `*Prazo:* ${rotuloDe(PRAZOS, pedido.prazo, 'a combinar')}`,
    `*Orçamento:* ${rotuloDe(ORCAMENTOS, pedido.orcamento, 'a combinar')}`,
  )

  const contexto = String(pedido.contexto ?? '').trim()
  if (contexto) {
    linhas.push('', '*Sobre o projeto:*', limitar(contexto, LIMITE_CONTEXTO))
  }

  linhas.push('', 'Pode me chamar por aqui.')

  return normalizarEspacos(linhas.join('\n'))
}

/**
 * URL final do WhatsApp. `encodeURIComponent` é o que garante que quebra de
 * linha, acento e asterisco cheguem intactos, e é também o que impede
 * qualquer texto digitado de virar outra coisa dentro da URL.
 */
export function montarUrlWhatsApp(numero, mensagem) {
  const limpo = String(numero ?? '').replace(/\D/g, '')
  if (!limpo) return ''
  const texto = String(mensagem ?? '').trim()
  return texto
    ? `${BASE_WHATSAPP}${limpo}?text=${encodeURIComponent(texto)}`
    : `${BASE_WHATSAPP}${limpo}`
}

/** Atalho para os botões "chamar no WhatsApp" espalhados pela página. */
export function urlConversaDireta(numero, assunto = '') {
  const texto = assunto
    ? `Oi, Matheus! Vim pela sua página. ${assunto}`
    : 'Oi, Matheus! Vim pela sua página e queria falar sobre um site.'
  return montarUrlWhatsApp(numero, texto)
}

/** URL completa do pedido, pronta pro href do botão final. */
export function urlPedido(numero, pedido) {
  return montarUrlWhatsApp(numero, montarMensagemPedido(pedido))
}
