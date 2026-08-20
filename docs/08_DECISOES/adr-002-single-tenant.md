# ADR-002, Single-tenant com conteúdo desacoplado (exceção ao padrão multi-tenant)

**Status**: Aceito
**Data**: 2026-08-20
**Decisores**: Matheus Bonato

---

## Contexto

O padrão da fundação exige **multi-tenant white-label desde a linha 1**: nada de
marca, cor ou regra de cliente hardcodada, identidade vinda do tenant. A regra
existe para produtos SaaS que servirão vários clientes.

Este produto é o oposto: é a marca pessoal de uma pessoa, com um único "tenant"
(o próprio Matheus) e nenhuma perspectiva de servir outros donos na mesma
instância. Aplicar multi-tenancy literal aqui, tabela de tenants, isolamento,
resolução de tema por domínio, seria complexidade sem cliente.

Ao mesmo tempo, a Fase 4 do roadmap prevê **reusar esta LP como template
vendável** para clientes. Jogar fora a ideia inteira seria caro depois.

## Decisão

Assumir **single-tenant definitivo** nesta instância, e cumprir o *espírito* da
regra em vez da letra: **nenhum texto, cor, preço ou dado de marca é escrito
dentro do JSX**. Tudo vive em duas camadas trocáveis:

- `src/constants/`, copy, oferta, contato, menu (o "conteúdo do tenant").
- `src/styles/tokens.css`, cor, tipografia, espaço, movimento (o "tema do tenant").

Trocar essas duas camadas gera outra marca sem tocar em um único componente.

## Alternativas Consideradas

### 1. Multi-tenant literal (tenant_id, tema por domínio)
- **Prós**: aderência total ao padrão; pronto para muitos clientes.
- **Contras**: exige backend e banco (contradiz o ADR-001/003); resolve um
  problema que não existe.
- **Descartado porque**: complexidade sem cliente é dívida, não preparo.

### 2. Hardcodar tudo no JSX (o caminho rápido)
- **Prós**: menos arquivos, escrita mais direta.
- **Contras**: mudar uma frase vira caça ao componente; reuso como template
  exigiria reescrita; o dono não consegue editar sem mexer em código.
- **Descartado porque**: mata a Fase 4 e a autonomia do dono sobre a própria copy.

## Consequências

### Positivas
- O dono edita a página inteira em 3 arquivos, sem abrir componente.
- Re-skin completo = trocar `tokens.css`; re-conteúdo = trocar `constants/`.
- Zero infraestrutura de multi-tenancy sem cliente para justificá-la.

### Negativas / Trade-offs
- Formalmente desvia do padrão da fundação, daí este ADR existir.
- Se um dia houver várias marcas na mesma instância, será preciso um ADR novo
  (provavelmente junto com backend), superseding este.

## Referências
- `references/multi-tenant-white-label.md` (skill fundacao-de-projeto)
- `memory/identity.md`, roadmap, Fase 4
