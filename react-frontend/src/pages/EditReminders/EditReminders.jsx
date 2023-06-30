import { React } from "react";
import '../../assets/EditReminders.css';
import { Link } from "react-router-dom";
//bootstrap
import {Container, Row, Col } from "react-bootstrap";

//Create
import {EditReminderAddInputForm} from "./EditReminderAddInputForm/EditReminderAddInputForm"

//Rows/EDIT
import { EditReminderRowEditInputForm } from "./EditReminderRowEditInputForm/EditReminderRowEditInputForm"

import { useTodos } from "../../hooks/useTodos.js";

const EditReminders = () =>
{
    const {todos, createToDo, updateToDo, deleteToDo} = useTodos();
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
            <EditReminderAddInputForm createToDoButtonClickCallback={createToDo}/>
            <br/>
            <hr/>
            <h2><font color='white'>Edit</font></h2>
            <br/>
            <EditReminderRowEditInputForm arrayOfReminderInstances={todos} updateCallback={updateToDo} deleteCallback={deleteToDo}/>
        </Container>
    );
}

export default EditReminders;