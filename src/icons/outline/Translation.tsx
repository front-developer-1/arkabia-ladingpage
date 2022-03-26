import React from "react";

type TranslationProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Translation: React.FC<TranslationProps> = ({...props}) => {
    return (
        <div {...props}>
            <img src='/images/translation.svg' alt='Translation' />
        </div>
    )
}