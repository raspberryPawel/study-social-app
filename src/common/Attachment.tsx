import {grey} from "@material-ui/core/colors";
import React, {FC} from "react";
import styled from "styled-components";
import file from "../assets/icons/document.svg";

interface IProps {
	name?: string
}

const AttachmentContainer = styled.div`
	width: 100%;
	
	display: flex;
	flex-direction: row;
	margin: 5px 0;
	padding: 5px 10px;
	background-color: ${grey["100"]};
	box-sizing: border-box;
	
	font-size: 0.9em;
	font-weight: 300;

	img {
		width: 15px;
		margin-right: 10px;

	}
`;

export const Attachment: FC<IProps> = ({name}) => (
	<AttachmentContainer>
		<img src={file} alt="file icon" />
		{name || "Attachment.file"}
	</AttachmentContainer>
);
