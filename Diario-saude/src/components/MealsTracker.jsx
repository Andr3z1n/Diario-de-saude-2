import { useEffect, useState } from 'react'

// Meta diária de refeições
const META = 4

// Chave usada para salvar no localStorage
const STORAGE_KEY = 'refeicoes_hoje'

// Componente que controla o tracker de refeições
export default function MealsTracker() {
  // Estado que guarda quantas refeições foram feitas
  const [refeicoes, setRefeicoes] = useState(0)

  // Quando o componente carrega, busca dados salvos no navegador
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) setRefeicoes(Number(saved)) // converte string para número
  }, [])

  // Sempre que "refeicoes" mudar, salva no localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(refeicoes))
  }, [refeicoes])

  // Calcula porcentagem de progresso em relação à meta
  const pct = Math.min(100, Math.round((refeicoes / META) * 100))

  return (
    <section className="tracker-card">

      {/* Título do componente */}
      <h3>Refeições</h3>

      {/* Mostra progresso atual */}
      <p>{refeicoes} / {META}</p>

      {/* Barra de progresso visual */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Botões de controle */}
      <div className="tracker-actions">

        {/* Adiciona +1 refeição (limitado pela meta) */}
        <button onClick={() => setRefeicoes((v) => Math.min(META, v + 1))}>
          +1 refeição
        </button>

        {/* Reseta contador para 0 */}
        <button onClick={() => setRefeicoes(0)}>
          Resetar
        </button>
      </div>
    </section>
  )
}