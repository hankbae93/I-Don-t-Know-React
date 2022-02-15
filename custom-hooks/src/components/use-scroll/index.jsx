import React from "react";
import useScroll from "./useScroll";

const Scroll = () => {
	const { y } = useScroll();
	const Style = {
		position: "fixed",
		color: y > 100 ? "red" : "blue",
	};

	return (
		<div style={{ height: "500vh" }}>
			<h1 style={Style}>Scroll</h1>
		</div>
	);
};

export default Scroll;
