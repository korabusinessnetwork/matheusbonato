import { HERO } from '../../constants/conteudo.js'
import { Botao } from '../shared/Botao.jsx'
import './Hero.css'

export function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="envelope hero__envelope">
        <p className="hero__etiqueta">{HERO.etiqueta}</p>

        <h1 className="display hero__titulo">
          {HERO.titulo}
          <br />
          <em className="enfase">{HERO.tituloEnfase}</em>
        </h1>

        <div className="hero__base">
          <p className="hero__subtitulo">{HERO.subtitulo}</p>

          <div className="hero__acoes">
            <Botao href="#pedido" tamanho="grande">
              {HERO.ctaPrimario}
            </Botao>
            <Botao href="#pacotes" variante="secundario" tamanho="grande">
              {HERO.ctaSecundario}
            </Botao>
          </div>
        </div>

        <ul className="hero__selos">
          {HERO.selos.map((selo) => (
            <li key={selo} className="hero__selo">
              {selo}
            </li>
          ))}
        </ul>
      </div>

      <span className="hero__rolar" aria-hidden="true">
        role para ver
      </span>
    </section>
  )
}
