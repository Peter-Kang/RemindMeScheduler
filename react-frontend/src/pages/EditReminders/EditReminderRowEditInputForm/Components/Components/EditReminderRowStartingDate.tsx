import React from 'react';

//mui
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';

export interface EditReminderRowStartingDateProps {
    id: string,
    startingDate: Date,
    setStartingDate: (newValue:Date)=> void
 }

export const EditReminderRowStartingDate:React.FC<EditReminderRowStartingDateProps> = ({id, startingDate,setStartingDate}) => {
  return (
    <div id={id} >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDateTimePicker
            renderInput={(props) => 
            <TextField {...props}
                className="createStartDatePicker"
                sx={{
                svg: { color: 'white' },
                input: { color: 'white' }
                }}
            />}
            label="Starting DateTime:"
            value={startingDate}
            onChange={(newValue) => { 
            const newValueValidated = newValue == null ? new Date() : newValue; 
            setStartingDate(newValueValidated); 
            }
            } />
        </LocalizationProvider>
    </div>
  )
}