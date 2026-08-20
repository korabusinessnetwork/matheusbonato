import { useEffect, useState } from 'react'
import { MARCA, SECOES, WHATSAPP_NUMERO } from '../../constants/contato.js'
import { urlConversaDireta } from '../../lib/whatsapp.js'
import { useSecaoAtiva } from '../../hooks/useSecaoAtiva.js'
import { Botao } from '../shared/Botao.jsx'
import './Cabecalho.css'

const IDS_SECOES = SECOES.map((secao) => secao.id)

/* No desktop o pedido já tem o botão de CTA ao lado, repetir o link polui. */
const SECOES_NAV = SECOES.filter((secao) => secao.id !== 'pedido')

export function Cabecalho() {
  const [rolou, setRolou] = useState(false)
  const [menuAberto, setMenuAberto] = useState(false)
  const secaoAtiva = useSecaoAtiva(IDS_SECOES)

  // O cabeçalho ganha fundo depois que a página sai do topo.
  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  // Menu aberto trava o scroll do fundo e fecha no Esc.
  useEffect(() => {
    if (!menuAberto) return
    const anterior = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const aoTeclar = (evento) => {
      if (evento.key === 'Escape') setMenuAberto(false)
    }
    window.addEventListener('keydown', aoTeclar)
    return () => {
      document.body.style.overflow = anterior
      window.removeEventListener('keydown', aoTeclar)
    }
  }, [menuAberto])

  const fechar = () => setMenuAberto(false)

  return (
    <>
      <a className="pular-para-conteudo" href="#conteudo">
        Pular para o conteúdo
      </a>

      <header className={`cabecalho ${rolou ? 'cabecalho--fixado' : ''}`}>
        <div className="envelope cabecalho__linha">
          <a href="#topo" className="cabecalho__marca" onClick={fechar}>
            <span className="cabecalho__nome">{MARCA.nome}</span>
            <span className="cabecalho__papel">{MARCA.papel}</span>
          </a>

          <nav className="cabecalho__nav" aria-label="Seções da página">
            {SECOES_NAV.map((secao) => (
              <a
                key={secao.id}
                href={`#${secao.id}`}
                className={`cabecalho__link ${secaoAtiva === secao.id ? 'cabecalho__link--ativo' : ''}`}
                aria-current={secaoAtiva === secao.id ? 'true' : undefined}
              >
                {secao.rotulo}
              </a>
            ))}
          </nav>

          <div className="cabecalho__acao">
            <Botao href="#pedido" variante="primario" tamanho="pequeno">
              Fazer pedido
            </Botao>
          </div>

          <button
            type="button"
            className="cabecalho__hamburguer"
            aria-expanded={menuAberto}
            aria-controls="menu-mobile"
            onClick={() => setMenuAberto((aberto) => !aberto)}
          >
            <span className="apenas-leitor">{menuAberto ? 'Fechar menu' : 'Abrir menu'}</span>
            <span className={`hamburguer ${menuAberto ? 'hamburguer--x' : ''}`} aria-hidden="true">
              <i />
              <i />
            </span>
          </button>
        </div>
      </header>

      <div
        id="menu-mobile"
        className={`menu ${menuAberto ? 'menu--aberto' : ''}`}
        hidden={!menuAberto}
      >
        <nav className="menu__lista" aria-label="Menu">
          {SECOES.map((secao, indice) => (
            <a
              key={secao.id}
              href={`#${secao.id}`}
              className="menu__item"
              onClick={fechar}
              style={{ '--ordem': indice }}
            >
              <span className="menu__numero">{String(indice + 1).padStart(2, '0')}</span>
              {secao.rotulo}
            </a>
          ))}
        </nav>

        <div className="menu__rodape">
          <Botao
            href={urlConversaDireta(WHATSAPP_NUMERO)}
            externo
            larguraTotal
            tamanho="grande"
            onClick={fechar}
          >
            Chamar no WhatsApp
          </Botao>
        </div>
      </div>
    </>
  )
}
