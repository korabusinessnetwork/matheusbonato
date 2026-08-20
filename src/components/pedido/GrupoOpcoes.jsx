import './GrupoOpcoes.css'

/**
 * Escolha única desenhada como etiquetas clicáveis.
 * Por baixo são `input[type=radio]` de verdade: teclado, leitor de tela e
 * autopreenchimento continuam funcionando, o visual é só CSS por cima.
 */
export function GrupoOpcoes({ nome, rotulo, opcoes, valor, aoMudar, erro, obrigatorio = false }) {
  const idErro = `campo-${nome}-erro`

  return (
    <fieldset
      className="grupo"
      aria-invalid={erro ? 'true' : undefined}
      aria-describedby={erro ? idErro : undefined}
    >
      <legend className="grupo__rotulo">
        {rotulo}
        {obrigatorio ? <span className="grupo__obrigatorio" aria-hidden="true">*</span> : null}
      </legend>

      <div className="grupo__opcoes">
        {opcoes.map((opcao, indice) => (
          <label
            key={opcao.id}
            className={`opcao ${valor === opcao.id ? 'opcao--marcada' : ''}`.trim()}
          >
            <input
              type="radio"
              className="opcao__radio"
              /* O primeiro leva o id do campo: é nele que o foco cai no erro. */
              id={indice === 0 ? `campo-${nome}` : undefined}
              name={nome}
              value={opcao.id}
              checked={valor === opcao.id}
              onChange={() => aoMudar(nome, opcao.id)}
            />
            <span className="opcao__texto">{opcao.rotulo}</span>
          </label>
        ))}
      </div>

      {erro ? (
        <p id={idErro} className="grupo__erro" role="alert">
          {erro}
        </p>
      ) : null}
    </fieldset>
  )
}
