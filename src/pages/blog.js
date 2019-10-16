import React from 'react';

import {StaticQuery, graphql, Link} from 'gatsby';
import Layout from '../components/layout';
import SEO from "../components/seo"
import Menu from "../components/menu";
import Footer from "../components/footer"
import "./pageStyle.css";
import Image from "react-bootstrap/Image";
import {Col} from "react-bootstrap";
import CookieConsent from "react-cookie-consent";


const Blog = () => (
    <StaticQuery
        query={graphql`
    query BlogAllPostQuery {
      allWordpressPost(sort: { fields: [date], order:DESC }) {
        edges {
          node {
            date(formatString: "DD, MMM YYYY")
            title
            excerpt
            featured_media {
                localFile {
                url
                }
             }
            slug

          }
        }
      }
    }
  `}
        render={data => (
            <Layout>
                <SEO title="Blog"/>
                <Menu/>
                <div className="container content">
                    <h2>Blog</h2>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="blog-grids">
                                {data.allWordpressPost.edges.map(({node}) => (
                                    <Col key={node.id} lg={12}>
                                    <div key={node.slug} className="grid">
                                        <div className="entry-media">
                                            <Image src={node.featured_media.localFile.url} className={'thumbnailPost'}/>
                                        </div>
                                        <div className="entry-body">
                                            <span
                                                className="cat">{node.categories && node.categories.map(category => `${category.name}, `)}</span>
                                            <h3><Link to={`/${node.slug}`}
                                                      dangerouslySetInnerHTML={{__html: node.title}}/></h3>
                                            <p dangerouslySetInnerHTML={{__html: node.excerpt}}/>
                                            <div className="read-more-date">
                                                <Link to={`/${node.slug}`}>Read More..</Link>
                                                <span className="date">{node.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                    </Col>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
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
                    Um Ihnen eine angenehmere Erfahrung zu bieten, nutzen wir Cookies zum Speichern Ihrer Anmeldedaten,
                    um für
                    eine sichere Anmeldung zu sorgen, um statistische Daten zur Optimierung der Website-Funktionen zu
                    erheben,
                    sowie zum Onlinemarketing und Remarketing. Klicken Sie auf „Zustimmen und Fortfahren“, um Cookies zu
                    akzeptieren oder klicken Sie unten auf „Cookie Einstellungen verwalten“, um eine detaillierte
                    Beschreibung
                    der von uns verwendeten Arten von Cookies zu erhalten und um zu entscheiden, welche Arten von
                    Cookies bei
                    der Nutzung unserer Website gesetzt werden sollen. <a href={"/datenschutzerklaerung/"}>Mehr auf
                                                                                                           Datenschutzerklärung</a>{""}


                </CookieConsent>
                <Footer/>
            </Layout>)
        }
    />
);


export default Blog;