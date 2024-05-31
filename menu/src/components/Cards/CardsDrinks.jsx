import {
    Card,
    Image,
    Stack,
    Text,
    Icon
} from '@chakra-ui/react'
import { useDetails } from '../../hooks/Details';

const CardsDrinks = ({ cardsDrink, toggleDetails }) => {
    const { name, price, image, description } = cardsDrink;
    const { setDetails } = useDetails()

    return (
        <Card
            display='flex'
            flexDir='row'
            gap='4'
            borderRadius='24'
            boxShadow='none'
            my='2'
            w='100%'
            cursor='pointer'
            onClick={() => {
                setDetails(cardsDrink)
                toggleDetails()
            }}
        >
            {/* imagem temporária */}
            <Image src="https://cdn.pixabay.com/photo/2024/05/09/04/11/flamingo-8749724_1280.jpg" objectFit='fill' boxSize='20' />
            <Stack mt='2'>
                <Text
                    fontSize='14'
                    fontWeight='bold'
                >
                    {name}
                </Text>
                <Stack direction='row' gap='1'>
                    <Icon
                        boxSize='2'
                        viewBox='0 0 200 200'
                        color='red.500'
                        alignSelf='center'
                    >
                        <path
                            fill='currentColor'
                            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                        />
                    </Icon>
                    <Text
                        fontSize='10'
                        color='gray.500'
                        maxW='36'
                        noOfLines='2'
                    >
                        {description}
                    </Text>
                </Stack>
            </Stack>
            <Text
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

export default CardsDrinks