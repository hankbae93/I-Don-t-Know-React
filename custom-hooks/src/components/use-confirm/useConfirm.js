const useConfirm = (message = "", callback) => {
	const confirmAction = () => {
		const isConfirm = window.confirm(message);
		if (isConfirm) {
			callback(isConfirm);
		}
	};

	return confirmAction;
};

export default useConfirm;
