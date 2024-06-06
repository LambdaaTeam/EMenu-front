import { createContext, useContext, useState, useEffect } from "react";

const DashboardContext = createContext();

const endpoint = "https://api.emenu.psykka.xyz/api/v1";

export const useDashboard = () => {
	const context = useContext(DashboardContext);
	if (!context) {
		throw new Error("useDashboard must be used within a DashboardProvider");
	}
	return context;
};

export const DashboardProvider = ({ children }) => {
	const [dashboard, setDashboard] = useState(() => {
		const savedDashboard = localStorage.getItem("dashboard");
		return savedDashboard ? JSON.parse(savedDashboard) : null;
	});

	const [webSocket, setWebSocket] = useState(null);

	useEffect(() => {
		localStorage.setItem("dashboard", JSON.stringify(dashboard));
	}, [dashboard]);

	useEffect(() => {
		connectWebSocket();
		getDashboard();
	}, []);

	const connectWebSocket = () => {
		const ws = new WebSocket("wss://ws.emenu.psykka.xyz/ws");

		ws.onopen = () => {
			const packet = JSON.stringify({
				type: "auth",
				data: localStorage.getItem("token"),
			});

			ws.send(packet);

			setInterval(() => {
				const heartbeatPacket = JSON.stringify({
					type: "heartbeat",
				});

				ws.send(heartbeatPacket);
			}, 30000);
		};

		ws.onmessage = (event) => {
			const data = JSON.parse(event.data);
			const packet = Object.entries(data).reduce((acc, [key, value]) => {
				if (value) {
					acc[key] = value;
				}
				return acc;
			}, {});

			console.log(packet);

			if (packet.type) {
				getDashboard();
			}
		};

		ws.onclose = () => {
			console.log("WebSocket disconnected");
			connectWebSocket();
		};

		setWebSocket(ws);
	};

	const fetchApi = async (path, options = {}) => {
		return await fetch(`${endpoint}${path}`, {
			...options,
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
				...options.headers,
			},
		});
	};

	const getDashboard = async () => {
		const token = localStorage.getItem("token");
		if (!token) {
			return;
		}

		const restaurantId = JSON.parse(atob(token.split(".")[1])).sub;

		const restaurant = await fetchApi(`/restaurants/${restaurantId}`)
			.then((res) => res.json())
			.catch(() => null);

		if (!restaurant) {
			return;
		}

		const orders = await fetchApi("/restaurants/@me/orders")
			.then((res) => res.json())
			.catch(() => null);

		if (!orders) {
			return;
		}

		setDashboard({ restaurant, orders });
	};

	const handleLogin = async (email, password) => {
		const response = await fetchApi("/login", {
			method: "POST",
			body: JSON.stringify({ email, password }),
		});

		if (!response.ok) {
			return false;
		}

		const token = await response.text();
		localStorage.setItem("token", token.replace(/"/g, ""));

		await getDashboard();

		return true;
	};

	const createTable = async (number) => {
		const response = await fetchApi("/restaurants/@me/tables", {
			method: "POST",
			body: JSON.stringify({ number: Number(number) }),
		});

		if (!response.ok) {
			return false;
		}

		await getDashboard();

		return true;
	};

	const updateTable = async (tableId, table) => {
		const response = await fetchApi(`/restaurants/@me/tables/${tableId}`, {
			method: "PATCH",
			body: JSON.stringify({ ...table }),
		});

		if (!response.ok) {
			return false;
		}

		await getDashboard();

		return true;
	};

	const deleteTable = async (tableId) => {
		const response = await fetchApi(`/restaurants/@me/tables/${tableId}`, {
			method: "DELETE",
		});

		if (!response.ok) {
			return false;
		}

		await getDashboard();

		return true;
	};

	return (
		<DashboardContext.Provider
			value={{
				dashboard,
				handleLogin,
				getDashboard,
				createTable,
				updateTable,
				deleteTable,
			}}
		>
			{children}
		</DashboardContext.Provider>
	);
};
