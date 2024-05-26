import React from 'react'
import {
    Box,
    Button,
    Text,
    VStack,
    Heading,
    Center,
    theme
} from '@chakra-ui/react'
import {
    CheckCircle
} from 'lucide-react'
import { useCart } from '../../hooks/Cart'

const Confirmation = () => {
    const {
        toggleCart,
        resetCart
    } = useCart()

    return (
        <Box>
            <Center h="100vh">
                <VStack spacing={4}>
                    <CheckCircle size={64} color={theme.colors.green[500]} />
                    <Heading> Pedido confirmado! </Heading>
                    <Text> Seu pedido foi confirmado com sucesso! </Text>
                    <Button
                        colorScheme="blue"
                        onClick={() => {
                            toggleCart()
                            resetCart()
                        }}
                    >
                        Voltar para o início
                    </Button>
                </VStack>
            </Center>
        </Box>
    )
}

export default Confirmation