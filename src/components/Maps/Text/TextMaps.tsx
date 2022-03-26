import React from "react";

import './TextMaps.css';

interface TextMapsProps {
    content: string;
}

export const TextMaps: React.FC<TextMapsProps> = ({
    content,
    ...props
}) => {
    return (
        <div className="tinytext-header textMaps-container" {...props}>
            {content}
        </div>
    )
}