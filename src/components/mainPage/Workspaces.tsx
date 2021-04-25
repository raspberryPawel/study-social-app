import React, {Component, ReactElement} from "react";
import styled from "styled-components";
import document from "../../assets/icons/document.svg";
import placeholder from "../../assets/images/placehoder.png";
import {defaultBoxShadow} from "../../assets/variables";
import {CustomScrollbar} from "../../common/CustomScrollbar";
import {SectionTitle} from "../../common/SectionTitle";
import {Workspace} from "../../interfaces/Workspace";
import {SingleWorkspace} from "./SingleWorkspace";

interface IProps {}

interface IState {}

const workspaces: Workspace[] = [
	{
		title: "Client contract",
		imageUrl: placeholder,
		usersCount: 150,
		workspaceName: "Contract",
		lastUpdateDate: new Date(),
		icon: document
	},
	{
		title: "Suplier contract",
		imageUrl: placeholder,
		usersCount: 20,
		workspaceName: "Contract",
		lastUpdateDate: new Date(),
		icon: document
	},
	{
		title: "Client contract",
		imageUrl: placeholder,
		usersCount: 150,
		workspaceName: "Contract",
		lastUpdateDate: new Date(),
		icon: document
	},
	{
		title: "Suplier contract",
		imageUrl: placeholder,
		usersCount: 20,
		workspaceName: "Contract",
		lastUpdateDate: new Date(),
		icon: document
	},
	{
		title: "Suplier contract",
		imageUrl: placeholder,
		usersCount: 20,
		workspaceName: "Contract",
		lastUpdateDate: new Date(),
		icon: document
	},
];

const WorkspacesMain = styled.div`
	margin-top: 20px;
	width: 95%;
	display: flex;
	flex-direction: column;
	box-shadow: ${defaultBoxShadow};
`;

const WorkspacesContainer = styled.div`
	margin-top: 20px;
	width: 100%;
	display: flex;
	flex-direction: row;
`;

export class Workspaces extends Component<IProps, IState> {
	public render(): ReactElement {
		return (
			<WorkspacesMain>
				<SectionTitle title={"Workspaces"} />
				<CustomScrollbar scrollHorizontallyOnWheel style={{width: "100%", height: 300}}>
					<WorkspacesContainer>
						{workspaces.map((workspace: Workspace) => <SingleWorkspace workspace={workspace} />)}
					</WorkspacesContainer>
				</CustomScrollbar>
			</WorkspacesMain>
		);
	}
}