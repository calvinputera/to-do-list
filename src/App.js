import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Todo from "./pages/Todo";
import { AuthContext, AuthContextProfider } from "./helper/AuthContext";
import { useState } from "react";

function App() {
	const [authState, setAuthState] = useState(false);
	const [email, setEmail] = useState("");

	return (
		<AuthContext.Provider
			value={{
				email,
				authState,
				setEmail,
				setAuthState,
			}}
		>
			<Routes>
				<Route element={<Login />} index />
				<Route index path="/dashboard" element={<Dashboard />} />
				<Route path="/todo" element={<Todo />} />
			</Routes>
		</AuthContext.Provider>
	);
}

export default App;
