import {inject, observer} from "mobx-react";
import React, {FC} from "react";

import styled from "styled-components";
import {ButtonWithLink} from "../../common/ButtonWithLink";
import {MainPageStore} from "../../stores/MainPageStore";
import "./LatestPublications.scss";

import {SinglePublication} from "./SinglePublication";

interface IProps {
	mainPageStore?: MainPageStore;
}

const PublicationsContainer = styled.div`
	margin-top: 10px;
	width: 100%;
`;

export const LatestPublicationsClass: FC<IProps> = ({mainPageStore}) => {
	if (!mainPageStore || !mainPageStore.latestPublications) return null;

	const {latestPublications} = mainPageStore;
	const mainPublication = latestPublications[0];

	return (
		<div className={"LatestPublications"}>
			<div className="mainPublication">
				<SinglePublication publication={mainPublication} />
			</div>
			<div className="restPublications">
				<strong className={"section-title"}>Latest publications</strong>

				<PublicationsContainer>
					{latestPublications?.slice(1, 4).map((publication) => (
						<SinglePublication key={publication.id} publication={publication} />
					))}
				</PublicationsContainer>

				<ButtonWithLink link={"/publications"} text={"See more publications"} />
			</div>
		</div>
	);
};

export const LatestPublications = inject("mainPageStore")(observer(LatestPublicationsClass));
