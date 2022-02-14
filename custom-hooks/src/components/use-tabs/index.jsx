import React, { useState } from "react";
import useTab from "./useTab";

const content = [
	{
		tab: "Section 1",
		content: "I'm the Section 1",
	},
	{
		tab: "Section 2",
		content: "I'm the Section 2",
	},
];

const Tabs = () => {
	const { currentItem, changeItem } = useTab(0, content);

	return (
		<div>
			{content.map((section, i) => {
				return <button onClick={() => changeItem(i)}>{section.tab}</button>;
			})}
			<div>
				<p>{currentItem.content}</p>
			</div>
		</div>
	);
};

export default Tabs;
