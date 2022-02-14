const useMoment = (date) => {
	const dD = ["d", "D"];
	const mM = ["m", "M"];
	const yY = ["y", "Y"];

	const checkString = (str, arr) => {
		return arr.some((el) => str.includes(el));
	};

	const getDateToString = (date) => {
		const newDate = new Date(date);
		let year = newDate.getFullYear().toString();
		let month = `${
			newDate.getMonth() + 1 >= 10
				? newDate.getMonth() + 1
				: "0" + (newDate.getMonth() + 1)
		}`;
		let day = `${
			newDate.getDate() >= 10 ? newDate.getDate() : "0" + newDate.getDate()
		}`;

		return { year, month, day };
	};

	const format = (date, formatString = "") => {
		let { year, month, day } = getDateToString(date);
		let newArr = formatString.split("");

		if (
			formatString.split("y").length === 2 ||
			formatString.split("Y").length === 2
		) {
			year = year.slice(2, year.length);
		}

		newArr = newArr.map((str, i) => {
			if (checkString(str, yY)) {
				const y = year[0];
				year = year.slice(1, year.length);
				return y;
			}
			if (checkString(str, mM)) {
				const m = month[0];
				month = month.slice(1, month.length);
				return m;
			}
			if (checkString(str, dD)) {
				const d = day[0];
				day = day.slice(1, day.length);
				return d;
			}
			return str;
		});

		return newArr.join("");
	};

	return { format };
};

export default useMoment;
