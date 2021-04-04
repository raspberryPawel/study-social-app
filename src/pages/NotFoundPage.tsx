import {Button} from "@material-ui/core";
import React, {Component} from "react";
import page404 from "../assets/icons/404.svg";
import styles from "./NotFoundPage.module.scss";

interface IProps {}

interface IState {}

export class NotFoundPage extends Component<IProps, IState> {
	render() {
		return (
			<div className={styles.NotFoundPage}>
				<section>
					<img src={page404} alt={"page not found"} />
				</section>
				<section>
					<h1>404</h1>
					<h2>UH OH! You're lost.</h2>
					<p>The page you are looking for does not exist.
						How you got here is a mystery. But you can click the button below
						to go back to the homepage.
					</p>
					<Button onClick={() => {console.log("siemaneczko");}}>Home</Button>
				</section>
			</div>
		);
	}
}