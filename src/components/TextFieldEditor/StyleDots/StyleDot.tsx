import React from "react";
import {DotsLines} from '../../../icons/outline/DotsLines';

interface StyleDotProps {
    style: string;
    onToggle: (e:string) => void;
}

export const StyleDot: React.FC<StyleDotProps> = ({
    style,
 onToggle
}) => {
    return (
        <div className="styleDot-container" onClick={()=>{
            onToggle(style);
        }}>
            <DotsLines />
        </div>
    )
}