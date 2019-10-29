import React from "react"

import {Container, Form, Button, Col, Row, Image} from 'react-bootstrap';

import "./style.css";
import ContactImage from "../../images/contactImage_opt.jpg";

const Formular = () => (
    <div id={"kontakt"}>
        <Container>
            <h3 className={"text-center"}>Kontakt</h3>
            <Row>
                <Col lg={true} xs={12}>
                    <Image fluid src={ContactImage} width={"100%"} alt={"contactimage"}/>
                </Col>
                <Col lg={true} xs>
                    <Form className={'formEmail'} action="https://formspree.io/mwgzwjpm" method="POST" >
                        <Form.Group controlId="name" >
                            <Form.Label>Ihre Name</Form.Label>
                            <Form.Control type="text"  required placeholder="Enter name" name={"name"}/>
                        </Form.Group>
                        <Form.Group controlId="_replyto">
                            <Form.Label>Ihre Email*</Form.Label>
                            <Form.Control type="email" required placeholder="Enter email" name={"_replyto"}/>
                        </Form.Group>
                        <Form.Group controlId="messageText">
                            <Form.Label>Ihre Nachricht*</Form.Label>
                            <Form.Control as="textarea" required name={"message"} rows="3"/>
                            <Form.Check  className="text-justify" type="checkbox" required label="Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage erhoben und verarbeitet werden. Die Daten werden nach abgeschlossener Bearbeitung Ihrer Anfrage gelöscht."
                            />
                        </Form.Group>
                        <Button className="button__wrapper" variant="outline-primary btn-lg btn-block" type="submit" >
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>
)


export default Formular
