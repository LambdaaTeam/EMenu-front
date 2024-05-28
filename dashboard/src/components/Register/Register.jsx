import {
	Stack,
	Text,
	Heading,
	FormLabel,
	FormControl,
	Input,
	Button,
	VStack,
	HStack,
	Image,
	Hide,
} from "@chakra-ui/react";

import { useState } from "react";

const Register = () => {
	const [isFirstPage, setIsFirstPage] = useState(true);

	return (
		<Stack display="flex" direction="row" h="100vh" w="100vw" spacing={0}>
			<Hide below="md">
				<Stack bg="red.800" color="white" spacing={4} w="100%">
					<VStack
						justifyContent="center"
						alignItems="center"
						textAlign="center"
						spacing={4}
						mt="25vh"
						p={8}
					>
						<Heading fontWeight="bold">Bem-vindo a nosso app</Heading>
						<Text>
							O E-menu fornece uma maneira fácil de gerenciar seu cardápio
						</Text>
					</VStack>
					<Image
						position="absolute"
						bottom={8}
						left={8}
						src="https://placehold.co/150x40?text=E-Menu+Logo"
						alt="E-Menu"
					/>
				</Stack>
			</Hide>
			<Stack alignItems={"center"} w="100%" padding={8}>
				<VStack h="100%" w="100%" justify="center">
					<VStack
						w="400px"
						as="form"
						spacing={4}
						borderWidth="1px"
						p={8}
						borderRadius={8}
					>
						<Heading> E-Menu </Heading>
						{isFirstPage ? (
							<>
								<FormControl>
									<FormLabel>Nome</FormLabel>
									<Input type="text" placeholder="Nome" />
								</FormControl>
								<FormControl>
									<FormLabel>Email</FormLabel>
									<Input type="email" placeholder="Email" />
								</FormControl>
								<FormControl>
									<FormLabel>Senha</FormLabel>
									<Input type="password" placeholder="Senha" />
								</FormControl>
								<Button
									size="lg"
									onClick={() => setIsFirstPage(false)}
									bg="red.800"
									color="white"
									_hover={{ bg: "red.600" }}
									w="100%"
								>
									Proximo
								</Button>
							</>
						) : (
							<>
								<FormControl>
									<FormLabel>CEP</FormLabel>
									<Input type="text" placeholder="CEP" name="postcode" />
								</FormControl>
								<HStack>
									<FormControl>
										<FormLabel>Cidade</FormLabel>
										<Input type="text" placeholder="Cidade" name="city" />
									</FormControl>
									<FormControl>
										<FormLabel>UF</FormLabel>
										<Input type="text" placeholder="UF" name="state" />
									</FormControl>
								</HStack>
								<FormControl>
									<FormLabel>Rua</FormLabel>
									<Input type="text" placeholder="Rua" name="street" />
								</FormControl>
								<HStack>
									<FormControl>
										<FormLabel>País</FormLabel>
										<Input type="text" placeholder="País" name="country" />
									</FormControl>
									<FormControl>
										<FormLabel>Número</FormLabel>
										<Input type="text" placeholder="Número" name="number" />
									</FormControl>
								</HStack>
								<FormControl>
									<FormLabel>Complemento</FormLabel>
									<Input
										type="text"
										placeholder="Complemento"
										name="complement"
									/>
								</FormControl>
								<Button
									size="lg"
									onClick={() => setIsFirstPage(false)}
									bg="red.800"
									color="white"
									_hover={{ bg: "red.600" }}
									w="100%"
								>
									Criar conta
								</Button>
							</>
						)}
					</VStack>
				</VStack>
			</Stack>
		</Stack>
	);
};

export default Register;
