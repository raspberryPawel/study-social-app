import React, {Component, ReactElement} from "react";
import {NavBar} from "../components/mainPage/view/navbar/NavBar";
import "./MainPage.scss";

export class MainPage extends Component {
	public render(): ReactElement {
		return (
			<div className={"MainPage"}>
				<NavBar />
			</div>
		);
	}
}