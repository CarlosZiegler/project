import PropTypes from "prop-types"
import React from "react"


import { Jumbotron } from 'react-bootstrap';
import BannerSection from "../../sections/bannerSection"


import "./index.css";

const Header = ({siteTitle}) => (

    <Jumbotron fluid>
        <BannerSection/>
    </Jumbotron>


)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
