import React from 'react';

export interface EditReminderRowMessageProp{
    id:string,
    message:string,
    setMessageCallback: (newMessage:string)=>void
}

export const EditReminderRowMessage:React.FC<EditReminderRowMessageProp> = ({ id, message, setMessageCallback }) => {
    return (
        <div>
            <input type="text" id={id} name={id} 
                onChange={(newMessage) => {setMessageCallback(newMessage.target.value);}} 
                value={message}>
            </input>
        </div>
    )
}