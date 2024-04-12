import { Stack, Text, Image, Card, IconButton, Box, Button } from '@chakra-ui/react'
import { SmallAddIcon, MinusIcon } from '@chakra-ui/icons'
import { useCart } from '../../hooks/Cart'

const CartItem = ({ cardsDrink }) => {
    const { name, image, description, price } = cardsDrink
    const { cart, removeItem, addItem } = useCart()

    return (
        <Card display='flex' mb="5" flexDir='row' gap='4' borderRadius='24' boxShadow='none' my='2'>
            {/* {cardsDrink.items.map((item) => (<CardsDetails cardDetails={item} />))} */}
            <Box display="inline-block">
            <Image src={image} objectFit='fill' boxSize='20' />
            <Box display="flex" p="1" marginLeft="4px"> 
               <IconButton onClick={() => removeItem(cart.items.id)}
                    variant='outline'
                    bg='#B6001F'
                    color='#fff'
                    fontSize='10px'
                    boxSize={5}
                    size="xs"
                    icon={<MinusIcon />}
                />
                <Text  marginLeft="1" textAlign="center" bottom="5"> 1 </Text>

                 <IconButton onClick={() => addItem(cart)}
                    marginLeft="1"
                    variant='outline'
                    bg='#B6001F'
                    color='#fff'
                    fontSize='20px'
                    boxSize={5}
                    size="xs"
                    icon={<SmallAddIcon />}
                />
             </Box>
            </Box>

            <Stack mt='2' spacing='0'>
                <Text
                    fontSize='16'
                    fontWeight='bold'
                >
                    {name}
                </Text>
                <Text
                    fontSize='12'
                    color='gray.500'
                    maxW='36'
                    noOfLines='2'
                >
                    {description}
                </Text>
                <Stack direction='row' gap='1'>
                    <Text
                        fontSize='12'
                        maxW='36'
                        noOfLines='2'
                    >
                        Ainda nada
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
                {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </Text>

        </Card>

    )
}

export default CartItem