import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	Text,
	VStack,
} from "@chakra-ui/react";

const Login = () => {
	return (
		<Box display="flex" justifyContent="center" alignItems="center" h="100vh">
			<VStack spacing={4} w="100%" maxW="400px">
				<Text fontSize="3xl" fontWeight="bold">
					Login
				</Text>
				<FormControl>
					<FormLabel htmlFor="email">Email</FormLabel>
					<Input id="email" type="email" placeholder="Email" />
				</FormControl>
				<FormControl>
					<FormLabel htmlFor="password">Senha</FormLabel>
					<Input id="password" type="password" placeholder="Senha" />
				</FormControl>
				<Button colorScheme="red" variant="solid" w="100%" type="submit">
					Entrar
				</Button>
			</VStack>
		</Box>
	);
};

export default Login;
