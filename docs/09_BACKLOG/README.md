# 09, BACKLOG

## Feito (Fase 1)

- [x] Fundação: `memory/`, `docs/00→11`, ADRs 001-004
- [x] Design system em tokens (editorial suíço claro)
- [x] Menu com scroll-spy, versão mobile em tela cheia e CTA fixo no celular
- [x] Seções: hero, problema, trajetória, método, cardápio, provas, garantia, dúvidas
- [x] Formulário de pedido com validação por campo e armadilha anti-robô
- [x] Montagem da mensagem + link `wa.me`, com 31 testes cobrindo as funções puras
- [x] Cabeçalhos de segurança (CSP e afins) em `vercel.json`
- [x] Verificação em navegador real: desktop e celular, fluxo completo do pedido

## Antes de publicar (bloqueantes, só o dono resolve)

- [ ] **Trocar o número do WhatsApp** (`VITE_WHATSAPP_NUMERO` no `.env`).
      Enquanto for o de exemplo, o botão abre uma conversa vazia.
- [ ] **Revisar os três preços** em `src/constants/pacotes.js` (hoje são um ponto
      de partida de mercado, não uma decisão do dono, ADR-004).
- [ ] **Confirmar os anos e marcos** da trajetória (`[CONFIRMAR]` em `conteudo.js`).
- [ ] Conferir links de redes sociais em `contato.js`.
- [ ] Decidir se a garantia de prazo (devolução de 100%) fica como está.
- [ ] Confirmar se "3 projetos por vez" é verdade, se não for, remover (RN-10).

## Fase 2, prova social

- [ ] Fechar os 3 primeiros clientes e documentar case com número.
- [ ] Preencher `PROVAS.cases.lista` com `{cliente, resultado, detalhe}`.
- [ ] Adicionar print/link de cada projeto próprio.

## Fase 3, medição

- [ ] Página `/obrigado` para medir a conversão que hoje sai da página.
- [ ] Analytics leve e sem cookie (ex.: Vercel Analytics, tier gratuito).
- [ ] Evento de clique no botão de pedido e de abertura do cardápio.
- [ ] Reavaliar persistir o lead (Supabase/e-mail), decisão em aberto no
      `memory/decisions.md`; hoje quem desiste antes de enviar se perde.

## Fase 4, empacotar

- [ ] Extrair a LP como template white-label vendável (trocar `constants/` +
      `tokens.css` já é suficiente, ADR-002).
- [ ] Definir preço e escopo do template como produto.

## Ideias (não priorizadas)

- Variante A/B do título do hero.
- Seção de "como é trabalhar comigo" em vídeo curto.
- Calculadora de orçamento antes do formulário.
