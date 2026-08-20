# 07, APIS

Este projeto **não expõe nem consome API HTTP**. A única integração externa é um
esquema de URL: o link do WhatsApp. Ele é o contrato desta aplicação e está
documentado aqui como tal.

## Contrato, link de conversa do WhatsApp

```
https://wa.me/<numero>?text=<mensagem-codificada>
```

| Parte | Regra | Onde |
|---|---|---|
| `<numero>` | DDI + DDD + número, **só dígitos** (ex.: `5544999998888`) | `WHATSAPP_NUMERO` em `src/constants/contato.js` |
| `<mensagem>` | Texto livre, obrigatoriamente `encodeURIComponent` | `montarUrlWhatsApp` em `src/lib/whatsapp.js` |

Sem mensagem, o link abre a conversa vazia. Sem número, `montarUrlWhatsApp`
devolve string vazia, não gera link quebrado.

## Formato da mensagem de pedido

```
Oi, Matheus! Vim pela sua página e montei meu pedido.

*Nome:* Ana Ribeiro
*Negócio / @ / site:* @estudioana
*O que eu preciso:* Site Institucional (a partir de R$ 2.897)
*Objetivo principal:* Vender mais / receber pedido
*Prazo:* O quanto antes
*Orçamento:* R$ 1.500 a R$ 3.000

*Sobre o projeto:*
Vendo bolo pelo Instagram e quero parar de responder orçamento na mão.

Pode me chamar por aqui.
```

Regras do formato (todas cobertas por teste em `src/lib/whatsapp.test.js`):
- Os `*asteriscos*` são a sintaxe de negrito do próprio WhatsApp.
- Ids do formulário são traduzidos para o **rótulo que a pessoa leu na tela**.
- Campo opcional vazio **não vira linha**, some da mensagem.
- Pedido vazio degrada com elegância (`Alguém`, `ainda não escolhido`).
- Contexto acima de 1000 caracteres é cortado na palavra (RN-08).

## Segurança do contrato

`encodeURIComponent` é o que impede que texto digitado escape para a estrutura da
URL: `&`, `=`, `?`, `<`, quebra de linha e acento viram sequências percentuais.
Há teste específico para tentativa de injetar parâmetro (`&phone=`) e marcação
(`<script>`), ambos são neutralizados.

## Se um dia entrar uma API de verdade

Ela nasce atrás de `src/lib/`, com envelope `{ data, error, meta }`, validação de
schema na fronteira e código de erro estável. Nenhum componente chama `fetch`
direto. Isso exige ADR novo, superseding o ADR-003.
