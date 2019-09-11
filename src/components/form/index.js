import React from "react"


import {Container, Form, Button, Col, Row, CardDeck, Card, Image} from 'react-bootstrap';


import "./style.css";
import ContactImage from "../../images/contactImage.jpg";
import Freelancer from "../../images/freelancer.jpg";

const Formular = () => (
    <div id={"kontakt"}>
        <Container>
            <h3 className={"text-center"}>Kontakt</h3>
            <Row>
                <Col>
                    <Image fluid src={ContactImage} width={"100%"}/>
                </Col>
                <Col>
                    <Form>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Ihre Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter email"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Ihre Email*</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Ihre Nachricht*</Form.Label>
                            <Form.Control as="textarea" rows="3"/>
                        </Form.Group>
                        <Button className="button__wrapper" variant="outline-primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>


)


export default Formular
