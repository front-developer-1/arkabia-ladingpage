import React from "react";

import { ArkabiaOp } from "../../icons/outline/ArkabiaOp";

import './Benefits.css';

interface BenefitsProps {
    benefistList: any[];
}

export const Benefits: React.FC<BenefitsProps> = ({
    benefistList
}) => {
    return (
        <div className="benefits-container">
            <div className="big-header">Y más...</div> 
            {benefistList.length>0 && benefistList.map((b, idx) => {
                return (
                    <div key={idx} className="benefits-row">
                        <ArkabiaOp /> 
                        <div className="benefits-row__text">
                            <div className="small-bold">{b.title}</div>
                            <div className="paragraph">{b.detail}</div>
                        </div>
                    </div>
                )
            }) }           
        </div>
    )
}