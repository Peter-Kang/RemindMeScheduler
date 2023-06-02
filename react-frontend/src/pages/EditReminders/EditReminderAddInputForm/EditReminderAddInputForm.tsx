import React, {useState} from 'react';
import { Row, Col} from "react-bootstrap";
import Button from 'react-bootstrap/Button';

//inputs
  //Message
import { EditReminderAddMessage } from "./EditReminderAddMessage.tsx";
  //Frequency
import { EditReminderAddFrequency } from "./EditReminderFrequencyValueInputForm.tsx"
  //Date picker
import { ScheduleDateTimePicker } from "./EditDatePicker.tsx";

export interface EditReminderAddButtonClick{
  createToDoButtonClickCallback: ({ })=>void
}

export const EditReminderAddInputForm:React.FC<EditReminderAddButtonClick> = ({createToDoButtonClickCallback}) => {

  const [startingDateValue, setStartingDateValue] = useState(new Date())
  const [messageValueInput, updateMessageValueInput ] = useState('')
  const [frequencyValueInputInt, updateFrequencyValueInputInt ] = useState(0)

    return (
      <Row md={12}className="d-flex align-items-center">
        <Col sm={4}>
            <EditReminderAddMessage message={messageValueInput} setMessageCallback={updateMessageValueInput}/>
        </Col>
        <Col sm={4}>
            <EditReminderAddFrequency frequency={frequencyValueInputInt} setFrequencyCallback={updateFrequencyValueInputInt}/>
        </Col>
        <Col sm={3}>
            <ScheduleDateTimePicker startingDate={startingDateValue} setStartingDate={setStartingDateValue}/>
        </Col>
        <Col sm={1}>
            <Button onClick={() => createToDoButtonClickCallback({startingDateValue,messageValueInput,frequencyValueInputInt})}>
              Add
            </Button>
        </Col>
      </Row>
    )}