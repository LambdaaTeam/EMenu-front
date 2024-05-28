import * as ReactDOM from "react-dom/client";
import React, { useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'

import App from './App.jsx'
import Login from './components/Login/Login'
import { DetailsProvider } from './hooks/Details'
import { CartProvider } from './hooks/Cart'
import { TableProvider } from './hooks/tableContext.jsx'

//estaticos por enquanto até a url encurtada funfar
const restaurantId = "664fdb851fea3bfc294eaf0a";
const tableNumber = "1";
const tableId = "664fdbe41fea3bfc294eaf0c";


const RedirectToLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${restaurantId}?table=${tableNumber}&table_id=${tableId}`);
  }, [navigate]);

  return null;

};

const router = createBrowserRouter([
  {
    path: `/:restaurantId`,
    element: <Login />,
  },
  {
    path: "menu",
    element: <App />
  },
  {
    path: "/",
    element: <RedirectToLogin />
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
