import React, { useRef, useEffect } from "react";

const useClick = (onClick) => {
	const element = useRef();

	useEffect(() => {
		if (element.current) {
			element.current.addEventListener("click", onClick);
		}

		return () => {
			if (element.current) {
				element.current.removeEventListener("click", onClick);
			}
		};
	}, []);

	return element;
};

export default useClick;
