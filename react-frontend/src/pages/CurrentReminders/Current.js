import React from "react";
import '../../assets/Current.css';
import {Container, Row, Col, Alert} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { getHealthCheck } from '../../hooks/healthCheck.js'

const Current = ()=>
{
    return (
        <Container>
            <button onClick={()=>getHealthCheck()} >Is Alive</button>
            <br/>
            <Row className="d-flex align-items-center">
                <Col md={12} className="d-flex justify-content-end">
                    <Button variant="success" href={"/Edit"} >Edit</Button>
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