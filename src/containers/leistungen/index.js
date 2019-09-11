import React from 'react';
import {CardDeck, Card, Container, Row} from "react-bootstrap";


import "./style.css"
import Wordpress  from "../../images/Wordpress-Logo.svg"
import Screen from "../../images/monitor.svg"
import SeoIcon from "../../images/profits.svg"
import Responsive from "../../images/responsive.svg"
import Frontend from "../../images/computer.svg"
import Backend from "../../images/coding.svg"
import Cart from "../../images/shopping-cart.svg"
import Plugin from "../../images/plug-silhouette.svg"




const Leistungen = () => {

    return (
        <Container>

            <Container fluid>
                <h3 className="text-center">Website und Webapplikationen Leistungen</h3>
                <p className="text-center">Bei uns erhalten Sie individuelle Webseiten basierend auf einer Auswahl
                                           verschiedener Content
                                           Management
                                           Systeme sowie standardisierter, angepasster oder individueller Designs.</p>

            </Container>
            <Container fluid>
                <CardDeck>
                    <Card style={{ width: '38rem' }}>

                        <Card.Img variant="top" src={Wordpress} />
                        <Card.Body>
                            <Card.Title><h3>CMS</h3></Card.Title>
                            <Card.Text>
                                Zur Verwaltung von Inhalten stehen Ihnen verschiedene Content Management Systeme zur
                                Verfügung. Wir verwenden je nach Projekt Wordpress, Joomla! oder TYPO3. So verwalten Sie
                                Ihre Inhalte auch ohne Programmierkenntnisse.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Screen}/>
                        <Card.Body>
                            <Card.Title><h3>Design</h3></Card.Title>
                            <Card.Text>
                                Die Gestaltung einer Webseite ist elementar und macht sie einzigartig. Dabei stehen
                                bereits vorgefertigter Templates bis hin zu komplett individuellen Design-Umsetzungen
                                zur Verfügung.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Responsive}/>
                        <Card.Body>
                            <Card.Title><h3>Responsiv</h3></Card.Title>
                            <Card.Text>
                                Webseiten werden nicht mehr nur am heimischen PC konsumiert. Smarte Geräte, wie das
                                Smartphone, Tablets oder gar der Fernseher finden ebenfalls Verwendung. Um die
                                Darstellung auf diesen verschiedenen Endgeräten zu gewährleisten, setzen wir auf
                                responsive Designs.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={SeoIcon}/>
                        <Card.Body>
                            <Card.Title><h3>SEO</h3></Card.Title>
                            <Card.Text>
                                Ein wichtiger Aspekt einer Webseite ist die Auffindbarkeit in Suchmaschinen wie Google
                                oder Bing. Dabei greifen wir auf Wunsch auf diverse Techniken der
                                Suchmaschinenoptimierung zurück.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
            <Row/>
            <Container fluid>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={Frontend}/>
                        <Card.Body>
                            <Card.Title><h3>FRONTEND</h3></Card.Title>
                            <Card.Text>
                                Ein ansprechendes und flüssig zu bedienendes Frontend sind im modernen Web kein
                                Hexenwerk mehr. Mit Hilfe diverser Techniken gestalten wir nicht nur attraktive, sondern
                                auch funktionale Interfaces für jeden Benutzer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Backend}/>
                        <Card.Body>
                            <Card.Title><h3>BACKEND</h3></Card.Title>
                            <Card.Text>
                                Das Backend bildet das Rückgrat einer jeden Webanwendung. Durch den Einsatz erprobter
                                Entwurfsmuster und Frameworks erhalten Sie die völlige Kontrolle über Ihre
                                Webapplikation.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Cart}/>
                        <Card.Body>
                            <Card.Title><h3>E-COMMERCE</h3></Card.Title>
                            <Card.Text>
                                Warum das Rad neu erfinden? Diese Frage stellen wir uns auch regelmäßig in der
                                Webentwicklung und setzen auf eine Reihe beliebter Frontend- und Backend-Frameworks,
                                u.a. Symfony, AngularJS, Bootstrap etc.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Plugin}/>
                        <Card.Body>
                            <Card.Title><h3>THEMES UND PLUGINS</h3></Card.Title>
                            <Card.Text>
                                Themes sind Template-Vorlagen für WordPress. Selbstverständlich entwickeln wir auch
                                individuelle WordPress Themes auf Basis eines Screendesigns oder nach Ihrer Vorlage
                                (Photoshop, Sketch etc.).
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>

        </Container>

    )
        ;
};


export default Leistungen;
