import {Avatar} from "@material-ui/core";
import React, {Component, ReactElement} from "react";
import personImage from "../../../../assets/images/enxampleperson.png";
import {Publication} from "../../interfaces/Publication";

import "./SinglePublication.scss";

interface IProps {
	publication: Publication
}

interface IState {}

export class SinglePublication extends Component<IProps, IState> {
	public render(): ReactElement {
		const {publication} = this.props;
		return (
			<div className={"SinglePublication"}>
				<div className="publication-image"><img src={publication.imageUrl} alt="publication" /></div>
				<div className="publication-content">
					<strong className="title">{publication.title}</strong>
					<div className="info">
						<div className="date">{publication.date.toDateString()}</div>
						<div className="author">
							<Avatar alt="Remy Sharp" src={personImage} className={"avatar"}
									style={{width: 20, height: 20}}
							/>
							{publication.author.name} {publication.author.surname}
						</div>
					</div>
				</div>
			</div>
		);
	}
}