import { Grid, GridItem, Text, Badge, Box, Stack, Heading, HStack, Button } from "@chakra-ui/react";
import CardClient from "./CardClient";



const Clients = () => {
    return (
        <Stack>
            <Box textAlign="left" p="10px" marginLeft="30px">
                <Heading color="#B6001F"> Mesa 20 </Heading>
                <Text> Selecione o cliente para ir para o pagamento </Text>
            </Box>
            <Grid templateColumns="repeat(3, 1fr)" templateRows='repeat(1, 1fr)' textAlign="center">

                <Box textAlign="center" bg="#5c9e9e" height="100vh">
                    <GridItem height="100%">
                        <CardClient/>
                    </GridItem>
                </Box>

                <Box textAlign="center" bg="#205e5e" height="100vh">
                    <GridItem height="100%">
                        {/* <Card /> */}

                    </GridItem>
                </Box>

                <Box textAlign="center" bg="#053333" height="100vh">
                    <GridItem height="100%">
                        {/* <Card /> */}
                    </GridItem>
                </Box>

            </Grid>
            <HStack justify="right">
                {/* <CardClient/> */}
                <Box as="footer">
                    <Button
                        w={240}
                        p="6"
                        type="submit"
                        bg="#B6001F"
                        color="white"
                        fontWeight="bold"
                        fontSize="xl"
                        mt="2"
                        _hover={{ bg: "#830218" }}
                    >
                        Ir para o pagamento
                    </Button>
                </Box>
            </HStack>
        </Stack>
    )
}

export default Clients