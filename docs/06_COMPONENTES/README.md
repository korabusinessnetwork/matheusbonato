# 06, COMPONENTES

Organização por **feature/seção**, não por tipo técnico. Cada pasta tem o
componente e o CSS de mesmo nome ao lado.

```
src/components/
├── shared/       Botao · Revelar · Secao (+ AberturaSecao) · BarraFixa
├── cabecalho/    Cabecalho, menu, scroll-spy, CTA, menu mobile
├── hero/         Hero, promessa, CTA duplo, selos
├── problema/     Problema, o inimigo comum, 4 sintomas
├── trajetoria/   Trajetoria, linha do tempo + "o que eu faço"
├── metodo/       Metodo, 4 passos com duração
├── pacotes/      Pacotes, o cardápio; escolher preenche o pedido
├── provas/       Provas, projetos próprios + slot de cases
├── garantia/     Garantia, faixa escura, risco zero
├── duvidas/      Duvidas, acordeão <details> nativo
├── pedido/       Pedido + CampoTexto + GrupoOpcoes
└── rodape/       Rodape, contato, redes, aviso de privacidade
```

## Contratos

| Componente | Props | Observação |
|---|---|---|
| `Secao` | `id, numero, etiqueta, tom, children` | `tom`: `papel` \| `realce` \| `escuro` |
| `AberturaSecao` | `id, titulo, texto, largo` | Gera o `id` que o `aria-labelledby` da seção aponta |
| `Botao` | `href, variante, tamanho, larguraTotal, externo` | Com `href` vira `<a>`; sem, vira `<button>` |
| `Revelar` | `atraso, como, className` | `como` troca a tag (`li`, `div`…) |
| `Pacotes` | `pacoteEscolhido, aoEscolher` | Estado vem de `App` |
| `Pedido` | `pedido, erros, enviado, link, mudar, revisar` | Toda a lógica vive em `usePedido` |
| `CampoTexto` | `nome, rotulo, valor, aoMudar, erro, dica, multilinha, maximo` | `id` = `campo-<nome>` (usado para focar no erro) |
| `GrupoOpcoes` | `nome, rotulo, opcoes, valor, aoMudar, erro` | Radios reais por baixo das etiquetas |

## Regras

- **Elemento certo para cada função.** `<a>` navega, `<button>` age,
  `<details>` abre, `input[type=radio]` seleciona. Nada de `<div>` clicável.
- **Sem texto no JSX.** Tudo vem de `src/constants/`.
- **Sem estilo no JSX.** Só `className` e variáveis CSS (`--atraso`, `--ordem`).
- **Componente não fala com o mundo externo.** Sempre via `src/lib/`.
