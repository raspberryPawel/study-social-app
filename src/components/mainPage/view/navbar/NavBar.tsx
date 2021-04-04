import {Input, InputAdornment} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, {Component} from "react";
import homeIcon from "../../../../assets/icons/house.svg";
import search from "../../../../assets/icons/search.svg";
import logo from "../../../../assets/images/logo.png";
import styles from "./NavBar.module.scss";
import {NavDropdown} from "./NavDropdown";

interface IProps {}

interface IState {}


export class NavBar extends Component<IProps, IState> {
	render() {
		return (
			<nav className={styles.NavBar}>
				<div className={styles.startSection}>
					<img src={logo} alt={"logo"} style={{height: 40}} />
					<Button onClick={() => {console.log("siemaneczko");}}>
						<img src={homeIcon} className={styles.homeIcon} alt={"home icon"} />
					</Button>

					<NavDropdown />
				</div>

				<Input
					className={styles.searchInput}
					placeholder={"Search something..."}
					endAdornment={
						<InputAdornment position="end">
							<img src={search} />
						</InputAdornment>
					}
				/>

				<div className={styles.endSection}>
					<img src={logo} alt={"logo"} style={{height: 40}} />
					<Button onClick={() => {console.log("siemaneczko");}}>
						<img src={homeIcon} className={styles.homeIcon} alt={"home icon"} />
					</Button>

					<NavDropdown />
				</div>
			</nav>
		);
	}

}