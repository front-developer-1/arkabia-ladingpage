import React from "react";

type CustomsAgencyPrps = React.HTMLAttributes<HTMLDivElement> & {};

export const CustomsAgency: React.FC<CustomsAgencyPrps> = ({...props}) => {
    return (
        <div {...props}>
            <img src='/images/search-provider.svg' alt='Search Provider' />
        </div>
    )
}