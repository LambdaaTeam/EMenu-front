import {
	Box,
	Button,
	Checkbox,
	Container,
	FormControl,
	FormLabel,
	Heading,
	HStack,
	Input,
	Stack,
	Text,
} from "@chakra-ui/react";

const Acess = () => {
	return (
		<Container
			maxW="lg"
			py={{ base: "12", md: "24" }}
			px={{ base: "0", sm: "8" }}
		>
			<Stack spacing="8">
				<Box
					py={{ base: "0", sm: "8" }}
					px={{ base: "4", sm: "10" }}
					bg={{ base: "transparent", sm: "bg.surface" }}
					boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.2)"}
					borderRadius={{ base: "none", sm: "xl" }}
				>
					<Stack spacing="6">
						<Stack spacing="5">
							<Box>
								<Heading
									size={{ base: "xs", md: "sm" }}
									textAlign="center"
									fontSize="24px"
								>
									Acessar painel de Administrador
								</Heading>
							</Box>
							<Text
								color="fg.muted"
								textAlign="center"
								fontSize="24px"
								fontWeight="bold"
							>
								E-Menu Solution
							</Text>
							<FormControl>
								<FormLabel htmlFor="nome">Nome do usuário </FormLabel>
								<Input
									id="nomeUsuario"
									type="text"
									placeholder="Insira o nome do usuário"
								/>
								<FormLabel htmlFor="password" marginTop="25px">
									Senha do Administrador
								</FormLabel>
								<Input
									id="password"
									type="password"
									placeholder="Insira sua senha"
								/>
							</FormControl>
						</Stack>
						<HStack justify="space-between">
							<Checkbox defaultChecked fontSize="4px">
								Lembrar de mim
							</Checkbox>
							<Button variant="text" size="sm" color="#B6001F">
								Esqueceu minha senha
							</Button>
						</HStack>
						<Stack spacing="6">
							<Button bg="#B6001F" color="white" _hover={"#94031b"}>
								ENTRAR
							</Button>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Container>
	);
};

export default Acess;
