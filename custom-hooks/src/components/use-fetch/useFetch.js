import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
	const [payload, setPayload] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const callURL = async () => {
		try {
			const { data } = await axios.get(url);
			// throw new Error();
			setPayload(data);
		} catch (err) {
			console.log("Error");
			setError("Error");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		callURL();
	}, []);

	return { payload, loading, error };
}

export default useFetch;
