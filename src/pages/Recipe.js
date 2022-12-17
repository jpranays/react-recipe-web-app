import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import { useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
function Recipe() {
	const { id } = useParams();
	const [recipe, setRecipe] = useState({});
	const [activeTab, setActiveTab] = useState("ingredients");
	async function getData(url) {
		const { data } = await axios.get(url);
		return data;
	}
	useEffect(() => {
		(async () => {
			let response = await getData(
				`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
			);
			console.log(response);
			setRecipe(response);
		})();
	}, [id]);
	return (
		<>
			<Input />
			{recipe.title && (
				<motion.div
					className="recipe-container"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<div className="recipe-header">
						<h3>{recipe.title}</h3>
						<div className="recipe-image">
							<img src={recipe.image} alt={recipe.title} />
						</div>
					</div>
					<div className="recipe-info">
						<div className="btn-container">
							<div
								className={`ingredients recipe-btn ${
									activeTab === "ingredients" ? "active" : ""
								}`}
								onClick={() => setActiveTab("ingredients")}
							>
								Ingredients
							</div>
							<div
								className={`instruction recipe-btn ${
									activeTab === "instructions" ? "active" : ""
								}`}
								onClick={() => setActiveTab("instructions")}
							>
								Instructions
							</div>
						</div>

						<div className="info">
							{" "}
							{activeTab === "ingredients" && (
								<>
									<strong>Summary:</strong>
									<p
										dangerouslySetInnerHTML={{
											__html: recipe.summary,
										}}
									></p>
									<p>
										<strong>Ingredients:</strong>
										<br />
										{recipe.extendedIngredients.map((ingredient) => (
											<span key={ingredient.id}>
												{ingredient.original}
												<br />
											</span>
										))}
									</p>
								</>
							)}
							{activeTab === "instructions" && (
								<>
									<p>
										<strong>Instructions:</strong>
										<br />
										{recipe.instructions}
									</p>
								</>
							)}
						</div>
					</div>
				</motion.div>
			)}
		</>
	);
}

export default Recipe;
