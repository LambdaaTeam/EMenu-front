import React from "react";
import {
	Stack,
	Text,
	Heading,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	TabIndicator,
} from "@chakra-ui/react";
import CadastrarProduto from "../Products/CadastrarProduto";
import AllProducts from "../Products/AllProducts";

const Product = () => {
	return (
		<Stack h="100%">
			<Stack>
				<Heading fontSize="36px"> Cadastrar novo produto </Heading>
				<Text fontSize="14px">
					Cadastre e gerencie seus produtos. Determine um atributo, valor,
					estoque para cada item e organize por categorias
				</Text>
				<Stack>
					<Tabs>
						<TabList>
							<Tab _selected={{ color: "#252C32", fontWeight: "bold" }}>
								Cadastro de produtos
							</Tab>
							<Tab _selected={{ color: "#252C32", fontWeight: "bold" }}>
								Produtos
							</Tab>
						</TabList>
						<TabIndicator
							mt="-1.5px"
							color="red"
							height="2px"
							bg="#252C32"
							borderRadius="15px"
						/>
						<TabPanels>
							<TabPanel>
								<CadastrarProduto />
							</TabPanel>
							<TabPanel>
								<AllProducts />
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Product;
