import './CampoTexto.css'

/**
 * Campo de texto (linha ou área). O erro mora colado no campo — nunca num
 * alerta genérico no topo — e some assim que a pessoa começa a corrigir.
 */
export function CampoTexto({
  nome,
  rotulo,
  valor,
  aoMudar,
  erro,
  dica,
  tipo = 'text',
  placeholder,
  obrigatorio = false,
  multilinha = false,
  maximo,
  ...resto
}) {
  const id = `campo-${nome}`
  const idErro = `${id}-erro`
  const idDica = `${id}-dica`
  const descrito = [erro ? idErro : null, dica ? idDica : null].filter(Boolean).join(' ')

  const comuns = {
    id,
    name: nome,
    value: valor,
    placeholder,
    maxLength: maximo,
    onChange: (evento) => aoMudar(nome, evento.target.value),
    className: `campo__controle ${erro ? 'campo__controle--erro' : ''}`.trim(),
    'aria-invalid': erro ? 'true' : undefined,
    'aria-describedby': descrito || undefined,
    ...resto,
  }

  return (
    <div className="campo">
      <label className="campo__rotulo" htmlFor={id}>
        {rotulo}
        {obrigatorio ? <span className="campo__obrigatorio" aria-hidden="true">*</span> : null}
        {!obrigatorio ? <span className="campo__opcional">opcional</span> : null}
      </label>

      {multilinha ? <textarea rows={4} {...comuns} /> : <input type={tipo} {...comuns} />}

      <div className="campo__base">
        {erro ? (
          <p id={idErro} className="campo__erro" role="alert">
            {erro}
          </p>
        ) : dica ? (
          <p id={idDica} className="campo__dica">
            {dica}
          </p>
        ) : (
          <span />
        )}

        {maximo && multilinha ? (
          <span className="campo__contador">
            {valor.length}/{maximo}
          </span>
        ) : null}
      </div>
    </div>
  )
}
