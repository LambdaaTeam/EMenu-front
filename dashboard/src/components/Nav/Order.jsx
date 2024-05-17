import { Stack, Heading, Table, Thead, Badge, Tbody, Tr, Th, Td, TableContainer, Switch, IconButton } from "@chakra-ui/react";
import { Check } from "lucide-react";
const Order = () => {
    return (
        <Stack> 
        <Heading > Pedidos </Heading>
        <TableContainer>
            <Table variant='simple'>
                <Thead color="#84919A" >
                    <Tr >
                        <Th textAlign="center" > NOME DO CLIENTE </Th>
                        <Th textAlign="center"> CPF DO CLIENTE </Th>
                        <Th textAlign="center"> MÉTODO DE PAGAMENTO </Th>
                        <Th textAlign="center"> PREÇO </Th>
                        <Th textAlign="center"> DATA </Th>
                        <Th textAlign="center"> STATUS </Th>
                    </Tr>
                </Thead>
                <Tbody>

                    <Tr>
                        <Td textAlign="center" fontSize="14px"> Kauan Boaro </Td>
                        <Td textAlign="center" fontSize="14px"> 123.123.123-12 </Td>
                        <Td textAlign="center" fontSize="14px"> Cartão de crédito </Td>
                        <Td textAlign="center" fontSize="14px"> R$200,00 </Td>
                        <Td textAlign="center" fontSize="14px"> 03/04/2024  </Td>
                        <Td textAlign="center" fontSize="14px"> <Badge bg='#EBFFF1' color="#119C2B" >  Sucesso </Badge> </Td>
                        
                    </Tr>

                </Tbody>

            </Table>
        </TableContainer>
        </Stack>
    )
}

export default Order