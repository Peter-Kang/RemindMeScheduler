import React from "react";
import './EditReminders.css';
//bootstrap
import {Container, Row, Col, Alert} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
//mui
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


const EditReminders = ()=>
{
    const [value, setValue] = React.useState(dayjs('2022-04-07'));
    return (
        <Container>
            <br/>
            <Row className="d-flex align-items-center">
                <Col md={12} className="d-flex justify-content-end">
                    <Button variant="btn btn-outline-success" href={"/"} >View</Button>
                </Col>
            </Row>
            <br/>
            <h2><font color='white'>Add</font></h2>
            <Row md={12}className="d-flex align-items-center">
                <Col col-sm><font color='white'>Message: </font><input></input></Col>
                <Col col-sm><font color='white'>Frequency in hours: </font><input></input></Col>
                <Col col-sm>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                          renderInput={(props) => 
                            <TextField {...props} 
                                className="createStartDatePicker"
                                sx={{svg: { color: 'white' },
                                    input: { color: 'white' }
                                }} 
                            />}
                          label="Starting DateTime:"
                          value={value}
                          onChange={(newValue) => {setValue(newValue);}}/>
                    </LocalizationProvider>
                </Col>
                <Col col-sm>  <Button variant="btn btn-secondary" href={"/"} >Add</Button> </Col>
            </Row>
            <br/>
            <h2><font color='white'>Edit</font></h2>
            <br/>
            <Row md={12}className="d-flex align-items-center">
                <Col col-sm>ID</Col>
                <Col col-sm>Message</Col>
                <Col col-sm>Frequency</Col>
                <Col col-sm>Start DateTime</Col>
                <Col col-sm>Update</Col>
                <Col col-sm>Remove</Col>
            </Row>
        </Container>
    );
}

export default EditReminders;