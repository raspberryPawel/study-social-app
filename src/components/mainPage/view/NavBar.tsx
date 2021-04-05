import {Input, InputAdornment} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, {Component, ReactElement} from "react";
import {Link} from "react-router-dom";
import notifications from "../../../../assets/icons/bell.svg";
import messages from "../../../../assets/icons/comments.svg";
import homeIcon from "../../../../assets/icons/house.svg";
import search from "../../../../assets/icons/search.svg";
import logo from "../../../../assets/images/logo.png";
import "./NavBar.scss";
import {NavDropdown} from "./NavDropdown";

export class NavBar extends Component {
	public render(): ReactElement {
		return (
			<nav className={"NavBar"}>
				<div className={"startSection"}>
					<img src={logo} alt={"logo"} style={{height: 40}} />
					<Link to="/">
						<Button onClick={() => {console.log("siemaneczko");}}>
							<img src={homeIcon} className={"homeIcon"} alt={"home icon"} />
						</Button>
					</Link>
					<NavDropdown />
				</div>

				<Input
					className={"searchInput"}
					placeholder={"Search something..."}
					endAdornment={
						<InputAdornment position="end">
							<img src={search} alt={"search icon"} />
						</InputAdornment>
					}
				/>

				<div className={"endSection"}>
					<Link to="/">
						<Button onClick={() => {console.log("siemaneczko");}}>
							<img src={homeIcon} className={"homeIcon"} alt={"home icon"} />
						</Button>
					</Link>

					<Button style={{backgroundColor: "#f5f5f5", borderRadius: "100%"}}
							onClick={() => {console.log("siemaneczko");}}
					>
						<img src={messages} className={"homeIcon"} alt={"home icon"} />
					</Button>
					<Button style={{backgroundColor: "#f5f5f5", borderRadius: "100%"}}
							onClick={() => {console.log("siemaneczko");}}
					>
						<img src={notifications} className={"homeIcon"} alt={"home icon"} />
					</Button>
				</div>
			</nav>
		);
	}

}