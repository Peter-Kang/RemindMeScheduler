import {React, useState} from "react";
import '../../assets/EditReminders.css';
import { Link } from "react-router-dom";
//bootstrap
import {Container, Row, Col, Alert} from "react-bootstrap";
import {EditReminderAddInputForm} from "./EditReminderAddInputForm/EditReminderAddInputForm"

//Rows/EDIT
import {EditReminderRowEditInputForm, ReminderInstance} from "./EditReminderRowEditInputForm/EditReminderRowEditInputForm"

import { useTodos, useCreateTodos } from "../../hooks/useTodos.js";

const EditReminders = () =>
{
    const {data, loading, error } = useTodos();
    const {createTodo} = useCreateTodos();

    if(loading)
    {
        return 'loading'
    }
    if(error)
    {
        console.log(error)
        return 'error'
    }
    if(data?.data)console.log(data.data.todos)

    let reminderResultArray = JSON.parse(JSON.stringify(data?.data?.todos)) | []
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
            <EditReminderAddInputForm createToDoButtonClickCallback={createTodo}/>
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
            <EditReminderRowEditInputForm arrayOfReminderInstances={reminderResultArray}/>
        </Container>
    );
}

export default EditReminders;