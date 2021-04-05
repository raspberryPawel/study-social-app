import {Button} from "@material-ui/core";
import React, {Component, ReactElement} from "react";
import {Link} from "react-router-dom";
import page404 from "../assets/icons/404.svg";
import "./NotFoundPage.scss";

export class NotFoundPage extends Component {
	public render(): ReactElement {
		return (
			<div className={"NotFoundPage"}>
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
					<Link to={"/"}>
						<Button>Home</Button>
					</Link>
				</section>
			</div>
		);
	}
}