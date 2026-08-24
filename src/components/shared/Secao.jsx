import { Revelar } from './Revelar.jsx'
import './Secao.css'

/**
 * Moldura de toda seção da página: número, etiqueta em versalete, fio horizontal
 * e o respiro vertical padrão. É o que dá o ritmo editorial, cada seção lida
 * como uma página de revista, sempre no mesmo grid.
 */
export function Secao({ id, numero, etiqueta, tom = 'papel', children, className = '' }) {
  // "papel" é o tom default (fundo do body): não emite modificador, não há
  // regra .secao--papel no CSS e a classe só mentiria no markup.
  const classe = ['secao', tom !== 'papel' ? `secao--${tom}` : '', className]
    .filter(Boolean)
    .join(' ')
  return (
    <section id={id} className={classe} aria-labelledby={`${id}-titulo`}>
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
