import React from "react";
import usePreventLeave from "./usePreventLeave";

const PreventLeave = () => {
	const { enablePrevent, disablePrevent } = usePreventLeave();
	return (
		<div>
			<button onClick={enablePrevent}>protect</button>
			<button onClick={disablePrevent}>unprotect</button>
		</div>
	);
};

export default PreventLeave;
