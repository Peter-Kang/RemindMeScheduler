import React from "react";
import '../../assets/Current.css';
import {Container, Row, Col, Alert} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useHealthCheck } from '../../hooks/healthCheck.js'

import { Link } from "react-router-dom";
import {useActiveTodos}  from "../../hooks/useTodos.js";

const Current = () =>
{
    const {isAlive, retrigger} = useHealthCheck();
    const {activeTodos} = useActiveTodos();

    return (
        <Container>
            <Button onClick={retrigger}>Live check</Button>
            <span><font color ='white'>{' '}{isAlive.message}</font></span>
            <br/>
            <Row className="d-flex align-items-center">
                <Col md={12} className="d-flex justify-content-end">
                    <Link variant="success" to="/Edit" className="btn btn-success" >Edit</Link>
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