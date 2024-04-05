import CardsDetails from './components/Cards/CardsDetails.jsx'
import Header from './components/Header/Header'
import Menu from './components/Header/Menu'
import { useState } from 'react'
import { Stack } from '@chakra-ui/react'
import { useCart } from './hooks/Cart'
import Cart from './components/Cart/Cart'

function App() {
  const [showDetails, setShowDetails] = useState(false)
  const { cart } = useCart()

  const menu = {
    id: "menu001",
    restaurant: "Pizzaria KB",
    highligts: [
      {
        id: "item001",
        name: "Pizza",
        price: 17.00,
        description: "Pizza com orégano",
        image: "https://placehold.co/83x93"
      }
    ],
    categories: [
      {
        id: "category001",
        name: "Pizzas",
        items: [
          {
            id: "item001",
            name: "Pizza",
            image: "https://placehold.co/400",
            description: "Pizza com queijo",
            price: 17.00
          },
          {
            id: "item001",
            name: "Pizza",
            image: "https://placehold.co/400",
            description: "Pizza com queijo",
            price: 17.00
          },
          {
            id: "item001",
            name: "Pizza",
            image: "https://placehold.co/400",
            description: "Pizza com queijo",
            price: 17.00
          }
        ]
      },
      {
        id: "category002",
        name: "Lanches",
        items: [
          {
            id: "item002",
            name: "X-tudo",
            image: "https://placehold.co/400",
            description: "Ovo, hambúrguer, tomate, queijo, presunto, alface",
            price: 17.00
          }
        ]
      },
      {
        id: "category003",
        name: "Bebidas",
        items: [
          {
            id: "item001",
            name: "Coca-cola",
            image: "https://placehold.co/400",
            description: "Bebida gaseificada refrescante",
            price: 17.00
          }
        ]
      }
    ]
  }

  const toggleDetails = () => setShowDetails(!showDetails)

  return (
    <Stack h="100vh" w="100vw" spacing={0}>
      {showDetails ? <CardsDetails toggleDetails={toggleDetails} /> : (cart.displaying ? <Cart /> : (<> <Header title={menu.restaurant} /> <Menu menu={menu} toggleDetails={toggleDetails} /> </>))}
    </Stack>
  )
}

export default App
