import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
	const handle = (event) => {
		const { clientY } = event;
		if (clientY <= 0) onBefore();
	};

	useEffect(() => {
		document.addEventListener("mouseleave", handle);
		return () => document.removeEventListener("mouseleave", handle);
	}, []);
};

export default useBeforeLeave;
