import * as ReactDOM from "react-dom/client";
import React, { createContext, useContext } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Login from './components/Login/Login.jsx'
import Cart from './components/Cart/Cart.jsx'
import {
  DetailsProvider,
} from './hooks/Details.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "app",
    element: <App />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DetailsProvider>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </DetailsProvider>
  </React.StrictMode>
)
