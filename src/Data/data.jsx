import {
	FaTimes,
	FaBars,
	FaAngleLeft,
	FaFontAwesome,
	FaAngleDown,
	FaHome,
	FaList,
	FaBook,
	FaWallet,
	FaSignOutAlt,
	FaCog,
	FaPhone,
	FaUser,
	FaRegCreditCard,
	
} from "react-icons/fa";

export const navLinks = [
	{
		name: "dashboard",
		icon: <FaHome/>,
		link: "orders",
	},
	{
		name: "transactions",
		icon: <FaRegCreditCard/>,
		link: "orders",
	},
	{
		name: "plan orders",
		link: "orders",
		icon: <FaList/>,
		dropDownItems: ["Item 1", "Item 2", "Item 1"],
	},
	{
		name: "Manage Vouchers",
		link: "vouchers",
		icon: <FaBook/>,
		dropDownItems: ["Item 1", "Item 2", "Item 1"],
	},
	{
		name: "Manage wallet",
		link: "wallet",
		icon: <FaWallet/>,
		dropDownItems: ["Item 1", "Item 2", "Item 1"],
	},
	{
		name: "Manage users",
		link: "users",
		icon: <FaUser/>,
		dropDownItems: ["Item 1", "Item 2", "Item 1"],
	},
	{
		name: "settings",
		link: "settings",
		icon: <FaCog/>,
	},
	{
		name: "support",
		link: "support",
		icon: <FaPhone/>,
	},
	{
		name: "logout",
		link: "logout",
		icon: <FaSignOutAlt/>,
	},
];
