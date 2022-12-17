import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "../pages/Cuisine";
import Home from "../pages/Home";
import Recipe from "../pages/Recipe";
import "./app.css";
function App() {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route path="/recipe/:id" element={<Recipe />} />
				<Route path="/cuisine/:type" element={<Cuisine />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</AnimatePresence>
	);
}

export default App;
