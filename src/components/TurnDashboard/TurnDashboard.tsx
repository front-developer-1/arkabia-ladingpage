import React from "react";

import './TurnDashboard.css';

interface TurnDashboardProps {
    image: string;
    name: string;
}

export const TurnDashboard: React.FC<TurnDashboardProps> = ({
    image,
    name
}) => {
    return (
        <div className="turnDashboard-container">
            <img src={image} alt="" className="turnDashboard-img" />
            <div className="smalltext-header">{name}</div>
        </div>
    )
}