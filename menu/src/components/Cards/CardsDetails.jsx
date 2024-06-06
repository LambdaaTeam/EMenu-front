import {
    Card,
    CardBody,
    CardFooter,
    Button,
    Heading,
    Stack,
    Text,
    Textarea
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import { useDetails } from '../../hooks/Details'
import { useCart } from '../../hooks/Cart'
import { useState } from 'react'
import ImageWithFallback from '../ui/ImageFallback'

const CardsDetails = ({ toggleDetails }) => {
    const { details, setDetails } = useDetails();
    const { addItem } = useCart();
    const { name, price, image, description } = details;
    const [observation, setObservation] = useState('')
    return (
        <Card h='100%' w='100%' zIndex='999' position="relative" p={4}>
            <Button variant="unstyled" position="absolute" right="0" top="0" onClick={() => {
                setDetails({ name: '', price: '', image: '', description: '' })
                toggleDetails()
            }}>
                <CloseIcon />
            </Button>
            <CardBody>
                <Stack spacing={4} w='100%'>
                    <Heading size='md' fontSize="20px" w='100%'> {name} </Heading>
                    <ImageWithFallback
                        src={image}
                        borderRadius='lg'
                        objectFit='cover'
                        boxSize='300px'
                        w='100%'
                    />
                    <Heading size='md' w='100%'> Descrição: </Heading>
                    <Text w='100%'>
                        {description}
                    </Text>
                    <Text w='100%'>
                        Alguma observação?
                    </Text>
                    <Textarea value={observation} onChange={(e) => setObservation(e.target.value)} placeholder='Ex: Trazer copo com gelo, etc.' w='100%' />
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