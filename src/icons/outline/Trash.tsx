import React from "react";

type TrashProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Trash: React.FC<TrashProps> = ({...props}) => {
    return (
        <div {...props}>
            <img src='/images/trash_full.svg' alt='Translation' />
        </div>
    )
}