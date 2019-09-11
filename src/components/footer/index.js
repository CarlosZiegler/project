import React from "react"
import {Image, Container} from "react-bootstrap";
import logo from "../../images/logo.png";


import "./style.css";
import {Link} from "gatsby";
import Layout from "../../pages";

const Footer = () => (

    <div className="mt-5 pt-5 pb-5 footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-xs-12 about-company">
                    <Image src={logo}/>
                    <p className="pr-5 textCopyright">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
                                                      ante mollis quam tristique convallis </p>
                    <p><a href="#"><i className="fa fa-facebook-square mr-1"></i></a><a href="#"><i
                        className="fa fa-linkedin-square"></i></a></p>
                </div>
                <div className="col-lg-4 col-xs-12 location">
                    <h4 className="mt-lg-0 mt-sm-4">Location</h4>
                    <p>Am Studio 2a, 12489 Berlin - Deutschland</p>
                    <p className="mb-0">+49 (0)30 374 348 14</p>
                    <p>info@visyu.de</p>
                    <p></p>
                </div>
                    <div className="col-lg-3 col-xs-12 links">
                    <h4 className="mt-lg-0 mt-sm-3">Links</h4>
                    <ul className="m-0 p-0">
                        <li>-  <Link to="/impressum/">Impressum</Link></li>
                        <li>- <a href="#">Datenschutzerklärung</a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col copyright">
                    <p className="textCopyright">
                        <small className="textCopyright">© 2019. All Rights Reserved.</small>
                    </p>
                </div>
            </div>
        </div>
    </div>


)

export default Footer
