import React from "react";
import '../../assets/EditReminders.css';
//bootstrap
import {Container, Row, Col, Alert} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
//Date picker
import { useScheduleDateTimePicker } from "./useDatePicker";
import { useTodos } from "../../hooks/useTodos";
import { Link } from "react-router-dom";

const EditReminders = () =>
{
    const {todos, createTodo} = useTodos()
    const {ScheduleDateTimePicker, value} = useScheduleDateTimePicker()

    return (
        <Container>
            <Button onClick={() => createTodo({value})}>Create Todo</Button>
            <br/>
            <Row className="d-flex align-items-center">
                <Col md={12} className="d-flex justify-content-end">
                    <Link variant="success" to="/" className="btn btn-outline-success" >View</Link>
                </Col>
            </Row>
            <br/>
            <h2><font color='white'>Add</font></h2>
            <Row md={12}className="d-flex align-items-center">
                <Col col-sm><font color='white'>Message: </font><input></input></Col>
                <Col col-sm><font color='white'>Frequency in hours: </font><input></input></Col>
                <Col col-sm>
                    <ScheduleDateTimePicker />
                </Col>
                <Col col-sm>  <Button variant="btn btn-secondary" href={"/"} >Add</Button> </Col>
            </Row>
            <br/>
            <h2><font color='white'>Edit</font></h2>
            <br/>
            <Row md={12}className="d-flex align-items-center">
                <Col col-sm><font color='white'>ID</font></Col>
                <Col col-sm><font color='white'>Message</font></Col>
                <Col col-sm><font color='white'>Frequency</font></Col>
                <Col col-sm><font color='white'>Start DateTime</font></Col>
                <Col col-sm><font color='white'>Update</font></Col>
                <Col col-sm><font color='white'>Remove</font></Col>
            </Row>
        </Container>
    );
}

export default EditReminders;