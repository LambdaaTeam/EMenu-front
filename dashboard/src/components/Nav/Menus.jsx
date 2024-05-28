import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	Heading,
	Stack,
} from "@chakra-ui/react";
import CardMenu from "../Menu/CardMenu";

const Menus = () => {
	return (
		<Stack>
			<Heading> Menu </Heading>
			<Accordion allowToggle>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								Pizzas
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						<CardMenu />
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								Drinks
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
				</AccordionItem>
			</Accordion>
		</Stack>
	);
};

export default Menus;
