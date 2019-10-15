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
                    <Image fluid src={ImageWordpress} width={"100%"} id={"logo"}/>
                </Col>
                <Col lg={true} >
                    <Row>
                        <Container className={"title"}>
                            <h3 className="text-center">WordPress Leistungen</h3>
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
                                    <Card.Img variant="top" src={Plugins}/>
                                    <Card.Body>
                                        <Card.Title className="text-center"><h6>Plugins</h6></Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className={"cardNoBorder"}>
                                    <Card.Img variant="top" src={Themes}/>
                                    <Card.Body>
                                        <Card.Title className="text-center"><h6>Themes</h6></Card.Title>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                        </Container>
                    </Row>
                    <Row>
                        <Container fluid>
                            <CardDeck>
                                <Card className={"cardNoBorder"}>
                                    <Card.Img variant="top" src={Sicherheit}/>
                                    <Card.Body>
                                        <Card.Title className="text-center"><h6>Sicherheit</h6></Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className={"cardNoBorder"}>
                                    <Card.Img variant="top" src={Pflegsystem}/>
                                    <Card.Body>
                                        <Card.Title className="text-center"><h6>Pflegsystem</h6></Card.Title>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                        </Container>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col lg={{ order: 12 }}  xs={true}>
                    <Image fluid src={Freelancer} width={"100%"}/>
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
                                    <Card.Img variant="top" src={Entwicklung}/>
                                    <Card.Body>
                                        <Card.Title className="text-center"><h6>Entwicklung</h6></Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className={"cardNoBorder"}>
                                    <Card.Img variant="top" src={Projektmanagement}/>
                                    <Card.Body>
                                        <Card.Title className="text-center"><h6>Projektmanagement</h6></Card.Title>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                        </Container>
                    </Row>
                    <Row>
                        <Container fluid>
                            <CardDeck>
                                <Card className={"cardNoBorder"}>
                                    <Card.Img variant="top" src={Seitenaufbau}/>
                                    <Card.Body>
                                        <Card.Title className="text-center"><h6>Seitenaufbau</h6></Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card className={"cardNoBorder"}>
                                    <Card.Img variant="top" src={Support}/>
                                    <Card.Body>
                                        <Card.Title className="text-center"><h6>Support</h6></Card.Title>
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
