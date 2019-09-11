import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu";
import Footer from "../components/footer"
import {Container} from "react-bootstrap";

const SecondPage = () => (
    <Layout>
        <SEO title="Page two"/>
        <Menu/>
        <Container>
            <div>

                <h1>Impressum</h1>
                <p>Visyu Solution
                   Felix Griewald
                   Am Studio 2a
                   12489 Berlin
                   Deutschland

                   Telefon: +49 30 / 374 348 14
                   E-Mail: info@visyu.de

                   USt-IdNr.: DE269492679</p>
                <h3>Haftung für Inhalte</h3>
                <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                   allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                   verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                   zu
                   forschen, die auf eine rechtswidrige Tätigkeit hinweisen.

                   Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                   Gesetzen
                   bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
                   einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
                   werden
                   wir diese Inhalte umgehend entfernen.</p>
                <h3>Haftung für Links</h3>
                <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss
                   haben.
                   Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                   verlinkten
                   Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
                   Seiten
                   wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
                   waren
                   zum Zeitpunkt der Verlinkung nicht erkennbar.

                   Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
                   einer
                   Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                   umgehend entfernen.</p>
                <h3>Urheberrecht</h3>
                <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                   deutschen
                   Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb
                   der
                   Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
                   Erstellers.
                   Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.

                   Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
                   Dritter
                   beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
                   eine
                   Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
                   Bekanntwerden
                   von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
                <span>Quellenangabe: https://www.e-recht24.de</span>
                <h3>Copyright-Vermerk</h3>
                <p>Grafiken: www.vecteezy.com</p>


            </div>
        </Container>
        <Link to="/#wordpress">Go to page 2</Link>
        <Footer/>
    </Layout>
)

export default SecondPage
