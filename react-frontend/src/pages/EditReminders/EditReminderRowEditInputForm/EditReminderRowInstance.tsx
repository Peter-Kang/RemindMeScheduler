import React from 'react';
import { Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";


export interface  ReminderInstance {
    _id: string;
    message: string;
    startDateTime: Date;
    frequencyInHours: number;
    status: string;
    createdAt: string;
    updatedAt: string;
};

export interface EditReminderRowEditProp {
    reminderInstances: ReminderInstance;
};

export const EditReminderRowEdit:React.FC<EditReminderRowEditProp> = ({reminderInstances}) => {
    return (
    <Row md={12} key={reminderInstances._id}>
        <Col sm={3}><p>{reminderInstances._id}</p></Col>
        <Col sm={3}><p>{reminderInstances.message}</p></Col>
        <Col sm={2}><p>{reminderInstances.status}</p></Col>
        <Col sm={1}><p>{reminderInstances.frequencyInHours}</p></Col>
        <Col sm={2}><p>{reminderInstances.startDateTime.toString()}</p></Col>
        <Col sm={1}><Link to="/" className="btn btn-outline-success">Update</Link>
            <Link to="/" className="btn btn-outline-danger">Remove</Link>
        </Col>
    </Row>)
}

