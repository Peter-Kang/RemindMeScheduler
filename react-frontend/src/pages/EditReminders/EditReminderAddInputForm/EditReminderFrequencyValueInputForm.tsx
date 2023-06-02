import React, {useState, useEffect} from 'react';

export interface EditReminderAddFrequencyProp{
    frequency:number,
    setFrequencyCallback: (newFreq:number)=>void
}

export const EditReminderAddFrequency:React.FC<EditReminderAddFrequencyProp> = ({ frequency, setFrequencyCallback }) => {
    return (
        <div>
            <p color='white'>
                Frequency in hours: 
            </p>
            <input type="number" min={0} id="updateFrequencyValueInputInt" name="updateFrequencyValueInputInt" 
                onChange={(newFrequency) => {   
                        setFrequencyCallback(parseInt(newFrequency.target.value));
                }} 
                value = { frequency }>
            </input>
        </div>
    )
}