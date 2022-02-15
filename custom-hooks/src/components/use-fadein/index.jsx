import React from "react";
import useFadeIn from "./useFadeIn";

const FadeIn = () => {
	const fadeInEl = useFadeIn(1, 2);
	const fadeInParagraph = useFadeIn(5);
	return (
		<div>
			<button {...fadeInEl}>FadeIn</button>
			<p {...fadeInParagraph}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae animi
				dignissimos rerum doloremque. Temporibus repellendus at consequatur
				nesciunt exercitationem? Alias, eligendi doloremque? Earum aspernatur
				modi doloremque eveniet voluptatem quos eos?
			</p>
		</div>
	);
};

export default FadeIn;
