import React from "react";

type InspectionProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Inspection: React.FC<InspectionProps> = ({...props}) => {
    return (
        <div {...props}>
            <img src='/images/inspection.svg' alt='Inspection' />
        </div>
    )
}