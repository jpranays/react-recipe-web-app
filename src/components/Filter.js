import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { GiHamburger, GiSushis, GiNoodles } from "react-icons/gi";
import { Link } from "react-router-dom";
function Filter() {
	return (
		<div className="filter-icon-container">
			<Link to="/cuisine/italian" className="icon-container">
				<FaPizzaSlice className="icon" />
				<p>Italian</p>
			</Link>
			<Link to="/cuisine/american" className="icon-container">
				<GiHamburger className="icon" />
				<p>American</p>
			</Link>
			<Link to="/cuisine/japanese" className="icon-container">
				<GiSushis className="icon" />
				<p>Japanese</p>
			</Link>
			<Link to="/cuisine/chinese" className="icon-container">
				<GiNoodles className="icon" />
				<p>Chinese</p>
			</Link>
		</div>
	);
}

export default Filter;
