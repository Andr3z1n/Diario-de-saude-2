import { useMemo, useState } from 'react'

// função simples para calcular nutrientes
function getData(text) {
  const base = { carb: 20, sugar: 5, fat: 8, protein: 10, cal: 150 }

  if (text.includes('frango')) base.protein += 15
  if (text.includes('arroz') || text.includes('pão')) base.carb += 20
  if (text.includes('doce') || text.includes('refrigerante')) {
    base.sugar += 20
    base.fat += 10
  }

  return base
}

// cálculo da nota
function score(d) {
  return Math.max(0, 100 - d.sugar * 2 - d.fat + d.protein)
}

export default function FoodNutritionChart() {
  const [text, setText] = useState('arroz e frango')

  const data = useMemo(() => getData(text), [text])
  const s = useMemo(() => score(data), [data])

  const max = 60

  return (
    <div className="food-simple">

      {/* input */}
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite sua refeição"
      />

      {/* score */}
      <h3>Score: {s}</h3>

      {/* barras simples */}
      <div className="bars">

        <div className="bar">
          <span>Carb</span>
          <div className="track">
            <div style={{ width: `${(data.carb / max) * 100}%` }} />
          </div>
        </div>

        <div className="bar">
          <span>Proteína</span>
          <div className="track">
            <div style={{ width: `${(data.protein / max) * 100}%` }} />
          </div>
        </div>

        <div className="bar">
          <span>Açúcar</span>
          <div className="track">
            <div style={{ width: `${(data.sugar / max) * 100}%` }} />
          </div>
        </div>

        <div className="bar">
          <span>Gordura</span>
          <div className="track">
            <div style={{ width: `${(data.fat / max) * 100}%` }} />
          </div>
        </div>

      </div>

      {/* ícone simples */}
      <div className="circle">
        <div>🍽️</div>
      </div>

    </div>
  )
}