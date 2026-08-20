/*
 * Validação do pedido. Roda ANTES de qualquer coisa sair da página —
 * princípio da fundação: prevenir o erro é melhor que reportar o erro.
 * Devolve erro por campo (o erro aparece no campo, nunca num alerta genérico).
 */

import { apenasDigitos } from '../utils/formatar.js'

export const LIMITE_CONTEXTO = 1000
export const LIMITE_NOME = 80
export const LIMITE_NEGOCIO = 120

const CAMPOS_OBRIGATORIOS = {
  nome: 'Como você se chama?',
  telefone: 'Preciso do seu WhatsApp pra te responder.',
  pacote: 'Escolha o que você precisa.',
  objetivo: 'Qual o objetivo do site?',
}

/**
 * @param {object} pedido
 * @returns {{ valido: boolean, erros: Record<string,string> }}
 */
export function validarPedido(pedido = {}) {
  const erros = {}

  for (const [campo, mensagem] of Object.entries(CAMPOS_OBRIGATORIOS)) {
    if (!String(pedido[campo] ?? '').trim()) erros[campo] = mensagem
  }

  const nome = String(pedido.nome ?? '').trim()
  if (nome && nome.length < 2) erros.nome = 'Escreva seu nome completo.'
  if (nome.length > LIMITE_NOME) erros.nome = `No máximo ${LIMITE_NOME} caracteres.`

  const digitos = apenasDigitos(pedido.telefone)
  if (digitos && (digitos.length < 10 || digitos.length > 13)) {
    erros.telefone = 'Confira o número: DDD + número, ex. (44) 99999-8888.'
  }

  if (String(pedido.negocio ?? '').length > LIMITE_NEGOCIO) {
    erros.negocio = `No máximo ${LIMITE_NEGOCIO} caracteres.`
  }

  if (String(pedido.contexto ?? '').length > LIMITE_CONTEXTO) {
    erros.contexto = `No máximo ${LIMITE_CONTEXTO} caracteres.`
  }

  return { valido: Object.keys(erros).length === 0, erros }
}

/**
 * Armadilha anti-robô: campo invisível que só um bot preenche.
 * Mais barato e menos invasivo que captcha — e não custa nada.
 */
export function pareceRobo(pedido = {}) {
  return String(pedido.sobrenome ?? '').trim().length > 0
}
