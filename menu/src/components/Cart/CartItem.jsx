import { Stack, Text, Image, Card} from '@chakra-ui/react'

const CartItem = ({ cardsDrink }) => {
    
  return (
   
    
    <Card display='flex' flexDir='row' gap='4' borderRadius='24' boxShadow='none' my='2'>
            {/* {cardsDrink.items.map((item) => (<CardsDetails cardDetails={item} />))} */}
            <Image src='' objectFit='fill' boxSize='20' />
            <Stack mt='2'>
                <Text
                    fontSize='16'
                    fontWeight='bold'
                >
                    Pizza 4 Queijo
                </Text>
                <Stack direction='row' gap='1'>
                    
                    
                    <Text
                        fontSize='12'
                        maxW='36'
                        noOfLines='2'
                    >
                        Observação:
                    </Text>
                </Stack>
            </Stack>
            <Text
                fontSize="18"
                alignSelf='center'
                fontStyle='bold'
                fontWeight='bold'
                ml='auto'
                mr='4'
            >
              R$ 2,00
                {/* {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} */}
            </Text>
            
        </Card>
   
  )
}

export default CartItem