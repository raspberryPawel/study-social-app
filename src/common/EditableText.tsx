import {TextField} from "@material-ui/core";
import React, {ChangeEvent, FC, useEffect, useState} from "react";
import styled from "styled-components";

interface IProps {
	editOnClick?: boolean,
	isEditable?: boolean,
	text: string,
	onChange: (value: string) => void,
}

const EditableTextContainer = styled.section`
	margin-left: 20px;

	input {
		font-size: 0.8em;
		height: 0.7em;
		margin-top: 1px;
		font-weight: 300;
	}
`;
export const EditableText: FC<IProps> = ({editOnClick, isEditable, text, onChange}) => {
	const [isEditMode, changeMode] = useState<boolean>(false);

	useEffect(() => {
		if (!editOnClick) changeMode(isEditable || false);
	}, [isEditable, editOnClick]);

	const onElementClick = () => {
		if (editOnClick && isEditable) changeMode(!isEditMode);
	};

	const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
		if (editOnClick) {
			const input = event.target as HTMLInputElement;

			onChange(input.value);
			changeMode(!isEditMode);
		}
	};

	return (
		<EditableTextContainer>
			{isEditMode
				? <TextField
					autoFocus
					defaultValue={text}
					onChange={(e: ChangeEvent) => onChange((e.target as HTMLInputElement).value)}
					onBlur={onBlur}
				/>
				: <span onClick={onElementClick}>{text}</span>}
		</EditableTextContainer>
	);
};
