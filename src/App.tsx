import {Provider} from "mobx-react";
import React, {Component, ReactElement} from "react";
import {BrowserRouter, Route, Switch,} from "react-router-dom";
import styled from "styled-components";
import {NavBar} from "./components/mainPage/view/NavBar";
import {MainPage} from "./pages/MainPage";
import {NotFoundPage} from "./pages/NotFoundPage";
import {Publications} from "./pages/Publications";
import {RootStore} from "./stores/RootStore";

const AppContainer = styled.div`
	margin: 0;
	padding: 0;

	a {
		color: inherit;
		text-decoration: none;
	}
`;

export class App extends Component {
	public render(): ReactElement {
		return (
			<AppContainer>
				<Provider
					rootStore={RootStore}
					mainPageStore={RootStore.mainPageStore}
				>
					<BrowserRouter>
						<NavBar />
						<Switch>
							<Route exact path="/publications">
								<Publications />
							</Route>
							<Route exact path="/">
								<MainPage />
							</Route>
							<Route component={NotFoundPage} />
						</Switch>
					</BrowserRouter>
				</Provider>
			</AppContainer>
		);
	}
}