import {inject, observer} from "mobx-react";
import React, {FC} from "react";

import styled from "styled-components";
import {ButtonWithLink} from "../../common/ButtonWithLink";
import {MainPageStore} from "../../stores/MainPageStore";

import {SinglePublication} from "./SinglePublication";
import {defaultBoxShadow} from "../../assets/variables";
import {publicationSection} from "../../consts/DropdownSections";

interface IProps {
	mainPageStore?: MainPageStore;
}

const LatestPublicationContainer = styled.div`
	width: 95%;
	display: flex;
	flex-direction: row;
	background-color: $white;
	box-shadow: ${defaultBoxShadow};
`;

const PublicationsContainer = styled.div`
	margin-top: 10px;
	width: 100%;
`;

const MainPublication = styled.div`
	width: 350px;
	height: 350px;
	position: relative;

	.publication-image {
		position: absolute;
		z-index: 0;
		width: 100%;
		height: 100%;

		img {
			width: 100%;
			height: 100%;
		}
	}

	.publication-content {
		position: absolute;
		width: calc(100% - 40px);
		bottom: 10px;
		left: 10px;
		z-index: 1;
		color: white;
		background-color: rgba(0, 0, 0, 0.4);
		padding: 10px;
	}
`;

const RestPublications = styled.div`
	width: calc(100% - 405px);
	margin: 10px 5px -5px 5px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;

const SectionTitle = styled.strong`
	font-weight: 500;
	font-size: 1.3em;
	width: 100%;
`;

const LatestPublicationsView: FC<IProps> = ({mainPageStore}) => {
	if (!mainPageStore || !mainPageStore.latestPublications) return null;

	const {latestPublications} = mainPageStore;
	const mainPublication = latestPublications[0];

	return (
		<LatestPublicationContainer>
			<MainPublication>
				<SinglePublication publication={mainPublication} />
			</MainPublication>

			<RestPublications>
				<SectionTitle>Latest publications</SectionTitle>

				<PublicationsContainer>
					{latestPublications?.slice(1, 4).map((publication) => (
						<SinglePublication key={publication.id} publication={publication} />
					))}
				</PublicationsContainer>

				<ButtonWithLink
					link={"/publications"}
					text={"See more publications"}
					onClick={() => {
						mainPageStore?.changeCurrentDropdownSection(publicationSection);
					}}
				/>
			</RestPublications>
		</LatestPublicationContainer>
	);
};

export const LatestPublications = inject("mainPageStore")(observer(LatestPublicationsView));
