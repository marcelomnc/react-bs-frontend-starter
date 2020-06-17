import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../../assets/images/AppLogo.svg";
import * as Labels from "../../../shared/ui/Labels";

const NavBar = (props) => {
	return (
		<Navbar className="NavBar" variant="dark" bg="dark" expand="lg">
			<Navbar.Brand className="NavBar__brand">
				<img
					alt=""
					src={logo}
					width="26"
					height="26"
					className="NavBar__brand__logo d-inline-block align-center"
				/>
				{" " + Labels.appLabel}
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
				<Nav className="Nav">
					<NavDropdown title={Labels.navDropDownLabel}>
						<NavDropdown.Item href="/dummy">
							{Labels.navDropDownItemLabel}
						</NavDropdown.Item>
						<NavDropdown.Item href="/dummy">
							{Labels.navDropDownItemLabel}
						</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link href="/about">{Labels.aboutLabel}</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
