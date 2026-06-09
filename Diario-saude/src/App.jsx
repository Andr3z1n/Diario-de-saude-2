import { useMemo, useState } from 'react'

// Importação dos componentes do app
import WaterTracker from './components/WaterTracker'
import MealsTracker from './components/MealsTracker'
import EventosTracker from './components/EventosTracker'
import CircularDashboard from './components/CircularDashboard'
import FoodNutritionChart from './components/FoodNutritionChart'
import Avancos from './components/Avancos'

import './index.css'

// Componente principal do aplicativo
export default function App() {
  // Controla qual tela está sendo exibida (resumo, comida ou avanços)
  const [view, setView] = useState('resumo')

  // Gera a data atual formatada (executa apenas uma vez)
  const hoje = useMemo(() => {
    return new Date().toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }, [])

  return (
    <div className="app-shell">

      <div className="app-card">

        {/* Cabeçalho principal do app */}
        <header className="app-header">

          <div>
            <h1>Diário de Saúde</h1>
            <p>Controle de água, refeições, eventos e progresso diário</p>
          </div>

          {/* Botões de navegação entre telas */}
          <div className="app-actions">

            {/* Botão Resumo */}
            <button
              className={view === 'resumo' ? 'action-btn active' : 'action-btn'}
              onClick={() => setView('resumo')}
            >
              Resumo
            </button>

            {/* Botão Comida */}
            <button
              className={view === 'comida' ? 'action-btn active' : 'action-btn'}
              onClick={() => setView('comida')}
            >
              Comida
            </button>

            {/* Botão Avanços */}
            <button
              className={view === 'avancos' ? 'action-btn active' : 'action-btn'}
              onClick={() => setView('avancos')}
            >
              Avanços
            </button>

          </div>
        </header>

        {/* Mostra a data atual formatada */}
        <p className="app-date">{hoje}</p>

        {/* Tela de RESUMO */}
        {view === 'resumo' && (
          <>
            {/* Dashboard circular com dados fixos */}
            <CircularDashboard agua={1200} refeicoes={3} />

            {/* Grid com trackers principais */}
            <div className="trackers-grid">
              <WaterTracker />
              <MealsTracker />
              <EventosTracker />
            </div>
          </>
        )}

        {/* Tela de COMIDA (nutrição) */}
        {view === 'comida' && (
          <section className="screen-section">
            <div className="section-card">

              {/* Cabeçalho da seção */}
              <div className="section-head">
                <h2>Nutrição da refeição</h2>
                <p>Veja carboidratos, açúcar, gordura, proteína e calorias.</p>
              </div>

              {/* Gráfico nutricional */}
              <FoodNutritionChart />
            </div>
          </section>
        )}

        {/* Tela de AVANÇOS */}
        {view === 'avancos' && (
          <section className="screen-section">
            <div className="section-card">

              {/* Cabeçalho da seção */}
              <div className="section-head">
                <h2>Avanços do processo</h2>
                <p>Progresso geral das metas e ações já concluídas.</p>
              </div>

              {/* Componente de progresso */}
              <Avancos />
            </div>
          </section>
        )}

      </div>
    </div>
  )
}