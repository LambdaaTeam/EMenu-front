import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Dashboard from "./components/Dashboard";
import { DashboardProvider } from "./hooks/Store";

import "./index.css";
import Login from "./components/Login/Login.jsx";
import Products from "./components/Nav/Product.jsx";
import Tables from "./components/Nav/Table.jsx";
import Orders from "./components/Nav/Order.jsx";
import Kitchen from "./components/Kitchen/Kitchen.jsx";
import Register from "./components/Register/Register.jsx";
import Analytics from "./components/Analytics/Analytics";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
		children: [
			{
				index: true,
				element: <Analytics />,
			},
			{
				path: "tables",
				element: <Tables />,
			},
			{
				path: "orders",
				element: <Orders />,
			},
			{
				path: "products",
				element: <Products />,
			},
		],
	},
	{
		path: "/dashboard/kitchen",
		element: <Kitchen />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ChakraProvider>
			<DashboardProvider>
				<RouterProvider router={router} />
			</DashboardProvider>
		</ChakraProvider>
	</React.StrictMode>,
);
