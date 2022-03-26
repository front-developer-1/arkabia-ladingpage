import React from "react";

import './ItemCard.css';

interface ItemCardProps {
    title: string; // title item
    active: boolean; // status if card is actived
    onClickItem?: (e:any) => void | React.MouseEventHandler<HTMLDivElement>; // event when clicked on service
}

export const ItemCard: React.FC<ItemCardProps> = ({
    title, 
    active, 
    onClickItem,
    ...props
}) => {


    return (
        <div className={'itemCard-container'+(active?' itemCard-active':'')}
            onClick={onClickItem}>
            <div className='itemCard-title paragraph-header '>{title}</div>
       </div>
    )
}