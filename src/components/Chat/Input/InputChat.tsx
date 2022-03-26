import React from "react";

import { Emoji } from "../../../icons/outline/Emoji";
import { Attached } from "../../../icons/outline/Attached";
import { Alarm } from "../../../icons/outline/Alarm";

import './InputChat.css';

interface InputChatProps {
    disabledInput?: boolean;
}

export const InputChat: React.FC<InputChatProps> = ({
    disabledInput =  false,
}) => {
    return (
        <div className="inputChat-container">
            <div className="inputChat-circle"><Emoji /></div>    
            <div className="inputChat-circle"><Attached/></div> 
            <div className="inputChat-line"></div>
            <input disabled={disabledInput} className="inputChat__input paragraph" placeholder="Escribe un mensaje aquí" />  
            <div className="inputChat-circle"><Alarm /></div>
        </div>
    )
}