import React from "react";
import {BrowserRouter, Route, Switch,} from "react-router-dom";
import styles from "./App.module.scss";

import {MainPage} from "./pages/MainPage";
import {NotFoundPage} from "./pages/NotFoundPage";

function App() {
	return (
		<div className={styles.App}>
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


export default App;