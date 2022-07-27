import React, { useState } from "react";
import {
	FaTimes,
	FaBars,
	FaAngleLeft,
	FaAngleDown,
} from "react-icons/fa";
import { navLinks } from "../../Data/data";
import AccordionChild from "./AccordionChild";

const SideBar = () => {
	const [displaySideBar, setDisplaySideBar] = useState(false);
	const [selected, setSelected] = useState(null);

	const handleAccordion = (idx) => {
		if (selected === idx) {
			return setSelected(idx);
		}
		setSelected(idx);
	};

	return (
		<div className="side-bar">
			<div className="sideBar-header">
				<h2>Topit-up</h2>
				<button
					onClick={() => {
						setDisplaySideBar(!displaySideBar);
					}}
					className="sideBarBtn"
				>
					{displaySideBar ? <FaTimes /> : <FaBars />}
				</button>
			</div>
			{/* sidebar container */}
			<div className="side-nav-container">
				<ul className="sideBar-nav-links">
					{navLinks.map((item, idx) => {
						return (
							<li
								className="nav-component"
								key={idx}
								style={{ overflow: "hidden" }}
							>
								<div className="dropdown" onClick={() => handleAccordion(idx)}>
									<span className="sideBar-icon">{item.icon}</span>
									<span className="accordionbtn-txt">{item.name}</span>
									{item.dropDownItems ? (
										<ArrowIcons active={selected === idx} />
									) : (
										""
									)}
								</div>
								{/* accordion children */}
								<>
									<AccordionChild
										items={item.dropDownItems}
										active={idx === selected}
									/>
								</>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

const ArrowIcons = ({ active }) =>
	active ? (
		<FaAngleDown style={{ marginLeft: "auto" }} />
		) : (
			<FaAngleLeft style={{ marginLeft: "auto" }} />
	);
export default SideBar;
