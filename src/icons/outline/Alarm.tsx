import React from "react";

type AlarmProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Alarm: React.FC<AlarmProps> = ({...props}) => {
    return (
        <div {...props}>
            <img src='/images/alarm.svg' alt='Alarm' />
        </div>
    )
}