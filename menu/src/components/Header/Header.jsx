import { Avatar, Stack, Text, Button, Image, Link } from '@chakra-ui/react'

const header = () => {
  return (
    <>
      <Stack width="100%" color="#FFF" height="110px" textAlign="center" bgGradient='linear(#50000E 0%, #B6001F 100%)' >
        <Avatar width="50px" height="50px" borderRadius="30px" name='Pizzaria' marginTop="34px" marginLeft="16px" src='./estabelecimento.png' />
        <Text marginTop="-34px"> Pizzaria KB </Text>
        <Link href="../Cart/Cart.jsx" textAlign="right">
          <Image objectFit='cover' width="24px" height="24px" src='../SVG.png' marginTop="-34px" marginLeft="274px" />
          <Text fontSize="10px" marginRight="18" marginTop="-25px"> R$ 0, 00 </Text>
          <Text fontSize="10px" marginRight="18" marginTop="-5px"> 0 items </Text>
        </Link>
      </Stack>
    </>
  )
}

export default header