import React, {Component, ReactElement} from "react";
import {LeftSection} from "./content/LeftSection";
import {RightSection} from "./content/RightSection";
import "./MainPageContent.scss";


interface IProps {}

interface IState {}

export class MainPageContent extends Component<IProps, IState> {
	public render(): ReactElement {
		return (
			<div className={"MainPageContent"}>
				<LeftSection />
				<RightSection />
			</div>
		);
	}
}