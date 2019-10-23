import React from 'react';
import PropType from 'prop-types';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';

import Layout from '../components/layout';
import SEO from "../components/seo"
import Menu from "../components/menu";
import Footer from "../components/footer"
import './style.css'
import CookieConsent from "react-cookie-consent";
import {Container} from "react-bootstrap";
import {Link} from "gatsby";


if (typeof window !== "undefined") {

    window.onscroll = function () {
        scrollFunction()
    };


}

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.backgroundColor = "rgb(228, 227, 227)";
        document.getElementById("navbar").style.fontWeight = "bold";
    } else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navbar").style.fontWeight = "bold";
    }
}


const PostTemplate = (props) => {
    const {data: {wordpressPost: post}} = props;

    return (
        <Layout>
            <SEO title={post.title}/>
            <Menu/>
            <Helmet
                title={post.title}
                meta={[
                    {name: 'description', content: post.excerpt},
                ]}
            />
            <Container className={'container content'}>
                <article className={'text-justify'}>
                    <section className="container-fluid main-body">
                        <div className="content-description">
                            <h1 dangerouslySetInnerHTML={{__html: post.title}}/>
                            <div className="content-body">
                                <p dangerouslySetInnerHTML={{__html: post.content}}/>
                            </div>
                            <span className="lead text-muted">
                                    <i className="fa fa-clock-o"/>
                                {' '}
                                Published:
                                {' '}
                                {post.date}
                                {post.tags}
                                </span>
                            <div className={"text-center"}>
                                <Link to={"/blog"}>
                                    <button className="btn btn-secondary btn-lg btn-block">Zurück zur Blog Seit
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </section>
                </article>
            </Container>
            <CookieConsent
                location="bottom"
                buttonText="Akzeptieren"
                declineButtonText="Verweigern"
                cookieName="Cookie-Richtlinien"
                style={{background: "#2B373B"}}
                buttonStyle={{fontSize: "13px"}}
                expires={150}
                enableDeclineButton
                flipButtons
                contentClasses="text-capitalize"
            >
                Um Ihnen eine angenehmere Erfahrung zu bieten, nutzen wir Cookies zum Speichern Ihrer Anmeldedaten, um
                für
                eine sichere Anmeldung zu sorgen, um statistische Daten zur Optimierung der Website-Funktionen zu
                erheben,
                sowie zum Onlinemarketing und Remarketing. Klicken Sie auf „Zustimmen und Fortfahren“, um Cookies zu
                akzeptieren oder klicken Sie unten auf „Cookie Einstellungen verwalten“, um eine detaillierte
                Beschreibung
                der von uns verwendeten Arten von Cookies zu erhalten und um zu entscheiden, welche Arten von Cookies
                bei
                der Nutzung unserer Website gesetzt werden sollen. <a href={"/datenschutzerklaerung/"}>Mehr auf
                                                                                                       Datenschutzerklärung</a>
            </CookieConsent>
            <Footer/>
        </Layout>
    );
};
PostTemplate.propTypes = {
    data: PropType.shape({}).isRequired,
};
export default PostTemplate;

export const pageQuery = graphql`
query($id: String!) {
    wordpressPost(id: {eq: $id}) {
    title
    content
    excerpt
    date(formatString: "DD, MMM YYYY")
    slug
    featured_media{
    localFile{
    childImageSharp{
    id
    sizes( maxWidth: 800 ) {
    ...GatsbyImageSharpSizes
}
}
}
}


}
}
`;