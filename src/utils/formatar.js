/*
 * Funções puras de formatação. Sem React, sem DOM, sem efeito colateral,
 * por isso nascem com teste (ver formatar.test.js).
 */

/** Remove tudo que não for dígito. Base de qualquer tratamento de telefone. */
export function apenasDigitos(valor) {
  return String(valor ?? '').replace(/\D/g, '')
}

/**
 * Máscara de telefone brasileiro, aplicada enquanto a pessoa digita.
 * Aceita 10 dígitos (fixo) e 11 (celular). Nunca trava a digitação:
 * entrada parcial devolve máscara parcial.
 */
export function formatarTelefoneBR(valor) {
  const d = apenasDigitos(valor).slice(0, 11)
  if (d.length === 0) return ''
  if (d.length <= 2) return `(${d}`
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

/**
 * Telefone digitado pelo usuário → formato que o wa.me entende (DDI+DDD+número).
 * Assume Brasil quando o DDI não veio: é o público da página.
 */
export function paraFormatoWhatsApp(valor) {
  const d = apenasDigitos(valor)
  if (!d) return ''
  if (d.startsWith('55') && d.length >= 12) return d
  return `55${d}`
}

/** Corta texto longo sem cortar no meio de uma palavra. */
export function limitar(texto, maximo) {
  const limpo = String(texto ?? '').trim()
  if (limpo.length <= maximo) return limpo
  const corte = limpo.slice(0, maximo)
  const ultimoEspaco = corte.lastIndexOf(' ')
  return `${(ultimoEspaco > maximo * 0.6 ? corte.slice(0, ultimoEspaco) : corte).trimEnd()}…`
}

/** Colapsa espaços e quebras de linha repetidas, mensagem de WhatsApp limpa. */
export function normalizarEspacos(texto) {
  return String(texto ?? '')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}
