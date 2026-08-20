# Restrições Permanentes, prioridade máxima

## Objetivo
Registrar os limites que NÃO se negociam neste projeto: técnicos, legais, de
custo, de produto e éticos. Restrição só cai por ADR de exceção.

## Contexto
Restrição esquecida vira retrabalho caro (ou processo). Consultar este arquivo
antes de qualquer decisão de produto, arquitetura ou copy.

## Regras Gerais
- Restrição vale para todo código e toda copy, inclusive de agente automatizado.
- Em conflito entre restrição e conveniência técnica, a restrição vence.

## Validações
- Toda restrição tem motivo declarado. Restrição sem motivo é preferência.

## Permissões
- Só o dono cria ou remove restrição, e a remoção exige ADR.

## Exceções
- Documentadas caso a caso, com prazo, nunca em aberto.

## Auditoria
- Data de criação e motivo.

## Eventos
- `restriction.added`, `restriction.exception_granted`

---

## Técnicas
- **Sem backend, sem banco.** Enquanto o ADR-003 valer, a página é estática. Nada
  de rota de API, servidor ou armazenamento de dado do visitante.
- **Sem dependência nova sem motivo forte.** Hoje: React + Vite + Vitest. Qualquer
  lib a mais precisa justificar peso no bundle, a LP compete por segundo no 4G.
- **Sem template/construtor.** É o diferencial vendido na própria página; usar
  template aqui seria contradizer a oferta.
- **Versão de dependência fixada** (sem `^`/`latest`), build reproduzível.

## Legais (LGPD)
- **Nenhum dado do visitante é armazenado.** O formulário monta uma mensagem no
  aparelho da própria pessoa e abre o WhatsApp. Não há coleta, banco, cookie de
  rastreio ou lista de e-mail, e a página diz isso explicitamente no rodapé.
- Se um dia entrar persistência (Supabase/e-mail), passa a ser obrigatório:
  aviso de privacidade, base legal, e direito de exclusão. Isso vira ADR.
- Nenhum dado pessoal em log, em URL de analytics ou em mensagem de erro.

## De custo (fase bootstrap)
- **Tudo em tier gratuito.** Vercel free, GitHub free, Google Fonts, sem serviço pago.
- Qualquer item pago é **adiado por padrão**. Ao esbarrar em um, apresentar:
  custo aproximado, alternativa gratuita, impacto e recomendação, o dono decide.
- Domínio é a única despesa esperada, e é decisão do dono.

## De produto
- **Preço e garantia não mudam sem aval do dono.** Nenhum agente altera valor,
  prazo prometido ou termos da garantia por conta própria.
- **A promessa tem que caber na operação de uma pessoa só.** Nada de prometer
  suporte 24h, equipe ou SLA que não existe.

## Éticas (inegociáveis)
- **Proibido inventar prova social.** Nada de depoimento, número, logo de cliente
  ou "+100 projetos" que não aconteceu. Sem case real, a seção fica honesta.
- **Escassez só se for verdadeira.** "3 projetos por vez" só fica na página
  enquanto for como o dono realmente trabalha.
- **Sem dark pattern.** Nada de contador falso, saída bloqueada, pop-up de culpa
  ou preço riscado que nunca existiu.
