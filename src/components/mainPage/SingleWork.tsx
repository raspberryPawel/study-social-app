import React, {FC} from "react";
import styled from "styled-components";
import {defaultBoxShadow} from "../../assets/variables";
import {DotSeparator} from "../../common/DotSeparator";
import {Work} from "../../interfaces/Work";

interface IProps {
	work: Work;
	showCompanyDetails?: boolean;
	showWorkspaceDefinitionDetails?: boolean;
}

const WorkContainer = styled.div`
	width: calc(100% - 50px);
	height: 110px;
	background-color: white;
	padding: 15px 25px;
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	box-shadow: ${defaultBoxShadow};
`;

const Title = styled.div`
	font-size: 1.3em;
`;

const Content = styled.div`
	font-size: 1em;
`;

const Info = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	font-weight: 300;
`;

const Workspace = styled.span`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const WorkspaceIcon = styled.img`
	width: 15px;
	margin-right: 10px;
`;

const WorkspaceDefinitionContainer = styled(Workspace)<{color: string}>`
	color: ${(props) => props.color};

	svg {
		fill: ${(props) => props.color};
	}
`;

export const SingleWork: FC<IProps> = (props) => {
	const {name, body, workspaceName, lastUpdateDate, workspaceDefinition, icon, user} = props.work;

	const getLastUpdateText = (): string => {
		const today = new Date();
		const datesDifference = today.getTime() - lastUpdateDate.getTime();
		const daysCount = Math.floor((datesDifference / (1000 * 60 * 60 * 24)) % 7);
		if (daysCount === 0) return "today";
		else if (daysCount === 1) return "yesterday";
		else return `${daysCount} days ago`;
	};

	return (
		<WorkContainer>
			<Title>{name}</Title>
			<Content>{body}</Content>
			<Info>
				<div>{user.company.name}</div>
				<DotSeparator />
				<Workspace>
					{props.showCompanyDetails && (
						<>
							<WorkspaceIcon src={icon} alt="workspace-icon" />
							<div>{workspaceName}</div>
						</>
					)}

					{props.showWorkspaceDefinitionDetails && (
						<>
							<WorkspaceDefinitionContainer color={workspaceDefinition.color}>
								{workspaceDefinition.icon && React.createElement(workspaceDefinition.icon)}
								{workspaceDefinition.name}
							</WorkspaceDefinitionContainer>
						</>
					)}
				</Workspace>
				<DotSeparator />
				<span>
					Updated {getLastUpdateText()} by {user.name}
				</span>
			</Info>
		</WorkContainer>
	);
};
