import {
    Card, Button, Heading, CardBody, CardFooter, Badge,
    Stack, Text, Image
    // , IconButton, AddIcon
} from '@chakra-ui/react'


const CardsSeller = ({ cards }) => {
    const { name, price, image } = cards;
    return (
        <>

            <Card w="124px" height="156px" border-radius="8px" >
                <CardBody padding="1.6em">

                    <Image margin-left="20px"
                        src={image} objectFit="cover"
                    />

                    {/* <IconButton
                        isRound={true}
                        variant='solid'
                        colorScheme='teal'
                        fontSize='20px'
                        icon={<AddIcon />}
                    /> */}
                    <Button colorScheme='blue' textAlign="right" borderRadius="full" position="absolute" bottom="2.5em" left="4.4em">

                    </Button>
                    <Stack textAlign="center" padding="10px">
                        <Heading fontSize="12px"> {name} </Heading>

                    </Stack>
                    <Stack marginLeft="30px" textAlign="right" position="absolute" left="2.3em" width="58px" height="20px">
                        <Text color='#1A1A1A' fontWeight="bold" bg="#EFEFEF" borderRadius="16px 0px 8px 0px" fontSize='10px' textAlign="center">
                            R$ {price}
                        </Text>
                    </Stack>
                </CardBody>

                <CardFooter>




                </CardFooter>
            </Card>


        </>
    )
}

export default CardsSeller