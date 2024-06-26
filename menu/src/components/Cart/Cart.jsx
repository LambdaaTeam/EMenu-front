import { Stack, Text, Button, Box } from '@chakra-ui/react'
import CartItem from './CartItem'
import Header from '../Header/Header'
import { useCart } from '../../hooks/Cart'
import { useState } from 'react'
import {
  Trash2
} from 'lucide-react'
import Confirmation from '../Confirmation/Confirmation'
import { useTable } from '../../hooks/tableContext'

const CartList = ({ setIsConfirming }) => {
  const { cart, cartTotal, resetCart, pushOrder } = useCart()
  const {table} = useTable();

  return (
    <>
      <Header title="Sacola" />
      <Stack display="flex" flexDirection="column" bg="#F3F3F3" justifyContent="space-between">
        <Stack bg="white" justifyContent="space-between" padding="2" flexDirection="row" alignItems="center">
          <Text color="#B6001F" fontWeight="bold"> {table.client.name} </Text>
          <Text color="#B6001F" fontWeight="bold"> Mesa: {table.tableNumber} </Text>
        </Stack>
        <Stack padding="4" bg="white">
          {cart.items.length > 0 ? cart.items.map(item => <CartItem key={item.id} cardsDrink={item} />) : <Text textAlign={'center'}> Sua sacola está vazia </Text>}
        </Stack>
        <Stack padding="4" bg="white">
          <Stack spacing="4">
            <Box display="flex" justifyContent="space-between">
              <Text fontWeight="bold"> Total </Text>
              <Text fontWeight="bold"> {cartTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}  </Text>
            </Box>
            <Button
              variant='outline'
              color="#B6001F"
              borderColor="#B6001F"
              onClick={() => resetCart()}
            >
              <Stack direction="row" alignItems="center">
                <Trash2 size={16} />
                <Text> Limpar sacola </Text>
              </Stack>
            </Button>
            <Button
              variant='solid'
              width="100%"
              bg='#B6001F'
              color="white"
              onClick={async () => {
                setIsConfirming(true)
                await pushOrder()
                resetCart()
              }}
            >
              Confirmar
            </Button>
          </Stack>
        </Stack>
      </Stack >
    </>
  )
}

const Cart = () => {
  const [isConfirming, setIsConfirming] = useState(false)

  if (isConfirming) {
    return <Confirmation />
  }

  return (
    <CartList setIsConfirming={setIsConfirming} />
  )
}

export default Cart