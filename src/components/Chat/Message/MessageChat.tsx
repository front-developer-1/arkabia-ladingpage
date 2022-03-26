import ms from "date-fns/esm/locale/ms/index.js";
import React from "react";

import { Button } from "../..";


import { Message } from "../../../interfaces/Message";

import './MessageChat.css';

interface MessageChatProps {
    msg: Message;
    
}

export const MessageChat: React.FC<MessageChatProps> = ({
    msg
}) => {


    return (
        <>
        {
            msg.type === 'alert' ?
            <div className="tinytext-header messageChat-alert"> 
                {msg.content}
            </div> :
            <div className={`messageChat-main 
            ${msg.from === 'Me' ? 'messageChat__rigth ': 'messageChat__left'}`}
        >
            <div className="messageChat-container" >
                {msg.from !== 'Me' && <div className="small-bold">{msg.from}</div>}
                <div className={`messageChat-box 
                    ${msg.from === 'Me'? 'messageChat-box__rigth': 'messageChat-box__left'}`}
                >
                    <div className={`paragraph 
                        ${msg.from === 'Me' ? 'messageChat-colorWhite' : 'messageChat-colorBlack'}`}
                    >
                        {msg.content}
                    </div>
                    {msg.type === 'link' && <div className="paragraph messageChat-colorWhite">{msg.attached?.phase}</div>}
                    {msg.type === "link" && 
                        <div className="paragraph messageChat-button">
                            <Button color='yellow' content={msg.attached?.text+""} /> 
                        </div>
                    }
                    <div className="tinytext-header messageChat-box__time">{msg.sendhour}</div>
                </div>
            </div>
        </div>
        }
        </>
    )
}