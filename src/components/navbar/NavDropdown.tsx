import React, {FC, useState} from "react";

import styled from "styled-components";
import arrow from "../../assets/icons/arrow-down.svg";
import {DropdownContainer} from "../../common/DropdownContainer";
import {DropdownOption} from "../../interfaces/DropdownOption";
import {DropdownView} from "./DropdownView";
import {dropdownSections} from "../../consts/DropdownSections";
import {inject, observer} from "mobx-react";
import {MainPageStore} from "../../stores/MainPageStore";

interface IProps {
	mainPageStore?: MainPageStore;
}

const DropdownArrow = styled.img<{isOpen: boolean}>`
	transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

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

		font-size: 0.8em;
		font-weight: 400;

		img {
			height: 15px;
			padding: 0 10px;
		}
	}
`;

const Dropdown: FC<IProps> = ({mainPageStore}) => {
	const [isOpen, changeOpen] = useState<boolean>(false);

	const getButtonView = () => {
		return (
			<DropdownButton>
				<p>
					<img src={mainPageStore?.currentDropdownOption?.icon} alt={"home icon"} />
					{mainPageStore?.currentDropdownOption?.title}
				</p>
				<DropdownArrow src={arrow} isOpen={isOpen} />
			</DropdownButton>
		);
	};

	if (!mainPageStore) return null;
	return (
		<DropdownContainer toggleDropdown={(isOpen: boolean) => changeOpen(isOpen)} buttonView={getButtonView()}>
			<DropdownView
				dropdownSections={dropdownSections}
				changeSelectedOption={(selectedOption: DropdownOption) =>
					mainPageStore.changeCurrentDropdownSection(selectedOption)
				}
			/>
		</DropdownContainer>
	);
};

export const NavDropdown = inject("mainPageStore")(observer(Dropdown));
