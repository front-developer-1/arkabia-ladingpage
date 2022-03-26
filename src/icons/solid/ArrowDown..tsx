import React from "react";

type ArrowDownProps = React.HTMLAttributes<HTMLDivElement> & {};

export const ArrowDown: React.FC<ArrowDownProps> = ({...props}) => {
    return (
        <div {...props}>
            <img src="/images/arrow-down.svg" alt="Arrow Down" />
        </div>
    )
}