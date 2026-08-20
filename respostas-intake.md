# Respostas do Intake — Matheus Bonato — Sites & Landing Pages

> Fonte de verdade das respostas da entrevista de fundação. O `scaffold.sh` lê
> este arquivo para substituir os placeholders. Preencha durante a Fase 1.
> Data do intake: 2026-08-20 · Conduzido por: Matheus Bonato

## Bloco 1 — Produto e identidade
- **PRODUTO (nome + essência):** Matheus Bonato — Sites & Landing Pages
- **ESSENCIA (1 frase):** Landing page de conversão que vende o serviço de criação de sites e LPs, transformando visitante em pedido qualificado no WhatsApp
- **PROBLEMA que resolve:** Negócio pequeno perde venda porque o site é bonito e mudo — sem oferta clara, sem prova, sem próximo passo. Quem contrata agência paga caro, espera meses e recebe layout sem funil.
- **PROPOSTA de valor / diferencial:** Uma pessoa só, que projeta produto de verdade (POS fiscal, SaaS multi-tenant, automação), entregando site e LP com funil, prova e medição — em dias, não em meses.
- **Existe código ou é do zero?** Do zero (repositório vazio)

## Bloco 2 — Público e escopo
- **PUBLICO_ALVO primário:** Donos de pequeno negócio, prestadores de serviço e criadores no Brasil que já vendem no WhatsApp e precisam de um site/LP que converta
- **PERSONAS (1-3):** 1) Dono de negócio local que vende no Insta e no WhatsApp e não tem site; 2) Prestador de serviço de alto ticket cujo site não gera pedido; 3) Criador lançando produto e precisando de LP em dias
- **B2B / B2C / B2B2C:** B2B — serviço de alto ticket, venda consultiva no WhatsApp
- **"Aha moment":** Ver o próprio pedido montado sozinho e chegar no WhatsApp já escrito, em menos de 60 segundos

## Bloco 3 — Multi-tenant e white-label
- **MULTI_TENANT:** Single-tenant definitivo (site pessoal). Conteúdo isolado em src/constants para permitir reuso como template — ver ADR-002  <!-- multi-desde-já / single-agora-multi-roadmap / single-definitivo -->
- **WHITE_LABEL:** Não na marca; sim na estrutura — nenhum texto, cor ou preço hardcodado no JSX     <!-- sim / não -->
- **PLANOS (free/pro/enterprise):** Não se aplica — 3 pacotes comerciais (Landing Page, Site Institucional, Sob Medida)

## Bloco 4 — Stack e arquitetura
- **STACK:** React 18 + Vite 5 + CSS co-localizado por componente + Vercel
- **MODELO_ARQUITETURA:** Modelo A adaptado — SPA sem BaaS; integração externa única via wa.me  <!-- A: SPA+BaaS / B: API própria / C: serviço sem UI -->
- **TEM_UI:** Sim
- **DEPLOY:** Vercel (tier gratuito)
- **SCHEMA_PATH:** Não se aplica — projeto sem banco de dados (ver ADR-003)
- **ENV_PREFIX:** import.meta.env.VITE_*  <!-- ex: import.meta.env.VITE_* -->
- **TEST_CMD:** npm test       <!-- ex: npm test -->

## Bloco 5 — Segurança e compliance
- **Trata dado pessoal/financeiro/de menores?** Sim — nome, WhatsApp e contexto do projeto digitados no formulário
- **COMPLIANCE específico:** LGPD — dado pessoal de contato, sem armazenamento em servidor; transporte direto para o WhatsApp  <!-- LGPD / GDPR / PCI / fiscal / nenhum -->
- **Nível de isolamento entre clientes:** Não se aplica (single-tenant)

## Bloco 6 — Custo
- **FASE_CUSTO:** bootstrap gratuito  <!-- bootstrap gratuito / com orçamento -->
- **Serviços pagos já aprovados:** Nenhum

## Bloco 7 — Design (se tem UI)
- **Identidade visual definida?** Sim — editorial claro (suíço)
- **Referências / tom visual:** Editorial suíço: off-white, grid rígido, serif display, muito respiro, um acento tinta
- **Contexto de uso crítico:** Mobile-first (tráfego vem de Instagram e WhatsApp), desktop em segundo lugar  <!-- toque/PDV, mobile, desktop -->
- **PRINCIPIO_N1:** CONVERSÃO  <!-- default UI: INTUITIVIDADE -->

## Roadmap inicial
- **FASE_ATUAL:** Fase 1 — LP no ar, convertendo visita em pedido no WhatsApp
- **Próximas fases:** Fase 2: cases reais com número + prova social; Fase 3: /obrigado com pixel e medição; Fase 4: reuso da LP como template white-label vendável
