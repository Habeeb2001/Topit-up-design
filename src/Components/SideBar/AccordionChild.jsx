import React, { useState } from "react";
import { useEffect } from "react";
const AccordionChild = ({ items, active }) => {
	const [dropItem, setDropItem] = useState([])
	useEffect(() => {
		setDropItem(items)
	}, [dropItem])

	return (
		<div
			className={active ?"accordion-child show": "accordion-child"}
		>
			<>
				{items
					? items.map((text, index) => (
							<a href="#" key={index} className="accordion-children">
								{text}
							</a>
					  ))
					: ""}
			</>
		</div>
	);
};

export default AccordionChild;
