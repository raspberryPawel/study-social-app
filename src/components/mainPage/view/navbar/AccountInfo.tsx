import React, {Component} from "react";
import logout from "../../../../assets/icons/logout.svg";
import privacy from "../../../../assets/icons/privacy.svg";
import settings from "../../../../assets/icons/settings.svg";
import personImage from "../../../../assets/images/enxampleperson.png";
import {DropdownElement} from "../../../../common/DropdownElement";
import {SectionSeparator} from "../../../../common/SectionSeparator";
import styles from "./AccountInfo.module.scss";

interface IProps {}

interface IState {}

export class AccountInfo extends Component<IProps, IState> {
	render() {
		const name = "Jeanne-Marie de la cli";

		return (
			<div className={styles.AccountInfo}>
				<section className={styles.account}>
					<img src={personImage} alt="" />
					<div className={styles.accountDetails}>
						<span>Name surname siema siema </span>
						<a>See profile</a>
					</div>
				</section>

				<DropdownElement icon={privacy} text={"Privacy"} />
				<DropdownElement icon={settings} text={"Settings"} />
				<SectionSeparator />
				<DropdownElement icon={logout} text={"Logout"} center/>
			</div>
		);
	}

}