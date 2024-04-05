import { Avatar, Stack, Text, Image, Link, Button } from '@chakra-ui/react'
import { useCart } from '../../hooks/Cart'

const header = ({ title }) => {
  const { toggleCart } = useCart()
  return (
    <>
      <Stack
        width="100%"
        color="#FFF"
        height="110px"
        bgGradient='linear(#50000E 0%, #B6001F 100%)'
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
        p='4'
      >
        <Link href='/app'>
          <Avatar src='/restaurant-pfp.png' />
        </Link>
        <Text> {title} </Text>
        <Button display='flex' flexDirection='row' gap='2' alignItems='center' bg='transparent' color='white' onClick={() => toggleCart()}>
          <Image src='/bag.png' boxSize='6' />
          <Stack spacing='0'>
            <Text fontSize='xs'>R$ 0, 00</Text>
            <Text fontSize='xs'>0 items</Text>
          </Stack>
        </Button>
      </Stack>
    </>
  )
}

export default header