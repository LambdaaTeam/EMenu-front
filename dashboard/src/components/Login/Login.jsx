import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	Text,
	VStack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDashboard } from "../../hooks/Store";
import {
	useNavigate
} from "react-router-dom"

const Login = () => {
	const navegate = useNavigate();
	const { handleLogin, getDashboard } = useDashboard();
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const logged = await handleLogin(form.email, form.password);

		if (logged) {
			return navegate("/dashboard")
		}
	}

	useEffect(() => {
		const token = localStorage.getItem("token");

		if (token) {
			getDashboard();
			navegate("/dashboard");
		}
	}, []);

	return (
		<Box display="flex" justifyContent="center" alignItems="center" h="100vh">
			<VStack spacing={4} w="100%" maxW="400px" as="form" onSubmit={handleSubmit}>
				<Text fontSize="3xl" fontWeight="bold">
					Login
				</Text>
				<FormControl>
					<FormLabel htmlFor="email">Email</FormLabel>
					<Input name="email" type="email" placeholder="Email" onChange={handleChange} />
				</FormControl>
				<FormControl>
					<FormLabel htmlFor="password">Senha</FormLabel>
					<Input name="password" type="password" placeholder="Senha" onChange={handleChange} />
				</FormControl>
				<Button colorScheme="red" variant="solid" w="100%" type="submit">
					Entrar
				</Button>
			</VStack>
		</Box>
	);
};

export default Login;
