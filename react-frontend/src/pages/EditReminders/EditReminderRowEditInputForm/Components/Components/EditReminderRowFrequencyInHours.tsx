import React from 'react';
import './Assets/EditReminderRowFrequency.css'

export interface EditReminderAddFrequencyProp{
    id:string,
    frequency:number,
    setFrequencyCallback: (newFreq:number)=>void
}

export const EditReminderRowFrequency:React.FC<EditReminderAddFrequencyProp> = ({ id, frequency, setFrequencyCallback }) => {
    return (
        <input id={id} name={id} type="number" width={'15%'} min={0}
            onChange={(newFrequency) => {   
                    setFrequencyCallback(parseInt(newFrequency.target.value));
            }} 
            value = { frequency }>
        </input>
    )
}