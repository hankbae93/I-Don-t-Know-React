import React from "react";
import useInput from "./useInput";

const Input = () => {
	const inputProps = useInput("", checkPassword);
	return (
		<div>
			<input {...inputProps} placeholder='입력하시든가' />
		</div>
	);

	function checkPassword(value) {
		return value.length <= 10;
	}
};

export default Input;
