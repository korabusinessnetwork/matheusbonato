# Bugs Conhecidos

## Objetivo
Registrar bug conhecido, severidade, workaround e status, para que ninguém
"descubra" duas vezes o mesmo problema.

## Contexto
Bug não registrado volta como surpresa em produção.

## Regras Gerais
- Todo bug ganha id (`BUG-NNN`), severidade e status.
- Bug de segurança tem prioridade máxima e vira aprendizado + restrição.

## Validações
- Bug só é fechado com o teste (ou verificação no navegador) que prova a correção.

## Permissões
- Aberto a qualquer dev/agente.

## Auditoria
- Data, ambiente (navegador/SO) e como reproduzir.

## Eventos
- `bug.reported`, `bug.fixed`, `bug.reopened`

---

## Abertos

Nenhum bug aberto.

## Limitações conhecidas (não são bugs, são escolhas)

- **Lead que preenche e não clica em enviar se perde.** Consequência direta do
  ADR-003 (sem banco). Reavaliar quando o volume justificar.
- **O acordeão de dúvidas usa `<details name>`** para abrir uma pergunta por vez.
  Em navegador antigo que não suporta o atributo, várias ficam abertas ao mesmo
  tempo, degradação aceitável, nada quebra.
- **Sem página `/obrigado`.** Como o envio sai da página (vai para o WhatsApp),
  a conversão final ainda não é medível. Previsto na Fase 3 do roadmap.
