import React from 'react';
import PropType from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from "../components/seo"
import Menu from "../components/menu";
import Footer from "../components/footer"
import './style.css'
import CookieConsent, {Cookies} from "react-cookie-consent";

const PostTemplate = (props) => {
    const { data: { wordpressPost: post } } = props;

    return (
        <Layout>
            <SEO title={post.title}/>
            <Menu/>
            <Helmet
                title={post.title}
                meta={[
                    { name: 'description', content: post.excerpt },
                ]}
            />

            <article className={'content'}>
                    <div className="background-bar">

                    </div>

                <section className="container-fluid main-body">
                    <section className="row">
                        <div className="hidden-xs col-sm-1 col-md-2" />
                        <div className="col-xs-12 col-sm-10 col-md-8">
                            <div className="content-holder">
                                <div className="content-description">
                                    <h3>{post.title}</h3>

                                <div className="content-body">
                                    <p dangerouslySetInnerHTML={{ __html: post.content }} />
                                </div>

                                    <div className="row blog-info">
                                        <div className="col-xs-12 col-sm-6">
                      <span className="lead text-muted">
                        <i className="fa fa-clock-o" />
                          {' '}
                          Published:
                          {' '}
                          {post.date}
                          {post.tags}
                      </span>
                                        </div>
                                        <div className="col-xs-12 col-sm-6">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden-xs col-sm-1 col-md-2" />
                    </section>
                </section>
            </article>
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
                Um Ihnen eine angenehmere Erfahrung zu bieten, nutzen wir Cookies zum Speichern Ihrer Anmeldedaten, um für
                eine sichere Anmeldung zu sorgen, um statistische Daten zur Optimierung der Website-Funktionen zu erheben,
                sowie zum Onlinemarketing und Remarketing. Klicken Sie auf „Zustimmen und Fortfahren“, um Cookies zu
                akzeptieren oder klicken Sie unten auf „Cookie Einstellungen verwalten“, um eine detaillierte Beschreibung
                der von uns verwendeten Arten von Cookies zu erhalten und um zu entscheiden, welche Arten von Cookies bei
                der Nutzung unserer Website gesetzt werden sollen. <a href={"/datenschutzerklaerung/"}>Mehr auf Datenschutzerklärung</a>{""}


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
    wordpressPost(id: { eq: $id }) {
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