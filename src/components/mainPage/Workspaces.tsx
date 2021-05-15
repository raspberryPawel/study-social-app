import {inject, observer} from "mobx-react";
import React, {Component, ReactElement} from "react";
import styled from "styled-components";
import {defaultBoxShadow} from "../../assets/variables";
import {CustomScrollbar} from "../../common/CustomScrollbar";
import {SectionTitle} from "../../common/SectionTitle";
import {Workspace} from "../../interfaces/Workspace";
import {MainPageStore} from "../../stores/MainPageStore";
import {SingleWorkspace} from "./SingleWorkspace";

interface IProps {
	mainPageStore?: MainPageStore;
}

interface IState {}

//
// const workspaces: Workspace[] = [
// 	{
// 		id: 1,
// 		title: "Client contract",
// 		imageUrl: placeholder,
// 		usersCount: 150,
// 		workspaceName: "Contract",
// 		lastUpdateDate: new Date(),
// 		icon: document
// 	},
// 	{
// 		id: 2,
// 		title: "Suplier contract",
// 		imageUrl: placeholder,
// 		usersCount: 20,
// 		workspaceName: "Contract",
// 		lastUpdateDate: new Date(),
// 		icon: document
// 	},
// 	{
// 		id: 3,
// 		title: "Client contract",
// 		imageUrl: placeholder,
// 		usersCount: 150,
// 		workspaceName: "Contract",
// 		lastUpdateDate: new Date(),
// 		icon: document
// 	},
// 	{
// 		id: 4,
// 		title: "Suplier contract",
// 		imageUrl: placeholder,
// 		usersCount: 20,
// 		workspaceName: "Contract",
// 		lastUpdateDate: new Date(),
// 		icon: document
// 	},
// 	{
// 		id: 5,
// 		title: "Suplier contract",
// 		imageUrl: placeholder,
// 		usersCount: 20,
// 		workspaceName: "Contract",
// 		lastUpdateDate: new Date(),
// 		icon: document
// 	},
// ];

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

class WorkspacesClass extends Component<IProps, IState> {
	public render(): ReactElement {
		if (!this.props.mainPageStore) return <div />;

		return (
			<WorkspacesMain>
				<SectionTitle title={"Workspaces"} />
				<CustomScrollbar scrollHorizontallyOnWheel style={{width: "100%", height: 300}}>
					<WorkspacesContainer>
						{this.props.mainPageStore.workspaces.map((workspace: Workspace) => (
							<SingleWorkspace key={workspace.id} workspace={workspace} />
						))}
					</WorkspacesContainer>
				</CustomScrollbar>
			</WorkspacesMain>
		);
	}
}

export const Workspaces = inject("mainPageStore")(observer(WorkspacesClass));
