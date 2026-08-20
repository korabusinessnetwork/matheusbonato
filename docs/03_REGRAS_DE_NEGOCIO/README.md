# 03, REGRAS DE NEGÓCIO

## RN-01 · Ordem das seções é estratégia, não estética

A sequência da página é o funil: **problema** (por que dói) → **trajetória**
(quem resolve, e por que confiar) → **método** (como funciona, sem surpresa) →
**cardápio** (quanto custa, escopo fechado) → **provas** → **garantia** (risco
zero) → **dúvidas** (objeções) → **pedido**.

Mudar a ordem muda a taxa de conversão. Não se altera sem motivo declarado.

## RN-02 · Nenhuma seção é beco sem saída

Toda seção leva de volta ao pedido, direta (botão, barra fixa no celular) ou
indiretamente (o cardápio pré-preenche o formulário).

## RN-03 · Escolher no cardápio preenche o pedido

Clicar em "Quero este" grava o pacote no estado do pedido **e** rola até o
formulário. A pessoa nunca informa a mesma coisa duas vezes.

## RN-04 · Campos obrigatórios do pedido

Obrigatórios: **nome**, **WhatsApp**, **pacote**, **objetivo**.
Opcionais: negócio/@, prazo, orçamento, contexto.

Motivo: obrigatório é só o que impede o dono de responder ou de precificar.
Cada campo obrigatório a mais derruba a taxa de conclusão.

## RN-05 · Validação só depois da primeira tentativa

Nada é marcado como erro antes do primeiro clique em enviar. Depois disso, o erro
de um campo some assim que a pessoa começa a corrigir **aquele** campo.
O erro mora colado ao campo, nunca em alerta genérico no topo.

## RN-06 · Telefone brasileiro

Máscara aplicada durante a digitação; aceita 10 dígitos (fixo) e 11 (celular).
Na hora de montar o link, assume DDI 55 quando não veio, o público é Brasil.
Digitação parcial nunca é bloqueada.

## RN-07 · A mensagem é escrita na voz do cliente

Quem envia é o visitante, então o texto soa como ele falando ("Oi, Matheus! Vim
pela sua página e montei meu pedido"). Campos opcionais em branco **não** viram
linha vazia na mensagem: simplesmente não aparecem.

## RN-08 · Contexto tem teto de 1000 caracteres

Protege o comprimento da URL `wa.me` e mantém a mensagem legível. O corte
acontece na palavra, com reticências, nunca no meio de uma sílaba.

## RN-09 · Preço é sempre "a partir de"

O cartão mostra o piso; o valor final sai no diagnóstico (ADR-004). Nenhum agente
altera preço, prazo prometido ou termos da garantia sem aval do dono.

## RN-10 · Prova social só com fato

Enquanto não houver case de cliente com número, a seção de cases mostra um convite
honesto. **É proibido gerar depoimento, logo ou número que não aconteceu**
(`memory/restrictions.md`). O mesmo vale para escassez: "3 projetos por vez" só
fica na página enquanto for verdade na prática.

## RN-11 · Nada do visitante é armazenado

A página não coleta: ela redige. Sem banco, sem cookie de rastreio, sem lista de
e-mail (ADR-003). O rodapé declara isso ao visitante em texto claro.
