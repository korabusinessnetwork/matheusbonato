# Aprendizados — memória viva

## Objetivo
Guardar o que foi descoberto construindo (erro, insight, armadilha), para não
repetir. Aprendizado validado e recorrente é promovido a `patterns.md`.

## Contexto
O que se aprende numa sessão se perde na próxima se não for escrito. Este arquivo
é a diferença entre errar uma vez e errar sempre.

## Regras Gerais
- Formato: o que aconteceu → por que → o que fazer da próxima vez.
- Aprendizado que virou regra sai daqui e entra em `patterns.md` ou `restrictions.md`.

## Validações
- Aprendizado precisa citar o caso real que o originou.

## Permissões
- Aberto a qualquer dev/agente.

## Auditoria
- Data e origem (build, revisão, incidente, teste).

## Eventos
- `learning.added`, `learning.promoted`

---

## 2026-08-20 · Abrir o WhatsApp por script quebra a conversão
**O que aconteceu:** a primeira ideia era validar o formulário e chamar
`window.open()` com o link. **Por quê é ruim:** se a validação fosse assíncrona,
ou se o navegador considerasse a chamada fora do gesto do usuário, o bloqueador
de pop-up mataria o envio — e o lead se perderia sem ninguém saber.
**Da próxima vez:** o botão é um `<a href>` real com o link já montado; a
validação só cancela (`preventDefault`) quando reprova. Verificado no navegador:
clique inválido não abre aba nenhuma, clique válido navega normal.
→ Promovido para `patterns.md`.

## 2026-08-20 · Prova social é o gargalo real, não a copy
**O que aconteceu:** ao aplicar o framework de oferta, a seção mais fraca da
página não foi o texto — foi a ausência de case de cliente com número.
**Por quê:** prova documentada vale mais que qualquer copy; sem ela, o peso todo
cai na garantia. **Da próxima vez:** a seção de cases já nasce pronta para
receber `{cliente, resultado, detalhe}` e, enquanto está vazia, mostra um convite
honesto em vez de depoimento genérico. Primeiro case fecha essa dívida.

## 2026-08-20 · Fonte externa precisa de fallback de verdade
**O que aconteceu:** no ambiente de verificação o Google Fonts não carregou
(conexão bloqueada) e a página continuou legível e bonita, porque a pilha de
fallback (`Iowan Old Style, Georgia, serif`) foi escolhida a dedo.
**Da próxima vez:** nunca declarar uma face sem uma pilha de fallback que aguente
a página sozinha — cliente em rede corporativa ou 3G ruim passa por isso.
