import { Stack, Text, Divider, Heading, Button, Box } from '@chakra-ui/react'
import CartItem from './CartItem'
import CardsFoods from '../Cards/CardsFoods'
import Header from '../Header/Header'
import { useCart } from '../../hooks/Cart'


const Cart = () => {
  const { cart, removeItem, addItem } = useCart()


  const subPrice = cart.items.reduce((acc, item) => {
      return item.price + acc;
  }, 0);

  const totalPrice = cart.items.reduce((acc, item) => {
    return item.price + acc;
   }, 0);

  return (
    <>
      <Header title={'Sacola'} />
      <Stack display="flex" flexDirection="column" bg="#F3F3F3" justifyContent="space-between">
        <Stack bg="#fff" h="10" p="2" >
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
          {cart.items.map(item => <CartItem cardsDrink={item} />)}
        </Stack>
        {/* <Stack> 
          <CardsFoods/>
        </Stack> */}
        <Stack padding="5" bg="#fff">
           <Stack> 
          <Heading fontSize="16" fontWeight="bold"> Resumo dos valores  </Heading>
          <Box display="flex" justifyContent="space-between"> 
          <Text fontSize="12" color="#A6A5A5"> Subtotal </Text>
          <Text fontSize="12" color="#A6A5A5"> {subPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}  </Text>
          </Box>
          <Box>
          <Text fontSize="12" color="#A6A5A5"> Itens em promoção </Text>
          </Box>
          <Divider />
          <Box display="flex" justifyContent="space-between"> 
          <Text fontSize="12" fontWeight="bold"> Total </Text>
          <Text fontSize="12" fontWeight="bold"> {totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}  </Text>
          </Box>
        </Stack>
        <Stack alignSelf='center' marginTop="70px">
          <Button variant='solid' width="328px" height="46px" bg='#B6001F' color="#FFF" borderRadius="8px" textAlign="center">
            <Text> Confirmar </Text>
          </Button>
        </Stack>
      </Stack>
      </Stack>
    </>
  )
}

export default Cart