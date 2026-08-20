# 08 — DECISÕES (ADRs)

Registro das decisões de arquitetura. Um ADR é curto, imutável na essência e
explica o **porquê** de uma escolha estrutural — inclusive as consequências ruins.

## Linha do tempo

| ADR | Título | Status |
|-----|--------|--------|
| [001](./adr-001-stack.md) | React + Vite estático na Vercel, sem backend | Aceito |
| [002](./adr-002-single-tenant.md) | Single-tenant com conteúdo desacoplado (exceção ao padrão multi-tenant) | Aceito |
| [003](./adr-003-pedido-whatsapp.md) | Pedido vai direto ao WhatsApp, sem banco de dados | Aceito |
| [004](./adr-004-oferta-tres-pacotes.md) | Oferta em 3 pacotes com preço "a partir de" | Aceito |

## Quando escrever um ADR

Se qualquer item for verdadeiro: muda a stack; muda onde a lógica vive; muda o
modelo de dados; envolve trade-off que alguém vai questionar depois; contradiz um
ADR anterior; cria custo recorrente ou dependência difícil de reverter.

**Não é ADR**: nome de variável, detalhe de estilo, ajuste de copy, correção de
bug. Isso é `memory/patterns.md`, `memory/learnings.md` ou `memory/bugs.md`.

## Como criar

```bash
cp docs/08_DECISOES/adr-000-template.md docs/08_DECISOES/adr-005-titulo.md
```

Preencha, marque `Status: Aceito` quando o código correspondente entrar, e
adicione a linha na tabela acima **e** em `memory/decisions.md`.

ADR aceito não se reescreve: se mudou, abre-se um novo com `Supersede:` apontando
para o antigo.
