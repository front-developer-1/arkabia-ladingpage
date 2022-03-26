import React from "react";

type StopWatchProps = React.HTMLAttributes<HTMLDivElement> & {};

export const StopWatch: React.FC<StopWatchProps> = ({...props}) => {
    return (
        <div {...props}>
            <img src='/images/stopwatch.svg' alt='Clock' />
        </div>
    )
}