import React from "react";

type HelpCircleProps = React.HTMLAttributes<HTMLDivElement> & {};

export const HelpCircle: React.FC<HelpCircleProps> =({...props}) => {
    return (
        <div {...props}>
            <img src="/images/help_circle_outline.svg" alt="help_circle" />
        </div>
    )
}
