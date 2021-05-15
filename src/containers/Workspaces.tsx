import {inject, observer} from "mobx-react";
import React, {FC} from "react";
import {useParams} from "react-router-dom";
import styled from "styled-components";
import {SingleEditableWorkspace} from "../components/workspaceView/SingleEditableWorkspace";
import {WorkspaceLastUpdates} from "../components/workspaceView/WorkspaceLastUpdates";
import {WorkspaceTiles} from "../components/workspaceView/WorkspaceTiles";
import {MainPageStore} from "../stores/MainPageStore";
import {NotFoundPage} from "./NotFoundPage";

interface IProps {
	mainPageStore?: MainPageStore
}

const WorkspaceViewElement = styled.div`
	width: 100%;
`;

const WorkspaceView: FC<IProps> = ({mainPageStore}) => {
	const {id} = useParams<{ id: string }>();

	if (!mainPageStore) return null;
	const singleWorkspace = mainPageStore.workspaces.find(workspace => workspace.id === id);

	if (!singleWorkspace) return (
		<NotFoundPage />
	);

	return (
		<WorkspaceViewElement>
			<SingleEditableWorkspace workspace={singleWorkspace}
									 changeWorkspaceTitle={mainPageStore.changeWorkspaceTitle}
									 changeWorkspaceDescription={mainPageStore.changeWorkspaceDescription}
			/>

			<WorkspaceTiles />
			<WorkspaceLastUpdates />
		</WorkspaceViewElement>
	);
};


export const SingleWorkspaceView = inject("mainPageStore")(observer(WorkspaceView));
