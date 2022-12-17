import React, { useEffect, useRef } from "react";
import useInterSectionObserver from "../Hooks/useIntersectionObserver";
function Image({ id, url, title }) {
	const imageRef = useRef();
	useEffect(() => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		useInterSectionObserver(imageRef.current);
	}, []);
	return (
		<div className="img-wrapper">
			<img ref={imageRef} data-src={url} alt={title} />
			<p className="label">{title}</p>
			<div className="backdrop"></div>
		</div>
	);
}

export default Image;
