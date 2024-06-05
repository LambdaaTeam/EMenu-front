import {
	Card,
	CardHeader,
	VStack,
	Button,
	Box,
	Heading,
	CardBody,
	Text,
	GridItem,
	theme,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerFooter,
	DrawerBody,
	FormControl,
	FormLabel,
	Input,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	useDisclosure,
	Flex,
} from "@chakra-ui/react";
import { UserRound, Trash2 } from "lucide-react";
import { useState } from "react";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import { useDashboard } from "../../hooks/Store";

/**
 * @typedef {Object} Occupants
 * @property {string} name - name of the client
 * @property {string} cpf - client cpf
 */

/**
 * @typedef {Object} Table
 * @property {string} status - table status
 * @property {number} id - table id
 * @property {number} number - table number
 * @property {string} url - table url
 * @property {"AVAILABLE" | "RESERVED" | "OCCUPIED"} status - table status
 * @property {Occupants[]} occupants - table occupants
 */

/**
 * display the table cards
 * @param {Object} table - table object
 * @returns {JSX.Element} - table card
 */
const TableCard = ({ table }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [newTableNumber, setNewTableNumber] = useState(table.number);
	const { updateTable, deleteTable } = useDashboard()

	const colors = {
		AVAILABLE: theme.colors.green[400],
		RESERVED: theme.colors.gray[400],
		OCCUPIED: theme.colors.yellow[400],
	};

	const color = colors[table.status];
	const status = table.status === "AVAILABLE" ? "Disponível" : table.status === "RESERVED" ? "Reservada" : "Ocupada";
	const occupants = table.occupants.length;

	const handleUpdateSubmit = (number) => {
		updateTable(table.id, number)
		onClose()
	}

	const handleDeleteSubmit = () => {
		deleteTable(table.id)
		onClose()
	}

	return (
		<>
			<Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
				<DrawerOverlay>
					<DrawerContent>
						<DrawerCloseButton />
						<DrawerBody p={4}>
							<VStack spacing={4} as="form" onSubmit={(e) => e.preventDefault()}>
								<VStack spacing={1}>
									<Link>
										<Text textDecoration={"underline"}>
											Imprimir
										</Text>
									</Link>
									<Box p={2} border="1px solid" borderColor="gray.300">
										<QRCode value={table.url.toString()} />
									</Box>
									<Heading size="md" textAlign={'center'}>Mesa {table.number.toString().padStart(2, "0")}</Heading>
									<Text as="a" href={table.url} target="_blank">
										{table.url}
									</Text>
								</VStack>
								<FormControl>
									<FormLabel htmlFor="table">Número</FormLabel>
									<Flex gap={2}>
										<Input
											name="table"
											type="number"
											placeholder="Número da Mesa"
											onChange={(e) => setNewTableNumber(e.target.value)}
											value={newTableNumber}
										/>
										<Button colorScheme="green" onClick={() => handleUpdateSubmit(newTableNumber)}>
											Atualizar
										</Button>
									</Flex>
								</FormControl>
							</VStack>
							{table.occupants.length > 0 && (
								<Table variant="simple">
									<Thead>
										<Tr>
											<Th>Nome</Th>
											<Th>CPF</Th>
										</Tr>
										<Tbody>
											{table.occupants.map((occupant, index) => (
												<Tr key={index}>
													<Td>{occupant.name}</Td>
													<Td>{occupant.cpf}</Td>
												</Tr>
											))}
										</Tbody>
									</Thead>
								</Table>
							)}
						</DrawerBody>
						<DrawerFooter display="flex" justifyContent="space-between">
							<Button
								colorScheme="red"
								gap={2}
								onClick={handleDeleteSubmit}
							>
								<Trash2 />
								Deletar Mesa
							</Button>
							<Button colorScheme="blue" isDisabled={table.status !== "OCCUPIED"} onClick={onClose}>
								Fechar Mesa
							</Button>
						</DrawerFooter>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
			<GridItem onClick={onOpen} cursor="pointer">
				<Card
					textAlign="left"
					borderRadius="16"
					borderRight="20px solid"
					borderColor={color}
				>
					<CardHeader
						display="flex"
						justifyContent="space-between"
						alignItems="center"
					>
						<Heading fontSize="2xl" color={color} mr={2}>
							{status}
						</Heading>
						<Text color={color} fontSize="xl" fontWeight="bold">
							{table.number.toString().padStart(2, "0")}
						</Text>
					</CardHeader>
					<CardBody>
						<Box display="flex" spacing="4" alignItems="center" gap={2}>
							<UserRound />
							<Text>
								{occupants}
							</Text>
						</Box>
					</CardBody>
				</Card>
			</GridItem>
		</>
	);
};

export default TableCard;
