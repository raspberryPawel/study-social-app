import {Button} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";
import SettingsIcon from "@material-ui/icons/Settings";
import React, {FC, useState} from "react";
import styled from "styled-components";
import {defaultBoxShadow} from "../../assets/variables";
import {EditableText} from "../../common/EditableText";
import {AccessType} from "../../consts/AccessType";
import {Workspace} from "../../interfaces/Workspace";

interface IProps {
	workspace: Workspace;
	changeWorkspaceTitle: (id: string, value: string) => void;
	changeWorkspaceDescription: (id: string, value: string) => void;
}

const WorkspaceContainer = styled.div`
	width: 100%;
	height: 340px;

	display: flex;
	flex-direction: column;

	border-radius: 10px;
	overflow: hidden;
	box-shadow: ${defaultBoxShadow};

	main {
		width: 100%;
		padding: 10px 20px 0 20px;
		position: relative;
		box-sizing: border-box;

		display: flex;
		align-items: center;

		img {
			height: 50px;
		}
	}
`;

const BgImage = styled.img`
	width: 100%;
	height: 200px;
	object-fit: cover;
	z-index: 0;
`;

const WorkspaceInfo = styled.section`
	width: 100%;
	padding-left: 15px;
	padding-bottom: 10px;

	display: flex;
	flex-direction: column;

	p,
	strong {
		margin: 5px;
	}

	strong {
		font-size: 1.1em;
	}

	p {
		font-size: 0.9em;
		color: ${grey["700"]};
	}

	button {
		position: absolute;
		right: 20px;
		top: 7px;
	}

	.MuiFormControl-root {
		width: 90%;

		textarea,
		input {
			font-weight: 400;
			font-size: 0.9em;
			color: ${grey["700"]};
		}
	}
`;

export const SingleEditableWorkspace: FC<IProps> = (props) => {
	const {EDIT, READ} = AccessType;
	const [accessType, changeType] = useState<AccessType>(READ);

	const {id, photo, description, icon, title} = props.workspace;

	const clickOnEditButton = () => {
		const newMode = accessType === READ ? EDIT : READ;

		changeType(newMode);
	};

	return (
		<WorkspaceContainer>
			<BgImage src={photo.url} alt="workspace-image" />
			<main>
				<img src={icon} alt="workspace-icon" />
				<WorkspaceInfo>
					<strong>
						<EditableText
							isEditable={accessType === EDIT}
							text={title}
							onChange={(value: string) => {
								props.changeWorkspaceTitle(id, value);
							}}
						/>
					</strong>
					<p>
						<EditableText
							multiline
							isEditable={accessType === EDIT}
							text={description}
							onChange={(value: string) => {
								props.changeWorkspaceDescription(id, value);
							}}
						/>
					</p>

					<Button onClick={clickOnEditButton}>
						<SettingsIcon />
					</Button>
				</WorkspaceInfo>
			</main>
		</WorkspaceContainer>
	);
};
