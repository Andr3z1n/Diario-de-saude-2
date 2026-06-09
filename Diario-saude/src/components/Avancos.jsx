// Lista de etapas do progresso do sistema
const etapas = [
  { nome: 'Água registrada', feito: true },
  { nome: 'Refeições marcadas', feito: true },
  { nome: 'Eventos adicionados', feito: true },
  { nome: 'Tela de nutrição criada', feito: true },
  { nome: 'Tela de avanços criada', feito: true },
  { nome: 'Ajuste visual final', feito: false },
]

// Componente que mostra o progresso geral das tarefas
export default function Avancos() {
  // Conta quantas etapas já foram concluídas (feito: true)
  const concluidas = etapas.filter((item) => item.feito).length

  // Calcula a porcentagem de conclusão com base no total de etapas
  const pct = Math.round((concluidas / etapas.length) * 100)

  return (
    <div className="advance-box">

      {/* Resumo do progresso geral */}
      <div className="advance-summary">

        <div>
          <h3>Progresso geral</h3>
          {/* Mostra porcentagem concluída */}
          <p>{pct}% concluído</p>
        </div>

        {/* Mostra número de tarefas concluídas / total */}
        <div className="advance-number">
          {concluidas}/{etapas.length}
        </div>
      </div>

      {/* Barra de progresso visual */}
      <div className="progress-bar">
        {/* Preenchimento dinâmico da barra baseado na porcentagem */}
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>

      {/* Lista de etapas */}
      <ul className="advance-list">
        {etapas.map((item, index) => (
          <li
            key={index}
            className={item.feito ? 'done' : 'todo'} // muda estilo conforme status
          >
            {/* Ícone de check se concluído, ou ponto se pendente */}
            {item.feito ? '✓' : '•'} {item.nome}
          </li>
        ))}
      </ul>
    </div>
  )
}