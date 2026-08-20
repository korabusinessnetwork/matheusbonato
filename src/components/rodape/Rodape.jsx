import { MARCA, WHATSAPP_NUMERO } from '../../constants/contato.js'
import { RODAPE } from '../../constants/conteudo.js'
import { urlConversaDireta } from '../../lib/whatsapp.js'
import { Botao } from '../shared/Botao.jsx'
import './Rodape.css'

export function Rodape() {
  const ano = new Date().getFullYear()
  const redes = MARCA.redes.filter((rede) => rede.url)

  return (
    <footer className="rodape">
      <div className="envelope">
        <div className="rodape__topo">
          <div>
            <p className="rodape__frase">{RODAPE.frase}</p>
            <p className="rodape__chamada">{RODAPE.chamada}</p>
          </div>

          <Botao href={urlConversaDireta(WHATSAPP_NUMERO)} externo tamanho="grande">
            {RODAPE.ctaWhatsApp}
          </Botao>
        </div>

        <div className="rodape__base">
          <span className="rodape__assinatura">
            {MARCA.assinatura} · {ano}
          </span>

          <ul className="rodape__redes">
            {redes.map((rede) => (
              <li key={rede.rotulo}>
                <a
                  href={rede.url}
                  className="rodape__rede"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {rede.rotulo}
                  <span className="rodape__usuario">{rede.usuario}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="rodape__lgpd">
          Esta página não guarda seus dados. O que você digita no formulário vira uma
          mensagem no seu próprio WhatsApp — nada é enviado para servidor, banco de dados
          ou lista de e-mail.
        </p>
      </div>
    </footer>
  )
}
