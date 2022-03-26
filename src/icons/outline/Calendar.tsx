import React from "react";

type CalendarProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Calendar: React.FC<CalendarProps> = ({...props}) => {
    return (
        <div {...props}>
            <img src='/images/calendar.svg' alt='Calendar' />
        </div>
    )
}