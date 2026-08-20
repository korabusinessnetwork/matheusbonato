import { PROVAS } from '../../constants/conteudo.js'
import { Secao, AberturaSecao } from '../shared/Secao.jsx'
import { Revelar } from '../shared/Revelar.jsx'
import './Provas.css'

export function Provas() {
  const temCases = PROVAS.cases.lista.length > 0

  return (
    <Secao id="provas" numero={PROVAS.numero} etiqueta={PROVAS.etiqueta}>
      <AberturaSecao id="provas" titulo={PROVAS.titulo} texto={PROVAS.texto} />

      <ul className="projetos">
        {PROVAS.projetos.map((projeto, indice) => (
          <Revelar key={projeto.nome} como="li" className="projeto" atraso={indice % 2}>
            <div className="projeto__cabeca">
              <h3 className="projeto__nome">{projeto.nome}</h3>
              <span className="projeto__tipo">{projeto.tipo}</span>
            </div>
            <p className="projeto__texto">{projeto.texto}</p>
          </Revelar>
        ))}
      </ul>

      <Revelar className="cases">
        <h3 className="cases__titulo">{PROVAS.cases.titulo}</h3>

        {temCases ? (
          <ul className="cases__lista">
            {PROVAS.cases.lista.map((caso) => (
              <li key={caso.cliente} className="caso">
                <span className="caso__resultado">{caso.resultado}</span>
                <span className="caso__cliente">{caso.cliente}</span>
                <p className="caso__detalhe">{caso.detalhe}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="cases__convite">{PROVAS.cases.convite}</p>
        )}
      </Revelar>
    </Secao>
  )
}
