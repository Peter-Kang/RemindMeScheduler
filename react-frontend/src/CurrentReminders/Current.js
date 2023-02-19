import React from "react";
import './Current.css';
import {Container, Row, Col, Alert} from "react-bootstrap"
import Button from 'react-bootstrap/Button';

const Current = ()=>
{
    return (
        <Container>
            <br/>
            <Row className="d-flex align-items-center">
                <Col md={12} className="d-flex justify-content-end">
                    <Button variant="success" >Edit</Button>
                </Col>
            </Row>
            <br/>
            <Row className="d-flex align-items-center">
                <Col md={12}>
                    <Alert variant="success">
                        <Row>
                            <Col md={8}> 
                                This is a message!
                            </Col>
                            <Col md={4} className="d-flex justify-content-end">
                                <Button variant="primary" className="mx-2">Reset</Button>
                            </Col>
                        </Row>
                    </Alert>
                </Col>
            </Row>
            
        </Container>
    );
}

export default Current;