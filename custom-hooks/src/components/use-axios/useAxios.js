import React, { useEffect, useState } from "react";
import defautAxios from "axios";

const useAxios = (opts, axiosInstance = defautAxios) => {
	const [state, setState] = useState({
		loading: true,
		error: null,
		data: null,
	});

	const [trigger, setTrigger] = useState(0);

	const refetch = () => {
		setState({ ...state, loading: true });
		setTrigger(Date.now());
	};

	useEffect(() => {
		axiosInstance(opts)
			.then(({ data }) => {
				setState({ ...state, loading: false, data });
			})
			.catch((error) => {
				setState({ ...state, loading: false, error });
			});
	}, [trigger]);

	return { ...state, refetch };
};

export default useAxios;
