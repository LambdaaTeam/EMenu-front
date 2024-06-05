import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const DashboardContext = createContext()

const endpoint = 'https://api.emenu.psykka.xyz/api/v1'

export const useDashboard = () => {
  const context = useContext(DashboardContext)
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider')
  }
  return context
}

export const DashboardProvider = ({ children }) => {
  const [dashboard, setDashboard] = useState(() => {
    const savedDashboard = localStorage.getItem('dashboard')
    return savedDashboard ? JSON.parse(savedDashboard) : null
  })

  useEffect(() => {
    localStorage.setItem('dashboard', JSON.stringify(dashboard))
  }, [dashboard])

  useEffect(() => {
    getDashboard()
  }, [])

  // TODO: connect to realtime API

  const fetchApi = async (path, options = {}) => {
    return await fetch(`${endpoint}${path}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        ...options.headers
      }
    })
  }

  const getDashboard = async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      return
    }

    const restaurantId = JSON.parse(atob(token.split('.')[1])).sub

    const restaurant = await fetchApi(`/restaurants/${restaurantId}`)
      .then((res) => res.json())
      .catch(() => null)

    if (!restaurant) {
      return
    }

    setDashboard(restaurant)
  }

  const handleLogin = async (email, password) => {
    const response = await fetchApi('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    })

    if (!response.ok) {
      return false
    }

    const token = await response.text()
    localStorage.setItem('token', token.replace(/"/g, ''))

    await getDashboard()

    return true
  }

  return (
    <DashboardContext.Provider value={{ dashboard, handleLogin, getDashboard }}>
      {children}
    </DashboardContext.Provider>
  )
}
