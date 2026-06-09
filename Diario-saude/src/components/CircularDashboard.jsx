import { useState } from 'react'

// Componente principal do dashboard circular
export default function CircularDashboard() {
  // Estado que controla a quantidade de água ingerida (em ml)
  const [agua, setAgua] = useState(1200)

  // Estado que controla o número de refeições feitas no dia
  const [refeicoes, setRefeicoes] = useState(3)

  // Calcula a porcentagem de água em relação ao objetivo (2500ml)
  const porcentAgua = (agua / 2500) * 100

  // Calcula a porcentagem de refeições em relação ao objetivo (5 refeições)
  const porcentRefeicoes = (refeicoes / 5) * 100

  // Média das duas porcentagens para gerar um progresso geral
  const total = Math.round((porcentAgua + porcentRefeicoes) / 2)

  return (
    <div className="dashboard">
      {/* Título do painel */}
      <h3>Painel Geral</h3>

      {/* Exibe quantidade de água atual */}
      <p>Água: {agua} ml</p>

      {/* Slider para ajustar a quantidade de água */}
      <input
        type="range"
        min="0"
        max="2500"
        value={agua}
        onChange={(e) => setAgua(Number(e.target.value))}
      />

      {/* Exibe quantidade de refeições */}
      <p>Refeições: {refeicoes}</p>

      {/* Slider para ajustar número de refeições */}
      <input
        type="range"
        min="0"
        max="5"
        value={refeicoes}
        onChange={(e) => setRefeicoes(Number(e.target.value))}
      />

      {/* Exibe progresso geral calculado */}
      <h2>{total}%</h2>
      <p>Progresso Total</p>
    </div>
  )
}