import React from 'react';

import {StaticQuery, graphql, Link} from 'gatsby';
import Layout from '../components/layout';
import SEO from "../components/seo"
import Menu from "../components/menu";
import Footer from "../components/footer"
import "./pageStyle.css";
import Image from "react-bootstrap/Image";
import CookieConsent from "react-cookie-consent";

/*window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.backgroundColor = "rgb(228, 227, 227)";
        document.getElementById("navbar").style.fontWeight = "bold";


    } else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navbar").style.fontWeight = "bold";
    }
}*/


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
            id
            tags{
                name
                id
                }

          }
        }
      }
    }
  `}
        render={data => (
            <Layout id={"content"}>
                <SEO title="Blog"/>
                <Menu/>
                <main className={"main_page"}>
                    <h1>Blog</h1>
                    <div className="main">
                        <div className="cards_">
                            {data.allWordpressPost.edges.map(({node}) => (
                                <div key={node.id} className="cards_item_">
                                    <div className="card_ card_ border-primary-blog">
                                        <div className="card_image card-img-top-blog "><Image
                                            className={"card-img-top-blog"} src={node.featured_media.localFile.url}/>
                                        </div>
                                        <div className="card_content_ card-body text-secondary">
                                            <h5 className="card-title_ text-secondary"
                                                dangerouslySetInnerHTML={{__html: node.title}}/>
                                            <p className="card_text_ text-secondary"
                                               dangerouslySetInnerHTML={{__html: node.excerpt}}/>
                                        </div>
                                        <div className=" card-footer ">
                                            <Link to={`/${node.slug}`}>
                                                <button className="btn btn-secondary btn-lg btn-block">Weiterlesen...
                                                </button>
                                            </Link>
                                            <footer className="blockquote-footer"
                                                    dangerouslySetInnerHTML={{__html: "Erstellt in " + node.date}}></footer>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
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
                                                                                                           Datenschutzerklärung</a>


                </CookieConsent>
                <Footer/>
            </Layout>)
        }
    />
);


export default Blog;

