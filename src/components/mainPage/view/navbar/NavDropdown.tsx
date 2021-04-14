import {ClickAwayListener} from "@material-ui/core";
import React, {Component, ReactElement} from "react";
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
import {DropdownOption} from "../../interfaces/DropdownOption";

import {DropdownSections} from "../../interfaces/DropdownSections";
import {AccountInfo} from "./AccountInfo";
import {DropdownView} from "./DropdownView";
import "./NavDropdown.scss";

interface IProps {}

interface IState {
	isOpen: boolean,
	selectedOption: DropdownOption
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
		isOpen: true,
		selectedOption: {title: "Home", icon: home}
	};

	protected toggleDropdown = () => {
		const isOpen = !this.state.isOpen;
		this.setState({isOpen});
	};

	protected onOutsideClick = () => {
		if (this.state.isOpen)
			this.setState({isOpen: false});
	};

	protected changeSelectedOption = (selectedOption: DropdownOption) => {
		this.setState({selectedOption});
	};

	public render(): ReactElement {
		const {selectedOption} = this.state;
		return (
			<ClickAwayListener onClickAway={this.onOutsideClick}>
				<div className={"NavDropdown"}>
					<div className={"dropdownContainer"} onClick={this.toggleDropdown}>
						{<p><img src={selectedOption.icon} alt={"home icon"} />{selectedOption.title}</p>}
						<DropdownArrow src={arrow} isOpen={this.state.isOpen} />
					</div>
					{
						this.state.isOpen &&
						<DropdownView dropdownSections={dropdownSections}
									  changeSelectedOption={this.changeSelectedOption}
						/>
					}
				</div>
			</ClickAwayListener>
		);
	}
}