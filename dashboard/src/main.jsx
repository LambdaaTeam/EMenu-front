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
        // mostrar as mesas do restaurante
        index: true,
        element: <h1>Home</h1>
      },
      {
        path: 'analytics',
        element: <h1>Analytics</h1>
      },
      {
        path: 'products',
        element: <h1>Products</h1>
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
