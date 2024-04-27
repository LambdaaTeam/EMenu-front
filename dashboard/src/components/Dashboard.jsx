import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useDashboard } from '../hooks/Store'

const Dashboard = () => {
  // Usar o hook useDashboard para acessar o estado global
  const { dashboard } = useDashboard()
  
  // Fazer o layout do dashboard aqui
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: 'space-between', padding: 10 }}>
        <h1>Dashboard</h1>
        <div style={{ display: 'flex', gap: '10px', color: 'blue', textDecoration: 'underline' }}>
          <Link to="/dashboard">Home</Link>
          <Link to="/dashboard/analytics">Analytics</Link>
          <Link to="/dashboard/products">Products</Link>
        </div>
        <div>
          <h2>{dashboard.name}</h2>
        </div>
      </div>

      {/* Aqui é onde os componentes filhos são renderizados */}
      <Outlet />
    </div>
  )
}

export default Dashboard