import React from "react";

interface StyleButtonProps {
    onToggle: (e:any) => void;
    style: string;
    active: boolean;
    label: string;
    className: string;
}

export const StyleButton: React.FC<StyleButtonProps> = ({
    onToggle,
    style,
    active,
    label,
    className,
}) => {
    
    const __onToggle = (e:any) => {
        e.preventDefault();
        onToggle(style);
    }


    return (
        <div className={className+`${active?" textFieldEditor__active":''}`} onMouseDown={(e)=>__onToggle(e)}>
            {label}
        </div>
    )
} 