import { Stack, Text, Image, IconButton, Box, } from '@chakra-ui/react'
import { SmallAddIcon, MinusIcon } from '@chakra-ui/icons'
import { useCart } from '../../hooks/Cart'

const CartItem = ({ cardsDrink }) => {
    const { name, image, description, price, quantity, id } = cardsDrink
    const { removeItem, addItem } = useCart()

    const priceTotal = price * quantity

    return (
        <Box display='flex' flexDirection='row' justifyContent='space-between' gap='4'>
            <Box display='flex' flexDirection='column' gap='2' alignItems='center' w='32'>
                <Image src={image} objectFit='fill' />
                <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" w='100%'>
                    <IconButton onClick={() => removeItem(id)}
                        variant='outline'
                        bg='#B6001F'
                        color='#fff'
                        fontSize='10px'
                        boxSize={5}
                        size="xs"
                        icon={<MinusIcon />}
                    />
                    <Text textAlign="center"> {quantity} </Text>
                    <IconButton onClick={() => addItem(cardsDrink)}
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
            <Stack spacing='0' w='100%' direction={'row'}>
                <Stack>
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
                    <Text
                        fontSize='12'
                        maxW='36'
                        noOfLines='2'
                    >
                        Ainda nada
                    </Text>
                </Stack>
                <Text
                    fontSize="18"
                    alignSelf='center'
                    fontStyle='bold'
                    fontWeight='bold'
                    ml='auto'
                    mr='4'
                >
                    {priceTotal?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </Text>
            </Stack>
        </Box>
    )
}

export default CartItem