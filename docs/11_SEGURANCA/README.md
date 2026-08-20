# 11 — SEGURANÇA

> Segurança é definition-of-done, não fase final. Este plano é o gate antes de
> cada publicação. Base: guia da fundação, adaptado a um site **estático, sem
> backend e sem armazenamento de dado** (ADR-001, ADR-003).

## Princípio

Prevenir o erro é melhor que reportar o erro. E o controle mais forte deste
projeto é arquitetural: **não existe dado do visitante para vazar**, porque nada
é coletado.

## Modelo de ameaças

| Camada | Ameaça | Controle nesta aplicação |
|---|---|---|
| Cliente/UI | XSS via texto digitado | React escapa por padrão; **nenhum `dangerouslySetInnerHTML` em todo o projeto**; nenhuma inserção manual em `innerHTML` |
| Integração | Texto do usuário escapar para a estrutura da URL `wa.me` | `encodeURIComponent` em `montarUrlWhatsApp`; teste específico para `&phone=` e `<script>` |
| Dados | Vazamento de dado pessoal | Não há banco, servidor, cookie de rastreio nem lista. O dado existe só na memória da aba e no aparelho da própria pessoa |
| Segredos | Chave commitada | Não há segredo no projeto. A única variável (`VITE_WHATSAPP_NUMERO`) é um número público; `.env` está no `.gitignore` |
| Rede | Injeção de script de terceiro | CSP restritiva em `vercel.json`: `script-src 'self'`, sem CDN, sem analytics de terceiro |
| Abuso | Spam de robô no formulário | Campo-armadilha invisível; envio cancelado em silêncio |
| Clickjacking | Página embutida em iframe hostil | `X-Frame-Options: DENY` + `frame-ancestors 'none'` |
| Dependências | Pacote comprometido | 3 dependências diretas, versões fixadas; `npm audit` no gate |

## Cabeçalhos em produção (`vercel.json`)

- `Content-Security-Policy` — `default-src 'self'`; script só da própria origem;
  estilo e fonte liberados apenas para `fonts.googleapis.com` / `fonts.gstatic.com`;
  `frame-ancestors 'none'`; `base-uri 'self'`; `form-action 'self'`.
- `X-Content-Type-Options: nosniff` · `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` — geolocalização, microfone e câmera negados.

## Checklist de release (rodar antes de cada publicação)

### Segredos e configuração
- [ ] Nenhuma chave, token ou senha no código — hoje: nenhuma existe
- [ ] `.env` fora do versionamento; `.env.example` só com nomes de variável
- [ ] `VITE_WHATSAPP_NUMERO` apontando para o número real (não o de exemplo)

### Entrada e integração
- [ ] Todo input validado antes de qualquer uso (`validarPedido`)
- [ ] Texto do usuário só entra na URL via `encodeURIComponent`
- [ ] Nenhum `dangerouslySetInnerHTML` introduzido
- [ ] Links externos com `rel="noopener noreferrer"`

### Privacidade (LGPD)
- [ ] Nenhum dado do visitante persistido, enviado ou logado
- [ ] Nenhum cookie de rastreio ou pixel de terceiro
- [ ] Aviso de privacidade visível no rodapé, em texto claro

### Dependências
- [ ] `npm audit` sem vulnerabilidade crítica aberta
- [ ] Versões fixadas (sem `^`, sem `latest`)

### Build
- [ ] `npm run validar` (testes + build) passando
- [ ] Cabeçalhos de segurança conferidos após o deploy

## LGPD — situação atual

Não há tratamento de dado pessoal pelo controlador: a página **redige** uma
mensagem que a própria pessoa envia do seu aparelho. Não há coleta, retenção,
compartilhamento nem base legal a declarar.

**Isso muda no dia em que o lead for persistido** (decisão em aberto). Nesse dia
passam a ser obrigatórios: base legal, aviso de privacidade, política de
retenção, direito de exportação e exclusão — e ADR superseding o ADR-003.

## Custo

Todos os controles acima são gratuitos: CSP e cabeçalhos são configuração,
`npm audit` vem com o npm, o anti-robô é um campo HTML. Nada aqui depende de
serviço pago (`memory/restrictions.md`).

## Resposta a incidente (mínimo viável)

1. **Detectar** — registrar em `memory/bugs.md` com severidade.
2. **Conter** — reverter o deploy na Vercel (build anterior continua disponível).
3. **Corrigir** — patch + teste que prova a correção.
4. **Registrar** — post-mortem curto em `memory/learnings.md`.
5. **Prevenir** — o aprendizado vira restrição ou padrão.
