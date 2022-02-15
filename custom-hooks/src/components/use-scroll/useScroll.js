import React, { useEffect, useState } from "react";

const useScroll = () => {
	const [scroll, setScroll] = useState({
		x: 0,
		y: 0,
	});

	function toFitSimple(cb) {
		let tick = false;

		return function trigger(e) {
			if (tick) {
				return;
			}

			tick = true;
			return requestAnimationFrame(function task() {
				tick = false;
				return cb(e);
			});
		};
	}
	const onScroll = (event) => {
		setScroll({ x: window.scrollX, y: window.scrollY });
	};

	useEffect(() => {
		window.addEventListener("scroll", toFitSimple(onScroll), { passive: true });
		return () =>
			window.removeEventListener("scroll", toFitSimple(onScroll), {
				passive: true,
			});
	}, []);

	return scroll;
};

export default useScroll;
