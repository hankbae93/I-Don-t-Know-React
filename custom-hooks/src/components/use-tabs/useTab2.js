import { useState } from "react";

function useTab2(data, handler) {
	const [tabs, setTabs] = useState(data);

	const handleItem = (index) => {
		setTabs((prev) => {
			const newState = [...prev].map((tab) => ({ ...tab, active: false }));
			newState[index].active = true;
			return newState;
		});
	};

	return { tabs, handleItem };
}

export default useTab2;

/*

import React, { useState } from "react";
import useTab from "./useTab2";

const Tabs = () => {
	const a = [
		{
			tabTitle: "About",
			content: "About Ranja that's my bitch ",
			active: true,
		},
		{
			tabTitle: "시발롬",
			content: "서정린 빚 1500만",
			active: false,
		},
		{
			tabTitle: "실직",
			content: "서정린 사망",
			active: false,
		},
	];

	const { tabs, handleItem } = useTab(a);

	return (
		<div>
			{tabs.map((item, i) => {
				return <button onClick={() => handleItem(i)}>{item.tabTitle}</button>;
			})}
			<div>
				{tabs.map((item, i) => {
					return (
						item.active && (
							<div>
								<p style={{ color: "red" }}>{item.content}</p>
							</div>
						)
					);
				})}
			</div>
		</div>
	);
};

export default Tabs;
*/
