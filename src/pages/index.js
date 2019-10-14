import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Leistungen from "../containers/leistungen"
import Wordpress from "../containers/wordpress"
import Portfolio from "../containers/portfolio"
import Formular from "../components/form"
import Menu from "../components/menu"
import Header from "../components/header"
import Footer from "../components/footer"


const IndexPage = () => (
    <Layout>
        <SEO title="Visyu" />
        <Menu />
        <Header />
        <Leistungen />
        <Wordpress />
        <Portfolio />
        <Formular />
        <Footer />
    </Layout>
)

export default IndexPage
