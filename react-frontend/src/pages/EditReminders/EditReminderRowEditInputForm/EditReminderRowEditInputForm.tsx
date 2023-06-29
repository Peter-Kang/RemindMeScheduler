import React from 'react';
import { Row, Col} from "react-bootstrap";
import './Assets/EditReminderRowEditInputForm.css'

import {ReminderInstance, EditReminderRowEdit} from './Components/EditReminderRowInstance.tsx'


export interface EditReminderRowEditInputFormProp {
    key: string;
    arrayOfReminderInstances: ReminderInstance[];
};

export const EditReminderRowEditInputForm:React.FC<EditReminderRowEditInputFormProp> = ({arrayOfReminderInstances}) => {
    return( <div>
                <Row key='Header' md={12} className="d-flex align-items-center">
                    <Col sm={2}><p id="EditIDLabel">ID</p></Col>
                    <Col sm={4}><p id="EditMessageLabel">Message</p></Col>
                    <Col sm={1}><p id="EditStatusLabel">Status</p></Col>
                    <Col sm={1}><p id="EditFrequencyLabel">Frequency</p></Col>
                    <Col sm={2}><p id="EditStartDateTimeLabel">Start DateTime</p></Col>
                    <Col sm={2}><p id="EditButtonLabel">Action</p></Col>
                </Row>
                <hr/>
                <div>
                    {arrayOfReminderInstances.map((Instance:ReminderInstance) => <EditReminderRowEdit key={ Instance._id } reminderInstance = { Instance } />)}
                </div>
            </div>)
}