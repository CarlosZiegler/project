import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Leistungen from "../containers/leistungen"
import Wordpress from "../containers/wordpress"
import Portfolio from "../containers/portfolio"
import Formular from "../components/form"

const IndexPage = () => (
    <Layout>
        <SEO title="Home"/>

        <Leistungen id="leistungen" />
        <Wordpress id="wordpress" />
        <Portfolio id="portfolio" />
        <Formular id="kontakt" />

        <Link to="/page-2/">Go to page 2</Link>

    </Layout>
)

export default IndexPage
