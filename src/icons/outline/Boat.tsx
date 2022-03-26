import React from "react";

type BoatProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Boat: React.FC<BoatProps> = ({...props}) => {
    return (
        <div {...props}>
            <img src='/images/boat.svg' alt='Boat' />
        </div>
    )
}