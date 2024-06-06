import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useDashboard } from "../hooks/Store";
import {
	Avatar,
	Flex,
	Stack,
	Image,
	Input,
	Hide,
	Box,
	Text,
	theme,
	HStack,
} from "@chakra-ui/react";

import {
	NotepadText,
	HandPlatter,
	Search,
	LogOut,
	Settings,
	ChefHat,
	ShoppingBasket,
} from "lucide-react";

const iconProps = {
	size: 18,
	color: theme.colors.gray[600],
};

const links = {
	top: [
		{ to: "tables", label: "Mesas", icon: <HandPlatter {...iconProps} /> },
		{
			to: "products",
			label: "Produtos",
			icon: <ShoppingBasket {...iconProps} />,
		},
		{ to: "orders", label: "Pedidos", icon: <NotepadText {...iconProps} /> },
	],
	bottom: [
		{ to: "#", label: "Settings", icon: <Settings {...iconProps} /> },
		{ to: "#", label: "Exit", icon: <LogOut {...iconProps} /> },
	],
};

const NavItem = ({ to, label, icon, bg, bgHolver = "" }) => {
	const location = useLocation();
	const isActive = (to) => location.pathname.includes(to);

	return (
		<Stack>
			<Link key={to} to={to}>
				<Box
					key={to}
					py={2}
					px={8}
					bg={isActive(to) ? bg : ""}
					borderRadius="md"
					_hover={{ bg: bgHolver }}
					transition="background-color 0.2s"
				>
					<Flex alignItems="center" gap={4}>
						{icon}
						<Text
							as="span"
							fontSize="sm"
							color={isActive(to) ? "gray.800" : "gray.600"}
						>
							{label}
						</Text>
					</Flex>
				</Box>
			</Link>
		</Stack>
	);
};

const Nav = () => {
	return (
		<Stack
			as="nav"
			direction="column"
			borderRight="1px solid"
			borderColor="gray.300"
			p={2}
			h="100%"
		>
			<Stack spacing={2} mt={2}>
				{links.top.map((link) => (
					<NavItem key={link.to} {...link} bg="gray.200" bgHolver="gray.100" />
				))}
			</Stack>
			<Stack direction="column" spacing={0} mt="auto" mb={2}>
				{links.bottom.map((link) => (
					<NavItem key={link.to} {...link} bg="gray.200" bgHolver="gray.100" />
				))}
			</Stack>
		</Stack>
	);
};

const SearchBar = () => {
	return (
		<Hide below="md">
			<Flex
				direction="row"
				alignItems="center"
				border="1px solid"
				borderColor="gray.300"
				borderRadius="md"
				px={4}
				py={1}
				gap={4}
				w="50%"
			>
				<Search size={18} color={theme.colors.gray[300]} />
				<Input placeholder="Search" variant="unstyled" />
			</Flex>
		</Hide>
	);
};

const Header = () => {
	const { dashboard } = useDashboard();

	return (
		<Stack
			direction="row"
			as="header"
			borderBottom="1px solid"
			borderColor="gray.300"
			justifyContent="space-between"
			alignItems="center"
			p={2}
		>
			<Link to="/dashboard">
				<Image
					src="https://placehold.co/150x40?text=E-Menu+Logo"
					alt="E-Menu"
				/>
			</Link>
			<SearchBar />
			<HStack spacing={4}>
				<Link to="/dashboard/kitchen">
					<ChefHat size={24} color={theme.colors.gray[600]} />
				</Link>
				<Avatar name={dashboard.name} size="sm" src={dashboard.avatar ?? ""} />
			</HStack>
		</Stack>
	);
};

const Dashboard = () => {
	return (
		<Stack h="100vh" direction="column" spacing={0}>
			<Header />
			<Stack direction="" h="100%">
				<Nav />
				<Flex direction="column" h="100%" w="100%" py={4} px={8}>
					<Outlet />
				</Flex>
			</Stack>
		</Stack>
	);
};

export default Dashboard;
