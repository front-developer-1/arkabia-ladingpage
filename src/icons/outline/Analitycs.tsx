import React from "react";

type AnalitycsProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Analitycs: React.FC<AnalitycsProps> = ({...props}) => {
    return (
        <div {...props}>
            <img src='/images/analytics.svg' alt='Analitycs' />
        </div>
    )
}