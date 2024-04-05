import {
    Card, Icon, Heading, CardBody, CardFooter, Badge,
    Stack, Text, Image
    // , IconButton, AddIcon
} from '@chakra-ui/react'


const CardsFoods = ({ cardsFood }) => {
    const { name, price, image, description } = cardsFood;
    return (
        <Card h="42"
            direction={{ base: 'column', sm: 'row' }}
            variant="unstyled"
        >
            <Image
                objectFit='cover'
                width="80px" height="81px"
                src={image}
            />

            <Stack bg="#FFF" textAlign="left" display="flex">
                <CardBody  >
                    <Heading fontSize="14px"> {name} </Heading>
                    <Stack display="flex">
                        <Icon viewBox='0 0 200 200' boxSize="4px" color='red.500' >
                            <path
                                fill='currentColor'
                                d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                            />
                        </Icon>
                        <Text fontSize="10px" color="#939393" >
                            {description}
                        </Text>
                        <Text textAlign="right" bottom="25px" color="#000" fontWeight="bold" fontFamily="12px"> R$ {price} </Text>
                    </Stack>
                </CardBody>
            </Stack>
        </Card>



    )
}

export default CardsFoods