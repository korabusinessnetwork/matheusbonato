import { usePedido } from './hooks/usePedido.js'
import { Cabecalho } from './components/cabecalho/Cabecalho.jsx'
import { Hero } from './components/hero/Hero.jsx'
import { Problema } from './components/problema/Problema.jsx'
import { Trajetoria } from './components/trajetoria/Trajetoria.jsx'
import { Metodo } from './components/metodo/Metodo.jsx'
import { Pacotes } from './components/pacotes/Pacotes.jsx'
import { Provas } from './components/provas/Provas.jsx'
import { Garantia } from './components/garantia/Garantia.jsx'
import { Duvidas } from './components/duvidas/Duvidas.jsx'
import { Pedido } from './components/pedido/Pedido.jsx'
import { Rodape } from './components/rodape/Rodape.jsx'
import { BarraFixa } from './components/shared/BarraFixa.jsx'

/**
 * A ordem das seções É a estratégia da página:
 * problema (por que dói) → quem resolve (autoridade) → como (método) →
 * quanto (oferta) → prova → risco zero (garantia) → objeções → pedido.
 * Mudar a ordem muda a taxa de conversão; não mexa sem motivo.
 *
 * O estado do pedido vive aqui porque dois filhos precisam dele: o cardápio
 * (que escolhe o pacote) e o formulário (que recebe a escolha pronta).
 */
export default function App() {
  const { pedido, erros, enviado, link, mudar, escolherPacote, revisar } = usePedido()

  return (
    <>
      <Cabecalho />

      <main id="conteudo">
        <Hero />
        <Problema />
        <Trajetoria />
        <Metodo />
        <Pacotes pacoteEscolhido={pedido.pacote} aoEscolher={escolherPacote} />
        <Provas />
        <Garantia />
        <Duvidas />
        <Pedido
          pedido={pedido}
          erros={erros}
          enviado={enviado}
          link={link}
          mudar={mudar}
          revisar={revisar}
        />
      </main>

      <Rodape />
      <BarraFixa />
    </>
  )
}
