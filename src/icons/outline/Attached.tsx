import React from "react";

type AttachedProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Attached: React.FC<AttachedProps> = ({...props}) => {
    return (
        <div {...props}>
            <img src='/images/attach.svg' alt='Attached' />
        </div>
    )
}