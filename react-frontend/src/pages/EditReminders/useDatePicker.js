import React, {useState, useEffect} from 'react';

//mui
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';


export const useScheduleDateTimePicker = () => {
	const [value, setValue] = React.useState(dayjs('2022-04-07'));

	const ScheduleDateTimePicker = () => 
  (
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
        value={value}
        onChange={(newValue) => { setValue(newValue); }} />
    </LocalizationProvider>
  )
	return {ScheduleDateTimePicker,value}
}