import React, {FC, useState} from "react";

import "react-dropdown/style.css";
import styled from "styled-components";
import administration from "../../assets/icons/administration.svg";
import arrow from "../../assets/icons/arrow-down.svg";

import document from "../../assets/icons/document.svg";
import entities from "../../assets/icons/entities.svg";
import corporate from "../../assets/icons/entities2.svg";
import home from "../../assets/icons/house.svg";
import groupNorms from "../../assets/icons/open-book.svg";
import peoples from "../../assets/icons/people.svg";
import publications from "../../assets/icons/publications.svg";
import {DropdownContainer} from "../../common/DropdownContainer";
import {DropdownOption} from "../../interfaces/DropdownOption";

import {DropdownSections} from "../../interfaces/DropdownSections";
import {AccountInfo} from "./AccountInfo";
import {DropdownView} from "./DropdownView";


interface IProps {
}

interface DropdownArrowProps {
	isOpen: boolean
}

const dropdownSections: DropdownSections[] = [
	{
		title: "Platform",
		options: [
			{title: "Home", icon: home, link: "/"},
			{title: "Publications", icon: publications, link: "/publications"},
			{title: "Peoples", icon: peoples, link: "/peoples"},
			{title: "Entities", icon: entities, link: "/entities"},
			{title: "Administration", icon: administration, link: "/administration"}]
	},
	{
		title: "Workspaces",
		options: [
			{title: "Client contract", icon: document, link: "/client-contract"},
			{title: "Supplier contract", icon: document, link: "/supplier-contract"},
			{title: "Corporate", icon: corporate, link: "/corporate"},
			{title: "Group Norms", icon: groupNorms, link: "/group-norms"},
			{title: "Real estate contracts", icon: document, link: "/real-estate-contracts"}
		]
	},
	{
		title: "Account",
		component: <AccountInfo />,
	}
];

const DropdownArrow = styled.img<DropdownArrowProps>`
	transform: ${props => props.isOpen ? "rotate(180deg)" : "rotate(0deg)"}
`;

// const DropdownContainer = styled.div`
// 	position: relative;
// 	margin-left: 40px;
// 	-webkit-touch-callout: none;
// 	-webkit-user-select: none;
// 	-khtml-user-select: none;
// 	-moz-user-select: none;
// 	-ms-user-select: none;
// 	user-select: none;
// `;

const DropdownButton = styled.div`
	position: relative;
	overflow: hidden;
	background-color: white;
	border: 1px solid #ccc;
	border-radius: 2px;
	box-sizing: border-box;
	color: #333;
	cursor: default;
	outline: none;
	transition: all 200ms ease;
	display: flex;
	height: 30px;
	padding: 0 20px;
	flex-direction: row;
	align-items: center;
	width: 240px;
	justify-content: space-between;

	p {
		display: flex;
		align-items: center;

		img {
			height: 15px;
			padding: 0 10px;
		}
	}
`;

export const NavDropdown: FC<IProps> = props => {
	const [isOpen, changeOpen] = useState<boolean>(false);
	const [selectedOption, changeSelectedOption] = useState<DropdownOption>({title: "Home", icon: home, link: "/"});

	const getButtonView = () => {
		return (
			<DropdownButton>
				<p>
					<img src={selectedOption.icon} alt={"home icon"} />
					{selectedOption.title}
				</p>
				<DropdownArrow src={arrow} isOpen={isOpen} />
			</DropdownButton>
		);
	};

	return (
		<DropdownContainer toggleDropdown={(isOpen: boolean) => changeOpen(isOpen)} buttonView={getButtonView()}>
			<DropdownView dropdownSections={dropdownSections}
						  changeSelectedOption={(selectedOption: DropdownOption) => changeSelectedOption(
							  selectedOption)}
			/>
		</DropdownContainer>
	);
};
