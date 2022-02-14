import React from "react";
import useMoment from "./useMoment";

const Moment = () => {
	const time = new Date();
	const { format } = useMoment();
	return <div>Moment {format(new Date(), "YY.MM/DD")}</div>;
};

export default Moment;
