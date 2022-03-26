import React from "react";

import { BtnsColorOptions } from "../../../@types/btnsColorTypes";
import { selectBtnBackgroundColor } from "../../../utils/selectButtonsStyles";

import './TagButton.css';

interface TagButtonProps {
    content: string; // button title
    color: BtnsColorOptions; //Options color
    onClick: ()=>void
}

export const TagButton: React.FC<TagButtonProps> = ( {
    content,
    color,
    onClick,
    ...props
}) => {

    const getColorText = (color: BtnsColorOptions) => {
        if(color === 'green-2' || color === 'blue-2' || color ==='red' || color === 'black-75' ) {
            return 'var(--white)';
        } else if(color === 'yellow' || color === 'white-50') {
            return 'var(--gray-1)';
        } else if(color === 'black-15') {
            return 'var(--gray-2)';
        }        
    }

    return (
        <button 
            onClick={()=>{onClick()}}
            className='tagButton-main tagButton-green'  
            style={{backgroundColor: selectBtnBackgroundColor(color)}} 
            
        >
            <div className='smalltext-header' style={{color: getColorText(color)}}>
                {content}
            </div>
        </button>
    )
}