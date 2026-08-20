# 01, ARQUITETURA

## Visão geral

SPA estática, sem backend. O "backend" do pedido é o próprio WhatsApp: a página
redige a mensagem no dispositivo do visitante e entrega um link `wa.me` pronto.

```
Visitante (navegador)
   │
   ├─ React + Vite (bundle estático servido pela Vercel)
   │     ├─ components/<secao>/   UI, uma pasta por seção da página
   │     ├─ constants/            conteúdo do "tenant": copy, oferta, contato
   │     ├─ hooks/                estado do pedido, reveal, scroll-spy
   │     ├─ styles/tokens.css     tema: cor, tipografia, espaço, movimento
   │     └─ lib/  ◄── ÚNICA FRONTEIRA COM O MUNDO EXTERNO
   │            whatsapp.js   monta mensagem + URL
   │            validacao.js  aprova ou reprova o pedido
   │
   └─ https://wa.me/<numero>?text=<mensagem>   (aplicativo do próprio visitante)
```

Modelo escolhido: **A adaptado** (SPA sem BaaS), ver ADR-001 e ADR-003.

## Camadas

| Camada | Onde | Regra |
|---|---|---|
| Conteúdo | `src/constants/` | Nenhum texto/preço dentro do JSX (ADR-002) |
| Tema | `src/styles/tokens.css` | Nenhum hex ou tamanho de fonte no CSS do componente |
| UI | `src/components/<secao>/` | Um componente por seção + CSS de mesmo nome |
| Estado | `src/hooks/` | Estado do pedido sobe até `App` só porque 2 filhos usam |
| Serviços | `src/lib/` | Único ponto que fala com o mundo externo |
| Utilitários | `src/utils/` | Funções puras, todas com teste |

## Por que a camada de serviços existe num projeto sem backend

Porque o destino do pedido vai mudar. Hoje é `wa.me`; amanhã pode ser Supabase,
e-mail ou CRM. Com `lib/whatsapp.js` isolando isso, a troca não toca em nenhum
componente, é a mesma regra que torna a migração Modelo A → B barata.

## Fluxo de dados do pedido

1. `usePedido` guarda o rascunho em memória (nada sai do navegador).
2. O cardápio (`Pacotes`) escreve o pacote escolhido no mesmo estado.
3. `montarMensagemPedido` traduz ids em rótulos legíveis e monta o texto.
4. `montarUrlWhatsApp` codifica tudo em uma URL `wa.me`.
5. O botão final é um `<a href>` com essa URL. O clique da pessoa é que navega.
6. Se `validarPedido` reprovar, o clique é cancelado e o erro aparece no campo.

## Estado

- **Servidor**: não existe.
- **Global de UI**: nenhum Context, a árvore é rasa; `App` passa o pedido para
  os dois filhos que precisam. Elevar mais seria complexidade sem consumidor.
- **Local**: menu aberto, seção ativa, reveal, cada um no seu componente.

## Build e deploy

- `npm run dev` local; `npm run validar` (testes + build) antes de push.
- Build estático → Vercel, com cabeçalhos de segurança em `vercel.json`.
- Versões fixadas em `package.json` para build reproduzível.
