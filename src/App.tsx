import React, {Component, ReactElement} from "react";
import {BrowserRouter, Route, Switch,} from "react-router-dom";
import "./App.scss";
import {MainPage} from "./pages/MainPage";
import {NotFoundPage} from "./pages/NotFoundPage";

export class App extends Component {
	public render(): ReactElement {
		return (
			<div className={"App"}>
				<BrowserRouter>
					<Switch>
						<Route exact path="/about">
							<MainPage />
						</Route>
						<Route exact path="/">
							<MainPage />
						</Route>
						<Route component={NotFoundPage} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}