import React from "react";

interface styleItemProps {
    item: string;
    style: string;
    active: any;
    setItem: (ev: any, e: string, i: string) => void;
}

export const StyleItem: React.FC<styleItemProps> = ({
    item,
    style,
    active,
    setItem,
}) => {

    const handleSelectItem = (e:any) => {
        setItem(e, item, style);
    }

    return (
        <div className={`style-list__item tinytext ${(active === style) && "textFieldEditor__active"}`} onClick={(e)=>handleSelectItem(e)}>
          {item}
        </div>
    )
}