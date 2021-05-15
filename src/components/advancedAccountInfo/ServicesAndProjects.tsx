import {inject, observer} from "mobx-react";
import React, {FC} from "react";
import styled from "styled-components";
import {InternalCorrespondent} from "../../common/InternalCorrespondent";
import {MainPageStore} from "../../stores/MainPageStore";
import {SingleAdvancedAccountInfoElement} from "./SingleAdvancedAccountInfoElement";

interface IProps {
	mainPageStore?: MainPageStore;
}

const InternalCorrespondents = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: 20px 0 10px 0;

	span {
		font-size: 0.9em;
		margin-top: 2px;
		margin-left: 20px;
		font-weight: 300;
	}
`;

export const ServicesAndProjectsElement: FC<IProps> = ({mainPageStore}) => {
	if (!mainPageStore || !mainPageStore.currentLoggedUser) return null;

	return (
		<SingleAdvancedAccountInfoElement>
			<strong>Services & projects</strong>
			<span>Corporate M&A and international acquisitions</span>

			<InternalCorrespondents>
				<strong>Services & projects</strong>
				<InternalCorrespondent user={mainPageStore.currentLoggedUser} />
				<InternalCorrespondent user={mainPageStore.currentLoggedUser} />
			</InternalCorrespondents>
		</SingleAdvancedAccountInfoElement>
	);
};

export const ServicesAndProjects = inject("mainPageStore")(observer(ServicesAndProjectsElement));
