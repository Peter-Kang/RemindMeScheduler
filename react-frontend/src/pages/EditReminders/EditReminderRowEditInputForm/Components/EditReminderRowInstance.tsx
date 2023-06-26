import React, {useState} from 'react';
import { Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import { EditReminderRowMessage } from './Components/EditReminderRowMessage';
import { EditReminderRowStatus } from './Components/EditReminderRowStatus';

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
    reminderInstance: ReminderInstance;
};

export const EditReminderRowEdit:React.FC<EditReminderRowEditProp> = ({reminderInstance}) => {
    const [messageValueInput, updateMessageValueInput ] = useState(reminderInstance.message);
    const [statusValueInput, updateStatusValueInput ] = useState(reminderInstance.status);
    const [frequencyInHoursValueInput, updateFrequencyInHoursValueInput ] = useState(reminderInstance.frequencyInHours);
    const [startDateTimeValueInput, updateStartDateTimeValueInput ]= useState(reminderInstance.startDateTime);
    
    return (
    <Row md={12} key={reminderInstance._id}>
        <Col sm={3}>
            <p>{reminderInstance._id}</p>
        </Col>
        <Col sm={3}>
            <EditReminderRowMessage id={reminderInstance._id+'_Message'} 
                                    message = {messageValueInput} 
                                    setMessageCallback={updateMessageValueInput}
                                    />
            </Col>
        <Col sm={2}>
            <EditReminderRowStatus id={reminderInstance._id+'_status'}
                status={statusValueInput}
                setStatusCallback={updateStatusValueInput}
                />
        </Col>
        <Col sm={1}><p>{reminderInstance.frequencyInHours}</p></Col>
        <Col sm={2}><p>{reminderInstance.startDateTime.toString()}</p></Col>
        <Col sm={1}>
            <Link to="/" className="btn btn-outline-success">Update</Link>
            <Link to="/" className="btn btn-outline-danger">Remove</Link>
        </Col>
    </Row>)
}

