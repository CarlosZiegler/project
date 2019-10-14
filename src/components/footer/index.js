import React from "react"
import {Image} from "react-bootstrap";
import logo from "../../images/logo.png";


import "./style.css";
import {Link} from "gatsby";


const Footer = () => (

    <div className="mt-5 pt-5 pb-5 footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-xs-12 about-company">
                    <Image src={logo}/>
                    <p className="pr-5 textCopyright">Wir sind eine Webagentur in Berlin-Adlershof und haben unseren
                                                      Standort direkt auf dem WISTA-Gelände kurz hinter dem S-Bahnhof
                                                      Adlershof. </p>
                    <p><a href="#"><i className="fa fa-facebook-square mr-1"></i></a><a href="#"><i
                        className="fa fa-linkedin-square"></i></a></p>
                </div>
                <div className="col-lg-2 col-xs-12 location">
                    <h4 className="mt-lg-0 mt-sm-4">Location</h4>
                    <ul className="m-0 p-0">
                        <li>Am Studio 2a, 12489 Berlin</li>
                        <li>Deutschland</li>
                        <li>+49 (0)30 374 348 14</li>
                        <li>info@visyu.de</li>
                    </ul>
                </div>
                <div className="col-lg-2 col-xs-12 links">
                    <h4 className="mt-lg-0 mt-sm-3">Links</h4>
                    <ul className="m-0 p-0">
                        <li>-<Link to="/impressum/">Impressum</Link></li>
                        <li>-<Link to="/datenschutzerklaerung/">Datenschutzerklärung</Link></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-xs-12 links">
                    <h4 className="mt-lg-0 mt-sm-3">Social</h4>
                    <ul className="m-0 p-0">
                        <li>- <a href="https://visyu.de/feed/" target="_blank">Blog Feed</a></li>
                        <li>- <a href="https://twitter.com/visyusolution" target="_blank">Twitter</a></li>
                        <li>- <a href="https://www.facebook.com/visyusolution/" target="_blank">Facebook</a></li>
                        <li>- <a href="https://www.instagram.com/visyu_solution/" target="_blank">Instagram</a></li>
                        <li>- <a href="https://www.xing.com/companies/visyusolution" target="_blank">Xing</a></li>
                        <li>- <a href="https://www.linkedin.com/company/visyu/" target="_blank">LinkedIn</a></li>
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
