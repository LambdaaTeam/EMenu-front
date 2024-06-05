import {
	Grid,
	Text,
	VStack,
	HStack,
	Icon,
	Button,
	useDisclosure,
	Heading,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerFooter,
	DrawerBody,
	FormControl,
	FormLabel,
	Input,
} from "@chakra-ui/react";
import TableCard from "../Tables/TableCard";
import { useState } from "react";
import { useDashboard } from "../../hooks/Store";

const Table = () => {
	const { dashboard, createTable } = useDashboard();
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [newTableNumber, setNewTableNumber] = useState()

	const handleSubmit = () => {
		createTable(newTableNumber)
		onClose()
	}

	const { available, occupied, reserved } = dashboard.tables.reduce((acc, table) => {
		if (table.status === "AVAILABLE") {
			acc.available += 1;
		} else if (table.status === "OCCUPIED") {
			acc.occupied += 1;
		} else {
			acc.reserved += 1;
		}
		return acc;
	}, { available: 0, occupied: 0, reserved: 0 })

	return (
		<>
			<Drawer isOpen={isOpen} placement="right" onClose={onClose}>
				<DrawerOverlay>
					<DrawerContent>
						<DrawerCloseButton />
						<DrawerBody p={4}>
							<Heading mb={4} size="md">Adicionar Mesa</Heading>
							<VStack spacing={4} as="form" onSubmit={(e) => e.preventDefault()}>
								<FormControl>
									<FormLabel htmlFor="table">Número da Mesa</FormLabel>
									<Input name="table" type="number" placeholder="Número da Mesa" onChange={(e) => setNewTableNumber(e.target.value)} />
								</FormControl>
							</VStack>
						</DrawerBody>
						<DrawerFooter>
							<Button variant="outline" mr={3} onClick={onClose}>
								Cancelar
							</Button>
							<Button
								colorScheme="blue"
								onClick={handleSubmit}
							>
								Adicionar
							</Button>
						</DrawerFooter>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
			<VStack align="stretch" spacing={4} h="100%">
				<HStack align="center" justify="center">
					<Icon
						boxSize="2"
						viewBox="0 0 200 200"
						color="#45D043"
						alignSelf="center"
					>
						<path
							fill="currentColor"
							d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
						/>
					</Icon>
					<Text fontSize="md">
						Disponível ({available})
					</Text>
					<Icon
						boxSize="2"
						viewBox="0 0 200 200"
						color="yellow.400"
						alignSelf="center"
					>
						<path
							fill="currentColor"
							d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
						/>
					</Icon>
					<Text fontSize="md">
						Ocupado ({occupied})
					</Text>
					<Icon
						boxSize="2"
						viewBox="0 0 200 200"
						color="gray.400"
						alignSelf="center"
					>
						<path
							fill="currentColor"
							d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
						/>
					</Icon>
					<Text fontSize="md">
						Reservado ({reserved})
					</Text>
				</HStack>

				<Grid templateColumns="repeat(4, 1fr)" gap={4} h="100%">
					{dashboard.tables.map((table) => (
						<TableCard key={table.id} table={{ ...table }} />
					))}
				</Grid>

				<Button
					colorScheme="red"
					alignSelf="flex-end"
					variant="solid"
					onClick={onOpen}
				>
					Adicionar Mesa
				</Button>
			</VStack>
		</>
	);
};

export default Table;
