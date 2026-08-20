import { PACOTES_SECAO } from '../../constants/conteudo.js'
import { PACOTES, PACOTE_PERSONALIZADO, formatarPreco } from '../../constants/pacotes.js'
import { Secao, AberturaSecao } from '../shared/Secao.jsx'
import { Revelar } from '../shared/Revelar.jsx'
import { Botao } from '../shared/Botao.jsx'
import './Pacotes.css'

/**
 * O cardápio. Cada cartão é uma porta de entrada para o formulário: escolher
 * aqui já leva o pacote preenchido lá embaixo, a pessoa não digita duas vezes.
 */
export function Pacotes({ pacoteEscolhido, aoEscolher }) {
  const personalizado = PACOTES_SECAO.personalizado
  const montandoOSeu = pacoteEscolhido === PACOTE_PERSONALIZADO.id

  return (
    <Secao id="pacotes" numero={PACOTES_SECAO.numero} etiqueta={PACOTES_SECAO.etiqueta}>
      <AberturaSecao id="pacotes" titulo={PACOTES_SECAO.titulo} texto={PACOTES_SECAO.texto} />

      <ul className="pacotes">
        {PACOTES.map((pacote, indice) => {
          const escolhido = pacoteEscolhido === pacote.id
          return (
            <Revelar
              key={pacote.id}
              como="li"
              className={`pacote ${pacote.destaque ? 'pacote--destaque' : ''} ${
                escolhido ? 'pacote--escolhido' : ''
              }`.trim()}
              atraso={indice}
            >
              {pacote.destaque ? <span className="pacote__fita">Mais pedido</span> : null}

              <div className="pacote__cabeca">
                <span className="pacote__numero">{pacote.numero}</span>
                <h3 className="pacote__nome">{pacote.nome}</h3>
                <p className="pacote__promessa">{pacote.promessa}</p>
              </div>

              <p className="pacote__para">
                <span className="pacote__para-rotulo">Para quem</span>
                {pacote.para}
              </p>

              <div className="pacote__preco">
                <span className="pacote__preco-rotulo">a partir de</span>
                <span className="pacote__preco-valor">{formatarPreco(pacote.precoDe)}</span>
                <span className="pacote__prazo">{pacote.prazo}</span>
              </div>

              <ul className="pacote__itens">
                {pacote.itens.map((item) => (
                  <li key={item} className="pacote__item">
                    {item}
                  </li>
                ))}
              </ul>

              <Botao
                variante={pacote.destaque ? 'primario' : 'secundario'}
                larguraTotal
                onClick={() => aoEscolher(pacote.id)}
                aria-label={`Escolher o pacote ${pacote.nome} e ir para o formulário de pedido`}
              >
                {escolhido ? 'Escolhido, ir ao pedido' : 'Quero este'}
              </Botao>
            </Revelar>
          )
        })}
      </ul>

      {/*
        A saída para quem não se encaixa em nenhum dos três. Fica fora da grade
        de cartões de propósito: não é um quarto pacote com preço de tabela, é
        o convite a montar o próprio escopo no formulário lá embaixo.
      */}
      <Revelar
        className={`personalizado ${montandoOSeu ? 'personalizado--escolhido' : ''}`.trim()}
      >
        <div className="personalizado__texto">
          <span className="personalizado__etiqueta">{personalizado.etiqueta}</span>
          <h3 className="personalizado__titulo">{personalizado.titulo}</h3>
          <p className="personalizado__resumo">{personalizado.texto}</p>

          <ul className="personalizado__itens">
            {personalizado.itens.map((item) => (
              <li key={item} className="personalizado__item">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="personalizado__acao">
          <Botao
            larguraTotal
            onClick={() => aoEscolher(PACOTE_PERSONALIZADO.id)}
            aria-label="Montar um plano personalizado e ir para o formulário de pedido"
          >
            {montandoOSeu ? 'Escolhido, ir ao pedido' : personalizado.botao}
          </Botao>

          <p className="personalizado__nota">{personalizado.nota}</p>
        </div>
      </Revelar>

      <Revelar>
        <p className="pacotes__rodape">{PACOTES_SECAO.rodape}</p>
      </Revelar>
    </Secao>
  )
}
