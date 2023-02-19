import React from "react";
import './EditReminders.css';
import {Container, Row, Col, Alert} from "react-bootstrap";
import Button from 'react-bootstrap/Button';


const EditReminders = ()=>
{
    return (
        <Container>
            <br/>
            <Row className="d-flex align-items-center">
                <Col md={12} className="d-flex justify-content-end">
                    <Button variant="btn btn-outline-success" href={"/"} >View</Button>
                </Col>
            </Row>
            <br/>
            <Row className="d-flex align-items-center">
                <Col md={12}>
                </Col>
            </Row>
        </Container>
    );
}

export default EditReminders;