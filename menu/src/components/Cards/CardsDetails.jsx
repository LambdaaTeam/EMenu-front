import {
    Card,
    CardBody,
    CardFooter,
    Button,
    Heading,
    Image,
    Stack,
    Text,
    Textarea
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import { useState } from 'react';
import { useDetails } from '../../hooks/Details'
import { useCart } from '../../hooks/Cart'

const CardsDetails = ({ toggleDetails }) => {
    const { details, setDetails } = useDetails();
    const { addItem } = useCart()
    const { name, price, image, description } = details;
    return (
        <Card variant="unstyled" padding="15px" >
            <Button variant="unstyled" position="absolute" right="0" top="0" onClick={() => {
                setDetails({ name: '', price: '', image: '', description: '' })
                toggleDetails()
            }}>
                <CloseIcon />
            </Button>
            <CardBody >
                <Stack textAlign="center" width="360px" height="431px" bg="#F8F8F8" marginTop="67px">
                    <Heading size='md' fontSize="20px"> {name} </Heading>
                    <Image
                        src={image}
                        borderRadius='lg'
                    />
                </Stack>

                <Stack mt='6' spacing='3' padding='3'>
                    <Heading size='md' fontSize="16px" color="#8A8A8A" > Descrição: </Heading>
                    <Text color="#A8A8A8" fontSize="12px">
                        {description}
                    </Text>

                    <Text color='#8A8A8A' fontSize='16px'>
                        Alguma observação?
                    </Text>
                    <Textarea name="observ" w="328px" h="40px" color="#CDCDCD" placeholder='Ex: Trazer copo com gelo, etc.' />
                </Stack>
            </CardBody>
            <CardFooter padding='3'>

                <Button variant='solid' width="328px" height="46px" bg='#B6001F' color="#FFF" borderRadius="8px" justifyContent="space-between" onClick={() => addItem(details)}>
                    <Text> Adicionar </Text>
                    <Text> {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </Text>
                </Button>


            </CardFooter>
        </Card>
    )
}

export default CardsDetails