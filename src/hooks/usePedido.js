import { useCallback, useMemo, useState } from 'react'
import { validarPedido, pareceRobo } from '../lib/validacao.js'
import { urlPedido } from '../lib/whatsapp.js'
import { WHATSAPP_NUMERO } from '../constants/contato.js'
import { formatarTelefoneBR } from '../utils/formatar.js'

const PEDIDO_VAZIO = {
  nome: '',
  telefone: '',
  negocio: '',
  pacote: '',
  objetivo: '',
  prazo: '',
  orcamento: '',
  contexto: '',
  sobrenome: '', // armadilha anti-robô — fica escondida no formulário
}

/**
 * Estado do formulário de pedido.
 *
 * Duas regras de UX que valem mais que qualquer validação bonita:
 * 1. O erro de um campo some assim que a pessoa começa a corrigir aquele campo.
 * 2. Nada é validado antes da primeira tentativa de envio — ninguém gosta de
 *    ver "campo obrigatório" em vermelho antes de ter tido a chance de digitar.
 */
export function usePedido() {
  const [pedido, setPedido] = useState(PEDIDO_VAZIO)
  const [erros, setErros] = useState({})
  const [tentouEnviar, setTentouEnviar] = useState(false)
  const [enviado, setEnviado] = useState(false)

  const mudar = useCallback((campo, valor) => {
    const tratado = campo === 'telefone' ? formatarTelefoneBR(valor) : valor
    setPedido((atual) => ({ ...atual, [campo]: tratado }))
    setErros((atuais) => {
      if (!atuais[campo]) return atuais
      const { [campo]: _removido, ...resto } = atuais
      return resto
    })
  }, [])

  /** Usado pelos cartões de pacote: escolher lá já preenche o formulário aqui. */
  const escolherPacote = useCallback(
    (id) => {
      mudar('pacote', id)
      document.getElementById('pedido')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
    [mudar],
  )

  const link = useMemo(() => urlPedido(WHATSAPP_NUMERO, pedido), [pedido])

  /**
   * Roda no clique do botão final. Devolve `true` quando o pedido pode seguir
   * para o WhatsApp — quem decide abrir o link é o componente, para que o
   * clique continue sendo um gesto do usuário (senão o navegador bloqueia).
   */
  const revisar = useCallback(() => {
    setTentouEnviar(true)

    // Robô preenchido: a página finge sucesso e não abre nada.
    if (pareceRobo(pedido)) return false

    const { valido, erros: encontrados } = validarPedido(pedido)
    setErros(encontrados)

    if (!valido) {
      const primeiro = Object.keys(encontrados)[0]
      document.getElementById(`campo-${primeiro}`)?.focus({ preventScroll: false })
      return false
    }

    setEnviado(true)
    return true
  }, [pedido])

  return { pedido, erros, tentouEnviar, enviado, link, mudar, escolherPacote, revisar }
}
