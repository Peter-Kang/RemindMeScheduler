import React from 'react';

export interface EditReminderAddMessageProp{
    message:string,
    setMessageCallback: (newMessage:string)=>void
}

export const EditReminderAddMessage:React.FC<EditReminderAddMessageProp> = ({ message, setMessageCallback }) => {
    return (
        <div>
            <p color='white'>
                Message:
            </p>
            <input type="text" id="messageInputValueText" name="messageInputValueText" 
                onChange={(newMessage) => {setMessageCallback(newMessage.target.value);}} 
                value={message}>
            </input>
        </div>
    )
}