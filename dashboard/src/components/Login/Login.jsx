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
} from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
	const [isFirstPage, setIsFirstPage] = useState(true);

	return (
		<Stack display="flex" direction="row" h="100vh" w="100vw" spacing={0}>
			<Stack
				bg="#50000E"
				color="white"
				alignItems={"center"}
				padding={32}
				textAlign="center"
				spacing={4}
			>
				<Heading fontWeight="bold">Bem-vindo a nossa comunidade</Heading>
				<Text>
					O E-menu fornece o melhor sistema necessário para administrar o seu
					estabelecimento
				</Text>
			</Stack>
			<Stack alignItems={"center"} textAlign="center" w="100%" padding={8}>
				<VStack spacing={8}>
					<VStack spacing={2}>
						<Heading> E-Menu </Heading>
						<Text>
							O E-menu sistema para administrar o cardápios do seu
							estabelecimento
						</Text>
					</VStack>
					<VStack w="70%" as="form">
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
									bg="#50000E"
									color="white"
									_hover={{ bg: "#90000E" }}
								>
									Entrar
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
									bg="#50000E"
									color="white"
									_hover={{ bg: "#90000E" }}
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

export default Login;
