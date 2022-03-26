import React from "react";

import { Dots } from "../../../icons/outline/Dots";

import './MilestoneCard.css';

interface MilestoneCardProps {
    deliveryDate: string
    numHito: number;
    hitoCreated: string;
    msg: string;
    firms: any[];
}

export const MilestoneCard: React.FC<MilestoneCardProps> = ( {
    deliveryDate,
    numHito,
    hitoCreated,
    msg,
    firms
}) => {
    return (
        <div className="milestoneCard-main">
            <div className="milestoneCard-header">
                <div className="milestoneCard-header__main">
                    <div className="small-bold" style={{color: 'var(--black-75)'}}>Entrega del bien</div>
                    <div className="milestoneCard-date">
                        <div className="tinytext milestoneCard-textColor ">{deliveryDate}</div>
                        <Dots />
                    </div>
                </div>
                <div className="tinytext milestoneCard-textColor ">Hito #{numHito} creado por {hitoCreated}</div>
            </div>
            <div className="paragraph milestoneCard-colorTitle ">{msg}</div>
            <img src="/images/Frame 2229.png" className="milestoneCard-img"/>
            <div className="paragraph-header milestoneCard-colorTitle ">Firmado por:</div>
            <div className="milestoneCard-firm">
                {firms.length>0 && firms.map((f, idx) => {
                    return (
                        <div key={idx} className="smalltext-header milestoneCard-circle milestoneCard-colorTitle ">
                            {f}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}