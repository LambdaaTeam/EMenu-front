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
import { useDashboard } from "../../hooks/Store";

const Order = () => {
	const { dashboard } = useDashboard();

	return (
		<Stack>
			<Heading>Pedidos</Heading>
			<TableContainer>
				<Table variant="simple">
					<Thead>
						<Tr>
							<Th>Nome</Th>
							<Th>CPF</Th>
							<Th>Forma de Pagamento</Th>
							<Th>Valor</Th>
							<Th>Data</Th>
							<Th>Status</Th>
						</Tr>
					</Thead>
					<Tbody>
						{dashboard.orders.map((order) => (
							<Tr key={order.id}>
								<Td>{order.client.name}</Td>
								<Td>{order.client.cpf}</Td>
								<Td>{order.payment_method ?? "-"}</Td>
								<Td>{order.value}</Td>
								<Td>
									{new Date(order.created_at).toLocaleDateString("pt-br", {
										day: "2-digit",
										month: "2-digit",
										year: "numeric",
									})}
								</Td>
								<Td>
									<Badge
										colorScheme={
											order.status === "pending"
												? "orange"
												: order.status === "completed"
													? "green"
													: "red"
										}
									>
										{order.status}
									</Badge>
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
		</Stack>
	);
};

export default Order;
