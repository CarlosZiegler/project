/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { slide  } from 'react-burger-menu'

import {Nav, Navbar} from "react-bootstrap";
import logo from "../../images/logo.png";

const Menu = () => {

    return (
        <>

            <Navbar sticky={"top"} collapseOnSelect sticky="top" expand="lg" bg="light">
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
                        <Nav.Link href="/#testimonials">Testimonials</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="/#kontakt">Kontakt</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </>
    )
}

export default Menu
