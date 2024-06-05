import {
	Card,
	CardHeader,
	Link,
	Box,
	Heading,
	CardBody,
	Text,
	GridItem,
	theme,
} from "@chakra-ui/react";
import { UserRound } from "lucide-react";

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
 * @property {"AVAILABLE" | "RESERVED" | "OCCUPIED"} status - table status
 * @property {Occupants[]} occupants - table occupants
 */

/**
 * display the table cards
 * @param {Object} table - table object
 * @returns {JSX.Element} - table card
 */
const TableCard = ({ table }) => {
	const colors = {
		AVAILABLE: theme.colors.green[400],
		RESERVED: theme.colors.gray[400],
		OCCUPIED: theme.colors.yellow[400],
	};

	const color = colors[table.status];
	const status = table.status === "AVAILABLE" ? "Disponível" : table.status === "RESERVED" ? "Reservada" : "Ocupada";
	const occupants = table.occupants.length;

	return (
		<Link to="./Clients" _hover={"none"}>
			<GridItem>
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
						<Heading fontSize="2xl" color={color}>
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
		</Link>
	);
};

export default TableCard;
