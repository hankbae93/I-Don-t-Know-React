import React from "react";
import useAxios from "./useAxios";

const AxiosComponent = () => {
	const { loading, error, data, refetch } = useAxios({
		url: "http://aws.random.cat/meow",
	});

	return (
		<div>
			AxiosComponent <button onClick={refetch}>refetch</button>
			{!loading && (
				<img
					src={data?.file}
					width={200}
					height={200}
					style={{ objectFit: "cover" }}
				/>
			)}
		</div>
	);
};

export default AxiosComponent;
