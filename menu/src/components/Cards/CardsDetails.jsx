import {
    Card, Heading, CardBody, CardFooter, ButtonGroup, Button, Textarea,
    Stack, Text, Image
    // , IconButton, AddIcon
} from '@chakra-ui/react'

const CardsDetails = () => {
    return (
        <Card width="360px" height="800px" variant="unstyled" padding="15px" >
            <CardBody >
                <Stack textAlign="center" width="360px" height="431px" bg="#F8F8F8" marginTop="67px">
                    <Heading size='md' fontSize="20px"> Coca-Cola 2L </Heading>
                    <Image
                        src='https://i.pinimg.com/originals/52/09/77/520977593cb52286251d0de3ca50751d.png'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                </Stack>

                <Stack mt='6' spacing='3'>
                    <Heading size='md' fontSize="16px" color="#8A8A8A" > Descrição: </Heading>
                    <Text color="#A8A8A8" fontSize="12px">
                        Refrigerante Gaseificado
                        Artesanal: Uma indulgência refrescante, nosso refrigerante
                        artesanal é uma fusão única de sabores vibrantes e bolhas suaves,
                        oferecendo uma experiência de sabor efervescente que vai além
                    </Text>
                    <Text color='#8A8A8A' fontSize='16px'>
                        Alguma observação?
                    </Text>
                    <Textarea width="328px" height="40px" color="#CDCDCD" placeholder='Ex: Trazer copo com gelo, etc.' />
                </Stack>
            </CardBody>
            <CardFooter>

                <Button variant='solid' width="328px" height="46px" bg='#B6001F' color="#FFF" borderRadius="8px" justifyContent="space-between">
                    <Text> Adicionar </Text>
                    <Text> R$3,00</Text>
                </Button>


            </CardFooter>
        </Card>
    )
}

export default CardsDetails