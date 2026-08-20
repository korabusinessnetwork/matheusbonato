import { describe, it, expect } from 'vitest'
import {
  apenasDigitos,
  formatarTelefoneBR,
  paraFormatoWhatsApp,
  limitar,
  normalizarEspacos,
} from './formatar.js'

describe('apenasDigitos', () => {
  it('tira máscara, espaço e letra', () => {
    expect(apenasDigitos('(44) 99999-8888')).toBe('44999998888')
  })

  it('devolve string vazia para nulo/indefinido', () => {
    expect(apenasDigitos(null)).toBe('')
    expect(apenasDigitos(undefined)).toBe('')
  })
})

describe('formatarTelefoneBR', () => {
  it('formata celular de 11 dígitos', () => {
    expect(formatarTelefoneBR('44999998888')).toBe('(44) 99999-8888')
  })

  it('formata fixo de 10 dígitos', () => {
    expect(formatarTelefoneBR('4433334444')).toBe('(44) 3333-4444')
  })

  it('não trava a digitação parcial', () => {
    expect(formatarTelefoneBR('4')).toBe('(4')
    expect(formatarTelefoneBR('449')).toBe('(44) 9')
    expect(formatarTelefoneBR('')).toBe('')
  })

  it('ignora dígito além do 11º em vez de embaralhar a máscara', () => {
    expect(formatarTelefoneBR('449999988889999')).toBe('(44) 99999-8888')
  })
})

describe('paraFormatoWhatsApp', () => {
  it('prefixa 55 quando o DDI não veio', () => {
    expect(paraFormatoWhatsApp('(44) 99999-8888')).toBe('5544999998888')
  })

  it('não duplica o 55 quando já veio com DDI', () => {
    expect(paraFormatoWhatsApp('5544999998888')).toBe('5544999998888')
  })

  it('devolve vazio quando não há dígito', () => {
    expect(paraFormatoWhatsApp('abc')).toBe('')
  })
})

describe('limitar', () => {
  it('devolve o texto intacto quando cabe', () => {
    expect(limitar('curto', 20)).toBe('curto')
  })

  it('corta na palavra e sinaliza com reticências', () => {
    const resultado = limitar('um texto bem maior do que o limite pedido', 20)
    expect(resultado.endsWith('…')).toBe(true)
    expect(resultado.length).toBeLessThanOrEqual(21)
  })
})

describe('normalizarEspacos', () => {
  it('colapsa espaço repetido e limita quebras a duas', () => {
    expect(normalizarEspacos('a   b\n\n\n\nc')).toBe('a b\n\nc')
  })
})
