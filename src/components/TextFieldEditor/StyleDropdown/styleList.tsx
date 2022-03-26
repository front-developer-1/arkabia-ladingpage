import React from "react";

import {StyleItem} from './styleItem';

interface StyleListProps {
    elements: any[];
    listRef: React.RefObject<HTMLDivElement>;
    active: any;
    setItem: (e: any, item: string, style:string) => void;
}

export const StyleList: React.FC<StyleListProps> = ({
    elements,
    listRef,
    active,
    setItem,
}) => {



    return (
        <div className="style-list" ref={listRef}>
            {elements.length>0 && elements.map((e, idx) => {
                return (   
                    <StyleItem 
                        item={e.label}
                        style={e.style}
                        setItem={setItem}
                        active={active}
                    />
                )
            } )}
        </div>
    )
}