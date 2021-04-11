import {Avatar} from "@material-ui/core";
import React, {Component, ReactElement} from "react";
import logout from "../../../../assets/icons/logout.svg";
import privacy from "../../../../assets/icons/privacy.svg";
import settings from "../../../../assets/icons/settings.svg";
import personImage from "../../../../assets/images/enxampleperson.png";
import {ButtonElement} from "../../../../common/ButtonElement";
import {SectionSeparator} from "../../../../common/SectionSeparator";
import "./AccountInfo.scss";

export class AccountInfo extends Component {
	public render(): ReactElement {
		return (
			<div className={"AccountInfo"}>
				<section className={"account"}>
					<Avatar alt="Remy Sharp" src={personImage} style={{width: 40, height: 40}} />
					<div className={"accountDetails"}>
						<span>Name surname example person </span>
						<a>See profile</a>
					</div>
				</section>

				<ButtonElement icon={privacy} text={"Privacy"} />
				<ButtonElement icon={settings} text={"Settings"} />
				<SectionSeparator />
				<ButtonElement className={"logoutButton"} icon={logout} text={"Logout"} center />
			</div>
		);
	}
}