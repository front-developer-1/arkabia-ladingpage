import React from "react";

type DocumentsProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Documents: React.FC<DocumentsProps> = ({...props}) => {
    return (
        <div {...props}>
            <img src='/images/documents.svg' alt='Documents' />
        </div>
    )
}