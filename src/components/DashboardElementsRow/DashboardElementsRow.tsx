import React from "react";

import { ElementRow } from "./Row/ElementRow";

import './DashboardElementsRow.css';

interface DashboardElementsRowProps {
    elementsRow: any[],
}

export const DashboardElementsRow: React.FC<DashboardElementsRowProps> = ({
    elementsRow
}) => {
    return (
        <div className="dashboardElementsRow-container">
           {
               elementsRow.length>0 && elementsRow.map((e, idx) => {
                   return (
                      <ElementRow 
                        key={idx}
                        style={{backgroundColor: idx%2!==0?'var(--white-25)': 'transparent'}}
                        title="Grupo Aduan Agencia de Aduana"
                        content={e}
                    /> 
                   )
               }) }
        </div>
    )
}