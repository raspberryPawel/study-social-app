import React, {FC} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {defaultBoxShadow} from "../../assets/variables";
import {DotSeparator} from "../../common/DotSeparator";
import {Workspace} from "../../interfaces/Workspace";
import {WorkspaceImage} from "../../common/WorkspaceImage";

interface IProps {
	workspace: Workspace;
}

const WorkspaceContainer = styled.div`
	width: 310px;
	height: 250px;
	position: relative;
	margin: 0 5px 20px 5px;
	flex: 0 0 auto;
	background-color: white;

	p {
		position: absolute;
		top: 120px;
		left: 110px;
		font-size: 1.2em;
		font-weight: 500;
	}

	main {
		width: 100%;
		height: 80px;
		position: absolute;
		bottom: 0;
		z-index: 1;
	}
`;

const IconContainer = styled.div`
	position: absolute;
	width: 80px;
	height: 80px;
	top: 35%;
	left: 15px;
	border-radius: 10px;
	z-index: 1;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: white;
	box-shadow: ${defaultBoxShadow};

	img {
		width: 70%;
	}
`;

const WorkspaceInfo = styled.section`
	height: 40px;
	padding-left: 15px;
	padding-bottom: 10px;

	display: flex;
	flex-direction: row;
	align-items: center;

	span {
		line-height: 2;
		padding: 0 5px;
	}

	img {
		width: 20px;
	}
`;

const DateSpan = styled.span`
	padding-left: 15px;
`;

export const SingleWorkspace: FC<IProps> = (props) => {
	const {id, photo, usersCount, workspaceName, lastUpdateDate, icon, title} = props.workspace;

	const getLastUpdateText = (): string => {
		const today = new Date();
		const datesDifference = today.getTime() - lastUpdateDate.getTime();
		const daysCount = Math.floor((datesDifference / (1000 * 60 * 60 * 24)) % 7);
		if (daysCount === 0) return "today";
		else if (daysCount === 1) return "yesterday";
		else return `${daysCount} days ago`;
	};

	return (
		<WorkspaceContainer>
			<WorkspaceImage height={"130px"} src={photo.url} alt="workspace-image" />
			<IconContainer>
				<img src={icon} alt="workspace-icon" />
			</IconContainer>
			<Link to={`/workspace/${id}`}>
				<p>
					{title.slice(0, 20)}
					{title.length > 20 ? "..." : ""}
				</p>
			</Link>
			<main>
				<WorkspaceInfo>
					<span>
						<img src={icon} alt="workspace-icon" />
						{workspaceName}
					</span>
					<DotSeparator />
					<span>{usersCount} users</span>
				</WorkspaceInfo>

				<DateSpan>Last update: {getLastUpdateText()}</DateSpan>
			</main>
		</WorkspaceContainer>
	);
};
