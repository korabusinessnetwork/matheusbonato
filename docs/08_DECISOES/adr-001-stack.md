# ADR-001 — React + Vite estático na Vercel, sem backend

**Status**: Aceito
**Data**: 2026-08-20
**Decisores**: Matheus Bonato
**Supersede**: —
**Supersedido por**: —

---

## Contexto

O produto é uma landing page de aquisição de uma pessoa só, em fase bootstrap
(sem receita alocada, tudo em tier gratuito). O objetivo é converter visita em
pedido no WhatsApp, com o mínimo de atrito e o mínimo de custo de operação.

Restrições que pesaram na decisão:
- Custo: obrigatoriamente tier gratuito (`memory/restrictions.md`).
- Velocidade: o tráfego vem de Instagram/WhatsApp, majoritariamente 4G — cada
  quilobyte custa conversão.
- Evolução prevista: a página deve poder virar portfólio, ganhar `/obrigado`,
  medição e, na Fase 4, ser reusada como template white-label vendável.
- Operação: nenhum servidor para manter, atualizar ou pagar.

O padrão default da fundação (Modelo A: SPA + Supabase) prevê BaaS. Aqui não há
o que persistir hoje, então a camada de dados foi omitida — ver ADR-003.

## Decisão

Usar **React 18 + Vite 5**, build estático, deploy na **Vercel** (tier gratuito).
Sem backend, sem banco, sem rota de API. CSS co-localizado por componente, com
design tokens centralizados. Testes com **Vitest** sobre as funções puras.

## Alternativas Consideradas

### 1. HTML/CSS/JS estático, sem build
- **Prós**: zero dependência, zero build, carrega instantâneo, edita direto no arquivo.
- **Contras**: estado do formulário na mão; reuso de seção por cópia e cola;
  virar portfólio ou template exigiria reescrever.
- **Descartado porque**: o roadmap prevê crescimento (cases, `/obrigado`,
  template white-label) e o ganho de peso do React é aceitável (58 kB gzip).

### 2. Next.js
- **Prós**: SSR/SEO melhores, rotas prontas, imagem otimizada.
- **Contras**: mais configuração e mais peso do que uma página única pede; SSR
  não agrega em conteúdo estático que já é indexável.
- **Descartado porque**: paga complexidade hoje por benefício que só apareceria
  com blog/muitas rotas. Se a Fase 3 trouxer isso, abre-se um ADR novo.

### 3. Modelo A completo (React + Vite + Supabase)
- **Prós**: lead persistido, painel de pedidos possível.
- **Contras**: conta a mais para manter, variáveis de ambiente, superfície de
  segurança nova (RLS) e dado pessoal armazenado — LGPD entra em cena.
- **Descartado porque**: hoje não há o que persistir; ver ADR-003.

## Consequências

### Positivas
- Deploy gratuito, sem servidor para manter; bundle de ~58 kB gzip.
- Nenhum dado do visitante armazenado: superfície de segurança e de LGPD mínima.
- Componente por seção + tokens = reordenar ou re-skinar a página é barato.
- Camada de serviços isolada permite migrar para o Modelo A sem tocar na UI.

### Negativas / Trade-offs
- Sem SSR: o conteúdo depende de JS para renderizar. Mitigado por ser uma página
  só, com `<title>`, meta description, canonical, OG e JSON-LD no HTML servido.
- Sem persistência: lead que não conclui se perde (ver ADR-003).
- React para uma página única é mais peso do que o mínimo teórico.

## Referências
- `docs/01_ARQUITETURA/README.md`
- `memory/restrictions.md` — restrições de custo e de dependência
- ADR-003 — pedido direto ao WhatsApp, sem banco

## Notas de Implementação
- Versões fixadas em `package.json` (sem `^`), build reproduzível.
- `npm run validar` = testes + build. Roda antes de qualquer push.
- Cabeçalhos de segurança (CSP, X-Frame-Options, etc.) em `vercel.json`.
