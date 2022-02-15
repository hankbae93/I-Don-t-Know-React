import React from "react";
import useFullscreen from "./useFullscreen";

const FullScreen = () => {
	const onFullScreen = (isFull) => {
		console.log(isFull ? "yes" : "no");
	};

	const { el, triggerFull, exitFull } = useFullscreen(onFullScreen);
	return (
		<div ref={el}>
			<img
				src='https://dimg.donga.com/wps/NEWS/IMAGE/2021/01/17/104953245.2.jpg'
				width={300}
				height={400}
				alt=''
				style={{ objectFit: "cover" }}
			/>
			<button onClick={triggerFull}>FullScreen</button>
			<button onClick={exitFull}>ExitFullScreen</button>
		</div>
	);
};

export default FullScreen;
