import React from "react";

/** import components */
import { ArrowDown } from "../../../icons/solid/ArrowDown.";
import { CityCountryDisplay } from "../../CityCountryDisplay/CityCountryDisplay";

/** import styles */
import './FilterSelectorExtended.css';

/** Interface props */
interface FilterSelectorExtendedProps {
    preferences: any[]; // Filter by preferences
    country: any[]; // filter by country
    online: boolean; // status is online 
    sortby: any[]; // sort by any 
    style?: any; // style to will be applied to online block
}


/** Component to rendered filters for desktop */
export const FilterSelectorExtended: React.FC<FilterSelectorExtendedProps> = ({
    preferences,
    country,
    online,
    sortby,
    style
}) => {
    return (
        <div style={style} className='filterSelectorExtended-main paragraph-header '>
            <div className='filterSelectorExtended-item'>
                Preferencias
                <ArrowDown className="filterSelectorExtended--arrow" />
            </div>
            <div className='filterSelectorExtended-item'>
                <CityCountryDisplay 
                    city='Lima' 
                    country='Peru' 
                    flagImg='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/255px-Flag_of_Peru.svg.png'
                    classText='paragraph-header'
                />
                <ArrowDown className="filterSelectorExtended--arrow" />
            </div>
            <div className='filterSelectorExtended-item' style={{alignItems: 'center'}}>
                <input type="checkbox" className='filterSelectorExtended-checkbox' />
                En Línea
                
            </div>
            <div className='filterSelectorExtended-item'>
                <span style={{color:'var(--gray-1)'}} className='paragraph'> Ordenado por </span> Relevancia 
                <ArrowDown />
            </div>
        </div>
    )
}