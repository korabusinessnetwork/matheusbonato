/*
 * Dados de contato e identidade. Ponto único de troca.
 *
 * >>> TODO MATHEUS: troque VITE_WHATSAPP_NUMERO no .env (ou o padrão abaixo)
 *     pelo seu número real, no formato DDI+DDD+número, só dígitos.
 *     Ex.: 5544999998888 → 55 (Brasil) + 44 (DDD) + 999998888
 *     Enquanto estiver o número de exemplo, o botão abre uma conversa vazia.
 */

const NUMERO_EXEMPLO = '5544999998888'

export const WHATSAPP_NUMERO =
  import.meta.env?.VITE_WHATSAPP_NUMERO?.replace(/\D/g, '') || NUMERO_EXEMPLO

/** true enquanto o número real não foi configurado, a UI avisa em dev. */
export const WHATSAPP_E_EXEMPLO = WHATSAPP_NUMERO === NUMERO_EXEMPLO

export const MARCA = {
  nome: 'Matheus Bonato',
  papel: 'Sites e landing pages que viram pedido',
  assinatura: 'Matheus Bonato',
  // >>> TODO MATHEUS: complete os links e remova o que não usar.
  //     Rede com `url` vazia não é renderizada, não precisa apagar o objeto.
  //     Deixei o e-mail como placeholder de propósito: publicar seu Gmail
  //     pessoal numa página pública é decisão sua, não minha. Se quiser usar
  //     um, prefira um endereço do seu domínio.
  redes: [
    { rotulo: 'Instagram', url: 'https://instagram.com/matheusbonato', usuario: '@matheusbonato' },
    { rotulo: 'GitHub', url: 'https://github.com/matheusbonato', usuario: 'matheusbonato' },
    { rotulo: 'E-mail', url: '', usuario: 'contato@seudominio.com.br' },
  ],
}

/** Seções do menu. A ordem aqui é a ordem do menu e do scroll-spy. */
export const SECOES = [
  { id: 'trajetoria', rotulo: 'Trajetória' },
  { id: 'metodo', rotulo: 'Método' },
  { id: 'pacotes', rotulo: 'Pacotes' },
  { id: 'provas', rotulo: 'Provas' },
  { id: 'duvidas', rotulo: 'Dúvidas' },
  { id: 'pedido', rotulo: 'Fazer pedido' },
]
