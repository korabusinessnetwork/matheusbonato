# Padrões, "como fazemos aqui"

## Objetivo
Consolidar os padrões de código e de conteúdo já validados neste projeto, para
que agentes e devs novos não reinventem (nem contradigam) o que já funciona.

## Contexto
Padrão não escrito é padrão que se perde entre sessões. Cada item aqui foi usado
de verdade no código, não é aspiração.

## Regras Gerais
- Padrão nasce do código, não do desejo. Se não está implementado, é proposta.
- Padrão que deixou de valer é marcado `[DEPRECADO]`, nunca apagado em silêncio.

## Validações
- Padrão de código: usado em pelo menos 2 lugares.
- Padrão de segurança: exige revisão do dono antes de virar regra.

## Permissões
- Qualquer dev/agente pode propor; o dono confirma na revisão.

## Exceções
- Protótipo descartável pode fugir do padrão, desde que não vá para `main`.

## Auditoria
- Data e onde o padrão é aplicado.

## Eventos
- `pattern.added`, `pattern.deprecated`, `pattern.revised`

---

## Conteúdo e copy

**Toda copy vive em `src/constants/`, nunca dentro do JSX.**
`conteudo.js` (textos), `pacotes.js` (oferta e opções do formulário) e
`contato.js` (WhatsApp, marca, menu). Motivo: reescrever a página inteira sem
abrir componente, e reusar esta LP como template para um cliente depois.
Aplicado em: todos os componentes de seção.

**Marcador `>>> TODO MATHEUS` e `[CONFIRMAR]`.**
Todo dado que é fato sobre o dono (número, ano, preço, case) fica marcado assim.
Regra: nunca preencher com fato inventado, melhor um marcador honesto.

## Código

**Um componente por seção, com CSS de mesmo nome ao lado.**
`components/<secao>/<Secao>.jsx` + `<Secao>.css`. Estilo nunca dentro do JSX,
é o que permite trocar tema/marca sem tocar na marcação.

**Camada de serviços obrigatória (`src/lib/`).**
Nenhum componente sabe como o pedido viaja. Hoje é `wa.me`; se virar Supabase ou
e-mail, muda só `lib/whatsapp.js`. Aplicado em: `Pedido.jsx`, `Rodape.jsx`,
`Cabecalho.jsx`.

**Função pura nasce com teste.**
`utils/formatar.js`, `lib/validacao.js` e `lib/whatsapp.js` têm `.test.js` ao
lado. `npm test` roda antes de qualquer commit.

**Nomes de domínio em português, padrões técnicos em inglês.**
`montarMensagemPedido`, `escolherPacote`, `validarPedido` × `onClick`, `href`.

**Tokens de design em `styles/tokens.css`.**
Nenhum hex, tamanho de fonte ou duração escrita direto no CSS do componente.

## UX (subordinado ao princípio nº1: conversão)

**Nenhuma seção é beco sem saída.** Toda seção leva de volta ao pedido, direta
(botão) ou indiretamente (o cardápio pré-preenche o formulário).

**Erro no campo, nunca em alerta genérico.** E some assim que a pessoa começa a
corrigir aquele campo. Nada é validado antes da primeira tentativa de envio.

**Elemento certo para cada função.** `<a>` para navegar, `<button>` para agir,
`<details>` para acordeão, `input[type=radio]` real por baixo das etiquetas.
Nada de `<div>` clicável.

**Gesto do usuário abre o WhatsApp.** O botão final é um `<a href>` de verdade
com o link já montado, se fosse `window.open` em callback, bloqueador de pop-up
mataria a conversão.

**Alvo de toque mínimo de 44px** em qualquer controle tocável no celular.

**Movimento é enfeite.** `prefers-reduced-motion` zera as durações; conteúdo
nunca depende de animação para aparecer.
