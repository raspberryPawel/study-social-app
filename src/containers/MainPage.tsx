import React, {Component, ReactElement} from "react";
import CustomScrollbar from "../common/CustomScrollbar";
import {MainPageContent} from "../components/mainPage/MainPageContent";

export class MainPage extends Component {
	public render(): ReactElement {
		return (
			<CustomScrollbar style={{height: "calc(100vh - 60px)", position: "absolute"}}>
				<MainPageContent />
			</CustomScrollbar>
		);
	}
}
