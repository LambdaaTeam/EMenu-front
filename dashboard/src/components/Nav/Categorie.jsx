import {
    Stack, Heading, Table, Thead, Box, Button, FormControl, Input,
    PopoverContent, Popover, PopoverTrigger, PopoverArrow, FormLabel,
    ButtonGroup, PopoverCloseButton, IconButton, Tbody, Tr, Th, Td, TableContainer
} from "@chakra-ui/react";
import FocusLock from "react-focus-lock"
import { AddIcon, EditIcon } from "@chakra-ui/icons";
import React from "react";
import { useDisclosure } from '@chakra-ui/react';

const TextInput = React.forwardRef((props, ref) => {
    return (
        <FormControl>
            <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
            <Input ref={ref} id={props.id} {...props} />
        </FormControl>
    )
})
const Form = ({ firstFieldRef, onCancel }) => {

    return (
        <Stack spacing={4}>
            <TextInput
                label='Cadastrar categoria'
                id='new-categorie'
                ref={firstFieldRef}
                placeholder="Nome categoria"
            />
          
            <ButtonGroup display='flex' justifyContent='flex-end'>
                <Button variant='outline' onClick={onCancel}>
                    Cancelar
                </Button>
                <Button isDisabled bg="#B6001F"  _hover={"#B6001F"} color="white">
                    Cadastrar
                </Button>
            </ButtonGroup>
        </Stack>
    )
}
const Categorie = () => {
    const { onOpen, onClose, isOpen } = useDisclosure()
    const firstFieldRef = React.useRef(null)

    return (
        <Stack>
            <Box display="flex" justifyContent="space-between">
                <Heading > Categorias </Heading>
                <Popover
                    isOpen={isOpen}
                    initialFocusRef={firstFieldRef}
                    onOpen={onOpen}
                    onClose={onClose}
                    placement='right'
                    closeOnBlur={false}
                >
                    <PopoverTrigger>
                        <Button bg="#B6001F" _hover={"#B6001F"} color="white" marginTop="25" marginRight="35"> <AddIcon fontSize={14} /> Criar pagamento </Button>
                    </PopoverTrigger>
                    <PopoverContent p={5}>
                        <FocusLock returnFocus persistentFocus={false}>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <Form firstFieldRef={firstFieldRef} onCancel={onClose} />
                        </FocusLock>
                    </PopoverContent>
                </Popover>
            </Box>
            <TableContainer>
                <Table variant='simple'>
                    <Thead color="#84919A" >
                        <Tr >
                            <Th textAlign="center" > ID </Th>
                            <Th textAlign="center"> NOME CATEGORIA </Th>
                        </Tr>
                    </Thead>
                    <Tbody>

                        <Tr>
                            <Td textAlign="center" fontSize="14px"> 01 </Td>
                            <Td textAlign="center" fontSize="14px"> Drinks </Td>

                        </Tr>

                    </Tbody>

                </Table>
            </TableContainer>
        </Stack>
    )
}

export default Categorie



