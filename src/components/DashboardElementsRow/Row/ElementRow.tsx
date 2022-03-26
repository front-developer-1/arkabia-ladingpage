import React from "react";

import './ElementRow.css';

interface ElementRowProps {
    title: string;
    content: [{
        detail: string,
        subDetail?: string,
        type: 'text' | 'image',
        alert?: boolean
    }],
    style: object;
}

export const ElementRow: React.FC<ElementRowProps> = ({
    title,
    content,
    style
}) => {


    return (
        <div className="elementRow-container" style={style} >
            <div className="smalltext-header">{title}</div>
            {content.length>0 && content.map((c, idx) => {
                return (
                    <div key={idx} className={"elementRow-row" +(idx===0?' elementRow-middle':'')}>
                        {c.type === 'text'? <><div className="tinytext elementRow-row__detail elementRow-colorText"><div className="elementRow-text">{c.detail}</div> {c.alert && <div className="elementRow-alert"></div>}</div> {c.subDetail && <div className="tinytext elementRow-subdetail elementRow-colorText">{c.subDetail}</div>}</>: 
                        <div className="elementRow-image"><img src={c.detail} alt="" /> <div className="smalltext-header elementRow-colorText">{c.subDetail}</div></div>}
                    </div>
                )
            })
            }
        </div>
    )
}