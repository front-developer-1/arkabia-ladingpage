import React from "react";

import  './Multimedia.css';

interface MultimediaProps {

}

export const Multimedia: React.FC<MultimediaProps> = ({

}) => {
    return (
        <div className="multimedia-container">
            <div className="paragraph-header multimedia-text"> Multimedia</div>
            <div className='multimedia-row'>
                {[1,2,3,4,5,6, 7].map((n)=>{
                    return (
                        <div key={n} className={'multimedia-card tinytext-header ' + ("multimedia__"+n)}>
                            {n===7?'más':''}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}