import Button from "@material-ui/core/Button";
import React, {FC, useState} from "react";
import styled from "styled-components";
import iconEdit from "../../assets/icons/settings.svg";
import {AccessType} from "../../consts/AccessType";

interface IProps {
	changeMode: (mode: AccessType) => void;
}

const EditableSectionContainer = styled.div`
	width: 100%;

	position: relative;
	display: flex;
	flex-direction: row;
	margin-bottom: 20px;
	box-sizing: border-box;
	padding: 0 10px;

	button {
		position: absolute;
		top: 0;
		right: 10px;
		z-index: 10;
	}
`;

export const AdvancedAccountInfoEditableSection: FC<IProps> = ({changeMode, children}) => {
	const {READ, EDIT} = AccessType;
	const [mode, changeLocalMode] = useState<AccessType>(AccessType.READ);

	const clickOnEditButton = () => {
		const newMode = mode === READ ? EDIT : READ;

		changeMode(newMode);
		changeLocalMode(newMode);
	};

	return (
		<EditableSectionContainer>
			<Button onClick={clickOnEditButton}>
				<img src={iconEdit} alt="icon edit" />
			</Button>

			{children}
		</EditableSectionContainer>
	);
};
