import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "react-bootstrap/Container";

const Layout = (props) => {
	return (
		<div className="RootContainer">
			<Header />
			<main className="Main">
				<Container className="Main__container">{props.children}</Container>
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
