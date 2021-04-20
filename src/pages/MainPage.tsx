import React, {Component, ReactElement} from "react";
import {CustomScrollbar} from "../common/CustomScrollbar";
import {MainPageContent} from "../components/mainPage/view/MainPageContent";

export class MainPage extends Component {
	public render(): ReactElement {
		return (
			<CustomScrollbar style={{height: "calc(100vh - 40px)", position: "absolute"}}>
				<MainPageContent />
			</CustomScrollbar>
		);
	}
}