import React from "react";

import { UserActive } from "../..";
import { Dots } from "../../../icons/outline/Dots";
import { DoneGreen } from "../../../icons/solid/DoneGreen";
import { CloseGreen } from "../../../icons/solid/CloseGreen";


import './MyContactsFriend.css';

interface MyContactsFriendProps {
    user: {
        img: string;
        fullName: string;
        company: string;
        nickName: string;
        isConnected: boolean;
    },
    edit: boolean;
    showDots?: boolean;
}

export const MyContactsFriend: React.FC<MyContactsFriendProps> = ({
    user,
    edit,
    showDots = true
}) => {
    return (
        <div className="myContactsFriend-container">
            <div className="myContactsFriend-row">
                <UserActive
                    isConnected={user.isConnected}
                    userImg={user.img}
                    username=""
                />
            </div>
            <div className="myContactsFriend-row">
                <div className="small-bold myContactsFriend-colorTItle">{user.fullName}</div>
                <div className="paragraph-header myContactsFriend-colorText">{user.company}</div>
                <div className="paragraph-header myContactsFriend-colorText">{user.nickName}</div>
            </div>
            <div className="myContactsFriend-row">
               {!edit ? (showDots && <Dots />):
                <div className="myContactsFriend-edit">
                    <DoneGreen />     
                    <CloseGreen />
                </div>
                }
            </div>
        </div>
    )
}