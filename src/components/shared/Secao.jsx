import { Revelar } from './Revelar.jsx'
import './Secao.css'

/**
 * Moldura de toda seção da página: número, etiqueta em versalete, fio horizontal
 * e o respiro vertical padrão. É o que dá o ritmo editorial, cada seção lida
 * como uma página de revista, sempre no mesmo grid.
 */
export function Secao({ id, numero, etiqueta, tom = 'papel', children, className = '' }) {
  return (
    <section id={id} className={`secao secao--${tom} ${className}`.trim()} aria-labelledby={`${id}-titulo`}>
      <div className="envelope">
        <Revelar className="secao__topo">
          <span className="secao__numero">{numero}</span>
          <span className="secao__etiqueta">{etiqueta}</span>
        </Revelar>
        {children}
      </div>
    </section>
  )
}

/** Título + texto de abertura da seção, na coluna de leitura. */
export function AberturaSecao({ id, titulo, texto, largo = false }) {
  return (
    <Revelar className={`abertura ${largo ? 'abertura--larga' : ''}`.trim()}>
      <h2 id={`${id}-titulo`} className="titulo abertura__titulo">
        {titulo}
      </h2>
      {texto ? <p className="abertura__texto">{texto}</p> : null}
    </Revelar>
  )
}
