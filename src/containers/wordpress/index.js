import React from 'react';
import {Col, Row, Container, Image, CardDeck, Card} from "react-bootstrap";


import "./style.css"
import ImageWordpress from "../../images/wordpressImage.png"
import Freelancer from "../../images/freelancer.jpg"
import Wordpress from "../../images/Wordpress-Logo.svg";
import Screen from "../../images/monitor.svg";


const wordpress = () => {

    return (
        <Container>
            <Row>

                <Col>
                    <Image fluid src={ImageWordpress} width={"100%"} id={"logo"}/>
                </Col>
                <Col>
                    <Row>
                        <Container>
                            <h3 className="text-center">WordPress Leistungen</h3>
                            <p className="text-justify">
                                Durch unsere profunden Kenntnisse im Bereich WordPress konnten wir schon unzählige
                                Projekte
                                erfolgreich realisieren – sei es eine Landingpage, eine Unternehmens-Webseite oder auch
                                ein
                                Online-Shop. WordPress-Experte zu sein, bedeutet für uns jedoch mehr als die
                                Installation eines
                                standardisierten WordPress-Systems, sondern vielmehr die konzeptionelle Erarbeitung
                                Ihrer
                                Webseite, angepasst an die Bedürfnisse Ihrer Zielgruppe.
                            </p>
                        </Container>
                    </Row>
                    <Row>
                        <Container fluid>
                            <CardDeck>
                                <Card className={"cardNoBorder"}>
                                    <Card.Img variant="top" src={Wordpress}/>
                                    <Card.Body>
                                        <Card.Title className="text-center"><h6>CMS</h6></Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className={"cardNoBorder"}>
                                    <Card.Img variant="top" src={Screen}/>
                                    <Card.Body>
                                        <Card.Title className="text-center"><h6>Design</h6></Card.Title>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                        </Container>
                    </Row>
                    <Row>
                        <Container fluid>
                            <CardDeck>
                                <Card className={"cardNoBorder"}>
                                    <Card.Img variant="top" src={Wordpress}/>
                                    <Card.Body>
                                        <Card.Title className="text-center"><h6>CMS</h6></Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className={"cardNoBorder"}>
                                    <Card.Img variant="top" src={Screen}/>
                                    <Card.Body>
                                        <Card.Title className="text-center"><h6>Design</h6></Card.Title>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                        </Container>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row>
                        <Container>
                            <h3 className="text-center">Freelancing</h3>
                            <p className="text-justify">
                                Sie benötigen einen Entwickler für Ihr Webprojekt? Auch dann sind Sie bei uns an der
                                richtigen Adresse. Wir bieten Entwickler mit Know How in verschiedenen Bereichen an.
                            </p>
                        </Container>
                    </Row>
                    <Row>
                        <Container fluid>
                            <CardDeck>
                                <Card className={"cardNoBorder"}>
                                    <Card.Img variant="top" src={Wordpress}/>
                                    <Card.Body>
                                        <Card.Title className="text-center"><h6>ENTWICKLUNG</h6></Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className={"cardNoBorder"}>
                                    <Card.Img variant="top" src={Screen}/>
                                    <Card.Body>
                                        <Card.Title className="text-center"><h6>PROJEKTMANAGEMENT</h6></Card.Title>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                        </Container>
                    </Row>
                    <Row>
                        <Container fluid>
                            <CardDeck>
                                <Card className={"cardNoBorder"}>
                                    <Card.Img variant="top" src={Wordpress}/>
                                    <Card.Body>
                                        <Card.Title className="text-center"><h6>SEITENAUFBAU</h6></Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className={"cardNoBorder"}>
                                    <Card.Img variant="top" src={Screen}/>
                                    <Card.Body>
                                        <Card.Title className="text-center"><h6>SUPPORT</h6></Card.Title>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                        </Container>
                    </Row>
                </Col>
                <Col>
                    <Image fluid src={Freelancer} width={"100%"}/>
                </Col>
            </Row>
        </Container>

    );
};


export default wordpress;
