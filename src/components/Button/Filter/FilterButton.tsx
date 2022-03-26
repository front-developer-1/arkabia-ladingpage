import React from "react";

import { RightArrow } from "../../../icons/outline/RightArrow";

import './FilterButton.css';

interface FilterButtonProps {
    title: string; // titulo del filtro
    setModal: (e: boolean) => void; // metodo para cambiar el estado del modal
}

export const FilterButton: React.FC<FilterButtonProps> = ({
    title,
    setModal
}) => {
    return (
        <div onClick={()=>setModal(true)} className="filterButton-container">
            <div  className="paragraph-header companyList-filter-min--colorText">{title}</div>
            <RightArrow className="filterButton-icon" />
        </div>
    )
}