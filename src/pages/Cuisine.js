import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../components/Input";
import Splider from "../components/Splider";
function Cuisine() {
	const { type } = useParams();
	console.log(type);
	const [cuisine, setCuisine] = useState([]);
	async function getData(url) {
		const {
			data: { results },
		} = await axios.get(url);
		return results;
	}
	useEffect(() => {
		(async () => {
			let response = await getData(
				`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${type}`
			);
			console.log(response);
			setCuisine(response);
		})();
	}, [type]);
	return (
		<>
			<Input />
			<Splider
				items={cuisine}
				options={{
					perPage: 3,
				}}
				label={`${type}`}
			/>
		</>
	);
}

export default Cuisine;
