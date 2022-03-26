import React from "react";

import './CircleTab.css';

interface CircleTabProps {
    status: boolean;
    handleClick: () => void;
}

export const CircleTab: React.FC<CircleTabProps> = ({
    status,
    handleClick,
    ...props
}) => {
    return (
        <div {...props} className={`circleTab-container ${status && "circleTab__active"}`} onClick={handleClick}>
        </div>
    )
}