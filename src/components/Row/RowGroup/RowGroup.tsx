import React, { useState } from "react";

/** importando componentes */
import { Row } from "../Row";
import { ArrowUp } from "../../../icons/outline/ArrowUp";
import { ArrowDown } from "../../../icons/solid/ArrowDown.";

/** importando estilo */
import './RowGroup.css';

/** declarando variables de interface */
interface RowGroupProps {
    title: string; // titulo del row
    rows: any[]; // array de valores de la grupo de rows
    footerValues: {
        title: string,
        values: any[]
    },
    open?: boolean // estado de collapse
}

export const RowGroup: React.FC<RowGroupProps> = ({
    title,
    rows,
    footerValues,
    open = false
}) => {

    const [collapse, setCollapse] = useState(open);

    return (
        <div className="rowGroup-container">
            <div className="rowGroup-header-container rowGroup-header--pointer" onClick={()=>setCollapse(!collapse)}>
                <div className="paragraph-header rowGroup-header--title">{title}</div>
                {!collapse ? <ArrowDown className="rowGroup-header--pointer"/> : 
                <ArrowUp className="rowGroup-header--pointer" />}
            </div>
            {
                collapse && 
                <div>
                    {rows.length>0 && rows.map((r, idx) => {
                        return (
                            <Row 
                                key={idx}
                                title={r.name}
                                color={idx%2===0?'transparent':'white-25'}
                                content='text'
                                columValues={r.value}
                                classRow="paragraph"
                            />
                        )}
                    )}
                    <Row 
                        title={footerValues.title}
                        content='text'
                        color='black-50'
                        columValues={footerValues.values}
                        classRow="rowGroup-color-white"
                    />
                </div>
                
            }    
            
        </div>
    )
}

