import React, {FC} from "react";
import {Route, Switch} from "react-router-dom";
import styled from "styled-components";
import {NotFoundPage} from "../../../../pages/NotFoundPage";
import {Publications} from "../../../../pages/Publications";
import {AdvancedAccountInfoContainer} from "../../AdvancedAccountInfoContainer";
import {RightSectionContent} from "./RightSectionContent";

const RightSectionContainer = styled.div`
	width: calc(100% - 250px);
	height: calc(100vh - 60px);
	padding-top: 20px;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const RightSection: FC = () => (
	<RightSectionContainer className={"RightSection"}>
		<Switch>
			<Route exact path="/account">
				<AdvancedAccountInfoContainer />
			</Route>
			<Route exact path="/publications">
				<Publications />
			</Route>
			<Route exact path="/">
				<RightSectionContent />
			</Route>
			<Route component={NotFoundPage} />
		</Switch>
	</RightSectionContainer>
);
