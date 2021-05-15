import {Avatar} from "@material-ui/core";
import React, {FC} from "react";

import styled from "styled-components";
import personImage from "../../assets/images/enxampleperson.png";
import {LatestPublication} from "../../interfaces/LatestPublication";

interface IProps {
	publication: LatestPublication;
}

const SinglePublicationContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;

	.publication-image {
		img {
			width: 85px;
			height: 85px;
			object-fit: cover;
		}

		margin-right: 5px;
	}

	.title {
		font-weight: 400;
	}

	.publication-content {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
`;

const InfoContainer = styled.div`
	display: flex;
	flex-direction: row;
	font-size: 0.9em;

	p,
	.avatar {
		margin: 0 5px 0 0;
	}

	.author {
		display: flex;
		flex-direction: row;
	}
`;

export const SinglePublication: FC<IProps> = ({publication}) => {
	return (
		<SinglePublicationContainer>
			<div className="publication-image">
				<img src={publication.photo.url} alt="publication" />
			</div>
			<div className="publication-content">
				<strong className="title">{publication.title}</strong>
				<InfoContainer>
					<p>{publication.lastUpdateDate.toDateString()}</p>
					<div className="author">
						<Avatar
							alt={publication.user.name}
							src={personImage}
							className={"avatar"}
							style={{width: 20, height: 20}}
						/>
						{publication.user.name}
					</div>
				</InfoContainer>
			</div>
		</SinglePublicationContainer>
	);
};
