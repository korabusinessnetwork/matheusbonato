import { useRevelarAoScroll } from '../../hooks/useRevelarAoScroll.js'
import './Revelar.css'

/**
 * Sobe e revela o conteúdo quando ele entra na tela.
 * `atraso` escalona itens de uma mesma lista (0, 1, 2…) — em passos curtos,
 * porque animação longa em série faz a página parecer lenta.
 */
export function Revelar({ children, atraso = 0, como: Tag = 'div', className = '', ...resto }) {
  const [alvo, visivel] = useRevelarAoScroll()

  return (
    <Tag
      ref={alvo}
      className={`revelar ${visivel ? 'revelar--visivel' : ''} ${className}`.trim()}
      style={{ '--atraso': `${Math.min(atraso, 6) * 70}ms` }}
      {...resto}
    >
      {children}
    </Tag>
  )
}
