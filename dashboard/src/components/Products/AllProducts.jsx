import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Switch, IconButton } from "@chakra-ui/react";
import { CloseIcon, EditIcon } from '@chakra-ui/icons'

const AllProducts = () => {
    return (
        <TableContainer>
            <Table variant='simple'>
                <Thead color="#84919A" >
                    <Tr>
                        <Th textAlign="center" > ID </Th>
                        <Th textAlign="center"> NOME DO PRODUTO </Th>
                        <Th textAlign="center"> QUANTIDADE </Th>
                        <Th textAlign="center"> PREÇO </Th>
                        <Th textAlign="center"> CATEGORIA </Th>
                        <Th textAlign="center"> DESCRIÇÃO </Th>
                        <Th textAlign="center"> STATUS </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td textAlign="center" fontSize="14px"> 01 </Td>
                        <Td textAlign="center" fontSize="14px"> Coca-cola 2l </Td>
                        <Td textAlign="center" fontSize="14px"> 01 </Td>
                        <Td textAlign="center" fontSize="14px"> R$6,00 </Td>
                        <Td textAlign="center" fontSize="14px"> Bebida  </Td>
                        <Td textAlign="center" fontSize="14px"> Descrição </Td>
                        <Td textAlign="center" fontSize="14px"> <Switch colorScheme='green' size='lg' /> </Td>
                        <Td textAlign="center" >
                            <IconButton
                                isRound={true}
                                variant='solid'
                                colorScheme='teal'
                                aria-label='Done'
                                fontSize='px'
                                icon={<CloseIcon />}
                            />
                            <IconButton
                                isRound={true}
                                variant='solid'
                                colorScheme='teal'
                                aria-label='Done'
                                fontSize='px'
                                icon={<EditIcon />}
                            />
                        </Td>
                    </Tr>
                </Tbody>

            </Table>
        </TableContainer>
    )
}

export default AllProducts