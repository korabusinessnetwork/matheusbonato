import { useEffect, useState } from 'react'

/**
 * Diz qual seção está sendo lida agora, para o menu marcar onde a pessoa está.
 * A faixa de detecção fica no terço superior da tela: é o que o olho considera
 * "onde eu estou" ao rolar.
 */
export function useSecaoAtiva(ids) {
  const [ativa, setAtiva] = useState('')

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const elementos = ids
      .map((id) => document.getElementById(id))
      .filter((elemento) => elemento !== null)

    if (elementos.length === 0) return

    const observador = new IntersectionObserver(
      (entradas) => {
        const visiveis = entradas
          .filter((entrada) => entrada.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visiveis.length > 0) setAtiva(visiveis[0].target.id)
      },
      { rootMargin: '-20% 0px -68% 0px', threshold: 0 },
    )

    elementos.forEach((elemento) => observador.observe(elemento))
    return () => observador.disconnect()
  }, [ids])

  return ativa
}
