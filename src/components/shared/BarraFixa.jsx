import { useEffect, useState } from 'react'
import { Botao } from './Botao.jsx'
import './BarraFixa.css'

/**
 * Barra de ação fixa no rodapé do celular. Aparece depois que a pessoa passa
 * da primeira tela e some quando o próprio formulário está à vista — duas
 * chamadas concorrentes na mesma tela atrapalham em vez de converter.
 */
export function BarraFixa() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const formulario = document.getElementById('pedido')
    let passouDoTopo = false
    let formularioAVista = false

    const atualizar = () => setVisivel(passouDoTopo && !formularioAVista)

    const aoRolar = () => {
      passouDoTopo = window.scrollY > window.innerHeight * 0.75
      atualizar()
    }

    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })

    let observador
    if (formulario && typeof IntersectionObserver !== 'undefined') {
      observador = new IntersectionObserver(
        ([entrada]) => {
          formularioAVista = entrada.isIntersecting
          atualizar()
        },
        { threshold: 0.08 },
      )
      observador.observe(formulario)
    }

    return () => {
      window.removeEventListener('scroll', aoRolar)
      observador?.disconnect()
    }
  }, [])

  return (
    <div className={`barra-fixa ${visivel ? 'barra-fixa--visivel' : ''}`} aria-hidden={!visivel}>
      <Botao href="#pedido" larguraTotal tabIndex={visivel ? undefined : -1}>
        Fazer meu pedido
      </Botao>
    </div>
  )
}
