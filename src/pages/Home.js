import axios from "axios";
import React, { useEffect, useState } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Splider from "../components/Splider";
import Input from "../components/Input";
import Filter from "../components/Filter";
function Home() {
	const [popular, setPopular] = useState([]);
	const [veggies, setVeggies] = useState([]);

	async function getData(url) {
		const {
			data: { recipes },
		} = await axios.get(url);
		return recipes;
	}
	useEffect(() => {
		let loadedPopularItems = localStorage.getItem("popular");
		let loadedVeggiesItems = localStorage.getItem("veggies");
		if (loadedPopularItems && loadedVeggiesItems) {
			let parsedItems = JSON.parse(loadedPopularItems);
			setPopular(parsedItems);
			let parsedVeggies = JSON.parse(loadedVeggiesItems);
			setVeggies(parsedVeggies);
		} else {
			(async () => {
				const [popularItems, veggieItems] = await Promise.all([
					getData(
						`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
					),
					getData(
						`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian&number=10`
					),
				]);
				setPopular(popularItems);
				localStorage.setItem("popular", JSON.stringify(popularItems));
				setVeggies(veggieItems);
				localStorage.setItem("veggies", JSON.stringify(veggieItems));
			})();
		}
	}, []);

	return (
		<>
			<Input />
			<Filter />
			<Splider
				items={popular}
				options={{
					perPage: 3,
				}}
				label="Popular Picks"
			/>
			<Splider
				items={veggies}
				options={{
					perPage: 4,
				}}
				label="Vegetarian Recipes"
			/>
		</>
	);
}

export default Home;
