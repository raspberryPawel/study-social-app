import {inject, observer} from "mobx-react";
import React, {FC} from "react";
import {Link} from "react-router-dom";

import styled from "styled-components";
import {ButtonElement} from "../../../../common/ButtonElement";
import {MainPageStore} from "../../../../stores/MainPageStore";
import "./LatestPublications.scss";

import {SinglePublication} from "./SinglePublication";

interface IProps {
	mainPageStore?: MainPageStore;
}

const PublicationsContainer = styled.div`
	margin-top: 10px;
`;


export const LatestPublicationsClass: FC<IProps> = ({
	mainPageStore
}) => {
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
					{latestPublications?.slice(1, 4).map(
						publication => <SinglePublication key={publication.id} publication={publication} />)}
				</PublicationsContainer>
				<Link to={"/publications"}>
					<ButtonElement className={"morePublications"} text={"See more publications"} />
				</Link>
			</div>
		</div>
	);
};

export const LatestPublications = inject("mainPageStore")(observer(LatestPublicationsClass));
