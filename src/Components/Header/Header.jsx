import React from "react";
import styled from "styled-components";
import { Fontawesome } from "react-web-vector-icons";
import { Button } from "@material-tailwind/react";
import SearchBar from "./SearchBar";

import { FaBars } from "react-icons/fa";
import AdminDetails from "./AdminDetails";
const Header = () => {
	return (
		<>
			<HeaderContainer>
				<button className="headerSideBarBtn sideBarBtn">
					<FaBars />
				</button>
				<SearchBar />
				<AdminDetails />
			</HeaderContainer>
		</>
	);
};

const HeaderContainer = styled.div`
	width: 100%;
	height: 60px;
	padding: 10px;
	display: flex;
	border-bottom: 0.15rem solid #b6b3b3;
	justify-content: space-between;
	align-items: center;
	.sideBarBtn {
		display: none;
	}


	@media screen  (max-width: 700px){
		.sideBarBtn{
			display: true;
		}
	}
	.chat-body {
		display: flex;
		align-items: center;
		padding: 8;
		background: #f1f1f1;
	}



`;
export default Header;
