import React from "react";
import useNetwork from "./useNetwork";

const Network = () => {
	const status = useNetwork();
	return <div>Network</div>;
};

export default Network;
