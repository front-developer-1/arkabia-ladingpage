import React from "react";

type LawProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Law: React.FC<LawProps> = ({...props}) => {
    return (
        <div {...props}>
            <img src='/images/law-icon.svg' alt='Law' />
        </div>
    )
}