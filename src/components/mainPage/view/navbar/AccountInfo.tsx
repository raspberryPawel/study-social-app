import {Avatar} from "@material-ui/core";
import React, {Component, ReactElement} from "react";
import styled from "styled-components";
import logout from "../../../../assets/icons/logout.svg";
import privacy from "../../../../assets/icons/privacy.svg";
import settings from "../../../../assets/icons/settings.svg";
import personImage from "../../../../assets/images/enxampleperson.png";
import {ButtonElement} from "../../../../common/ButtonElement";
import {SectionSeparator} from "../../../../common/SectionSeparator";

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
		color: $blue;
		font-size: 12px;
		cursor: pointer;
	}
`;

export class AccountInfo extends Component {
	public render(): ReactElement {
		return (
			<AccountInfoContainer>
				<AccountSection className={"account"}>
					<Avatar alt="Remy Sharp" src={personImage} style={{width: 40, height: 40}} />
					<AccountDetails>
						<span>Name surname example person </span>
						<a>See profile</a>
					</AccountDetails>
				</AccountSection>

				<ButtonElement icon={privacy} text={"Privacy"} />
				<ButtonElement icon={settings} text={"Settings"} />
				<SectionSeparator />
				<ButtonElement className={"logoutButton"} icon={logout} text={"Logout"} center />
			</AccountInfoContainer>
		);
	}
}