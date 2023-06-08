import React from 'react';
import { Table, Row, Col} from "react-bootstrap";
import './Assets/EditReminderRowEditInputForm.css'
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

export interface EditReminderRowEditInputFormProp {
    arrayOfReminderInstances: ReminderInstance[];
};

export const EditReminderRowEditInputForm:React.FC<EditReminderRowEditInputFormProp> = ({arrayOfReminderInstances}) => {
    console.log(arrayOfReminderInstances);
    return( <div>
                <Row md={12}className="d-flex align-items-center">
                    <Col sm={3}><p id="EditIDLabel">ID</p></Col>
                    <Col sm={4}><p id="EditMessageLabel">Message</p></Col>
                    <Col sm={1}><p id="EditFrequencyLabel">Frequency</p></Col>
                    <Col sm={2}><p id="EditStartDateTimeLabel">Start DateTime</p></Col>
                    <Col sm={1}><p id="EditUpdateLabel">Update</p></Col>
                    <Col sm={1}><p id="EditRemoveLabel">Remove</p></Col>
                </Row>
                <hr/>
                {arrayOfReminderInstances.map((Instance:ReminderInstance) => 
                    <Row key={Instance._id}>
                            <Col sm={3}><p>{Instance._id}</p></Col>
                            <Col sm={4}><p>{Instance.message}</p></Col>
                            <Col sm={1}><p>{Instance.frequencyInHours}</p></Col>
                            <Col sm={2}><p>{Instance.startDateTime.toString()}</p></Col>
                            <Col sm={1}><Link to="/" className="btn btn-outline-success">Update</Link></Col>
                            <Col sm={1}><Link to="/" className="btn btn-outline-danger">Remove</Link></Col>
                    </Row>
                )}
            </div>)
}