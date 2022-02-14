import useConfirm from "./useConfirm";

const Confirm = () => {
	const confirmAction = useConfirm("확인", callback);

	return <div onClick={confirmAction}>Confirm</div>;

	function callback(isConfirm) {
		alert(isConfirm ? "좋아요" : "거절햇네?");
	}
};

export default Confirm;
