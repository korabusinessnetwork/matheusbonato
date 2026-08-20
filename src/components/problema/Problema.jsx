import { PROBLEMA } from '../../constants/conteudo.js'
import { Secao, AberturaSecao } from '../shared/Secao.jsx'
import { Revelar } from '../shared/Revelar.jsx'
import './Problema.css'

export function Problema() {
  return (
    <Secao id="problema" numero={PROBLEMA.numero} etiqueta={PROBLEMA.etiqueta}>
      <AberturaSecao id="problema" titulo={PROBLEMA.titulo} texto={PROBLEMA.texto} />

      <ul className="sintomas">
        {PROBLEMA.sintomas.map((sintoma, indice) => (
          <Revelar key={sintoma.titulo} como="li" className="sintoma" atraso={indice}>
            <span className="sintoma__marca" aria-hidden="true" />
            <h3 className="sintoma__titulo">{sintoma.titulo}</h3>
            <p className="sintoma__texto">{sintoma.texto}</p>
          </Revelar>
        ))}
      </ul>
    </Secao>
  )
}
