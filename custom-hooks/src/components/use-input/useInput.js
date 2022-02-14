import { useState } from "react";

function useInput(defaultValue, validator) {
	const [value, setValue] = useState(defaultValue);

	const onChange = (e) => {
		const {
			target: { value },
		} = e;

		let willUpdate = true;

		if (typeof validator === "function") {
			willUpdate = validator(value);
		}
		if (willUpdate) {
			setValue(value);
		}
	};

	return { value, onChange };
}

export default useInput;
