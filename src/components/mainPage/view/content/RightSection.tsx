import React, {Component, ReactElement} from "react";
import {LatestPublications} from "./LatestPublications";
import {ResumeYourWork} from "./ResumeYourWork";
import "./RightSection.scss";
import {Workspaces} from "./Workspaces";

interface IProps {}

interface IState {}

export class RightSection extends Component<IProps, IState> {
	public render(): ReactElement {
		return (
			<div className={"RightSection"}>
				<LatestPublications />
				<Workspaces />
				<ResumeYourWork />
			</div>
		);
	}
}