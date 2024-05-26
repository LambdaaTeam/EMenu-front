import { Avatar, Stack, Text, Image, Button } from '@chakra-ui/react'
import { useCart } from '../../hooks/Cart'

const header = ({ title }) => {
  const { toggleCart, setCartDisplaying, cart } = useCart()

  return (
    <Stack
      width="100%"
      color="#FFF"
      bg="#B6001F"
      display='flex'
      flexDirection='row'
      alignItems='center'
      padding='1rem'
      spacing={0}
    >
      <Stack display='flex' flexDirection='row' alignItems='center' spacing={4} onClick={() => setCartDisplaying(false)} cursor='pointer'>
        <Avatar src='/restaurant-pfp.png' />
        <Text fontSize='lg' fontWeight='bold'>
          {title}
        </Text>
      </Stack>
      <Button
        display='flex'
        flexDirection='row'
        bg='transparent'
        color='white'
        _hover={{ bg: "transparent" }}
        _active={{ bg: "transparent" }}
        onClick={() => toggleCart()}
        marginLeft='auto'
      >
        <Image src='/bag.png' />
        <Stack spacing='0'>
          <Text fontSize='xs'>R$ 0,00</Text>
          <Text fontSize='xs'> {cart.length} items</Text>
        </Stack>
      </Button>
    </Stack>
  )
}

export default header