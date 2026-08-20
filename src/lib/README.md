# Camada de serviços

**Todo acesso ao mundo externo passa por aqui, nunca de dentro de um componente.**

Este projeto não tem backend (ADR-003). O "backend" do pedido é o próprio
WhatsApp. Mesmo assim a fronteira existe, e é ela que torna barata a troca do
destino do pedido no futuro (Supabase, e-mail, CRM): muda-se este diretório e
nenhum componente é aberto.

| Arquivo | Papel |
|---|---|
| `whatsapp.js` | Monta a mensagem do pedido e a URL `wa.me`. Funções puras. |
| `validacao.js` | Aprova ou reprova o pedido, devolvendo erro **por campo**. |

Ambos têm teste ao lado (`*.test.js`). Regra do projeto: função pura nasce com teste.
