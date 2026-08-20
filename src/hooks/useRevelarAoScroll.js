import { useEffect, useRef, useState } from 'react'

/**
 * Revela um bloco quando ele entra na tela.
 * Degrada para "sempre visível" se o navegador não tem IntersectionObserver
 * ou se a pessoa pediu menos movimento — conteúdo nunca fica escondido por
 * causa de animação que não rodou.
 */
export function useRevelarAoScroll({ margem = '0px 0px -10% 0px', umaVez = true } = {}) {
  const alvo = useRef(null)
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const elemento = alvo.current
    if (!elemento) return

    const semMovimento = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (semMovimento || typeof IntersectionObserver === 'undefined') {
      setVisivel(true)
      return
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            setVisivel(true)
            if (umaVez) observador.unobserve(entrada.target)
          } else if (!umaVez) {
            setVisivel(false)
          }
        }
      },
      { rootMargin: margem, threshold: 0.06 },
    )

    observador.observe(elemento)
    return () => observador.disconnect()
  }, [margem, umaVez])

  return [alvo, visivel]
}
