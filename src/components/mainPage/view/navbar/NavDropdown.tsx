import React, {Component} from "react";
import "react-dropdown/style.css";
import styled from "styled-components";
import administration from "../../../../assets/icons/administration.svg";
import arrow from "../../../../assets/icons/arrow-down.svg";

import document from "../../../../assets/icons/document.svg";
import entities from "../../../../assets/icons/entities.svg";
import corporate from "../../../../assets/icons/entities2.svg";
import home from "../../../../assets/icons/house.svg";
import groupNorms from "../../../../assets/icons/open-book.svg";
import peoples from "../../../../assets/icons/people.svg";
import publications from "../../../../assets/icons/publications.svg";

import {DropdownSections} from "../../interfaces/DropdownSections";
import {AccountInfo} from "./AccountInfo";
import {DropdownView} from "./DropdownView";
import styles from "./NavDropdown.module.scss";

interface IProps {}

interface IState {
	isOpen: boolean
}

interface DropdownArrowProps {
	isOpen: boolean
}

const dropdownSections: DropdownSections[] = [
	{
		title: "Platform",
		options: [
			{title: "Home", icon: home},
			{title: "Publications", icon: publications},
			{title: "Peoples", icon: peoples},
			{title: "Entities", icon: entities},
			{title: "Administration", icon: administration}]
	},
	{
		title: "Workspaces",
		options: [
			{title: "Client contract", icon: document},
			{title: "Supplier contract", icon: document},
			{title: "Corporate", icon: corporate},
			{title: "Group Norms", icon: groupNorms},
			{title: "Real estate contracts", icon: document}
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

export class NavDropdown extends Component<IProps, IState> {
	state = {
		isOpen: false
	};

	protected onButtonClick = () => {
		const isOpen = !this.state.isOpen;
		this.setState({isOpen});
	};

	render() {
		return (
			<div className={styles.NavDropdown}>
				<div className={styles.dropdownContainer} onClick={this.onButtonClick}>
					<p><img src={home} /> Home</p>
					<DropdownArrow src={arrow} isOpen={this.state.isOpen} />
				</div>
				{
					this.state.isOpen && <DropdownView dropdownSections={dropdownSections} />
				}
			</div>
		);
	}
}