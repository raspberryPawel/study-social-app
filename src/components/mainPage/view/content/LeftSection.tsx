import {Avatar, Paper} from "@material-ui/core";
import React, {Component, ReactElement} from "react";
import ecosystem from "../../../../assets/icons/ecosystem.svg";
import entities from "../../../../assets/icons/entities2.svg";
import network from "../../../../assets/icons/network.svg";
import addNewPublication from "../../../../assets/icons/plus.svg";

import publications from "../../../../assets/icons/publications.svg";

import addNewPerson from "../../../../assets/icons/user-plus.svg";
import personImage from "../../../../assets/images/enxampleperson.png";
import {ButtonElement} from "../../../../common/ButtonElement";
import {SectionSeparator} from "../../../../common/SectionSeparator";
import {DropdownOption} from "../../interfaces/DropdownOption";
import "./LeftSection.scss";

const options: DropdownOption[] = [
	{title: "Publications", icon: publications},
	{title: "Ecosystem", icon: ecosystem},
	{title: "Entities", icon: entities},
];


export class LeftSection extends Component {
	public render(): ReactElement {
		return (
			<div className={"LeftSection"}>
				<Paper className={"accountInfo"}>
					<section className={"account"}>
						<Avatar alt="Remy Sharp" src={personImage} style={{width: 60, height: 60}} />
						<div className={"accountDetails"}>
							<strong>Remy Sharp</strong>
							<em>Job title - company</em>
						</div>
					</section>
					<SectionSeparator />

					<ButtonElement className={"accountElement"} icon={network} text={"Your network"}
								   additionalButtonIcon={addNewPerson}
								   additionalButtonClick={() => {}}
					/>
					<ButtonElement className={"accountElement"} icon={publications} text={"Your publications"}
								   additionalButtonIcon={addNewPublication}
								   additionalButtonClick={() => {}}
					/>
				</Paper>

				<div className={"navOptions"}>
					{options?.map(
						(option: DropdownOption) => <ButtonElement
							className={"sectionElement"}
							icon={option.icon}
							text={option.title}
							// onClick={() => this.props.changeSelectedOption(option)}
						/>)
					}
				</div>

			</div>
		);
	}
}