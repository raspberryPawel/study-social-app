import {Avatar, Paper} from "@material-ui/core";
import {inject, observer} from "mobx-react";
import React, {FC} from "react";
import ecosystem from "../../assets/icons/ecosystem.svg";
import entities from "../../assets/icons/entities2.svg";
import network from "../../assets/icons/network.svg";
import addNewPublication from "../../assets/icons/plus.svg";

import publications from "../../assets/icons/publications.svg";

import addNewPerson from "../../assets/icons/user-plus.svg";
import {ButtonElement} from "../../common/ButtonElement";
import {ButtonWithLink} from "../../common/ButtonWithLink";
import {SectionSeparator} from "../../common/SectionSeparator";
import {DropdownOption} from "../../interfaces/DropdownOption";
import {MainPageStore} from "../../stores/MainPageStore";
import "./LeftSection.scss";

const options: DropdownOption[] = [
	{title: "Publications", icon: publications, link: "/publications"},
	{title: "Ecosystem", icon: ecosystem, link: "/ecosystem"},
	{title: "Entities", icon: entities, link: "/entities"},
];

interface IProps {
	mainPageStore?: MainPageStore;
}

export const LeftSectionElement: FC<IProps> = ({mainPageStore}) => {
	if (!mainPageStore || !mainPageStore.currentLoggedUser) return null;

	return (
		<div className={"LeftSection"}>
			<Paper className={"accountInfo"}>
				<section className={"account"}>
					<Avatar
						alt={mainPageStore.currentLoggedUser.name}
						src={mainPageStore.currentLoggedUser.imageUrl}
						style={{width: 60, height: 60}}
					/>
					<div className={"accountDetails"}>
						<strong>{mainPageStore.currentLoggedUser.name}</strong>
						<em>
							{mainPageStore.currentLoggedUser.username} - {mainPageStore.currentLoggedUser.company.name}
						</em>
					</div>
				</section>
				<SectionSeparator />
				{/*//change to button with link and add additional button to button with link*/}
				<ButtonElement
					className={"accountElement"}
					icon={network}
					text={"Your network"}
					additionalButtonIcon={addNewPerson}
					additionalButtonClick={() => {}}
				/>
				<ButtonElement
					className={"accountElement"}
					icon={publications}
					text={"Your publications"}
					additionalButtonIcon={addNewPublication}
					additionalButtonClick={() => {}}
				/>
			</Paper>

			<div className={"navOptions"}>
				{options?.map((option: DropdownOption) => (
					<ButtonWithLink key={option.title} link={option.link} icon={option.icon} text={option.title} />
				))}
			</div>
		</div>
	);
};

export const LeftSection = inject("mainPageStore")(observer(LeftSectionElement));
