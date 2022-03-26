import React, { useState } from "react";

/** import components */
import { RightArrow } from "../../../icons/outline/RightArrow";

/**import styles */
import './FooterNumber.css';


/** interfaces props */
interface FooterNumberProps {
    numbers: number[]; // number to footer
    activeNumber: number; // number page active
    onClickNumber?: (e:any) => void | React.MouseEventHandler<HTMLDivElement>; // event on click on number page
    onClickNext?: () => void | React.MouseEventHandler<HTMLDivElement>; // event on click next button
}

/** component to rendered a footer number page */
export const FooterNumber: React.FC<FooterNumberProps> = ({
    numbers,
    activeNumber=1,
    onClickNumber=(e)=>(e),
    onClickNext
}) => {
    
    return (
        <div className='footerNumber-main'>

            {numbers.map((num: number) => {
            return (
                <div key={num} 
                    className={'footerNumber-item paragraph-header '+(activeNumber===num?' footerNumber-active':'')}
                    onClick={(e)=>onClickNumber(e)}
                    >
                    {num}
                </div>
            )
        })}
        {numbers.length >= 7 ?<div className='footerNumber-item' onClick={onClickNext}>
            <RightArrow />
        </div>:null}
        </div>
    )
}