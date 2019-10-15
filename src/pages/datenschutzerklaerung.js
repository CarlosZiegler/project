import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu";
import Footer from "../components/footer"
import {Container} from "react-bootstrap";
import "./pageStyle.css";
import CookieConsent, {Cookies} from "react-cookie-consent";


const Datenschutz = () => (
    <Layout>
        <SEO title="Impressum"/>
        <Menu/>
        <Container className={'content'}>
            <div>
                <h2>Datenschutzerklärung</h2>
                <h3>1. Datenschutz auf einen Blick</h3>
                <h4>Allgemeine Hinweise</h4>
                <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                   passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                   persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
                   Sie
                   unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>

                <h4>Datenerfassung auf unserer Website</h4>
                <h5>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h5>

                <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                   können
                   Sie dem Impressum dieser Website entnehmen.</p>

                <h5>Wie erfassen wir Ihre Daten?</h5>

                <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B.
                   um
                   Daten handeln, die Sie in ein Kontaktformular eingeben.

                   Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
                   allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
                   Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.</p>

                <h5>Wofür nutzen wir Ihre Daten?</h5>

                <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
                   Andere
                   Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>

                <h5>Welche Rechte haben Sie bezüglich Ihrer Daten?</h5>

                <p>Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                   gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung,
                   Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema
                   Datenschutz
                   können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren
                   steht
                   Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>

                <h3>2. Allgemeine Hinweise und Pflichtinformationen</h3>
                <h4>Datenschutz</h4>
                <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                   personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie
                   dieser Datenschutzerklärung.

                   Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene
                   Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende
                   Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert
                   auch,
                   wie und zu welchem Zweck das geschieht.

                   Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
                   Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
                   nicht möglich.</p>

                <h5>Hinweis zur verantwortlichen Stelle</h5>
                <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                <strong>
                    <p>Felix Griewald</p>
                    <p>Am Studio 2a</p>
                    <p>12489 Berlin</p>
                    <p>Telefon: +49 173 / 63 88 335</p>
                    <p> E-Mail: felix.griewald@visyu.de</p>
                </strong>

                <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit
                   anderen
                   über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen
                   o.
                   Ä.) entscheidet.</p>

                <h5>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h5>
                <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können
                   eine
                   bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail
                   an
                   uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
                   unberührt.</p>

                <h5>SSL- bzw. TLS-Verschlüsselung</h5>
                <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie
                   zum
                   Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw.
                   TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
                   Browsers von “http://” auf “https://” wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.

                   Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln,
                   nicht von Dritten mitgelesen werden.</p>

                <h5>Auskunft, Sperrung, Löschung</h5>
                <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
                   Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
                   der
                   Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu
                   sowie
                   zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum
                   angegebenen Adresse an uns wenden.</p>

                <h5>Widerspruch gegen Werbe-Mails</h5>
                <p>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von
                   nicht
                   ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die
                   Betreiber
                   der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
                   Werbeinformationen, etwa durch Spam-E-Mails, vor.</p>

                <h3>3. Datenerfassung auf unserer Website</h3>
                <h4>Cookies</h4>
                <p>Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen
                   Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher,
                   effektiver
                   und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und
                   die
                   Ihr Browser speichert.</p>

                <p>Die meisten der von uns verwendeten Cookies sind so genannte “Session-Cookies”. Sie werden nach Ende
                   Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie
                   diese
                   löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.</p>

                <p>Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und
                   Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell
                   ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browser aktivieren. Bei
                   der
                   Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.</p>

                <p>Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung
                   bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorbfunktion) erforderlich sind, werden auf
                   Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber hat ein berechtigtes
                   Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung
                   seiner Dienste. Soweit andere Cookies (z.B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert
                   werden, werden diese in dieser Datenschutzerklärung gesondert behandelt.</p>

                <h5>Server-Log-Dateien</h5>
                <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                   Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>

                <ul>
                    <li>Browsertyp und Browserversion</li>
                    <li>verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                    <li>Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</li>
                </ul>

                <p>Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, der die Verarbeitung von Daten
                   zur
                   Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.</p>

                <h5>Kontaktformular</h5>
                <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                   Anfrageformular
                   inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
                   von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
                   weiter.</p>

                <p>Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf
                   Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit
                   widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum
                   Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.</p>

                <p>Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
                   auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung
                   entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen –
                   insbesondere Aufbewahrungsfristen – bleiben unberührt.</p>

                <h5>Kommentarfunktion auf dieser Website</h5>
                <p>Für die Kommentarfunktion auf dieser Seite werden neben Ihrem Kommentar auch Angaben zum Zeitpunkt
                   der
                   Erstellung des Kommentars, Ihre E-Mail-Adresse und, wenn Sie nicht anonym posten, der von Ihnen
                   gewählte
                   Nutzername gespeichert.</p>

                <h5>Speicherung der IP-Adresse</h5>

                <p>Unsere Kommentarfunktion speichert die IP-Adressen der Nutzer, die Kommentare verfassen. Da wir
                   Kommentare auf unserer Seite nicht vor der Freischaltung prüfen, benötigen wir diese Daten, um im
                   Falle
                   von Rechtsverletzungen wie Beleidigungen oder Propaganda gegen den Verfasser vorgehen zu können.</p>

                <h5>Abonnieren von Kommentaren</h5>

                <p>Als Nutzer der Seite können Sie nach einer Anmeldung Kommentare abonnieren. Sie erhalten eine
                   Bestätigungsemail, um zu prüfen, ob Sie der Inhaber der angegebenen E-Mail-Adresse sind. Sie können
                   diese Funktion jederzeit über einen Link in den Info-Mails abbestellen. Die im Rahmen des Abonnierens
                   von Kommentaren eingegebenen Daten werden in diesem Fall gelöscht; wenn Sie diese Daten für andere
                   Zwecke und an anderer Stelle (z.B. Newsletterbestellung) an uns übermittelt haben, verbleiben die
                   jedoch
                   bei uns.</p>

                <h5>Speicherdauer der Kommentare</h5>

                <p>Die Kommentare und die damit verbundenen Daten (z.B. IP-Adresse) werden gespeichert und verbleiben
                   auf
                   unserer Website, bis der kommentierte Inhalt vollständig gelöscht wurde oder die Kommentare aus
                   rechtlichen Gründen gelöscht werden müssen (z.B. beleidigende Kommentare).</p>

                <h5>Rechtsgrundlage</h5>

                <p>Die Speicherung der Kommentare erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                   Sie können eine von Ihnen erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose
                   Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge
                   bleibt
                   vom Widerruf unberührt.</p>

                <h3>4. Analyse-Tools und Werbung</h3>
                <h4>Count Per Day</h4>
                <p>Diese Website nutzt das WordPress-Plugin Count per Day. Damit zählen wir die Besucher-Zugriffe auf
                   der
                   Webseite. Die Daten werden lokal verarbeitet, anonymisiert gespeichert und nicht an Dritte
                   weitergeleitet.</p>

                <p>Die Speicherung der anonymisierten Daten und die Nutzung dieses Analyse-Tools erfolgen auf Grundlage
                   von
                   Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der Analyse des
                   Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren.</p>

                <h3>5. Plugins und Tools</h3>
                <h4>Google Web Fonts</h4>
                <p>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von
                   Google
                   bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren
                   Browsercache, um Texte und Schriftarten korrekt anzuzeigen.</p>

                <p>Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen.
                   Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse unsere Website aufgerufen wurde.
                   Die Nutzung von Google Web Fonts erfolgt im Interesse einer einheitlichen und ansprechenden
                   Darstellung
                   unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f
                   DSGVO
                   dar.</p>

                <p>Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer
                   genutzt.</p>

                <p>Weitere Informationen zu Google Web Fonts finden Sie unter https://developers.google.com/fonts/faq
                   und
                   in der Datenschutzerklärung von Google: https://www.google.com/policies/privacy/.</p>
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

export default Datenschutz
