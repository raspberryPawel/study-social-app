import React, {Component, ReactElement} from "react";
import {CustomScrollbar} from "../common/CustomScrollbar";
import {MainPageContent} from "../components/mainPage/view/MainPageContent";
import "./MainPage.scss";

export class MainPage extends Component {
	public render(): ReactElement {
		return (
			<CustomScrollbar className={"MainPage"} style={{height: "calc(100vh - 40px)", position: "absolute"}}>
				<MainPageContent />
			</CustomScrollbar>

		);
	}
}