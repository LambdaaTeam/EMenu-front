import { useEffect, useState } from "react";
import {
	Box,
	Flex,
	Stack,
	HStack,
	Text,
	Card,
	Button,
	theme,
} from "@chakra-ui/react";
import { ArrowBigRight, ArrowLeft, Trash2 } from "lucide-react";
import { useDashboard } from "../../hooks/Store";

const status = {
	TO_PREPARE: "TO_PREPARE",
	PREPARING: "PREPARING",
	READY: "READY",
	DELIVERED: "DELIVERED",
};

const getFormattedOrder = (orders) => {
	return orders.reduce(
		(acc, order) => {
			const { toprepare, preparing, ready } = acc;

			const items = order.items.reduce(
				(acc, item) => {
					if (item.status === status.TO_PREPARE) {
						acc.toprepare.push({
							...item,
							orderId: order.id,
							clientName: order.client.name,
							table: order.table,
						});
					} else if (item.status === status.PREPARING) {
						acc.preparing.push({
							...item,
							orderId: order.id,
							clientName: order.client.name,
							table: order.table,
						});
					} else if (item.status === status.READY) {
						acc.ready.push({
							...item,
							orderId: order.id,
							clientName: order.client.name,
							table: order.table,
						});
					}

					return acc;
				},
				{ toprepare: [], preparing: [], ready: [] },
			);

			return {
				toprepare: [...toprepare, ...items.toprepare],
				preparing: [...preparing, ...items.preparing],
				ready: [...ready, ...items.ready],
			};
		},
		{ toprepare: [], preparing: [], ready: [] },
	);
};

const ItemInfo = ({ item, handleNextStatus }) => {
	const [isLoading, setIsLoading] = useState(false);

	return (
		<Card p={2} bg="white" borderRadius="md" minW="250px">
			<HStack justifyContent="space-between">
				<Stack
					spacing={2}
					w="100%"
					borderRight="2px solid"
					borderColor="black"
					pr={4}
				>
					<Flex justifyContent="space-between">
						<Text fontSize="md">{item.clientName}</Text>
						<Text fontSize="sm" fontWeight="bold">
							Mesa {item.table}
						</Text>
					</Flex>
					<Flex gap={2}>
						<Text fontSize="md">{item.name}</Text>
						<Text fontSize="md" fontWeight="bold">
							x{item.quantity}
						</Text>
					</Flex>
				</Stack>
				<Button
					bg="transparent"
					isLoading={isLoading}
					onClick={async () => {
						setIsLoading(true);
						await handleNextStatus(item.orderId, item.id);
						setIsLoading(false);
					}}
				>
					{item.status === status.READY ? (
						<Trash2 color={theme.black} size={32} />
					) : (
						<ArrowBigRight color={theme.black} size={32} />
					)}
				</Button>
			</HStack>
		</Card>
	);
};

const Kitchen = () => {
	const { dashboard, updateOrderItemStatus } = useDashboard();
	const [orders, setOrders] = useState([]);
	useEffect(() => {
		const orders = dashboard.orders.map((order) => ({
			...order,
			table:
				dashboard.restaurant.tables.find((table) => table.id === order.table)
					?.number ?? 0,
		}));

		setOrders(orders);
	}, [dashboard.orders, dashboard.restaurant.tables]);

	const { toprepare, preparing, ready } = getFormattedOrder(orders);

	const handleNextStatus = async (orderId, itemId) => {
		for (const order of orders) {
			for (const item of order.items) {
				if (item.id === itemId) {
					if (item.status === status.TO_PREPARE) {
						item.status = status.PREPARING;
						await updateOrderItemStatus(orderId, itemId, status.PREPARING);
					} else if (item.status === status.PREPARING) {
						item.status = status.READY;
						await updateOrderItemStatus(orderId, itemId, status.READY);
					} else if (item.status === status.READY) {
						await updateOrderItemStatus(orderId, itemId, status.DELIVERED);
					}
				}
			}
		}
	};

	return (
		<Box p={4}>
			<HStack alignItems="center" mb={4}>
				<Button variant="link" onClick={() => window.history.back()}>
					<ArrowLeft />
				</Button>
				<Text fontSize="3xl" fontWeight="bold" textAlign={"center"} w={"100%"}>
					Pedidos
				</Text>
			</HStack>
			<Stack direction="row" gap={4}>
				<Box w="100%" h="100%" bg="blue.100" borderRadius="md" p={4}>
					<Text fontSize="lg" fontWeight="bold" mb={4}>
						Aguardando
					</Text>
					<Stack>
						{toprepare.map((order) => (
							<ItemInfo
								key={order.id}
								item={order}
								handleNextStatus={handleNextStatus}
							/>
						))}
					</Stack>
				</Box>
				<Box w="100%" h="100%" bg="yellow.100" borderRadius="md" p={4}>
					<Text fontSize="lg" fontWeight="bold" mb={4}>
						Em Preparo
					</Text>
					<Stack>
						{preparing.map((order) => (
							<ItemInfo
								key={order.id}
								item={order}
								handleNextStatus={handleNextStatus}
							/>
						))}
					</Stack>
				</Box>
				<Box w="100%" h="100%" bg="green.100" borderRadius="md" p={4}>
					<Text fontSize="lg" fontWeight="bold" mb={4}>
						Pronto
					</Text>
					<Stack>
						{ready.map((order) => (
							<ItemInfo
								key={order.id}
								item={order}
								handleNextStatus={handleNextStatus}
							/>
						))}
					</Stack>
				</Box>
			</Stack>
		</Box>
	);
};

export default Kitchen;
