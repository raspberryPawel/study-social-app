import {Avatar} from "@material-ui/core";
import {blue} from "@material-ui/core/colors";
import {inject, observer} from "mobx-react";
import React, {FC} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import logout from "../../assets/icons/logout.svg";
import privacy from "../../assets/icons/privacy.svg";
import settings from "../../assets/icons/settings.svg";
import {SectionSeparator} from "../../common/SectionSeparator";
import {MainPageStore} from "../../stores/MainPageStore";
import {ButtonWithLink} from "../../common/ButtonWithLink";

const AccountSection = styled.section`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 5px 0;
	padding: 0 5px;
`;

const AccountDetails = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 10px;
	width: calc(100% - 50px);

	span {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	a {
		color: ${blue["300"]} !important;
		font-size: 12px;
		cursor: pointer;
	}
`;

interface IProps {
	mainPageStore?: MainPageStore;
}

export const AccountInfoElement: FC<IProps> = ({mainPageStore}) => {
	if (!mainPageStore || !mainPageStore.currentLoggedUser) return null;

	return (
		<div>
			<AccountSection className={"account"}>
				<Avatar
					alt={mainPageStore.currentLoggedUser.name}
					src={mainPageStore.currentLoggedUser.photo.url}
					style={{width: 40, height: 40}}
				/>
				<AccountDetails>
					<span>{mainPageStore.currentLoggedUser.name}</span>
					<Link to={"/account"}>See profile</Link>
				</AccountDetails>
			</AccountSection>

			<ButtonWithLink link={"/privacy"} icon={privacy} text={"Privacy"} />
			<ButtonWithLink link={"/settings"} icon={settings} text={"Settings"} />

			<SectionSeparator />

			<ButtonWithLink link={"/logout"} icon={logout} text={"Logout"} />
		</div>
	);
};

export const AccountInfo = inject("mainPageStore")(observer(AccountInfoElement));
