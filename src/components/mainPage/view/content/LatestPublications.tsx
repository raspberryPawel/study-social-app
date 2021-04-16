import {inject, observer} from "mobx-react";
import React, {FC} from "react";

import styled from "styled-components";
import {ButtonElement} from "../../../../common/ButtonElement";
import {MainPageStore} from "../../../../stores/MainPageStore";
import "./LatestPublications.scss";

import {SinglePublication} from "./SinglePublication";

interface IProps {
	mainPageStore?: MainPageStore;
}

interface IState {}

//
// const publications: Publication[] = [
// 	{
// 		title: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit... and one more line for the demo",
// 		date: new Date(),
// 		author: {name: "Paweł", surname: "Malina", imageUrl: placeholder},
// 		imageUrl: placeholder
// 	},
// 	{
// 		title: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit... and one more line for the demo",
// 		date: new Date(),
// 		author: {name: "Paweł", surname: "Malina", imageUrl: placeholder},
// 		imageUrl: placeholder
// 	},
// 	{
// 		title: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit... and one more line for the demo",
// 		date: new Date(),
// 		author: {name: "Paweł", surname: "Malina", imageUrl: placeholder},
// 		imageUrl: placeholder
// 	},
// ];
//
// const mainPublication = {
// 	title: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit... and one more line for the demo",
// 	date: new Date(),
// 	author: {name: "Paweł", surname: "Malina", imageUrl: placeholder},
// 	imageUrl: placeholder
// };

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
				<ButtonElement className={"morePublications"} text={"See more publications"} />
			</div>
		</div>
	);
};

export const LatestPublications = inject("mainPageStore")(observer(LatestPublicationsClass));
