import { METODO } from '../../constants/conteudo.js'
import { Secao, AberturaSecao } from '../shared/Secao.jsx'
import { Revelar } from '../shared/Revelar.jsx'
import './Metodo.css'

export function Metodo() {
  return (
    <Secao id="metodo" numero={METODO.numero} etiqueta={METODO.etiqueta} tom="realce">
      <AberturaSecao id="metodo" titulo={METODO.titulo} texto={METODO.texto} />

      <ol className="passos">
        {METODO.passos.map((passo, indice) => (
          <Revelar key={passo.numero} como="li" className="passo" atraso={indice}>
            <div className="passo__cabeca">
              <span className="passo__numero">{passo.numero}</span>
              <span className="passo__duracao">{passo.duracao}</span>
            </div>
            <h3 className="passo__titulo">{passo.titulo}</h3>
            <p className="passo__texto">{passo.texto}</p>
          </Revelar>
        ))}
      </ol>
    </Secao>
  )
}
