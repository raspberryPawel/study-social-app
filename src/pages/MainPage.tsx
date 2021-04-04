import React, {Component} from "react";
import {NavBar} from "../components/mainPage/view/navbar/NavBar";
import styles from "./MainPage.module.scss";

interface IProps {}

interface IState {}

export class MainPage extends Component<IProps, IState> {
	render() {
		return (
			<div className={styles.MainPage}>
				<NavBar />
			</div>
		);
	}
}