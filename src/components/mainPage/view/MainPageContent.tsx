import React, {FC} from "react";
import styled from "styled-components";

import {LeftSection} from "./content/LeftSection";
import {RightSection} from "./content/RightSection";

const Content = styled.div`
	display: flex;
	flex-direction: row;
	min-height: calc(100vh - 50px);
	height: auto;
`;

export const MainPageContent: FC = () => (
	<Content>
		<LeftSection />
		<RightSection />
	</Content>
);
