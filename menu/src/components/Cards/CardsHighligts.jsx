import {
    Card, Heading, CardBody, Badge,
    Stack, Text, Image
} from '@chakra-ui/react'


const CardsHighligts = ({ card, isPromo, onClick }) => {
    const { name, price, image } = card;
    return (
        <Card onClick={onClick} cursor='pointer' minW='100px' justifyContent='center' alignItems='center'>
            <CardBody>
                {!isPromo && (
                    <Badge
                        variant='solid'
                        colorScheme='green'
                        position="absolute"
                        left="1em"
                        top="1em"
                        borderRadius="full"
                        height="20px"
                        width="38px"
                    >
                        <Text color='white' textAlign="center" marginTop="1px" ml={"1px"}>
                            90%
                        </Text>
                    </Badge>
                )}
                <Image
                    src={image}
                    objectFit="cover"
                />
                <Stack spacing={0} marginTop="1em">
                    <Heading fontSize="12px"> {name} </Heading>
                    <Text fontSize="12px"> R$ {price} </Text>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default CardsHighligts
