import React, {useState} from 'react';
import { Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import { EditReminderRowMessage } from './Components/EditReminderRowMessage.tsx';
import { EditReminderRowStatus } from './Components/EditReminderRowStatus.tsx';
import { EditReminderRowFrequency } from './Components/EditReminderRowFrequencyInHours.tsx';
import { EditReminderRowStartingDate } from './Components/EditReminderRowStartingDate.tsx'
import './assets/EditReminderRowInstance.css'
import Button from 'react-bootstrap/Button';

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
    updateCallback: ({ })=>void;
};

export const EditReminderRowEdit:React.FC<EditReminderRowEditProp> = ({reminderInstance, updateCallback}) => {
    const id = reminderInstance._id;
    const [messageValueInput, updateMessageValueInput ] = useState(reminderInstance.message);
    const [statusValueInput, updateStatusValueInput ] = useState(reminderInstance.status);
    const [frequencyInHoursValueInput, updateFrequencyInHoursValueInput ] = useState(reminderInstance.frequencyInHours);
    const [startDateTimeValueInput, updateStartDateTimeValueInput ]= useState(reminderInstance.startDateTime);

    const valid = startDateTimeValueInput && messageValueInput !== '' && frequencyInHoursValueInput != 0;
    return (
    <Row md={12} key={reminderInstance._id} id="editEditRows">
        <Col sm={2}>
            <p>{reminderInstance._id}</p>
        </Col>
        <Col sm={4}>
            <EditReminderRowMessage id={reminderInstance._id+'_Message'} 
                                    message = {messageValueInput} 
                                    setMessageCallback={updateMessageValueInput}
                                    />
            </Col>
        <Col sm={1}>
            <EditReminderRowStatus id={reminderInstance._id+'_status'}
                status={statusValueInput}
                setStatusCallback={updateStatusValueInput}
                />
        </Col>
        <Col sm={1}> 
            <EditReminderRowFrequency id={reminderInstance._id+'_freq'}
                frequency = {frequencyInHoursValueInput}
                setFrequencyCallback = {updateFrequencyInHoursValueInput}
                />
        </Col>
        <Col sm={2}>
            <EditReminderRowStartingDate  id= {reminderInstance._id+'startDate'}
                startingDate={startDateTimeValueInput }
                setStartingDate= {updateStartDateTimeValueInput}
                />
        </Col>
        <Col sm={2}>
            <Button onClick={ () => (valid ? updateCallback({id , messageValueInput,startDateTimeValueInput,frequencyInHoursValueInput, statusValueInput }): null)} 
                variant="button"
                className="btn-outline-success">
                Update
            </Button>
            <Link to="/" className="btn btn-outline-danger">Remove</Link>
        </Col>
    </Row>)
}

