import React from "react";

interface SelectTurnProps{
    handleDropdown: () => void;
    selectRef: React.RefObject<HTMLDivElement>;
    imgRef: React.RefObject<HTMLImageElement>;
    title: string;
    img?: string;
    owner: boolean;
}

export const SelectTurn: React.FC<SelectTurnProps> = ({
    handleDropdown,
    selectRef,
    imgRef,
    title, 
    img,
    owner
}) => {
    return (
        <div className={`dropdownTurn-select ${owner && "dropdownTurn-select-dark "}`} onClick={handleDropdown} ref={selectRef}>
            {img && <img ref={imgRef} className="selectTurn-img" src={img} />}
            <div className={`smalltext-header selectturn-textColor ${owner && "selectturn-textWhite"}`}>{owner?'¡Es tu turno!':title}</div>
            {owner ? <img src="/images/dropdown_arrow_white.svg" /> : <img src="/images/dropdown-arrow.png" alt={title} />}
        </div>
    )
}