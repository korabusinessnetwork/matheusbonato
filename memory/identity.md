# Identidade do Produto — Matheus Bonato · Sites & Landing Pages

## Objetivo
- Documentar a identidade, a visão e o diferencial da marca pessoal e da oferta.
- Guiar decisões de produto, design e comunicação da landing page.
- Manter coerência entre a página, o WhatsApp e o conteúdo de rede social.

## Contexto
- Mercado/vertical: criação de sites e landing pages para PMEs, prestadores de
  serviço e criadores no Brasil.
- Estágio: Fase 1 — primeira LP de aquisição no ar (serviço, não produto).
- Competidores diretos: agências locais, freelancers de marketplace, construtores
  DIY (Wix/Squarespace/WordPress) e "sites de R$ 300" de grupo de WhatsApp.

## Regras Gerais
- Esta identidade é fonte de verdade para copy, tom e visual em qualquer canal.
- Nada de prova social inventada: enquanto não houver case de cliente com número,
  a prova é o portfólio de construção própria (ver `PROVAS` em `src/constants/conteudo.js`).
- Escassez só entra na página se for verdadeira e sustentável na prática.

## Validações
- Toda mensagem pública passa pela fórmula de posicionamento abaixo.
- Toda promessa na página tem que ser cumprível na operação atual (1 pessoa).

## Permissões
- Dono do produto: Matheus Bonato (ajusta propósito, oferta, preço e roadmap).
- Qualquer agente/dev: pode propor copy, mas não altera preço nem garantia sem aval.

## Exceções
- Mudança de posicionamento ou de faixa de preço exige ADR — não é edição solta.

## Auditoria
- Revisar trimestralmente, ou sempre que a taxa de conversão da LP mudar de patamar.

## Eventos
- `product.identity_defined`, `product.positioning_updated`, `offer.repriced`

## Casos de Uso
- Escrever/ajustar copy da LP e do WhatsApp.
- Decidir se um pedido que chegou é cliente ideal ou deve ser recusado.
- Avaliar se uma feature nova da página serve à conversão ou é enfeite.

## Critérios de Aceite
- [x] Propósito central claro
- [x] Personas documentadas com dor real
- [x] Tom de voz com exemplos ✅ e ❌
- [ ] Posicionamento testado contra 3 clientes reais (pendente — Fase 2)

---

## Propósito Central

### Visão
Ser a escolha óbvia, no Brasil, de quem já vende no WhatsApp e precisa de um site
que traga pedido — não de um cartão de visita digital. Em 5 anos, a mesma
engenharia empacotada como produto (template + sistema) e não só como serviço.

### Propósito
- **Problema que resolve:** negócio pequeno perde venda porque o site é bonito e
  mudo — sem oferta clara, sem prova, sem próximo passo.
- **Como resolve:** site e landing page projetados como produto — estrutura de
  conversão, copy, prova e medição — com um caminho único até o WhatsApp.
- **Impacto esperado:** o dono para de garimpar lead na mão e passa a receber
  pedido qualificado, com contexto, prazo e orçamento já escritos.

## Público-Alvo

| Segmento | Perfil | Contexto | Necessidade |
|---|---|---|---|
| Negócio local | 25-50 anos, vende por Instagram/WhatsApp | Sem site, ou com site parado | Ser encontrado e receber pedido sem depender do algoritmo |
| Prestador de alto ticket | Autônomo, ticket R$ 2k+ | Tem site, mas não gera orçamento | Passar autoridade e filtrar curioso antes da conversa |
| Criador em lançamento | Vende infoproduto/evento | Precisa de página em dias | LP pronta e medindo antes da campanha começar |

## Valores
- **Honestidade comercial:** dizer "você não precisa disso" quando for verdade.
- **Escopo e prazo fechados:** preço combinado é preço final.
- **Sem lock-in:** código e domínio são do cliente; ele pode sair quando quiser.

## Posicionamento

**Para** quem já vende no WhatsApp e precisa de site que traga pedido /
**que** cansou de site bonito e mudo e de agência que some depois do "no ar" /
**Matheus Bonato** é um construtor de produto que faz sites e landing pages /
**que** entrega estrutura de conversão e medição, não só layout /
**Diferente de** agência (cara e lenta) e de template DIY (limitado) /
**entrega** um caminho único até o WhatsApp, no ar em dias, com prazo garantido.

## Tom de Voz

**Princípios**: direto e específico; honesto até quando não vende.

**Exemplos**:
- ✅ "Seu site não precisa ser bonito. Precisa dar pedido."
- ✅ "Pode usar Wix — pra site simples às vezes é a escolha certa."
- ❌ "Soluções digitais inovadoras para alavancar o seu negócio."
- ❌ "Somos referência em excelência no mercado desde 2015."

## Manifesto (versão 1.0)
1. Site que não gera pedido é despesa, não investimento — e a gente mede isso.
2. O inimigo é o site cartão de visita: bonito, parado e mudo.
3. Prazo é promessa: se eu furar o meu, o dinheiro volta.

## Personas

### Ana — dona de negócio local
- **Contexto**: vende bolo pelo Instagram, responde orçamento na mão o dia todo.
- **Dores**: perde pedido no meio da conversa; não tem onde mandar quem pergunta preço.
- **Objetivos**: filtrar curioso, parecer profissional, receber pedido pronto.
- **Sucesso**: pedido chega no WhatsApp já com o que ela precisa saber.

### Rafael — prestador de alto ticket
- **Contexto**: consultoria/serviço técnico, ticket acima de R$ 3 mil.
- **Dores**: o site atual não passa autoridade; lead chega frio e barganha preço.
- **Objetivos**: ancorar valor antes da conversa; só falar com quem tem orçamento.
- **Sucesso**: chega menos gente, e quem chega já sabe a faixa de preço.

## Princípios do Produto
- Conversão acima de tudo — nenhuma seção é beco sem saída.
- Honestidade acima de conversão — nunca inventar prova para converter mais.
- Mobile-first de verdade: o tráfego vem do Instagram e do WhatsApp.

## Identidade Visual (marca)
- **Cores**: papel `#F4F1EA`, tinta `#14140F`, acento `#C63A17`.
- **Tom visual**: editorial suíço — grid rígido, muito respiro, serif display
  (Instrument Serif) + sans de texto (Inter), fios de 1px, canto reto.
- **Regra**: o acento é reservado ao que converte (CTA, números, ênfase). Se está
  em toda parte, não chama atenção em lugar nenhum.

## Roadmap
- **Fase 1 (agora)**: LP no ar, convertendo visita em pedido no WhatsApp.
- **Fase 2**: 3 cases de cliente com número real na seção de provas.
- **Fase 3**: `/obrigado` + medição de conversão ponta a ponta (analytics + evento).
- **Fase 4**: empacotar a LP como template white-label vendável.
