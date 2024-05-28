import {
	Stack,
	Box,
	Text,
	Heading,
	Radio,
	Divider,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
	Button,
} from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";

const Payments = () => {
	return (
		<Stack display="flex" direction="row" w="100%" h="100%">
			<Stack>
				<Box
					textAlign="left"
					p="10px"
					marginLeft="30px"
					w="500px"
					display="flex"
					direction="row"
					justifyContent="space-between"
				>
					<Heading color="#B6001F"> Mesa 20 </Heading>
					<Button color="#B6001F" w="181px" bg="transparent" marginTop="25px">
						<AddIcon color="#B6001F" /> Adicionar Itens
					</Button>
				</Box>
				<Divider bg="#D9D9D9" />
				<TableContainer>
					<Table variant="simple">
						<Thead color="#84919A">
							<Tr>
								<Th textAlign="center"> Produto </Th>
								<Th textAlign="center"> Nome do produto </Th>
								<Th textAlign="center"> Quantidade </Th>
								<Th textAlign="center"> Preço do produto </Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr bg="#F6F6F6">
								<Td textAlign="center" fontSize="14px">
									01
								</Td>
								<Td textAlign="center" fontSize="14px">
									Pizza 4 Queijos
								</Td>
								<Td textAlign="center" fontSize="14px">
									01
								</Td>
								<Td textAlign="center" fontSize="14px">
									R$50,00
								</Td>
							</Tr>
						</Tbody>
					</Table>
				</TableContainer>
				<Text textAlign="right" fontWeight="bold">
					Total a pagar: R$200,00
				</Text>
			</Stack>
			<Stack h="100vh" textAlign="center" bg="#FAFAFA">
				<Box w="500px">
					<Heading marginTop="65px" color="#B6001F">
						PAGAMENTO
					</Heading>
					<Text marginTop="15px"> Selecione o método de pagamento</Text>
					<Stack textAlign="center" p="25px">
						<Radio name="1" colorScheme="red">
							Cartão de crédito
						</Radio>
						<Radio name="1" colorScheme="red">
							Cartão de debito
						</Radio>
						<Radio name="1" colorScheme="red" defaultChecked>
							Dinheiro
						</Radio>
						<Radio name="1" colorScheme="red" defaultChecked>
							Pix
						</Radio>
					</Stack>
					<Button
						marginTop="45px"
						bg="#B6001F"
						color="white"
						_hover={"#B6001F"}
						w="480px"
					>
						Ir para o pagamento
					</Button>
				</Box>
			</Stack>
		</Stack>
	);
};

export default Payments;
