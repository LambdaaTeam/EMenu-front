import { AddIcon } from "@chakra-ui/icons";
import {
	Box,
	FormControl,
	Input,
	FormLabel,
	HStack,
	Button,
	Select,
	IconButton,
	VStack,
} from "@chakra-ui/react";

const CadastrarProduto = () => {
	return (
		<Box display="flex" flexDir="column">
			<form>
				<FormControl display="flex" flexDir="column" gap="4">
					<VStack direction="row" h="100%">
						<HStack spacing="12">
							<Box w="100%">
								<FormLabel htmlFor="nome">Nome do produto</FormLabel>
								<Input
									id="nome"
									placeholder="Insira o nome do produto"
									w="48vh"
								/>
							</Box>
							<Box w="100%">
								<FormLabel htmlFor="codigo"> Código (SKU) </FormLabel>
								<Input id="codigo" placeholder="Insira o código" />
							</Box>
							<Box w="100%">
								<FormLabel htmlFor="preco"> Preço de venda </FormLabel>
								<Input id="preco" placeholder="Insira o preço" />
							</Box>
						</HStack>

						<HStack spacing="12">
							<Box w="100%">
								<FormLabel htmlFor="unidade">Telefone Celular</FormLabel>
								<Input id="unidade" placeholder="Un, Pç, Kg" />
							</Box>
							<Box w="100%">
								<FormLabel htmlFor="categoria"> Categoria </FormLabel>
								<Select placeholder="Selecione a categoria">
									<option> Blá Blá </option>
									<option> Tuc Tuc </option>
								</Select>
							</Box>
							<Box w="100%">
								<FormLabel> Imagem do Produto </FormLabel>
								<IconButton
									isRound={true}
									variant="solid"
									bg="#E4E4E7"
									aria-label="Done"
									fontSize="20px"
									icon={<AddIcon />}
								/>
							</Box>
						</HStack>
					</VStack>

					<HStack justify="right">
						<Box as="footer">
							<Button
								p="6"
								type="submit"
								bg="#B6001F"
								color="white"
								fontWeight="bold"
								fontSize="xl"
								_hover={{ bg: "#830218" }}
							>
								Cadastrar produto
							</Button>
						</Box>
					</HStack>
				</FormControl>
			</form>
		</Box>
	);
};

export default CadastrarProduto;
