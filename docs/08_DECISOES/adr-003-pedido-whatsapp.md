# ADR-003 — Pedido vai direto ao WhatsApp, sem banco de dados

**Status**: Aceito
**Data**: 2026-08-20
**Decisores**: Matheus Bonato

---

## Contexto

A página precisa receber pedidos. O público-alvo já negocia por WhatsApp — é lá
que a venda fecha, e é lá que o dono já está o dia inteiro. A pergunta era onde
o pedido deveria cair: banco de dados, e-mail, ou direto na conversa.

Restrições:
- Fase bootstrap: tudo em tier gratuito, nada de serviço pago.
- Uma pessoa operando: quanto menos lugar para olhar, melhor.
- LGPD: qualquer armazenamento de dado pessoal traz base legal, aviso de
  privacidade e direito de exclusão junto.

## Decisão

O formulário monta a mensagem **no aparelho da própria pessoa** e o botão final é
um link `https://wa.me/<numero>?text=<mensagem>` já preenchido. **Nada é enviado
para servidor, banco ou lista.** A página não coleta — ela redige.

A montagem fica isolada em `src/lib/whatsapp.js` (camada de serviços): nenhum
componente sabe como o pedido viaja.

## Alternativas Consideradas

### 1. WhatsApp + Supabase
- **Prós**: nenhum lead se perde; painel de pedidos possível; base para CRM.
- **Contras**: conta a mais, variáveis de ambiente, RLS para acertar, e dado
  pessoal armazenado — LGPD passa a valer de verdade.
- **Descartado porque**: no volume atual, o custo de operação e a superfície
  legal superam o ganho. Fica registrado em `memory/decisions.md` como decisão
  em aberto, para revisitar quando o volume justificar.

### 2. WhatsApp + e-mail (Formspree/Web3Forms)
- **Prós**: backup do lead sem banco; setup rápido.
- **Contras**: depende de terceiro no caminho do envio; dado pessoal trafega
  para fora; mais um lugar para olhar.
- **Descartado porque**: mesma objeção da opção 1, com menos benefício.

### 3. Só um botão "chamar no WhatsApp", sem formulário
- **Prós**: atrito zero.
- **Contras**: o lead chega frio ("oi, quanto custa?") e o dono gasta 20
  mensagens para qualificar — exatamente a dor descrita na página.
- **Descartado porque**: a qualificação é parte do valor entregue.

## Consequências

### Positivas
- Custo zero, manutenção zero, nenhuma chave ou segredo no projeto.
- LGPD praticamente fora de escopo: sem coleta, sem cookie de rastreio, sem
  retenção. A página declara isso no rodapé.
- O lead chega com pacote, objetivo, prazo, orçamento e contexto já escritos.
- Trocar o destino depois (banco, CRM, e-mail) mexe em um arquivo só.

### Negativas / Trade-offs
- **Quem preenche e não clica em enviar se perde.** É o custo real desta decisão
  e está registrado em `memory/bugs.md` como limitação conhecida.
- A conversão final acontece fora da página, então ainda não é medível
  (previsto na Fase 3: `/obrigado` + evento).
- Depende do WhatsApp instalado/acessível no dispositivo — mitigado pelo link de
  fallback ("se não abriu, toque aqui") exibido após o clique.

## Referências
- `src/lib/whatsapp.js` e `src/lib/whatsapp.test.js`
- `docs/07_APIS/README.md` — o contrato do link `wa.me`
- `memory/restrictions.md` — restrições legais e de custo
