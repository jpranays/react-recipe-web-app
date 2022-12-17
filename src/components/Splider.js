import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Image from "./Image";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Splider({ items, options, label }) {
	return (
		<motion.div
			className="images-container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<h2>{label}</h2>
			<Splide
				options={{
					perPage: 3,
					gap: "1rem",
					pagination: true,
					arrows: false,
					drag: true,
					breakpoints: {
						1024: {
							perPage: 3,
							gap: "1rem",
						},
						768: {
							perPage: 2,
							gap: "1rem",
						},
						500: {
							perPage: 1,
							gap: "1rem",
						},
						320: {
							perPage: 1,
							gap: "1rem",
						},
					},
					...options,
				}}
				className="splide"
			>
				{items.map((item) => (
					<SplideSlide key={item.id}>
						<Link to={`/recipe/${item.id}`}>
							<Image url={item.image} title={item.title} />
						</Link>
					</SplideSlide>
				))}
			</Splide>
		</motion.div>
	);
}

export default Splider;
