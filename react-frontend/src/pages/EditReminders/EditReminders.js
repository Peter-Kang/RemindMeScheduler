import {React, useState} from "react";
import '../../assets/EditReminders.css';
import { Link } from "react-router-dom";
//bootstrap
import {Container, Row, Col, Alert} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
//Date picker
import { useScheduleDateTimePicker } from "./useDatePicker";
//Message inputs
 
import { useTodos } from "../../hooks/useTodos";


const EditReminders = () =>
{
    const {todos, createTodo} = useTodos()
    const {ScheduleDateTimePicker, startDateValue} = useScheduleDateTimePicker()
    const [messageValueInput, updateMessageValueInput ] = useState('')
    const [frequencyValueInputInt, updateFrequencyValueInputInt ] = useState('0')

    return (
        <Container>
            <Button onClick={() => createTodo({startDateValue,messageValueInput, frequencyValueInputInt})}>Create Todo</Button>
            <br/>
            <Row className="d-flex align-items-center">
                <Col md={12} className="d-flex justify-content-end">
                    <Link variant="success" to="/" className="btn btn-outline-success" >View</Link>
                </Col>
            </Row>
            <br/>
            <h2><font color='white'>Add</font></h2>
            <Row md={12}className="d-flex align-items-center">
                <Col col-sm>
                    <font color='white'>
                        Message: {messageValueInput}
                    </font>
                    <input type="text" id="messageInputValueText" name="messageInputValueText" onChange={e=>updateMessageValueInput(e.target.value)} value={messageValueInput}>
                    </input>
                </Col>
                <Col col-sm>
                    <font color='white'>
                        Frequency in hours: 
                    </font>
                    <input type="text" id="updateFrequencyValueInputInt" name="updateFrequencyValueInputInt" onChange={e=>updateFrequencyValueInputInt(e.target.value)} value={frequencyValueInputInt}>
                    </input>
                </Col>
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