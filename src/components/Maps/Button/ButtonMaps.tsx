import React from "react";


import './ButtonMaps.css';

interface ButtonMapsProps {
    text: string;
    onClick: ()=> void;
}

export const ButtonMaps: React.FC<ButtonMapsProps> = ({
    text,
    onClick
}) => {
    return (
        <div className="buttonMap-container" onClick={onClick}>
            {text}
        </div>
    )
}