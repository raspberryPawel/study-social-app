import React, {FC} from "react";
import styled from "styled-components";
import {LatestPublications} from "./LatestPublications";
import {ResumeYourWork} from "./ResumeYourWork";
import {Workspaces} from "./Workspaces";

const RightSectionContainer = styled.div`
	width: calc(100% - 250px);
	padding-top: 20px;

	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
`;

export const RightSection: FC = () => (
	<RightSectionContainer className={"RightSection"}>
		<LatestPublications />
		<Workspaces />
		<ResumeYourWork />
	</RightSectionContainer>
);
