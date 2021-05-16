import React, {FC} from "react";
import {Route, Switch} from "react-router-dom";
import styled from "styled-components";
import {AdvancedAccountInfoPage} from "../../containers/AdvancedAccountInfoPage";
import {Entities} from "../../containers/Entities";
import {NotFoundPage} from "../../containers/NotFoundPage";
import {Publications} from "../../containers/Publications";
import {SingleWorkspaceView} from "../../containers/Workspaces";
import {MainSectionContent} from "./MainSectionContent";

const RightSectionContainer = styled.div`
	width: calc(100% - 250px);
	max-width: 1100px;
	height: calc(100vh - 60px);
	box-sizing: border-box;

	margin: 0 auto;
	padding: 20px;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const RightSection: FC = () => (
	<RightSectionContainer className={"RightSection"}>
		<Switch>
			<Route exact path="/workspace/:id">
				<SingleWorkspaceView />
			</Route>
			<Route exact path="/entities">
				<Entities />
			</Route>
			<Route exact path="/account">
				<AdvancedAccountInfoPage />
			</Route>
			<Route exact path="/publications">
				<Publications />
			</Route>
			<Route exact path="/">
				<MainSectionContent />
			</Route>
			<Route exact path="/study-social-app">
				<MainSectionContent />
			</Route>
			<Route component={NotFoundPage} />
		</Switch>
	</RightSectionContainer>
);
