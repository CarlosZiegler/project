import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu";
import Footer from "../components/footer"
import {Container} from "react-bootstrap";

const NotFoundPage = () => (
    <Layout id={"content container"}>
        <SEO title="404: Not found"/>
        <Menu/>
        <Container className={'container content blank'}>

            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Container>

        <Footer/>
    </Layout>
)

export default NotFoundPage
