import React from "react"


import {Container, Form, Button, Col, Row, CardDeck, Card, Image} from 'react-bootstrap';



import "./style.css";
import ContactImage from "../../images/contactImage.jpg";
import Freelancer from "../../images/freelancer.jpg";

const Formular = () => (
    <Container>
        <Row>
            <Col>
                <Image fluid src={ContactImage} width={"100%"}/>
            </Col>
            <Col>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>


)


export default Formular
