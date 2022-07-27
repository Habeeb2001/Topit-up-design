import React from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
const SearchBar = () => {
	return (
		<>
			<SearchContainer>
				<form className="searchBox">
					<FaSearch color="gray" />
					<input
						type="search"
						name="searchBar"
						placeholder="search"
						className="searchBar"
					/>
					<button className="bg-blue-500">
						<FaSearch className="search-icon" color="white" />
					</button>
				</form>
			</SearchContainer>
		</>
	);
};
const SearchContainer = styled.div`
	.searchBox {
		display: flex;
		display: flexbox;
		display: -ms-flexbox;
		justify-content: space-between;
		align-items: center;
		padding: 0px 10px;
		background: #f1f1f1;
		border-radius: 25px;
		border: 0.15rem solid #8f8e8e;
		.searchBar {
			padding: 3px 10px;
            margin-left: 10px;
			background: none;
            outline: none;

		}
        .search-icon{
            display: none;

        }
	}

`;

export default SearchBar;
