import { describe, it, expect } from 'vitest'
import { montarMensagemPedido, montarUrlWhatsApp, urlPedido } from './whatsapp.js'

const pedidoCompleto = {
  nome: 'Ana Ribeiro',
  telefone: '(44) 99999-8888',
  negocio: '@estudioana',
  pacote: 'landing-page',
  objetivo: 'vender',
  prazo: 'urgente',
  orcamento: '1500-3000',
  contexto: 'Vendo bolo no Instagram e quero parar de responder orçamento na mão.',
}

describe('montarMensagemPedido', () => {
  it('inclui todos os campos respondidos, com o rótulo que a pessoa leu', () => {
    const mensagem = montarMensagemPedido(pedidoCompleto)
    expect(mensagem).toContain('Ana Ribeiro')
    expect(mensagem).toContain('@estudioana')
    expect(mensagem).toContain('Landing Page de Conversão')
    expect(mensagem).toContain('Vender mais / receber pedido')
    expect(mensagem).toContain('O quanto antes')
    expect(mensagem).toContain('R$ 1.500 a R$ 3.000')
    expect(mensagem).toContain('parar de responder orçamento na mão')
  })

  it('omite as linhas opcionais em branco em vez de mandar campo vazio', () => {
    const mensagem = montarMensagemPedido({ ...pedidoCompleto, negocio: '', contexto: '' })
    expect(mensagem).not.toContain('Negócio')
    expect(mensagem).not.toContain('Sobre o projeto')
  })

  it('degrada com elegância quando o pedido vem vazio', () => {
    const mensagem = montarMensagemPedido({})
    expect(mensagem).toContain('Alguém')
    expect(mensagem).toContain('ainda não escolhido')
    expect(mensagem).toContain('não informado')
  })

  it('corta contexto gigante para a URL não estourar', () => {
    const mensagem = montarMensagemPedido({ ...pedidoCompleto, contexto: 'a'.repeat(5000) })
    expect(mensagem.length).toBeLessThan(1400)
  })
})

describe('montarUrlWhatsApp', () => {
  it('monta o link wa.me com o texto codificado', () => {
    const url = montarUrlWhatsApp('5544999998888', 'Oi, Matheus!')
    expect(url).toBe('https://wa.me/5544999998888?text=Oi%2C%20Matheus!')
  })

  it('limpa máscara do número', () => {
    expect(montarUrlWhatsApp('+55 (44) 99999-8888', 'oi')).toContain('wa.me/5544999998888')
  })

  it('devolve vazio sem número em vez de gerar link quebrado', () => {
    expect(montarUrlWhatsApp('', 'oi')).toBe('')
  })

  it('sem mensagem, abre a conversa mesmo assim', () => {
    expect(montarUrlWhatsApp('5544999998888', '')).toBe('https://wa.me/5544999998888')
  })

  it('codifica quebra de linha e acento sem quebrar a URL', () => {
    const url = montarUrlWhatsApp('5544999998888', 'linha1\nlinha2 ção')
    expect(url).toContain('%0A')
    expect(url).toContain('%C3%A7%C3%A3o')
    expect(url).not.toContain('\n')
  })

  it('neutraliza tentativa de injetar parâmetro na URL', () => {
    const url = montarUrlWhatsApp('5544999998888', 'oi&phone=999&x=<script>')
    expect(url).not.toContain('&phone=')
    expect(url).not.toContain('<script>')
  })
})

describe('urlPedido', () => {
  it('junta mensagem e número num link pronto para o href', () => {
    const url = urlPedido('5544999998888', pedidoCompleto)
    expect(url.startsWith('https://wa.me/5544999998888?text=')).toBe(true)
    expect(decodeURIComponent(url)).toContain('Ana Ribeiro')
  })
})
