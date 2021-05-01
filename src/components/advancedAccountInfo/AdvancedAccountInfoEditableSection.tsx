import Button from "@material-ui/core/Button";
import React, {FC, useState} from "react";
import styled from "styled-components";
import iconEdit from "../../assets/icons/settings.svg";
import {AdvancedAccountInfoMode} from "../../consts/AdvancedAccountInfoMode";

interface IProps {
	changeMode: (mode: AdvancedAccountInfoMode) => void
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
	const {READ, EDIT} = AdvancedAccountInfoMode;
	const [mode, changeLocalMode] = useState<AdvancedAccountInfoMode>(AdvancedAccountInfoMode.READ);

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
