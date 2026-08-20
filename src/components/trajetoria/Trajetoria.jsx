import { TRAJETORIA } from '../../constants/conteudo.js'
import { Secao, AberturaSecao } from '../shared/Secao.jsx'
import { Revelar } from '../shared/Revelar.jsx'
import './Trajetoria.css'

export function Trajetoria() {
  return (
    <Secao id="trajetoria" numero={TRAJETORIA.numero} etiqueta={TRAJETORIA.etiqueta}>
      <AberturaSecao id="trajetoria" titulo={TRAJETORIA.titulo} texto={TRAJETORIA.texto} />

      <ol className="linha-tempo">
        {TRAJETORIA.marcos.map((marco, indice) => (
          <Revelar key={marco.ano} como="li" className="marco" atraso={indice}>
            <span className="marco__ano">{marco.ano}</span>
            <div className="marco__corpo">
              <h3 className="marco__titulo">{marco.titulo}</h3>
              <p className="marco__texto">{marco.texto}</p>
            </div>
          </Revelar>
        ))}
      </ol>

      <div className="oque">
        <Revelar>
          <h3 className="titulo oque__titulo">{TRAJETORIA.oQueFaco.titulo}</h3>
        </Revelar>

        <ul className="oque__lista">
          {TRAJETORIA.oQueFaco.itens.map((item, indice) => (
            <Revelar key={item.titulo} como="li" className="oque__item" atraso={indice % 3}>
              <span className="oque__numero">{String(indice + 1).padStart(2, '0')}</span>
              <h4 className="oque__item-titulo">{item.titulo}</h4>
              <p className="oque__item-texto">{item.texto}</p>
            </Revelar>
          ))}
        </ul>
      </div>
    </Secao>
  )
}
