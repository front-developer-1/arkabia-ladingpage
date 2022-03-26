import React from "react";

/** import components */
import { ArrowDown } from "../../../icons/solid/ArrowDown.";

/** import styles */
import './FilterSelectorMiniature.css';

/** interface props */
interface FilterSelectorMiniatureProps {
    preferences: any[], // filter by preferences
    sortBy: any[] // filter by sort
}


/** Component to rendered filter for mobile */
export const FilterSelectorMiniature: React.FC<FilterSelectorMiniatureProps> = ({
    preferences,
    sortBy
}) => {
    return (
        <div className='filterSelectorMiniature-main paragraph-header'>
            <div className='filterSelectorMiniature-item'>
                Preferencias
                <ArrowDown />
            </div>
            <div className='filterSelectorMiniature-item'>
                <span className='paragraph'> Ordenado por </span> Relevancia 
                <ArrowDown />
            </div>
        </div>
    )
}