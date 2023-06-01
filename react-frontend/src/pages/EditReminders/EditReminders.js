import {React, useState} from "react";
import '../../assets/EditReminders.css';
import { Link } from "react-router-dom";
//bootstrap
import {Container, Row, Col, Alert} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
//Date picker
import { ScheduleDateTimePicker } from "./EditDatePicker.tsx";
//Message inputs
import { useTodos } from "../../hooks/useTodos";

const EditReminders = () =>
{
    const {todos, createTodo} = useTodos()
    const [startingDateValue, setStartingDateValue] = useState(new Date())
    const [messageValueInput, updateMessageValueInput ] = useState('')
    const isValid = messageValueInput.length > 0;
    const [frequencyValueInputInt, updateFrequencyValueInputInt ] = useState('0')

    return (
        <Container>
            <br/>
            <Row className="d-flex align-items-center">
                <Col md={12} className="d-flex justify-content-end">
                    <Link variant="success" to="/" className="btn btn-outline-success" >View</Link>
                </Col>
            </Row>
            <br/>
            <h2><font color='white'>Add</font></h2>
            <Row md={12}className="d-flex align-items-center">
                <Col sm={4}>
                    <font color='white'>
                        Message:
                    </font>
                    <input type="text" id="messageInputValueText" name="messageInputValueText" onChange={e=>updateMessageValueInput(e.target.value)} value={messageValueInput}>
                    </input>
                </Col>
                <Col sm={4}>
                    <font color='white'>
                        Frequency in hours: 
                    </font>
                    <input type="number" min={0} id="updateFrequencyValueInputInt" name="updateFrequencyValueInputInt" onChange={e=>updateFrequencyValueInputInt(e.target.value)} value={frequencyValueInputInt}>
                    </input>
                </Col>
                <Col sm={3}>
                    <ScheduleDateTimePicker startingDate={startingDateValue} setStartingDate={setStartingDateValue}/>
                </Col>
                <Col sm={1}> 
                    <Button onClick={() => createTodo({startDateValue,messageValueInput, frequencyValueInputInt})}>Add</Button>
                </Col>
            </Row>
            <br/>
            <hr/>
            <h2><font color='white'>Edit</font></h2>
            <br/>
            <Row md={12}className="d-flex align-items-center">
                <Col sm={1}><font color='white'>ID</font></Col>
                <Col sm={4}><font color='white'>Message</font></Col>
                <Col sm={1}><font color='white'>Frequency</font></Col>
                <Col sm={4}><font color='white'>Start DateTime</font></Col>
                <Col sm={1}><font color='white'>Update</font></Col>
                <Col sm={1}><font color='white'>Remove</font></Col>
            </Row>
        </Container>
    );
}

export default EditReminders;