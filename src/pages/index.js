import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Leistungen from "../sections/leistungen";
import Wordpress from "../sections/wordpress";
import Portfolio from "../sections/portfolio";
import Formular from "../components/form";
import Menu from "../components/menu";
import Header from "../components/header";
import Footer from "../components/footer";
import CookieConsent from "react-cookie-consent";


if (typeof window !== "undefined") {

    window.onscroll = function() {scrollFunction()};


}
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.backgroundColor = "rgb(228, 227, 227)";
        document.getElementById("navbar").style.fontWeight = "bold";


    }
    else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navbar").style.fontWeight = "bold";
    }
}



const IndexPage = () => (
    <Layout>
        <SEO title="Visyu"/>
        <Menu/>
        <Header/>
        <Leistungen/>
        <Wordpress/>
        <Portfolio/>
        <Formular/>
        <Footer/>
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
    </Layout>
)

export default IndexPage
