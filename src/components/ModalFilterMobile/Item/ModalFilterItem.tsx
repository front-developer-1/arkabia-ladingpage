import React, { useState } from "react";

import { ArrowDown } from "../../../icons/solid/ArrowDown.";
import { ArrowUp } from "../../../icons/outline/ArrowUp";
import { CityCountryDisplay } from "../..";
import { Checkbox } from "../../Checkbox/Checkbox";

import './ModalFilterItem.css';

interface ModalFilterItemProps {
    element: { 
        title: string;
        options: [
            {
                text: string;
                type: 'text' | 'country' | "check";
                countryDetail?: {
                    city: string; 
                    country: string;
                    flagImg: string
                }   
            }
        ]
        
    }
}

export const ModalFilterItem: React.FC<ModalFilterItemProps> = ({
    element
}) => {

    const [dropdown, setDropdown] = useState(false);
    
    return  (
       <div className="modalFilterItem-container">
            <div className="modalFilterItem-header-container">
                <div className="smalltext-header modalFilterItem--color">{element.title}</div>
                {!dropdown ? <ArrowDown onClick={()=>setDropdown(true)} /> :<ArrowUp onClick={()=>setDropdown(false)}/>}
            </div>
            {dropdown && <div className="modalFilterItem-options">
                <div className="modalFilterItem-options--row">
                    {
                        element.options.length > 0 && element.options.map((el, idx) => {
                            return (
                                <div className="modalFilterItem-options--cell">
                                    {el.type ===  'text' ?<>{el.text}</> : ( el.type === "country" ?
                                    <CityCountryDisplay
                                        city={el.countryDetail?.city+""}
                                        country={el.countryDetail?.country+""}
                                        flagImg={el.countryDetail?.flagImg+""}
                                    /> : 
                                    <div className="modalFilterItem-cell--check">
                                        <Checkbox setChecked={()=>{}} />  
                                        <div>{el.text}</div>
                                    </div>)}
                                </div>
                            )
                        })
                    }
                </div>
            </div>}
       </div>
    )
}