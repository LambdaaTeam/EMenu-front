import { Stack, Text, Divider, Heading, Button, Box } from '@chakra-ui/react'
import CartItem from './CartItem'
import CardsFoods from '../Cards/CardsFoods'
import Header from '../Header/Header'
import { useCart } from '../../hooks/Cart'


const Cart = () => {
  const { cart, cartTotal } = useCart()

  return (
    <>
      <Header title={'Sacola'} />
      <Stack display="flex" flexDirection="column" bg="#F3F3F3" justifyContent="space-between">
        <Stack bg="#fff" h="10" p="2">
          <Box display="flex" justifyContent="space-between" marginRight="6">
            <Text fontSize="18" color="#B6001F" fontWeight="bold"> Kauan Boaro </Text>
            <Text fontSize="18" color="#B6001F" fontWeight="bold"> Mesa 10 </Text>
          </Box>
        </Stack>
        <Box>
          <Button _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            _focus={{ boxShadow: "none" }}
            p={0}
            cursor={"pointer"}
            textAlign={"rigth"}
            w={"20%"}
            h={"100%"}
            bg={"transparent"}
            left="73%">
            <Text fontSize="12" color="#B6001F" textDecoration="underline"> Limpar tudo </Text></Button>
        </Box>
        <Stack padding="5" bg="#fff">
          {cart.items.map(item => <CartItem key={item.id} cardsDrink={item} />)}
        </Stack>
        <Stack padding="5" bg="#fff">
          <Stack spacing="4">
            <Box display="flex" justifyContent="space-between">
              <Text fontWeight="bold"> Total </Text>
              <Text fontWeight="bold"> {cartTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}  </Text>
            </Box>
            <Button variant='solid' width="100%" bg='#B6001F' color="#FFF">
              <Text> Confirmar </Text>
            </Button>
          </Stack>
        </Stack>
      </Stack >
    </>
  )
}

export default Cart