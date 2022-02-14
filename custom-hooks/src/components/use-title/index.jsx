import React from "react";
import useTitle from "./useTitle";

const Titles = () => {
	const titleUpdater = useTitle("Loading...");

	setTimeout(() => titleUpdater("Home"), 2000);
	return <div>Titles</div>;
};

export default Titles;
