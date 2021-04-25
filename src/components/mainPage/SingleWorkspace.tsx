import React, {FC} from "react";
import styled from "styled-components";
import {defaultBoxShadow} from "../../assets/variables";
import {DotSeparator} from "../../common/DotSeparator";
import {Workspace} from "../../interfaces/Workspace";

interface IProps {
	workspace: Workspace
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

	section {
		width: 100%;
		height: 80px;
		position: absolute;
		bottom: 0;
		z-index: 1;
	}
`;

const BgImage = styled.img`
	position: absolute;
	width: 100%;
	height: 130px;
	object-fit: cover;
	top: 0;
	left: 0;
	z-index: 0;
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

const WorkspaceInfo = styled.div`
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

export const SingleWorkspace: FC<IProps> = props => {
	const {
		imageUrl,
		usersCount,
		workspaceName,
		lastUpdateDate,
		icon, title

	} = props.workspace;

	const getLastUpdateText = (): string => {
		const today = new Date();
		const datesDifference = today.getTime() - lastUpdateDate.getTime();
		const daysCount = Math.floor((datesDifference / (1000 * 60 * 60 * 24)) % 7);
		if (daysCount === 0)
			return "today";
		else if (daysCount === 1)
			return "yesterday";
		else
			return `${daysCount} days ago`;
	};

	return (
		<WorkspaceContainer>
			<BgImage src={imageUrl} alt="workspace-image" />
			<IconContainer>
				<img src={icon} alt="workspace-icon" />
			</IconContainer>
			<p>{title}</p>
			<section>
				<WorkspaceInfo>
					<span>
						<img src={icon} alt="workspace-icon" />
						{workspaceName}
					</span>
					<DotSeparator/>
					<span>{usersCount} users</span>
				</WorkspaceInfo>

				<DateSpan>Last update: {getLastUpdateText()}</DateSpan>
			</section>
		</WorkspaceContainer>
	);
};
