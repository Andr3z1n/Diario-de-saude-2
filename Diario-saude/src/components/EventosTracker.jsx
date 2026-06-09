import { useState } from 'react'

export default function EventosTracker() {

  // Guarda o texto digitado pelo usuário
  const [evento, setEvento] = useState('')

  // Guarda a lista de eventos
  const [eventos, setEventos] = useState([])

  // Função para adicionar um novo evento
  function adicionarEvento() {

    // Impede adicionar evento vazio
    if (evento === '') return

    // Adiciona o evento na lista
    setEventos([...eventos, evento])

    // Limpa o campo de texto
    setEvento('')
  }

  return (
    <div>
      <h3>Eventos</h3>

      {/* Campo para digitar o evento */}
      <input
        type="text"
        placeholder="Digite um evento"
        value={evento}
        onChange={(e) => setEvento(e.target.value)}
      />

      {/* Botão para adicionar o evento */}
      <button onClick={adicionarEvento}>
        Adicionar
      </button>

      {/* Lista dos eventos cadastrados */}
      <ul>
        {eventos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}