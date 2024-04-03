import { Avatar, Stack, Text } from '@chakra-ui/react'
import './Headerr.css'
const header = () => {
  return (
    <>
    <Stack width="100%" color="#FFF" height="110px" textAlign="center" bgGradient='linear(#50000E 0%, #B6001F 100%)'>
    <Avatar width="50px" height="50px" borderRadius="30px" name='Pizzaria' marginTop="34px" marginLeft="16px" src='./estabelecimento.png' />
      <Text marginTop="-34px"> Pizzaria KB </Text>
      
    
    </Stack> 
    </>
    
  )
}

export default header