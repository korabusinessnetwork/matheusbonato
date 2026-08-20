import './Botao.css'

/**
 * Botão único da página. Vira <a> quando recebe `href` e <button> quando não
 * recebe, o elemento certo para cada caso, sem `<div>` clicável.
 * Variantes: primario (o que converte), secundario (contorno), fantasma (texto).
 */
export function Botao({
  children,
  href,
  variante = 'primario',
  tamanho = 'medio',
  larguraTotal = false,
  externo = false,
  className = '',
  ...resto
}) {
  const classe = [
    'botao',
    `botao--${variante}`,
    `botao--${tamanho}`,
    larguraTotal ? 'botao--largo' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a
        href={href}
        className={classe}
        {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...resto}
      >
        <span className="botao__texto">{children}</span>
      </a>
    )
  }

  return (
    <button type="button" className={classe} {...resto}>
      <span className="botao__texto">{children}</span>
    </button>
  )
}
