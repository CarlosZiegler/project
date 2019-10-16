import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu";
import Footer from "../components/footer"
import {Container} from "react-bootstrap";
import "./pageStyle.css";
import CookieConsent from "react-cookie-consent";


const JobsPage = () => (
    <Layout>
        <SEO title="Jobs"/>
        <Menu/>
        <Container className={'content'}>
            <div>
                <h2>Praktikum Webentwicklung (m/w) </h2>
                <p>Visyu Solution ist eine junge Webagentur im Herzen des größten Wissenschaftsgeländes Deutschlands –
                   in Berlin-Adlershof. Wir bieten verschiedene Dienstleistungen im Bereich Web und Mobile an,
                   angefangen bei neuen Webseiten über komplette Redesigns bis hin zu großen Webapplikationen. Unser
                   stetig wachsender Kundenstamm verlässt sich auf unsere Qualität und Zuverlässigkeit. Um unsere
                   Qualität beibehalten zu können, suchen wir nun Verstärkung.
                </p>
                <h4>Was wir dir bieten</h4>
                <ul>
                    <li>-Spannende Aufgaben im Bereich Webentwicklung</li>
                    <li>-Kommunikation direkt mit den Kunden und Teilnahme an Meetings</li>
                    <li>-Mitwirkung am kreativen Prozess bei der Umsetzung neuer Projekte</li>
                    <li>-Ein offenes Ohr für neue Ideen</li>
                    <li>-Flexible Arbeitszeiten</li>
                    <li>-Kostenlose Snacks, Getränke, Teamevents und Spaß bei der Arbeit</li>
                    <li>-Ab und zu Tischtennis, Basketball oder (W)LAN-Parties</li>
                    <li>-Bezahlung</li>
                </ul>
                <h4>Was du bei uns machst</h4>
                <ul>
                    <li>-Entwickeln mit verschiedenen Frameworks und Content Management Systemen</li>
                    <li>-Auf Wunsch Entwicklung im Frontend, Backend oder beidem</li>
                    <li>-Teilnahme an Meetings mit Kunden</li>
                    <li>-Erstellung von Projektplänen und Projektmanagement</li>
                    <li>-Neue interessante Themen erarbeiten, neue Technologien recherchieren</li>
                    <li>-Support</li>
                    <li>-Tagesgeschäft</li>
                </ul>
                <h4>Was du können solltest</h4>
                <ul>
                    <li>-Du hast gute Kenntnisse in der Entwicklung mit PHP, JavaScript, HTML und CSS</li>
                    <li>-Du hast idealerweise Kenntnisse in der Entwicklung mit WordPress, Joomla, Symfony, jQuery ODER
                        Angular
                        (wir freuen uns auch über andere Web-Technologien)
                    </li>
                    <li>-Du hast vielleicht sogar schon mal mit Linux (idealerweise Ubuntu) gearbeitet</li>
                    <li>-Du zeigst eine hohe Lernbereitschaft in Bezug auf neue Frameworks, Content Management Systeme,
                        Libraries
                        etc.
                    </li>
                    <li>-Du hast Spaß am Programmieren</li>
                    <li>-Du arbeitest strukturiert</li>
                    <li>-Du denkst mit</li>
                    <li>-Du bist offen und kommunikativ</li>
                    <li>-Du bist zuverlässig und pünktlich</li>
                    <li>-Du legst Wert auf Qualität</li>
                    <li>-Idealerweise studierst du in einem Informatik-nahen Studiengang oder machst gerade eine
                        entsprechende Ausbildung
                    </li>
                </ul>
                <p>Wir suchen übrigens nicht die Eier-legende Wollmilchsau. Du kannst uns gerne sagen, in welchem
                   Bereich
                   du am liebsten arbeiten möchtest. Möchtest du nur im Backend entwickeln oder bist du eher der
                   Projektmanager? Hier finden wir ganz sicher das richtige Feld für dich!

                   Du fühlst dich angesprochen? Super! Dann schick uns deine Bewerbung und deinen Lebenslauf an
                   jobs@visyu.de. Wenn du ein Portfolio oder Referenzen hast, werfen wir auch darauf gerne einen
                   Blick.</p>
            </div>
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
            Um Ihnen eine angenehmere Erfahrung zu bieten, nutzen wir Cookies zum Speichern Ihrer Anmeldedaten, um für
            eine sichere Anmeldung zu sorgen, um statistische Daten zur Optimierung der Website-Funktionen zu erheben,
            sowie zum Onlinemarketing und Remarketing. Klicken Sie auf „Zustimmen und Fortfahren“, um Cookies zu
            akzeptieren oder klicken Sie unten auf „Cookie Einstellungen verwalten“, um eine detaillierte Beschreibung
            der von uns verwendeten Arten von Cookies zu erhalten und um zu entscheiden, welche Arten von Cookies bei
            der Nutzung unserer Website gesetzt werden sollen. <a href={"/datenschutzerklaerung/"}>Mehr auf Datenschutzerklärung</a>{""}


        </CookieConsent>
        <Footer/>
    </Layout>
)

export default JobsPage
