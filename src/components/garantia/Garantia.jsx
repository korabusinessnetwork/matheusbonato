import { GARANTIA } from '../../constants/conteudo.js'
import { Secao } from '../shared/Secao.jsx'
import { Revelar } from '../shared/Revelar.jsx'
import './Garantia.css'

export function Garantia() {
  return (
    <Secao id="garantia" numero={GARANTIA.numero} etiqueta={GARANTIA.etiqueta} tom="escuro">
      <div className="garantia">
        <Revelar>
          <h2 id="garantia-titulo" className="titulo garantia__titulo">
            {GARANTIA.titulo}
          </h2>
        </Revelar>

        <Revelar atraso={1} className="garantia__corpo">
          <p className="garantia__texto">{GARANTIA.texto}</p>

          <ul className="garantia__itens">
            {GARANTIA.itens.map((item) => (
              <li key={item} className="garantia__item">
                {item}
              </li>
            ))}
          </ul>
        </Revelar>
      </div>
    </Secao>
  )
}
