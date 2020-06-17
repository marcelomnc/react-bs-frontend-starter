import React from "react";
import "./assets/styles/App.css";
import Layout from "./components/main/Layout/Layout";
import Dummy from "./components/Dummy/Dummy";
import About from "./components/About/About";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

function App() {
	let routes = (
		<Switch>
			<Route
				path="/dummy"
				exact
				render={() => {
					return <Dummy />;
				}}
			/>
			<Route
				path="/about"
				exact
				render={() => {
					return <About />;
				}}
			/>
			<Redirect to="/dummy" />
		</Switch>
	);

	return (
		<>
			<Layout>{routes}</Layout>
		</>
	);
}

export default withRouter(App);
