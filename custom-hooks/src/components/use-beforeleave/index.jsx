import React from "react";
import useBeforeLeave from "./useBeforeLeave";

const BeforeLeave = () => {
	const before = () => console.log("leaving");
	useBeforeLeave(before);
	return <div>BeforeLeave</div>;
};

export default BeforeLeave;
