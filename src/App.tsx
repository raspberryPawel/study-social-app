import {Provider} from "mobx-react";
import React, {Component, ReactElement} from "react";
import {BrowserRouter,} from "react-router-dom";
import styled from "styled-components";
import {NavBar} from "./components/mainPage/view/NavBar";
import {MainPage} from "./pages/MainPage";
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
						<MainPage />
					</BrowserRouter>
				</Provider>
			</AppContainer>
		);
	}
}