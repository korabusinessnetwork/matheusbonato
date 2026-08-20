# 02 — DESIGN SYSTEM

> Fonte única de verdade visual. A implementação dos tokens está em
> `src/styles/tokens.css`; este documento explica **por que** cada escolha existe.

## Direção

**Editorial suíço claro.** Grid rígido, muito respiro, fio de 1px como elemento
estrutural, canto reto, seções numeradas (01, 02, 03…) como capítulos de revista.
A página deve parecer feita por um estúdio de design — porque o produto vendido
é justamente critério visual somado a engenharia.

## Cor

| Token | Valor | Uso |
|---|---|---|
| `--cor-papel` | `#F4F1EA` | Fundo base, off-white quente |
| `--cor-papel-2` | `#EAE5D9` | Faixa alternada (Método, Dúvidas) |
| `--cor-tinta` | `#14140F` | Texto e superfície escura (Garantia, rodapé) |
| `--cor-tinta-70/45/20/12` | tinta com alfa | Texto secundário, apoio, bordas, fios |
| `--cor-acento` | `#C63A17` | **Só o que converte**: CTA, números, ênfase |

**Regra do acento**: se ele estiver em toda parte, não chama atenção em lugar
nenhum. O vermelhão marca o caminho da conversão e nada mais.

Contraste: tinta sobre papel ≈ 16:1; acento sobre papel ≈ 5.2:1 (usado em texto
grande, número e traço — nunca em corpo pequeno). Ambos passam WCAG AA.

## Tipografia

- **Display**: `Instrument Serif` — títulos, números e preços.
  Fallback real: `Iowan Old Style, Georgia, Times New Roman, serif`. A página foi
  verificada com a fonte externa bloqueada e continua legível e bem proporcionada.
- **Texto**: `Inter` — corpo, rótulos, botões. Fallback: pilha de sistema.
- **Escala fluida** (`clamp`): o mesmo token serve celular e desktop, sem
  breakpoint de tipografia.
- Rótulo de campo e etiqueta de seção: versalete com `--letra-etiqueta` (0.14em).

## Espaço

Régua base de 8px (`--e-1` a `--e-10`). Respiro vertical de seção via
`--secao-y` (fluido, 4.5rem → 9rem). Margem lateral fluida via `--margem-lateral`.

## Forma e movimento

- Canto reto (`--raio-0`): é o padrão suíço; borda arredondada suavizaria demais.
- Fios de 1px (`--fio`) separam tudo — não há sombra nem cartão flutuante.
- Movimento: revelação no scroll (18px + fade, `--d-lenta` com ease de saída) e
  preenchimento do botão de baixo para cima. **`prefers-reduced-motion` zera
  todas as durações** e o conteúdo nunca depende de animação para aparecer.

## Componentes visuais

| Componente | Papel |
|---|---|
| `Secao` | Moldura: número + etiqueta + fio + respiro |
| `AberturaSecao` | Título e texto de abertura na coluna de leitura |
| `Botao` | `<a>` ou `<button>`; variantes primário/secundário/fantasma |
| `Revelar` | Revelação no scroll, com escalonamento opcional |
| `BarraFixa` | CTA fixo no rodapé do celular |
| `CampoTexto` / `GrupoOpcoes` | Campos do formulário, com erro colado no campo |

## White-label

Trocar `tokens.css` re-skina a página inteira; trocar `src/constants/` troca a
marca e a oferta. Nenhum componente precisa ser aberto (ADR-002).
