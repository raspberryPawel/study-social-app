import React, {Component, ReactElement} from "react";
import styled from "styled-components";
import placeholder from "../../../../assets/images/placehoder.png";
import {ButtonElement} from "../../../../common/ButtonElement";
import {Publication} from "../../interfaces/Publication";
import "./LatestPublications.scss";
import {SinglePublication} from "./SinglePublication";

interface IProps {}

interface IState {}

const publications: Publication[] = [
	{
		title: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit... and one more line for the demo",
		date: new Date(),
		author: {name: "Paweł", surname: "Malina", imageUrl: placeholder},
		imageUrl: placeholder
	},
	{
		title: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit... and one more line for the demo",
		date: new Date(),
		author: {name: "Paweł", surname: "Malina", imageUrl: placeholder},
		imageUrl: placeholder
	},
	{
		title: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit... and one more line for the demo",
		date: new Date(),
		author: {name: "Paweł", surname: "Malina", imageUrl: placeholder},
		imageUrl: placeholder
	},
];

const mainPublication = {
	title: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit... and one more line for the demo",
	date: new Date(),
	author: {name: "Paweł", surname: "Malina", imageUrl: placeholder},
	imageUrl: placeholder
};

const PublicationsContainer = styled.div`
	margin-top: 10px;
`;

export class LatestPublications extends Component<IProps, IState> {
	public render(): ReactElement {
		return (
			<div className={"LatestPublications"}>
				<div className="mainPublication">
					<SinglePublication publication={mainPublication} />
				</div>
				<div className="restPublications">
					<strong className={"section-title"}>Latest publications</strong>

					<PublicationsContainer>
						{publications.map(
							publication => <SinglePublication publication={publication} />)}
					</PublicationsContainer>
					<ButtonElement className={"morePublications"} text={"See more publications"} />
				</div>
			</div>
		);
	}
}