import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const DashboardContext = createContext()

export const useDashboard = () => {
  const context = useContext(DashboardContext)
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider')
  }
  return context
}

export const DashboardProvider = ({ children }) => {
  // Exemplo de como o estado inicial pode ser definido
  // TODO: Remover este estado inicial quando a integração com a API for feita
  const [dashboard, setDashboard] = useState({
    id: '662b03d839f330bc5518c21d',
    name: 'Pizzaria VAPO',
    email: 'psykka@email.com',
    avatar: 'https://loremflickr.com/300/300/cat',
    address: {
      city: 'Matão',
      country: 'Brazil',
      postcode: '15990-000',
      number: 123,
      street: 'Av. 15 de Novembro',
      other: ''
    },
    tables: [
      {
        id: '662b0637e2a7893885a9a30d',
        number: 12,
        url: 'https://short.emenu.psykka.xyz/1821',
        status: 'AVAILABLE', // AVAILABLE | OCCUPIED | RESERVED
        occupants: []
      }
    ],
    createdat: '2024-04-26T01:31:04.728Z',
    updatedat: '2024-04-26T01:31:04.728Z'
  })

  // Exemplo de como fazer uma requisição para a API
  const fetchTables = useCallback(async () => {
    // Fazer a requisição para a API
    const response = await fetch(`https://api.emenu.psykka.xyz/restaurant/@me/tables`)

    // Verificar se a requisição foi bem sucedida
    if (!response.ok) {
      throw new Error('Failed to fetch tables')
    }

    // Transformar a resposta em JSON
    const data = await response.json()

    // Atualizar o estado global
    setDashboard((prev) => ({ ...prev, tables: data }))
  }, [])

  useEffect(() => {
    fetchTables()
  }, [fetchTables])

  return (
    <DashboardContext.Provider value={{ dashboard, fetchTables }}>
      {children}
    </DashboardContext.Provider>
  )
}
