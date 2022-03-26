import React from "react";

type LocalizationTagProps = React.HTMLAttributes<HTMLDivElement> & {};

export const LocalizationTag: React.FC<LocalizationTagProps> = ({...props}) => {
    return (
        <div {...props}>
            <img src="/images/location-tags.png" alt="search" />
        </div>
    )
}