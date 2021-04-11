import React, {Component, ReactElement} from "react";
import {CustomScrollbar} from "../common/CustomScrollbar";
import {MainPageContent} from "../components/mainPage/view/MainPageContent";
import {NavBar} from "../components/mainPage/view/NavBar";
import "./MainPage.scss";

export class MainPage extends Component {
	public render(): ReactElement {
		return (
			<CustomScrollbar className={"MainPage"} style={{height: "100vh", position: "absolute"}}>
				<NavBar />
				<MainPageContent />
			</CustomScrollbar>

		);
	}
}