/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import {Nav, Navbar} from "react-bootstrap";
import logo from "../../images/logo.png";
import "./style.css";
import {Link} from "gatsby";

const Menu = () => {

    return (
        <>
            <Navbar id={'navbar'} className={"header"} sticky={"top"} collapseOnSelect expand="lg"  >
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width={"70%"}
                        alt="Visyu logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="justify-content-end" id="basic-navbar-nav"/>
                <Navbar.Collapse id="justify-content-end" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/#leistungen">Leistungen</Nav.Link>
                        <Nav.Link href="/#wordpress">Wordpress</Nav.Link>
                        <Nav.Link href="/#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="/jobs">Jobs</Nav.Link>
                        <Nav.Link href="/#kontakt">Kontakt</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Menu

/*
<Nav>
                        <Link className={"link"} to="/#leistungen">Leistungen</Link>
                        <Link className={"link"} to="/#wordpress">Wordpress</Link>
                        <Link className={"link"} to="/#portfolio">Portfolio</Link>
                        <Link className={"link"} to="/blog">Blog</Link>
                        <Link className={"link"} to="/jobs">Jobs</Link>
                        <Link className={"link"} to="/#kontakt">Kontakt</Link>
                    </Nav>
*/
