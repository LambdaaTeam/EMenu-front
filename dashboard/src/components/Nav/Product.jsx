import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerFooter,
	DrawerBody,
	Button,
	Heading,
	Stack,
	useDisclosure,
	FormControl,
	Input,
	FormLabel,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	Text,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Select,
} from "@chakra-ui/react";
import { Trash2, Plus } from "lucide-react";
import { useState } from "react";
import { useDashboard } from "../../hooks/Store";

const InputMenu = ({ title, handleUpdate, value }) => {
	const [category, setCategory] = useState(value.name || title);
	const [form, setForm] = useState({
		id: value.id || "",
		name: value.name || "",
	});
	const [modalAction, setModalAction] = useState("add");
	const { dashboard, createCategory, deleteCategory } = useDashboard();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const modalTitle =
		modalAction === "add" ? "Adicionar Categoria" : "Remover Categoria";

	const modalButton =
		modalAction === "add" ? "Adicionar Categoria" : "Remover Categoria";

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{modalTitle}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						{modalAction === "add" ? (
							<FormControl id="category">
								<FormLabel>Categoria</FormLabel>
								<Input
									type="text"
									name="name"
									id="name"
									onChange={(e) => {
										setForm({
											name: e.target.value,
										});
									}}
								/>
							</FormControl>
						) : (
							<Stack>
								<Text>
									Remover a categoria esta categoria irá remover <b>TODOS</b> os
									produtos associados a ela.
								</Text>
								<Select
									placeholder="Selecione uma categoria"
									onChange={(e) => {
										const category = dashboard.menu.categories.find(
											(category) => category.id === e.target.value,
										);
										setForm({
											id: category.id,
											name: category.name,
										});
									}}
								>
									{dashboard.menu.categories.map((category) => (
										<option key={category.id} value={category.id}>
											{category.name}
										</option>
									))}
								</Select>
							</Stack>
						)}
					</ModalBody>
					<ModalFooter>
						<Button
							colorScheme={modalAction === "add" ? "blue" : "red"}
							leftIcon={
								modalAction === "add" ? (
									<Plus size={16} />
								) : (
									<Trash2 size={16} />
								)
							}
							onClick={() => {
								if (modalAction === "add") {
									createCategory(form.name);
								} else {
									if (!form.id) {
										return;
									}

									deleteCategory(form.id);
								}
								onClose();
							}}
						>
							{modalButton}
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
			<Menu>
				<MenuButton as={Button} variant="outline">
					{category}
				</MenuButton>
				<MenuList>
					{dashboard.menu.categories.map((category) => (
						<MenuItem
							key={category.id}
							value={category.id}
							onClick={() => {
								setCategory(category.name);
								handleUpdate({
									target: {
										name: "category",
										value: {
											id: category.id,
											name: category.name,
										},
									},
								});
							}}
						>
							{category.name}
						</MenuItem>
					))}
					<MenuDivider />
					<MenuItem
						icon={<Plus size={16} />}
						onClick={() => {
							setModalAction("add");
							onOpen();
						}}
					>
						Adicionar Categoria
					</MenuItem>
					<MenuItem
						icon={<Trash2 size={16} />}
						onClick={() => {
							setModalAction("remove");
							onOpen();
						}}
					>
						Remover Categoria
					</MenuItem>
				</MenuList>
			</Menu>
		</>
	);
};

const Products = () => {
	const { dashboard, createItem, deleteItem } = useDashboard();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [drawerType, setDrawerType] = useState("add"); // add, edit
	const [form, setForm] = useState({
		id: "",
		name: "",
		price: "",
		description: "",
		category: {
			id: "",
			name: "",
		},
	});

	const menuItems = dashboard.menu.categories.reduce((acc, category) => {
		if (!category.items) {
			return acc;
		}

		for (const item of category.items) {
			return [
				...acc,
				{
					...item,
					category: {
						id: category.id,
						name: category.name,
					},
				},
			];
		}

		return acc;
	}, []);

	const highlightItems = dashboard.menu?.highlights?.map((item) => ({
		...item,
		category: {
			id: "highlight",
			name: "Destaque",
		},
	}));

	const items = [...menuItems, ...highlightItems];

	const drawerTitle =
		drawerType === "add" ? "Adicionar Produto" : "Editar Produto";

	const drawerButton =
		drawerType === "add" ? "Adicionar Produto" : "Editar Produto";

	const handleUpdate = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	return (
		<>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={() => {
					setForm({
						name: "",
						price: "",
						description: "",
						category: {
							id: "",
							name: "",
						},
					});
					onClose();
				}}
				size="md"
			>
				<DrawerOverlay>
					<DrawerContent>
						<DrawerCloseButton />
						<DrawerBody>
							<Stack spacing={4}>
								<Heading mt={4}>{drawerTitle}</Heading>
								<FormControl id="id">
									<FormLabel>Nome</FormLabel>
									<Input
										type="text"
										name="name"
										id="name"
										value={form.name}
										onChange={handleUpdate}
									/>
								</FormControl>
								<FormControl id="price">
									<FormLabel>Preço</FormLabel>
									<Input
										type="text"
										name="price"
										id="price"
										value={form.price}
										onChange={handleUpdate}
									/>
								</FormControl>
								<FormControl id="description">
									<FormLabel>Descrição</FormLabel>
									<Input
										type="text"
										name="description"
										id="description"
										value={form.description}
										onChange={handleUpdate}
									/>
								</FormControl>
								<InputMenu
									title="Categoria"
									handleUpdate={handleUpdate}
									value={form.category}
								/>
							</Stack>
						</DrawerBody>
						<DrawerFooter
							justifyContent={
								drawerType === "add" ? "flex-end" : "space-between"
							}
						>
							{drawerType === "edit" && (
								<Button
									colorScheme="red"
									leftIcon={<Trash2 size={24} />}
									onClick={() => {
										deleteItem(form.category.id, form.id);
										onClose();
									}}
								>
									Remover Produto
								</Button>
							)}
							<Button
								colorScheme="blue"
								isDisabled={drawerType === "edit" && !form.id}
								onClick={() => {
									if (drawerType === "add") {
										createItem({
											name: form.name,
											price: form.price,
											description: form.description,
											category: form.category.id,
										});
									}

									onClose();
								}}
							>
								{drawerButton}
							</Button>
						</DrawerFooter>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>

			<Stack>
				<Heading>Produtos</Heading>
				<Stack direction="row" justifyContent={"flex-end"}>
					<Button
						colorScheme="red"
						leftIcon={<Plus size={24} />}
						onClick={() => {
							setDrawerType("add");
							onOpen();
						}}
					>
						Adicionar Produto
					</Button>
				</Stack>
				<Table variant="simple">
					<Thead>
						<Tr>
							<Th>Nome</Th>
							<Th>Preço</Th>
							<Th>Descrição</Th>
							<Th>Categoria</Th>
						</Tr>
					</Thead>
					<Tbody>
						{items.map((item) => (
							<Tr
								key={item.id}
								_hover={{ bg: "gray.100" }}
								transition="0.3s"
								cursor="pointer"
								onClick={() => {
									setForm({
										id: item.id,
										name: item.name,
										price: item.price,
										description: item.description,
										category: item.category,
									});
									setDrawerType("edit");
									onOpen();
								}}
							>
								<Td>
									<Text>{item.name}</Text>
								</Td>
								<Td>
									<Text>{item.price}</Text>
								</Td>
								<Td w="50%">
									<Text noOfLines="2">{item.description}</Text>
								</Td>
								<Td>
									<Text fontWeight="bold">{item.category.name}</Text>
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</Stack>
		</>
	);
};

export default Products;
