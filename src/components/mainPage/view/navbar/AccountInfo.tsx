import React, {Component, ReactElement} from "react";
import logout from "../../../../assets/icons/logout.svg";
import privacy from "../../../../assets/icons/privacy.svg";
import settings from "../../../../assets/icons/settings.svg";
import personImage from "../../../../assets/images/enxampleperson.png";
import {DropdownElement} from "../../../../common/DropdownElement";
import {SectionSeparator} from "../../../../common/SectionSeparator";
import "./AccountInfo.scss";

export class AccountInfo extends Component {
	public render(): ReactElement {
		return (
			<div className={"AccountInfo"}>
				<section className={"account"}>
					<img src={personImage} alt="" />
					<div className={"accountDetails"}>
						<span>Name surname example person </span>
						<a>See profile</a>
					</div>
				</section>

				<DropdownElement icon={privacy} text={"Privacy"} />
				<DropdownElement icon={settings} text={"Settings"} />
				<SectionSeparator />
				<DropdownElement className={"logoutButton"} icon={logout} text={"Logout"} center />
			</div>
		);
	}
}