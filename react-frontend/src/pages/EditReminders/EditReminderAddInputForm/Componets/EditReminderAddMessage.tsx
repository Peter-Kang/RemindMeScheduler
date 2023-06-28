import React from 'react';
import "../Assets/Message.css"

export interface EditReminderAddMessageProp{
    message:string,
    setMessageCallback: (newMessage:string)=>void
}

export const EditReminderAddMessage:React.FC<EditReminderAddMessageProp> = ({ message, setMessageCallback }) => {
    return (
        <div>
            <p id="EditReminderAddMessageLabel">
                Message:
            </p>
            <input type="text" id="messageInputValueText" name="messageInputValueText" 
                onChange={(newMessage) => {setMessageCallback(newMessage.target.value);}} 
                value={message}>
            </input>
        </div>
    )
}