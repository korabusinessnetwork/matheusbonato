import { PEDIDO } from '../../constants/conteudo.js'
import { PACOTES, OBJETIVOS, PRAZOS, ORCAMENTOS } from '../../constants/pacotes.js'
import { WHATSAPP_E_EXEMPLO } from '../../constants/contato.js'
import { LIMITE_CONTEXTO, LIMITE_NOME, LIMITE_NEGOCIO } from '../../lib/validacao.js'
import { Secao, AberturaSecao } from '../shared/Secao.jsx'
import { Revelar } from '../shared/Revelar.jsx'
import { Botao } from '../shared/Botao.jsx'
import { CampoTexto } from './CampoTexto.jsx'
import { GrupoOpcoes } from './GrupoOpcoes.jsx'
import './Pedido.css'

const OPCOES_PACOTE = PACOTES.map((pacote) => ({ id: pacote.id, rotulo: pacote.nome }))

export function Pedido({ pedido, erros, enviado, link, mudar, revisar }) {
  /**
   * O botão é um <a> de verdade com o link do WhatsApp já montado.
   * Se a validação passar, deixamos o navegador seguir o link normalmente —
   * é o clique da pessoa que abre a aba, então nenhum bloqueador de pop-up
   * atrapalha. Se não passar, cancelamos e mostramos o erro no campo.
   */
  function aoClicarEnviar(evento) {
    if (!revisar()) evento.preventDefault()
  }

  return (
    <Secao id="pedido" numero={PEDIDO.numero} etiqueta={PEDIDO.etiqueta}>
      <AberturaSecao id="pedido" titulo={PEDIDO.titulo} texto={PEDIDO.texto} />

      {PEDIDO.escassez ? (
        <Revelar>
          <p className="pedido__escassez">{PEDIDO.escassez}</p>
        </Revelar>
      ) : null}

      <Revelar className="pedido__caixa">
        {/* Sem action/method de propósito: nada é postado para servidor nenhum. */}
        <form className="formulario" noValidate onSubmit={(evento) => evento.preventDefault()}>
          <div className="formulario__linha">
            <CampoTexto
              nome="nome"
              rotulo="Seu nome"
              placeholder="Como quer ser chamado"
              valor={pedido.nome}
              aoMudar={mudar}
              erro={erros.nome}
              obrigatorio
              maximo={LIMITE_NOME}
              autoComplete="name"
            />

            <CampoTexto
              nome="telefone"
              rotulo="Seu WhatsApp"
              tipo="tel"
              inputMode="numeric"
              placeholder="(00) 00000-0000"
              valor={pedido.telefone}
              aoMudar={mudar}
              erro={erros.telefone}
              dica="É por aqui que eu te respondo."
              obrigatorio
              autoComplete="tel"
            />
          </div>

          <CampoTexto
            nome="negocio"
            rotulo="Seu negócio, @ ou site atual"
            placeholder="@seuperfil ou seusite.com.br"
            valor={pedido.negocio}
            aoMudar={mudar}
            erro={erros.negocio}
            dica="Me ajuda a chegar na conversa já sabendo do que se trata."
            maximo={LIMITE_NEGOCIO}
          />

          <GrupoOpcoes
            nome="pacote"
            rotulo="O que você precisa"
            opcoes={OPCOES_PACOTE}
            valor={pedido.pacote}
            aoMudar={mudar}
            erro={erros.pacote}
            obrigatorio
          />

          <GrupoOpcoes
            nome="objetivo"
            rotulo="Objetivo principal do site"
            opcoes={OBJETIVOS}
            valor={pedido.objetivo}
            aoMudar={mudar}
            erro={erros.objetivo}
            obrigatorio
          />

          <div className="formulario__linha">
            <GrupoOpcoes
              nome="prazo"
              rotulo="Para quando"
              opcoes={PRAZOS}
              valor={pedido.prazo}
              aoMudar={mudar}
              erro={erros.prazo}
            />

            <GrupoOpcoes
              nome="orcamento"
              rotulo="Orçamento previsto"
              opcoes={ORCAMENTOS}
              valor={pedido.orcamento}
              aoMudar={mudar}
              erro={erros.orcamento}
            />
          </div>

          <CampoTexto
            nome="contexto"
            rotulo="Me conta o projeto"
            placeholder="O que você vende, para quem, e o que o site precisa resolver."
            valor={pedido.contexto}
            aoMudar={mudar}
            erro={erros.contexto}
            multilinha
            maximo={LIMITE_CONTEXTO}
          />

          {/* Armadilha anti-robô: invisível e fora da navegação por teclado. */}
          <div className="formulario__armadilha" aria-hidden="true">
            <label htmlFor="campo-sobrenome">Não preencha este campo</label>
            <input
              id="campo-sobrenome"
              name="sobrenome"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={pedido.sobrenome}
              onChange={(evento) => mudar('sobrenome', evento.target.value)}
            />
          </div>

          <div className="formulario__envio">
            <Botao
              href={link}
              externo
              tamanho="grande"
              larguraTotal
              onClick={aoClicarEnviar}
              className="formulario__botao"
            >
              {PEDIDO.botao}
            </Botao>

            <p className="formulario__aviso">{PEDIDO.aviso}</p>

            {enviado ? (
              <p className="formulario__sucesso" role="status">
                Pedido montado. Se o WhatsApp não abriu sozinho,{' '}
                <a href={link} target="_blank" rel="noopener noreferrer">
                  toque aqui para abrir
                </a>
                .
              </p>
            ) : null}

            {/* Só em desenvolvimento: lembrete de trocar o número de exemplo. */}
            {import.meta.env.DEV && WHATSAPP_E_EXEMPLO ? (
              <p className="formulario__alerta-dev">
                Atenção: o número do WhatsApp ainda é o de exemplo. Defina
                <code> VITE_WHATSAPP_NUMERO </code>
                no <code>.env</code> antes de publicar.
              </p>
            ) : null}
          </div>
        </form>
      </Revelar>
    </Secao>
  )
}
