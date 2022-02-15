import { useRef } from "react";

const useFullscreen = (callback) => {
	const el = useRef();

	const runCb = (isFull) => {
		if (callback) {
			if (callback) {
				callback(isFull);
			}
		}
	};

	const triggerFull = () => {
		if (el.current) {
			el.current.requestFullscreen();
			runCb(true);
		}
	};

	const exitFull = () => {
		document.exitFullscreen();
		runCb(true);
	};

	return { el, triggerFull, exitFull };
};

export default useFullscreen;
