import useClick from "./useClick";

const Click = () => {
	const ref = useClick(onClick);

	return (
		<div>
			<h1 ref={ref}>Click</h1>
		</div>
	);

	function onClick() {
		alert("응애");
	}
};

export default Click;
