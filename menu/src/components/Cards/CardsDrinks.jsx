import {
    Card, CardBody, Stack, Text, Image, Link
    // , IconButton, AddIcon
} from '@chakra-ui/react'


const CardsDrinks = ({ cardsDrink }) => {
    const { name, price, image } = cardsDrink;
    return (
        <>
        
        <Link href='../Cards/CardsDetails.jsx'>
            <Card w="156px" height="100px" border-radius="8px" >
                <CardBody textAlign="center" display="flex">


                <Image
                padding="2px"
                    objectFit='cover'
                    width="47px" height="87px"
                    src={image}
                />

                    <Stack marginLeft="30px" textAlign="right" fontWeight="bold" width="58px" height="20px">
                        <Text bg="#EFEFEF" borderRadius="16px 0px 8px 0px" fontSize='10px' textAlign="center">
                            R$ {price}
                        </Text>
                    </Stack>
                </CardBody>
               
               
            </Card>
            
            <Text fontSize="12px"> {name} </Text>
            </Link>
        </>
    )
}

export default CardsDrinks