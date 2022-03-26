import React from "react";

interface StyleSelectProps {
    selectRef: React.RefObject<HTMLDivElement>;
    title: string;
    itemText: string;
    itemRef: React.RefObject<HTMLSpanElement>;
    handleDropdown: () => void;
}

export const StyleSelect: React.FC<StyleSelectProps> = ( {
    selectRef,
    title,
    itemRef,
    itemText,
    handleDropdown
}) => {
    return (
        <div className="styleDropdown-select" onClick={handleDropdown} ref={selectRef}>
            <div className="styleDropdown-row">
                {itemText !== title && <span className="styleSelect-title tinytext">{title}</span>}
                <span className="tinytext-header" ref={itemRef}>{itemText}</span>
            </div>
            <img src="/images/dropdown-arrow.png" alt={title} />
      </div>   
    ) 
}