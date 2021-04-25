import {Avatar} from "@material-ui/core";
import {inject, observer} from "mobx-react";
import React, {FC} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import logout from "../../../../assets/icons/logout.svg";
import privacy from "../../../../assets/icons/privacy.svg";
import settings from "../../../../assets/icons/settings.svg";
import {blue} from "../../../../assets/variables";
import {ButtonElement} from "../../../../common/ButtonElement";
import {SectionSeparator} from "../../../../common/SectionSeparator";
import {MainPageStore} from "../../../../stores/MainPageStore";

const AccountInfoContainer = styled.div`
	.logoutButton {
		position: sticky;
		bottom: 0px;
		background-color: white;

		border-top: 0.5px solid rgba(135, 139, 145, 0.5);
		margin: -6px 0;
	}
`;

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
		color: ${blue};
		font-size: 12px;
		cursor: pointer;
	}
`;

interface IProps {
	mainPageStore?: MainPageStore;
}

export const AccountInfoElement: FC<IProps> = ({
	mainPageStore
}) => {
	if (!mainPageStore || !mainPageStore.currentLoggedUser) return null;

	return (
		<AccountInfoContainer>
			<AccountSection className={"account"}>
				<Avatar alt={mainPageStore.currentLoggedUser.name} src={mainPageStore.currentLoggedUser.imageUrl}
						style={{width: 40, height: 40}}
				/>
				<AccountDetails>
					<span>{mainPageStore.currentLoggedUser.name}</span>
					<Link to={"/account"}>See profile</Link>
				</AccountDetails>
			</AccountSection>

			<ButtonElement icon={privacy} text={"Privacy"} />
			<ButtonElement icon={settings} text={"Settings"} />
			<SectionSeparator />
			<ButtonElement className={"logoutButton"} icon={logout} text={"Logout"} center />
		</AccountInfoContainer>
	);
};

export const AccountInfo = inject("mainPageStore")(observer(AccountInfoElement));