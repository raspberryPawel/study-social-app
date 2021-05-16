import {Avatar, Paper} from "@material-ui/core";
import {inject, observer} from "mobx-react";
import React, {FC} from "react";
import ecosystem from "../../assets/icons/ecosystem.svg";
import entities from "../../assets/icons/entities2.svg";
import network from "../../assets/icons/network.svg";
import addNewPublication from "../../assets/icons/plus.svg";

import publications from "../../assets/icons/publications.svg";

import addNewPerson from "../../assets/icons/user-plus.svg";
import {ButtonWithLink} from "../../common/ButtonWithLink";
import {SectionSeparator} from "../../common/SectionSeparator";
import {DropdownOption} from "../../interfaces/DropdownOption";
import {MainPageStore} from "../../stores/MainPageStore";
import styled from "styled-components";

const options: DropdownOption[] = [
	{title: "Publications", icon: publications, link: "/publications"},
	{title: "Ecosystem", icon: ecosystem, link: "/ecosystem"},
	{title: "Entities", icon: entities, link: "/entities"},
];

interface IProps {
	mainPageStore?: MainPageStore;
}

const LeftSectionContainer = styled.div`
	width: 250px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 20px;

	.accountInfo {
		width: 90%;
		height: auto;
		min-height: 200px;
	}

	button {
		width: 100%;
	}
`;

const PaperButtons = styled.div`
	button {
		display: flex;
		justify-content: flex-start;

		font-size: 0.8em;

		img {
			height: 15px;
			margin-right: 10px;
		}

		strong {
			display: flex;
			justify-content: center;
			align-items: center;

			padding: 5px;
			border: 0.5px solid rgba(135, 139, 145, 0.5);

			img {
				max-width: 15px;
				max-height: 15px;
				margin-right: 0;
			}
		}
	}
`;

const NavOptions = styled.div`
	width: 90%;
	height: auto;
	margin-top: 20px;

	display: flex;
	flex-direction: column;

	img {
		margin-right: 10px;
	}
`;

const AccountSection = styled.section`
	display: flex;
	flex-direction: column;
	padding: 10px;
	font-size: 0.9em;
	justify-content: center;
	align-items: center;
`;

const AccountDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	strong {
		color: #333333;
	}

	em {
		color: rgba(135, 139, 145, 0.5);
		font-size: 0.8em;
		font-style: normal;
	}
`;

export const LeftSectionElement: FC<IProps> = ({mainPageStore}) => {
	if (!mainPageStore || !mainPageStore.currentLoggedUser) return null;

	return (
		<LeftSectionContainer>
			<Paper className={"accountInfo"}>
				<AccountSection>
					<Avatar
						alt={mainPageStore.currentLoggedUser.name}
						src={mainPageStore.currentLoggedUser.photo.url}
						style={{width: 60, height: 60}}
					/>
					<AccountDetails>
						<strong>{mainPageStore.currentLoggedUser.name}</strong>
						<em>
							{mainPageStore.currentLoggedUser.username} - {mainPageStore.currentLoggedUser.company.name}
						</em>
					</AccountDetails>
				</AccountSection>
				<SectionSeparator />

				<PaperButtons>
					<ButtonWithLink
						link={"/add-new-network"}
						text={"Your network"}
						icon={network}
						endAdornment={
							<strong>
								<img src={addNewPerson} alt={"icon"} />
							</strong>
						}
					/>
					<ButtonWithLink
						link={"/add-new-publication"}
						text={"Your publications"}
						icon={publications}
						endAdornment={
							<strong>
								<img src={addNewPublication} alt={"icon"} />
							</strong>
						}
					/>
				</PaperButtons>
			</Paper>

			<NavOptions>
				{options?.map((option: DropdownOption) => (
					<ButtonWithLink
						key={option.title}
						link={option.link}
						icon={option.icon}
						text={option.title}
						onClick={() => {
							mainPageStore?.changeCurrentDropdownSection(option);
						}}
					/>
				))}
			</NavOptions>
		</LeftSectionContainer>
	);
};

export const LeftSection = inject("mainPageStore")(observer(LeftSectionElement));
