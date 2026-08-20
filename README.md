# Matheus Bonato · Sites & Landing Pages

Landing page de conversão. Uma página, um objetivo: transformar visita em **pedido
qualificado no WhatsApp**, com pacote, prazo, orçamento e contexto já escritos.

Feita em React + Vite, estática, sem backend e sem banco, o pedido é montado no
aparelho do próprio visitante e vira uma conversa no WhatsApp.

---

## Comece por aqui (3 coisas antes de publicar)

### 1. Seu número de WhatsApp, obrigatório

```bash
cp .env.example .env
```

Edite o `.env` e coloque seu número no formato **DDI + DDD + número, só dígitos**:

```
VITE_WHATSAPP_NUMERO=5544999998888
```

> `55` = Brasil, `44` = DDD, o resto é o número. Enquanto estiver o número de
> exemplo, o botão abre uma conversa vazia, em desenvolvimento a página avisa.

### 2. Seus preços

Abra `src/constants/pacotes.js`. Os três valores atuais são um **ponto de partida
de mercado**, não uma decisão sua. Ajuste antes de publicar.

### 3. Sua história

Abra `src/constants/conteudo.js` e procure por `[CONFIRMAR]`: são os anos e os
marcos da sua trajetória. Troque pelos reais.

Procure também por `>>> TODO MATHEUS` em todo o projeto, são os pontos que só
você pode preencher.

---

## Onde fica cada coisa

| Quero mudar | Abra |
|---|---|
| Qualquer texto da página | `src/constants/conteudo.js` |
| Pacotes, preços, opções do formulário | `src/constants/pacotes.js` |
| WhatsApp, redes sociais, itens do menu | `src/constants/contato.js` |
| Cor, fonte, espaçamento, animação | `src/styles/tokens.css` |
| Aparência de uma seção específica | `src/components/<secao>/<Secao>.css` |
| Ordem das seções na página | `src/App.jsx` |

**Você não precisa abrir nenhum componente para reescrever a página inteira.**
Isso é proposital, está registrado no ADR-002.

## Rodar

```bash
npm install
npm run dev       # http://localhost:5173
npm run validar   # testes + build (rode antes de todo commit)
```

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm test` | 31 testes das funções puras |
| `npm run build` | Build de produção em `dist/` |
| `npm run preview` | Serve o build local |
| `npm run validar` | `test` + `build`, o gate antes de publicar |

## Publicar (Vercel, gratuito)

1. Suba o repositório no GitHub.
2. Na Vercel: **New Project** → importe o repositório (framework detectado
   automaticamente: Vite).
3. Em **Environment Variables**, adicione `VITE_WHATSAPP_NUMERO` com o seu número.
4. Deploy. Os cabeçalhos de segurança já vêm configurados em `vercel.json`.

Depois: aponte seu domínio em **Settings → Domains** e troque as URLs de
`index.html` (`canonical` e `og:url`) para o domínio real.

## Estrutura

```
├── CLAUDE.md              Constituição do projeto (regras inegociáveis)
├── memory/                Governança: identidade, decisões, padrões, restrições
├── docs/00_ → 11_         Visão, arquitetura, design system, regras, ADRs, segurança
└── src/
    ├── components/        Um componente por seção, com CSS ao lado
    ├── constants/         TODA a copy, oferta e contato
    ├── hooks/             Estado do pedido, reveal no scroll, scroll-spy
    ├── lib/               Camada de serviços: WhatsApp e validação
    ├── styles/            Design tokens e base global
    └── utils/             Funções puras (com teste)
```

## O que a página não faz (de propósito)

- **Não guarda nenhum dado seu nem do visitante.** Sem banco, sem cookie de
  rastreio, sem lista de e-mail. A mensagem sai do aparelho da pessoa direto para
  o seu WhatsApp (ADR-003).
- Consequência assumida: quem preenche e **não** clica em enviar se perde. Está
  registrado como limitação conhecida em `memory/bugs.md`.

## Documentação

- `CLAUDE.md`, as regras de quem mexe no código
- `docs/00_VISAO/`, o problema e a métrica que importa
- `docs/03_REGRAS_DE_NEGOCIO/`, as 11 regras que governam a conversão
- `docs/08_DECISOES/`, por que cada escolha estrutural foi feita
- `docs/09_BACKLOG/`, o que falta, em ordem
- `docs/11_SEGURANCA/`, checklist antes de cada publicação
