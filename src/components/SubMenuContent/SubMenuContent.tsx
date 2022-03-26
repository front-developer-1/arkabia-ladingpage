import React, {ReactNode, useState} from "react";

import { Subheader } from "..";

import './SubMenuContent.css';

interface SubMenuContentProps {
    titles: string[];
    content: ReactNode[]
}

export const SubMenuContent: React.FC<SubMenuContentProps> = ({
    titles,
    content
}) => {

    const [activeTitle, setActiveTitle] = useState('Órdenes totales');
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="subMenuContent-container">
           <div className="subMenuContent-header">
            {
                    titles.length > 0 && titles.map((title, idx) => {
                        return (
                            <Subheader key={idx} content={title} index={idx} setIndex={setActiveIndex} handleClick={setActiveTitle} active={title === activeTitle} />
                        )
                    })
                }
           </div>
           <div className="subMenuContent-content">
               {content.length > 0 && (activeIndex <= content.length) && 
               content[activeIndex]}
           </div>
        </div>
    )
}