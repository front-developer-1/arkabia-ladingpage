import React from "react";

import { MessageChat } from "./Message/MessageChat";
import { InputChat } from "./Input/InputChat";

import { messageData } from "../../testdata/messageData";

import './Chat.css';

interface ChatProps {

}

export const Chat: React.FC<ChatProps> = ({

}) => {
    return (
        <div className="chat-container"> 
            <div className="chat-message">
                {
                    messageData.length > 0 && messageData.map((m, idx) => {
                        return (
                            <MessageChat key={idx} msg={m} />
                        )
                    })
                }
            </div>
            <InputChat disabledInput={true}  />
        </div>
    )
}