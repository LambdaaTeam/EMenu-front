import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Dashboard from './components/Dashboard'
import { DashboardProvider } from './hooks/Store'

import './index.css'
import Acess from './components/Login/Acess'
import Login from './components/Login/Login'
import Product from './components/Nav/Product.jsx'
import Table from './components/Nav/Table.jsx'
import Order from './components/Nav/Order.jsx'
import Categorie from './components/Nav/Categorie.jsx'
import Menus from './components/Nav/Menus.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
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
        element: <Table/>
      },
      {
        path: 'menu',
        element: <Menus/>
      },
      {
        path: 'orders',
        element: <Order/>
      },
      {
        path: 'products',
        element: <Product/>
      },
      {
        path: 'categories',
        element: <Categorie/>
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
