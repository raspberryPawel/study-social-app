import {ClickAwayListener} from "@material-ui/core";
import React, {FC, useState} from "react";
import styled from "styled-components";
import {defaultBoxShadow} from "../assets/variables";

interface IProps {
	buttonView: React.ReactElement,
	toggleDropdown?: (isOpen: boolean) => void,
}

const DropdownContainerView = styled.div`
	position: relative;
	margin-left: 40px;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
`;

const DropdownView = styled.div`
	background-color: white;
	box-shadow: ${defaultBoxShadow};
	box-sizing: border-box;

	position: absolute;
	top: 100%;
	width: auto;
	height: auto;
	z-index: 1000;

	-webkit-overflow-scrolling: touch;
`;

export const DropdownContainer: FC<IProps> = props => {
	const [isOpen, toggleDropdown] = useState(false);

	const onOutsideClick = () => {
		if (isOpen) {
			props.toggleDropdown?.(false);
			toggleDropdown(false);
		}
	};

	return (
		<ClickAwayListener mouseEvent={"onMouseDown"} onClickAway={onOutsideClick}>
			<DropdownContainerView>
				{React.cloneElement(
					props.buttonView,
					{
						onClick: () => {
							toggleDropdown(!isOpen);
							props.toggleDropdown?.(isOpen);
						}
					}
				)}
				{
					isOpen &&
					<DropdownView>
						{props.children}
					</DropdownView>
				}
			</DropdownContainerView>
		</ClickAwayListener>
	);
};