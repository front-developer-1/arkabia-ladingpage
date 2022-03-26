import React from "react";

type SearchProviderProps = React.HTMLAttributes<HTMLDivElement> & {};

export const SearchProvider: React.FC<SearchProviderProps> = ({...props}) => {
    return (
        <div {...props}>
            <img src='/images/customs-agency.svg' alt='Customs Agency' />
        </div>
    )
}