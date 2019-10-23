import React from 'react';
import {Col, Row, Container, Image, CardDeck, Card} from "react-bootstrap";


import "./style.css"
import ImageWordpress from "../../images/wordpressImage.png";
import Freelancer from "../../images/freelancer.jpg";
import Themes from "../../images/drawing-compass.png"
import Plugins from "../../images/plug-silhouette.png";
import Sicherheit from "../../images/locked-padlock.png";
import Pflegsystem from "../../images/cardiogram.png";
import Entwicklung from "../../images/command-line.png";
import Projektmanagement from "../../images/project.png";
import Seitenaufbau from "../../images/domain.png";
import Support from "../../images/help.png";


const wordpress = () => {

    return (
<div id={"wordpress"}>
        <Container>
            <Row>
                <Col lg={true} xs>
                    <Image fluid src={ImageWordpress} width={"100%"} id={"logo"}  alt={"imagewordpress"}/>
                </Col>
                <Col lg={true} >
                    <Row>
                        <Container className={"title"}>
                            <h3 className="text-center title">WordPress Leistungen</h3>
                            <p className="text-justify">
                                Durch unsere profunden Kenntnisse im Bereich WordPress konnten wir schon unzählige
                                Projekte
                                erfolgreich realisieren – sei es eine Landingpage, eine Unternehmens-Webseite oder auch
                                ein
                                Online-Shop.
                            </p>
                        </Container>
                    </Row>
                    <Row>
                        <Container fluid>
                            <CardDeck>
                                <Card className={"cardNoBorder"}>
                                    <Card.Img variant="top" src={Plugins}  alt={"plugins"}/>
                                    <Card.Body>
                                        <Card.Title className="text-center"><h5>Plugins</h5></Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className={"cardNoBorder"}>
                                    <Card.Img variant="top" src={Themes}  alt={"themes"}/>
                                    <Card.Body>
                                        <Card.Title className="text-center"><h5>Themes</h5></Card.Title>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                        </Container>
                    </Row>
                    <Row>
                        <Container fluid>
                            <CardDeck>
                                <Card className={"cardNoBorder"}>
                                    <Card.Img variant="top" src={Sicherheit}  alt={"sicherheit"}/>
                                    <Card.Body>
                                        <Card.Title className="text-center"><h5>Sicherheit</h5></Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className={"cardNoBorder"}>
                                    <Card.Img variant="top" src={Pflegsystem}  alt={"pfegsystem"}/>
                                    <Card.Body>
                                        <Card.Title className="text-center"><h5>Pflegsystem</h5></Card.Title>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                        </Container>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col lg={{ order: 12 }}  xs={true}>
                    <Image fluid src={Freelancer} width={"100%"}  alt={"freelancer"}/>
                </Col >
                <Col  lg={true} xs={12}>
                    <Row>
                        <Container className={"title"}>
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
                                    <Card.Img variant="top" src={Entwicklung}  alt={"Entwicklung"}/>
                                    <Card.Body>
                                        <Card.Title className="text-center"><h5>Entwicklung</h5></Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className={"cardNoBorder"}>
                                    <Card.Img variant="top" src={Projektmanagement}  alt={"projektmanagement"}/>
                                    <Card.Body>
                                        <Card.Title className="text-center"><h5>Projektmanagement</h5></Card.Title>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                        </Container>
                    </Row>
                    <Row>
                        <Container fluid>
                            <CardDeck>
                                <Card className={"cardNoBorder"}>
                                    <Card.Img variant="top" src={Seitenaufbau}  alt={"seiteaufbau"}/>
                                    <Card.Body>
                                        <Card.Title className="text-center"><h5>Seitenaufbau</h5></Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className={"cardNoBorder"}>
                                    <Card.Img variant="top" src={Support}  alt={"support"}/>
                                    <Card.Body>
                                        <Card.Title className="text-center"><h5>Support</h5></Card.Title>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                        </Container>
                    </Row>
                </Col>

            </Row>
        </Container>
</div>

    );
};


export default wordpress;
