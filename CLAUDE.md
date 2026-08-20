# Diretrizes de Desenvolvimento, Matheus Bonato · Sites & Landing Pages

> Constituição do projeto. Leia antes de qualquer mudança relevante.

## Princípio nº 1, CONVERSÃO (inegociável)

O foco do sistema é **levar o visitante do primeiro scroll ao pedido no WhatsApp
com o menor atrito possível**. Em qualquer decisão, este princípio vem antes de
conveniência técnica ou preferência estética. Regras práticas:

- **Toda seção termina com um caminho para o pedido**, nenhuma é beco sem saída.
- **O formulário nunca perde o que foi digitado**; erro aparece no campo, nunca
  em alerta genérico, e some assim que a pessoa começa a corrigir aquele campo.
- **Nada é validado antes da primeira tentativa de envio.**
- Estados sempre visíveis: erro, sucesso e o link de resgate se o WhatsApp não abrir.
- Prevenção de erro > mensagem de erro (máscara de telefone, opções em vez de
  texto livre, campo obrigatório só quando é realmente obrigatório).
- Alvo de toque mínimo de 44px, o tráfego vem do celular.
- Consistência total com o design system (`docs/02_DESIGN_SYSTEM/`).

**Segundo princípio, que vence o primeiro em caso de conflito: honestidade.**
É proibido inventar prova social, depoimento, número ou escassez para converter
mais (`memory/restrictions.md`).

## Fonte de verdade (leia antes de mudar algo relevante)

- **`memory/`**, identidade, decisões, padrões, aprendizados, restrições, bugs.
  Consultar antes de qualquer decisão de produto ou arquitetura.
  `memory/restrictions.md` tem **prioridade máxima**.
- **`docs/`**, visão (00), arquitetura (01), design system (02), regras de
  negócio (03), fluxos (05), componentes (06), contrato do WhatsApp (07),
  ADRs (08), backlog (09), segurança (11).
- **ADR-001** define a stack; **ADR-003** define por que não há backend;
  **ADR-004** define a estrutura da oferta.
- Não há schema de banco: o projeto não tem banco (`docs/04_MODELAGEM`).
- Se doc e código conflitarem, a documentação prevalece, e deve ser corrigida
  quando estiver errada.
- **Produto = site de marca pessoal, single-tenant.** Exceção ao padrão
  multi-tenant registrada em **ADR-002**: nada de marca, cor, preço ou texto
  hardcodado no JSX, conteúdo vem de `src/constants/`, tema vem de
  `src/styles/tokens.css`. Trocar essas duas camadas gera outra marca.

## Processo de trabalho

1. **Planejar antes de executar**, escopo fechado, sem retrabalho.
2. Mudança de copy/preço/oferta: mexer em `src/constants/`, nunca no componente.
3. Mudança de aparência: mexer em `src/styles/tokens.css` ou no `.css` da seção.
4. **Validar no fim**: `npm run validar` (testes + build) antes de commitar.
5. Mudança que altera stack, dado, custo ou estrutura da oferta → **ADR**.

## Custo, priorizar o gratuito (bootstrap)

Projeto pré-receita: **use sempre meios gratuitos**. Toda implementação que exija
investimento é **adiada por padrão**, salvo decisão explícita do dono. Ao esbarrar
em algo pago, apresente: custo aproximado, alternativa gratuita, impacto e
recomendação (agora × depois), o dono decide. Detalhes em `memory/restrictions.md`.

## Segurança (obrigatório em todo código novo)

- **Nunca** hardcodar chave, URL de API, secret ou senha, usar `import.meta.env.VITE_*`.
  (Hoje o projeto não tem nenhum segredo, e é assim que deve continuar.)
- **Sempre** validar input do usuário antes de qualquer uso.
- **Sempre** `encodeURIComponent` em qualquer texto que entre numa URL.
- **Nunca** `dangerouslySetInnerHTML`, não existe nenhum no projeto.
- **Nunca** logar dado pessoal (nome, telefone, contexto do projeto).
- **Nunca** armazenar dado do visitante enquanto o ADR-003 valer.
- Link externo sempre com `rel="noopener noreferrer"`.
- Checklist completo de release em `docs/11_SEGURANCA/`.

## Padrões de código

- **Um componente React por seção**, com CSS co-localizado de mesmo nome.
- **CSS separado do JSX**, estilo desacoplado da marcação, para white-label.
- **Camada de serviços obrigatória** (`src/lib/`): nenhum componente fala com o
  mundo externo. Hoje o destino é `wa.me`; trocar destino mexe só ali.
- Nomes de domínio em português (`montarMensagemPedido`, `escolherPacote`),
  padrões técnicos em inglês (`onClick`, `href`).
- **Função pura nasce com teste.** Rodar `npm test` antes de commitar.
- Elemento certo para cada função: `<a>` navega, `<button>` age, `<details>`
  abre, `input[type=radio]` seleciona. Nada de `<div>` clicável.
- Nenhum hex, tamanho de fonte ou duração escrita direto no CSS do componente,
  tudo sai de `tokens.css`.

## Stack

- React 18 + Vite 5
- CSS puro co-localizado por componente + design tokens em `styles/tokens.css`
- Vitest (funções puras)
- Deploy: Vercel (estático, tier gratuito)
- Sem backend, sem banco, sem dependência de terceiro em runtime
