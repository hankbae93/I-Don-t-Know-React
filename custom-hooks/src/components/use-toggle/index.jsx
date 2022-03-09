import React from "react";
import useToggle from "./useToggle";

const Toggle = () => {
	const [value, toggleValue] = useToggle(false);
	return (
		<div>
			<div>{value.toString()}</div>
			<button onClick={toggleValue}>Toggle</button>
			<button onClick={() => toggleValue(true)}>Make True</button>
			<button onClick={() => toggleValue(false)}>Make False</button>
		</div>
	);
};

export default Toggle;
