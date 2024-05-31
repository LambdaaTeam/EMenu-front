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
import { useDetails } from '../../hooks/Details'
import { useCart } from '../../hooks/Cart'
import { useState } from 'react'

const CardsDetails = ({ toggleDetails }) => {
    const { details, setDetails } = useDetails();
    const { addItem } = useCart();
    const { name, price, image, description } = details;
    const [observation, setObservation] = useState('')
    return (
        <Card h='100%' w='100%' zIndex='999'>
            <Button variant="unstyled" position="absolute" right="0" top="0" onClick={() => {
                setDetails({ name: '', price: '', image: '', description: '' })
                toggleDetails()
            }}>
                <CloseIcon />
            </Button>
            <CardBody>
                <Stack spacing={4}>
                    <Heading size='md' fontSize="20px"> {name} </Heading>
                    <Image
                        src={image}
                        borderRadius='lg'
                    />
                    <Heading size='md'> Descrição: </Heading>
                    <Text >
                        {description}
                    </Text>
                    <Text >
                        Alguma observação?
                    </Text>
                    <Textarea value={observation} onChange={(e) => setObservation(e.target.value)} placeholder='Ex: Trazer copo com gelo, etc.'  />
                </Stack>
            </CardBody>
            <CardFooter>
                <Button w={'100%'} bg='#B6001F' color="#FFF" onClick={() => {
                    addItem({ ...details, observation })
                    setDetails({ name: '', price: '', image: '', description: '' })
                    toggleDetails()
                }} flexDirection='row' justifyContent='space-between'>
                    <Text> Adicionar </Text>
                    <Text> {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </Text>
                </Button>
            </CardFooter>
        </Card>
    )
}

export default CardsDetails