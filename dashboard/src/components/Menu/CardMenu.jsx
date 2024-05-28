import { Card, Heading, CardBody, Stack, Image } from "@chakra-ui/react";
import img from "/pizza.png";

const CardMenu = () => {
	return (
		<Card w="124px" height="156px" border-radius="8px">
			<CardBody padding="1.6em">
				<Image src={img} objectFit="cover" />
				<Stack textAlign="center" padding="10px">
					<Heading fontSize="12px"> Pizza calabresa </Heading>
				</Stack>
			</CardBody>
		</Card>
	);
};

export default CardMenu;
