import * as ReactDOM from "react-dom/client";
import React, { useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'

import App from './App.jsx'
import Login from './components/Login/Login'
import { DetailsProvider } from './hooks/Details'
import { CartProvider } from './hooks/Cart'
import { TableProvider } from './hooks/tableContext.jsx'

const router = createBrowserRouter([
  {
    path: "menu",
    element: <App />
  },
  {
    path: "/",
    element: <Login />
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TableProvider>
      <DetailsProvider>
        <CartProvider>
          <ChakraProvider>
            <RouterProvider router={router} />
          </ChakraProvider>
        </CartProvider>
      </DetailsProvider>
    </TableProvider>
  </React.StrictMode>
);
