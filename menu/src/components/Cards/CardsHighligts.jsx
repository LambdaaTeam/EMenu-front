import {
    Card, Button, Heading, CardBody, CardFooter, Badge,
    Stack, Text, Image , IconButton
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'


const CardsHighligts = ({ card }) => {
    const { name, price, image } = card;
    return (
        <>
            <Card w="124px" height="156px" border-radius="8px" >
                <CardBody padding="1.6em">
                    <Badge variant='solid' colorScheme='green' fontSize='0.5em' position="absolute" padding="1.7px" left="1em" top="0.9em" borderRadius='full' width="22px" height="18.95px" >
                        -50%
                    </Badge>
                    <Image margin-left="20px"
                        src={image} objectFit="cover"
                    />
                    
                    <IconButton bg='white' boxSize="10" boxShadow= "0px 4px 4px 0px #cfcecef9" color="#B6001F" textAlign="right" borderRadius="full" position="absolute" bottom="2.5em" left="4.4em" icon={<AddIcon />}>

                    </IconButton>
                    <Stack textAlign="center" padding="10px">
                        <Heading fontSize="12px"> {name} </Heading>

                    </Stack>
                    <Stack>
                        <Text color="#ACA7A6" position="absolute" bottom="1.5em" left="11em" textDecoration="line-through" borderRadius="16px 0px 8px 0px" fontSize='8px' >
                            R$ {price}
                        </Text>
                    </Stack>
                    <Stack marginLeft="30px" textAlign="right" fontWeight="bold" position="absolute" left="2.3em" width="58px" height="20px">
                        <Text color='green' bg="#EFEFEF" borderRadius="16px 0px 8px 0px" fontSize='10px' textAlign="center">
                            R$ {price}
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
        </>
    )
}

export default CardsHighligts