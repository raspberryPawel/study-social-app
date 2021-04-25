import {inject, observer} from "mobx-react";
import React, {FC} from "react";
import styled from "styled-components";
import {CustomScrollbar} from "../common/CustomScrollbar";
import {SinglePublication} from "../components/mainPage/view/content/SinglePublication";
import {MainPageStore} from "../stores/MainPageStore";

interface IProps {
	mainPageStore?: MainPageStore;
}

const PublicationsContainer = styled.div`
	width: 80%;
	height: calc(100vh - 70px);
	margin: 20px 10%;
	overflow: hidden;
`;

const PublicationsClass: FC<IProps> = ({
	mainPageStore
}) => {
	if (!mainPageStore || !mainPageStore.latestPublications) return null;

	const {latestPublications} = mainPageStore;
	return (
		<PublicationsContainer>
			<CustomScrollbar maxHeight={"100%"}>
				{latestPublications?.map(
					publication => <SinglePublication key={publication.id} publication={publication} />)}
			</CustomScrollbar>
		</PublicationsContainer>
	);
};

export const Publications = inject("mainPageStore")(observer(PublicationsClass));
