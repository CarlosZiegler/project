import React from "react"

import {Container, Form, Button, Col, Row, Image} from 'react-bootstrap';

import "./style.css";
import ContactImage from "../../images/contactImage.jpg";


const Formular = () => (
    <div id={"kontakt"}>
        <Container>
            <h3 className={"text-center"}>Kontakt</h3>
            <Row>
                <Col lg={true} xs={12}>
                    <Image fluid src={ContactImage} width={"100%"}/>
                </Col>
                <Col lg={true} xs>
                    <Form className={'formEmail'} action="https://formspree.io/mwgzwjpm" method="POST" >
                        <Form.Group controlId="name" >
                            <Form.Label>Ihre Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name={"name"}/>
                        </Form.Group>
                        <Form.Group controlId="_replyto">
                            <Form.Label>Ihre Email*</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name={"_replyto"}/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Ihre Nachricht*</Form.Label>
                            <Form.Control as="textarea"  name={"message"} rows="3"/>
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
