import * as ReactDOM from "react-dom/client";
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Login from './components/Login/Login'
import { DetailsProvider } from './hooks/Details'
import { CartProvider } from './hooks/Cart'
import { TableProvider } from './hooks/tableContext.jsx'
import { ClientProvider } from './hooks/clientContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "menu",
    element: <App />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TableProvider>
      <ClientProvider>
        <DetailsProvider>
          <CartProvider>
            <ChakraProvider>
              <RouterProvider router={router} />
            </ChakraProvider>
          </CartProvider>
        </DetailsProvider>
      </ClientProvider>
    </TableProvider>
  </React.StrictMode>
)
