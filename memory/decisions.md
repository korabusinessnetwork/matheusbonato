# Decisões, Índice de ADRs

## Objetivo
Índice único das decisões de arquitetura do projeto. O registro completo de cada
decisão vive em `docs/08_DECISOES/adr-NNN.md`; aqui fica a linha do tempo.

## Contexto
Decisão sem registro vira "foi assim que alguém implementou". Este índice existe
para que qualquer pessoa (ou agente) saiba, em 30 segundos, o que já foi decidido
e o que ainda está em aberto.

## Regras Gerais
- Toda decisão que muda stack, arquitetura, dado ou custo recorrente vira ADR.
- ADR aceito não se reescreve: se mudou, abre-se um novo que o supersede.
- Escolha de nome de variável ou detalhe de estilo NÃO é ADR, é `patterns.md`.

## Validações
- ADR só entra como "Aceito" quando o código correspondente foi para a branch.
- Todo ADR lista pelo menos uma alternativa considerada e as consequências ruins.

## Permissões
- Escrita: Matheus Bonato. Proposta: qualquer agente/dev (status `Proposto`).

## Exceções
- Decisão urgente pode ser implementada antes do ADR, desde que o ADR entre no
  mesmo commit ou no seguinte.

## Auditoria
- Autor, data e link do commit em cada ADR.

## Eventos
- `decision.proposed`, `decision.accepted`, `decision.superseded`

---

## Linha do tempo

| ADR | Título | Status | Data |
|-----|--------|--------|------|
| [001](../docs/08_DECISOES/adr-001-stack.md) | React + Vite estático na Vercel, sem backend | Aceito | 2026-08-20 |
| [002](../docs/08_DECISOES/adr-002-single-tenant.md) | Single-tenant com conteúdo desacoplado (exceção ao padrão multi-tenant) | Aceito | 2026-08-20 |
| [003](../docs/08_DECISOES/adr-003-pedido-whatsapp.md) | Pedido vai direto ao WhatsApp, sem banco de dados | Aceito | 2026-08-20 |
| [004](../docs/08_DECISOES/adr-004-oferta-tres-pacotes.md) | Oferta em 3 pacotes com preço "a partir de" | Aceito | 2026-08-20 |

## Em aberto (a decidir)
- Persistir o lead (Supabase ou e-mail) para não perder quem desiste antes de
  clicar em enviar, hoje esse lead se perde. Reavaliar quando o volume justificar.
- Domínio final e provedor de DNS.
