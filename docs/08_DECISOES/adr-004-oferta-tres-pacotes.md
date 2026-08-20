# ADR-004, Oferta em 3 pacotes com preço "a partir de"

**Status**: Aceito
**Data**: 2026-08-20
**Decisores**: Matheus Bonato

---

## Contexto

Decisão de produto com impacto direto em conversão e em receita, tomada aplicando
o framework de fundamentos de negócio (`business-fundamentos-iman-gadzhi`):
*nunca lançar com escopo vago; definir para quem é, o que resolve, o que NÃO
resolve, e a prova; precificar pelo valor entregue, não pelo tempo gasto.*

Três formatos estavam na mesa: sem preço (só entregáveis), preço fechado, ou
piso ("a partir de").

## Decisão

Publicar **três pacotes**, Landing Page de Conversão, Site Institucional e Sob
Medida, cada um com público declarado, entregáveis fechados, prazo e um preço
**"a partir de"**. O valor final sai no diagnóstico. Acompanha uma **garantia de
prazo**: se o site não subir no prazo da proposta, devolve-se 100%.

Preço, entregáveis e opções do formulário vivem em `src/constants/pacotes.js`.

## Alternativas Consideradas

### 1. Sem preço, só entregáveis
- **Prós**: mais leads no topo; liberdade total de precificação.
- **Contras**: atrai curioso sem orçamento; negociação longa; o dono vira
  orçamentista de graça.
- **Descartado porque**: em operação de uma pessoa, tempo de atendimento é o
  recurso escasso. Filtrar vale mais que volume.

### 2. Preço fechado
- **Prós**: clareza máxima, menos ida e volta.
- **Contras**: prende o preço mesmo quando o projeto vale muito mais; contradiz
  "precifique pelo valor entregue".
- **Descartado porque**: elimina a margem de precificar por resultado.

## Consequências

### Positivas
- Ancoragem: o visitante já chega ao WhatsApp sabendo a faixa.
- Triagem automática: o campo de orçamento no formulário revela desalinhamento
  antes da conversa.
- O pacote escolhido no cardápio já vai preenchido no pedido, menos atrito.

### Negativas / Trade-offs
- Menos leads no topo do funil do que a opção sem preço. É intencional.
- Preço público é copiável por concorrente.
- **Os valores atuais são um ponto de partida de mercado, não uma decisão
  final do dono**, estão marcados com `>>> TODO MATHEUS` no arquivo e devem ser
  revistos antes de publicar. Alterar preço não exige ADR novo; alterar a
  *estrutura* da oferta (número de pacotes, modelo de cobrança) exige.
- A garantia de prazo transfere risco real para o dono: só se sustenta enquanto
  os prazos prometidos couberem na operação de uma pessoa.

## Referências
- `src/constants/pacotes.js`
- `memory/identity.md`, posicionamento e personas
- `memory/restrictions.md`, preço e garantia não mudam sem aval do dono
