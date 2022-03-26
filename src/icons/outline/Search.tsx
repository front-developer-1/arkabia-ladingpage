import React from "react";

type SearchProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Search: React.FC<SearchProps> = ({...props}) => {
    return (
        <div {...props}>
            <img src="/images/search.svg" alt="search" />
        </div>
    )
}