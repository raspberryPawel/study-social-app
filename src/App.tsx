import {Provider} from "mobx-react";
import React, {Component, ReactElement} from "react";
import {BrowserRouter, Route, Switch,} from "react-router-dom";
import "./App.scss";
import {MainPage} from "./pages/MainPage";
import {NotFoundPage} from "./pages/NotFoundPage";
import {RootStore} from "./stores/RootStore";

export class App extends Component {
	public render(): ReactElement {
		return (

			<div className={"App"}>
				<Provider
					rootStore={RootStore}
					mainPageStore={RootStore.mainPageStore}
				>
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
				</Provider>
			</div>
		);
	}
}