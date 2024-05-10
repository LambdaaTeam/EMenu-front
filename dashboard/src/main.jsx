import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Dashboard from './components/Dashboard'
import { DashboardProvider } from './hooks/Store'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Login</h1>
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <h1>Analytics</h1>
      },
      {
        path: 'tables',
        element: <h1>Mesas</h1>
      },
      {
        path: 'menu',
        element: <h1>Menu</h1>
      },
      {
        path: 'orders',
        element: <h1>Pedidos</h1>
      },
      {
        path: 'products',
        element: <h1>Produtos</h1>
      },
      {
        path: 'categories',
        element: <h1>Categorias</h1>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <DashboardProvider>
        <RouterProvider router={router} />
      </DashboardProvider>
    </ChakraProvider>
  </React.StrictMode>
)
