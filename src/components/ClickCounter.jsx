import React, { useState } from "react";

const ClickCounter = () => {
	const [clickCount, setClickCount] = useState(() => {
		return 0;
	});

	function handleClickIncrement() {
		setClickCount(prevCount => prevCount + 1);
	}

	function handleClickDecrement() {
		setClickCount(prevCount => prevCount - 1);
	}

	return (
		<div>
			<h3>Clicks: {clickCount}</h3>
			<button onClick={handleClickDecrement}>Minus 1</button>
			<button onClick={handleClickIncrement}>Add 1</button>
		</div>
	);
};

export default ClickCounter;
