import React, { useState } from "react";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
function Input() {
	const [recipeInput, setRecipeInput] = useState("");
	return (
		<>
			<Link className="logo" to="/">
				<GiKnifeFork />
				<p>delicious</p>
			</Link>
			<div className="input-container">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						alert("It does nothing btw...");
					}}
				>
					<input
						type="text"
						placeholder="Search recipe..."
						className="recipe-input"
						value={recipeInput}
						onChange={(e) => setRecipeInput(e.target.value)}
					/>
				</form>
			</div>
		</>
	);
}

export default Input;
