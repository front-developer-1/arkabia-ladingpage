import React, { useState } from "react";

import { ArkabiaOp } from "../../icons/outline/ArkabiaOp";
import { CargoStatus } from "../CargoStatus/CargoStatus";
import { ArrowDown } from "../../icons/solid/ArrowDown.";
import { Row } from "..";
import { DashboardElementsRow } from "../DashboardElementsRow/DashboardElementsRow";
import { ElementRow } from "../DashboardElementsRow/Row/ElementRow";
import { ArrowUp } from "../../icons/outline/ArrowUp";
import { DashboardElementCargoStatus } from "./CargoStatus/DashboardElementCargoStatus";

import { ServiceChargeStatus } from "../../@types/serviceChargeStatus";

import './DashboardElements.css';

interface DashboardElementsProps {
    importation: string; 
    cargoStatus: ServiceChargeStatus;
    date: string;
    elementsRow: any[];
    open?: boolean; // contrala si esta abierto el collapse
}

export const DashboardElements: React.FC<DashboardElementsProps> = ({
    importation,
    date,
    cargoStatus,
    elementsRow,
    open = false
}) => {

    const [expanded, setExpanded] = useState(open);

    console.log(elementsRow);

    return (
        <>
            <div className="dashboardElements-container">
                <div onClick={()=> setExpanded(!expanded)} className={`dashboardElements-header ${!expanded && "dashboardElements-header__border"}`} >
                    <div className="dashboardElements-text">
                        <ArkabiaOp />
                        <div className="dashboardElements-title">
                            <div className="smalltext-header dashboardElements__title">{importation}</div>
                            <div className="smalltext dashboardElements__detail">Importación</div>
                        </div>
                    </div>
                    <div>
                        <div className="dashboardElements-date">
                            <CargoStatus phase={cargoStatus} />
                            <div className="tinytext-header">{date}</div>
                        {expanded?<ArrowUp /> :<ArrowDown />}
                        </div>
                    </div>
                </div>
                {expanded && <div className="dashboardElements-table">
                    <div className="dashboardElements-title">
                        <Row 
                            color="white-50"
                            title="Equipo"
                            columValues={["Orden","Precio","Turno","Último mensaje", ""]}
                            content='text'
                        />
                    </div>
                    <DashboardElementsRow
                    elementsRow={elementsRow}      
                    />
                </div>}
            </div>
            
            {/** Version Mobile */}
            <div className="dashboardElements-mobile-container">
                <div onClick={()=>setExpanded(!expanded)} className={`dashboardElements-mobile--header ${!expanded && 'dashboardElements-mobile--border'}`}>
                    <div className="dashboardElements-mobile--header-icons">
                        <div className="dashboardElements-mobile--left">
                            <ArkabiaOp />
                            <div className="dashboardElements-mobile--header-title">
                                <div className="paragraph-header dashboardElements-colorText">{importation}</div>
                                <div className="tinytext dashboardElements-colorText">Importación</div>
                            </div>
                        </div>
                        {expanded?<ArrowUp /> :<ArrowDown />}
                    </div>
                    <div className="dashboardElements-mobile--header-bottom" >
                        <DashboardElementCargoStatus phase={cargoStatus} date={date} />
                    </div>
                </div>
                {expanded && 
                (elementsRow.length > 0 && elementsRow.map((e, idx) => {
                    return (
                        <div key={idx} className="dashboardElements-mobile-content">
                            <div className="dashboardElements-mobile-content--title">
                                <div className="smalltext-header dashboardElements-colorText">{e[0].subDetail}</div>
                                <div className="dashboardElements-mobile-content--imgTag">
                                    <img src={e[2].detail} alt="" />
                                    <div>{e[2].subDetail}</div>
                                </div>
                            </div>
                            <div className="dashboardElements-mobile-content--rows">
                                <div>
                                    <div className="smalltext-header dashboardElements-colorTitle">Ultimo mesaje</div>
                                    <div className="dashboardElements-mobile-content--rows-title ">
                                        <div className="smalltext dashboardElements-colorText dashboardElements-mobile-content--overflowText">{e[3].detail}</div>
                                        {e[3].alert && <div className="elementRow-alert"></div>}
                                    </div>
                                </div>
                                <div className="dashboardElements-mobile-content--table">
                                    <div className="dashboardElements-mobile-content--table-row">
                                        <div className="smalltext-header dashboardElements-mobile-content--table-cell dashboardElements-colorTitle">Órden</div>
                                        <div className="smalltext-header dashboardElements-mobile-content--table-cell dashboardElements-colorTitle">Precio</div>
                                    </div>
                                    <div className="dashboardElements-mobile-content--table-row"> 
                                        <div className="smalltext dashboardElements-mobile-content--table-cell dashboardElements-colorText">{e[0].detail}</div>
                                        <div className="smalltext dashboardElements-mobile-content--table-cell dashboardElements-colorText">{e[1].detail}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }))}
            </div>
        </>
    )
}