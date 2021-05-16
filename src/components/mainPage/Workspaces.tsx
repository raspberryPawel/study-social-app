import {inject, observer} from "mobx-react";
import React, {FC} from "react";
import styled from "styled-components";
import {defaultBoxShadow} from "../../assets/variables";
import CustomScrollbar from "../../common/CustomScrollbar";
import {SectionTitle} from "../../common/SectionTitle";
import {Workspace} from "../../interfaces/Workspace";
import {MainPageStore} from "../../stores/MainPageStore";
import {SingleWorkspace} from "./SingleWorkspace";

interface IProps {
	mainPageStore?: MainPageStore;
}

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

export const WorkspacesView: FC<IProps> = ({mainPageStore}) => {
	if (!mainPageStore) return <div />;

	return (
		<WorkspacesMain>
			<SectionTitle title={"Workspaces"} />
			<CustomScrollbar scrollHorizontallyOnWheel style={{width: "100%", height: 300}}>
				<WorkspacesContainer>
					{mainPageStore.workspaces.map((workspace: Workspace) => (
						<SingleWorkspace key={workspace.id} workspace={workspace} />
					))}
				</WorkspacesContainer>
			</CustomScrollbar>
		</WorkspacesMain>
	);
};

export const Workspaces = inject("mainPageStore")(observer(WorkspacesView));
