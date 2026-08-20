import { describe, it, expect } from 'vitest'
import { validarPedido, pareceRobo, LIMITE_CONTEXTO } from './validacao.js'

const valido = {
  nome: 'Ana Ribeiro',
  telefone: '(44) 99999-8888',
  pacote: 'landing-page',
  objetivo: 'vender',
}

describe('validarPedido', () => {
  it('aprova um pedido com os obrigatórios preenchidos', () => {
    expect(validarPedido(valido)).toEqual({ valido: true, erros: {} })
  })

  it('acusa cada obrigatório que faltou, por campo', () => {
    const { valido: ok, erros } = validarPedido({})
    expect(ok).toBe(false)
    expect(Object.keys(erros).sort()).toEqual(['nome', 'objetivo', 'pacote', 'telefone'])
  })

  it('rejeita telefone curto demais para ser um número brasileiro', () => {
    expect(validarPedido({ ...valido, telefone: '4499' }).erros.telefone).toBeDefined()
  })

  it('aceita telefone já com DDI', () => {
    expect(validarPedido({ ...valido, telefone: '+55 44 99999-8888' }).valido).toBe(true)
  })

  it('rejeita contexto acima do limite', () => {
    const erros = validarPedido({ ...valido, contexto: 'a'.repeat(LIMITE_CONTEXTO + 1) }).erros
    expect(erros.contexto).toBeDefined()
  })

  it('não deixa passar nome de uma letra só', () => {
    expect(validarPedido({ ...valido, nome: 'A' }).erros.nome).toBeDefined()
  })
})

describe('pareceRobo', () => {
  it('acusa quando o campo-armadilha vem preenchido', () => {
    expect(pareceRobo({ sobrenome: 'bot' })).toBe(true)
  })

  it('deixa passar quando a armadilha está vazia', () => {
    expect(pareceRobo({ sobrenome: '' })).toBe(false)
    expect(pareceRobo({})).toBe(false)
  })
})
