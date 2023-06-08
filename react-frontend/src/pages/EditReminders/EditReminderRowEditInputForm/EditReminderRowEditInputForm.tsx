import React from 'react';
import { Row, Col} from "react-bootstrap";

export interface  ReminderInstance {
    _id: string;
    message: string;
    startDateTime: Date;
    frequency: number;
    status: string;
    createdAt: string;
    updatedAt: string;
};

export interface EditReminderRowEditInputFormProp {
    arrayOfReminderInstances: ReminderInstance[];
};

export const EditReminderRowEditInputForm:React.FC<EditReminderRowEditInputFormProp> = ({arrayOfReminderInstances}) => {
    return( <div>
        {arrayOfReminderInstances.map((Instance:ReminderInstance) => <Row key={Instance._id}><Col>{Instance.message} </Col></Row>)}
        </div>)
}