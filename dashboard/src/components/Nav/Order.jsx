import {
	Stack,
	Heading,
	Table,
	Thead,
	Badge,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
} from "@chakra-ui/react";

const Order = () => {
	return (
		<Stack>
			<Heading>Pedidos</Heading>
			<TableContainer>
				<Table variant="simple">
					<Thead>
						<Tr>
							<Th>NOME DO CLIENTE</Th>
							<Th>CPF DO CLIENTE</Th>
							<Th>MÉTODO DE PAGAMENTO</Th>
							<Th>PREÇO</Th>
							<Th>DATA</Th>
							<Th>STATUS</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr _hover={{ bg: "gray.100" }} transition="0.3s">
							<Td fontSize="14px">Kauan Boaro</Td>
							<Td fontSize="14px">123.123.123-12</Td>
							<Td fontSize="14px">Cartão de crédito</Td>
							<Td fontSize="14px">R$200,00</Td>
							<Td fontSize="14px">03/04/2024</Td>
							<Td fontSize="14px">
								<Badge bg="green.400" color="white">
									Sucesso
								</Badge>
							</Td>
						</Tr>
					</Tbody>
				</Table>
			</TableContainer>
		</Stack>
	);
};

export default Order;
