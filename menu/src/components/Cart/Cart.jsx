import { Stack, Text, Divider, Heading, Button } from '@chakra-ui/react'
import CartItem from './CartItem'
import Header from '../Header/Header'
import { useCart } from '../../hooks/Cart'

const Cart = () => {
  const { cart, removeItem, addItem } = useCart()

  return (
    <>
      <Header title={'Sacola'} />
      <Stack>
        <Stack padding="5">
          {cart.items.map(item => <CartItem cardsDrink={item} />)}
        </Stack>
        <Stack padding="5">
          <Heading fontSize="16" fontWeight="bold"> Resumo dos valores  </Heading>
          <Text fontSize="12" color="#A6A5A5"> Subtotal </Text>
          <Text fontSize="12" color="#A6A5A5"> Itens em promoção </Text>
          <Divider />
          <Text fontSize="12" fontWeight="bold"> Total </Text>
        </Stack>
        <Stack alignSelf='center'>
          <Button variant='solid' width="328px" height="46px" bg='#B6001F' color="#FFF" borderRadius="8px" textAlign="center">
            <Text> Confirmar </Text>
          </Button>
        </Stack>
      </Stack>
    </>
  )
}

export default Cart