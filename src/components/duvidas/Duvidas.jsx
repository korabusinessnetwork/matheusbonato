import { DUVIDAS } from '../../constants/conteudo.js'
import { Secao, AberturaSecao } from '../shared/Secao.jsx'
import { Revelar } from '../shared/Revelar.jsx'
import './Duvidas.css'

/**
 * Acordeão em <details>/<summary> nativo: abre sem JavaScript, é navegável por
 * teclado de graça e o conteúdo continua indexável pelo Google.
 * `name` deixa só uma pergunta aberta por vez nos navegadores que já suportam,
 * e degrada para "várias abertas" nos que não suportam, nada quebra.
 */
export function Duvidas() {
  return (
    <Secao id="duvidas" numero={DUVIDAS.numero} etiqueta={DUVIDAS.etiqueta} tom="realce">
      <AberturaSecao id="duvidas" titulo={DUVIDAS.titulo} />

      <div className="duvidas">
        {DUVIDAS.perguntas.map((item, indice) => (
          <Revelar key={item.pergunta} atraso={Math.min(indice, 3)}>
            <details className="duvida" name="duvidas">
              <summary className="duvida__pergunta">
                <span>{item.pergunta}</span>
                <span className="duvida__sinal" aria-hidden="true" />
              </summary>
              <div className="duvida__resposta">
                <p>{item.resposta}</p>
              </div>
            </details>
          </Revelar>
        ))}
      </div>
    </Secao>
  )
}
