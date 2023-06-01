import React, {useState, useEffect} from 'react';

//mui
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';

export interface ScheduleDateTimePickerProps { 
  startingDate: Date,
  setStartingDate: (newValue:Date|null)=> void
 }

export const ScheduleDateTimePicker:React.FC<ScheduleDateTimePickerProps> = ({startingDate,setStartingDate}) => {
  return (
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
        onChange={(newValue) => {setStartingDate(newValue); }} />
    </LocalizationProvider>
  )
}