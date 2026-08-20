# 05 — FLUXOS

## Fluxo principal — visitante vira pedido

```
 chega (Instagram / WhatsApp / busca)
   │
   ├─ hero: entende a promessa em ~5s
   │     └─ "Fazer meu pedido" ─────────────────────────┐
   │     └─ "Ver os pacotes" ──┐                        │
   │                           ▼                        │
   ├─ problema → trajetória → método                    │
   │                           │                        │
   ├─ cardápio ◄───────────────┘                        │
   │     └─ "Quero este" → grava pacote + rola ─────────┤
   │                                                    │
   ├─ provas → garantia → dúvidas                       │
   │     └─ barra fixa (celular) ───────────────────────┤
   │                                                    ▼
   └─────────────────────────────────────────► formulário de pedido
                                                        │
                                     valida (RN-04, RN-05)
                                        │            │
                                   reprova        aprova
                                        │            │
                          erro no campo │            ▼
                          + foco no 1º  │   abre wa.me com tudo escrito
                                        │            │
                                        └────────────┴─► conversa no WhatsApp
```

## Fluxo de erro do formulário

1. Pessoa clica em "Enviar pedido no WhatsApp".
2. `validarPedido` roda sobre o estado atual.
3. Reprovou: o clique é cancelado (`preventDefault` — **nenhuma aba abre**), os
   erros aparecem nos campos e o foco vai para o primeiro campo com erro.
4. A pessoa corrige: o erro daquele campo some ao primeiro caractere digitado.
5. Aprovou: o navegador segue o `href` normalmente, em nova aba.
6. Se a aba não abrir (bloqueador, WhatsApp ausente), aparece o link de resgate:
   "se o WhatsApp não abriu sozinho, toque aqui".

## Fluxo do menu (celular)

Toca no hambúrguer → menu ocupa a tela inteira, o fundo trava o scroll, os itens
entram escalonados. Tocar num item fecha o menu e rola até a seção.
`Esc` fecha. O menu tem, no rodapé, um atalho direto para o WhatsApp — para quem
não quer preencher formulário nenhum.

## Fluxo do robô (anti-spam)

Campo-armadilha invisível (`sobrenome`), fora da navegação por teclado. Se vier
preenchido, o envio é cancelado em silêncio — sem mensagem de erro, para não
ensinar o robô a contornar. Nenhum captcha, nenhum custo, nenhum atrito humano.
