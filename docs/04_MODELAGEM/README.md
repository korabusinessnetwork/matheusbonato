# 04 — MODELAGEM · [NÃO SE APLICA NESTA FASE]

Este projeto **não tem banco de dados**. Nada do visitante é persistido: o
formulário monta uma mensagem no dispositivo da própria pessoa e abre o WhatsApp
(ADR-003). Não há tabela, entidade, relacionamento ou `tenant_id` a modelar.

Este arquivo existe para deixar a ausência **explícita** — e não parecer
documentação esquecida.

## Quando esta pasta volta a valer

No momento em que a decisão em aberto de `memory/decisions.md` for tomada —
persistir o lead (Supabase ou equivalente) para não perder quem preenche e não
conclui. Nesse dia, obrigatoriamente:

- ADR novo, superseding o ADR-003.
- Modelagem da tabela de pedidos aqui, com RLS como definition-of-done.
- Plano de LGPD atualizado em `docs/11_SEGURANCA/`: base legal, aviso de
  privacidade, retenção e direito de exclusão.
- Revisão de `memory/restrictions.md` (hoje proíbe armazenar dado do visitante).
