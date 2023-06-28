import React from 'react';

export interface EditReminderAddFrequencyProp{
    frequency:number,
    setFrequencyCallback: (newFreq:number)=>void
}

export const EditReminderRowFrequency:React.FC<EditReminderAddFrequencyProp> = ({ frequency, setFrequencyCallback }) => {
    return (
        <div>
            <input type="number" min={0} id="updateFrequencyValueInputInt" name="updateFrequencyValueInputInt" 
                onChange={(newFrequency) => {   
                        setFrequencyCallback(parseInt(newFrequency.target.value));
                }} 
                value = { frequency }>
            </input>
        </div>
    )
}