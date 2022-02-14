import React from "react";
import useFetch from "./useFetch";

const Item = () => {
	const { payload, loading, error } = useFetch("http://aws.random.cat/meow");
	return (
		<div>
			{loading && <span>Loading...</span>}
			{!loading && payload && <img src={payload.file} />}
			{!loading && error && <span>{error}</span>}
		</div>
	);
};

export default Item;
