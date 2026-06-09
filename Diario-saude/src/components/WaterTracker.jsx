import { useEffect, useState } from 'react'

// Meta diária de consumo de água (em ml)
const META = 2000

// Chave usada para salvar no localStorage
const STORAGE_KEY = 'agua_hoje'

// Componente que controla o consumo de água diário
export default function WaterTracker() {
  // Estado que guarda quantos ml de água foram consumidos
  const [agua, setAgua] = useState(0)

  // Ao carregar o componente, busca valor salvo no navegador
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) setAgua(Number(saved)) // converte de string para número
  }, [])

  // Sempre que "agua" mudar, salva automaticamente no localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(agua))
  }, [agua])

  // Calcula porcentagem de progresso em relação à meta
  const pct = Math.min(100, Math.round((agua / META) * 100))

  return (
    <section className="tracker-card">

      {/* Título do card */}
      <h3>Água</h3>

      {/* Mostra quantidade atual e meta */}
      <p>{agua}ml / {META}ml</p>

      {/* Barra visual de progresso */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Botões para adicionar água */}
      <div className="tracker-actions">

        {/* Adiciona 250ml sem ultrapassar a meta */}
        <button onClick={() => setAgua((v) => Math.min(META, v + 250))}>
          +250ml
        </button>

        {/* Adiciona 500ml sem ultrapassar a meta */}
        <button onClick={() => setAgua((v) => Math.min(META, v + 500))}>
          +500ml
        </button>

        {/* Reseta o contador de água */}
        <button onClick={() => setAgua(0)}>
          Resetar
        </button>
      </div>
    </section>
  )
}