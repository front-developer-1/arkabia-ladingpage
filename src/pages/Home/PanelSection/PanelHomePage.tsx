import React, { useState, useRef, useEffect } from "react";

import { Button, Subheader } from "../../../components";
import { FilterSelectorMiniature } from "../../../components/FilterSelector/FilterSelectorMobile/FilterSelectorMiniature";
import { SearchTextField } from "../../../components/SearchTextField/SearchTextField";
import { DashboardElements } from "../../../components/DashboardElements/DashboardElements";
import { Calendar } from "../../../components/Calendar/Calendar";
import { CircleTab } from "../../../components/CircleTab/CircleTab";
import { EventView } from "../../../components/EventView/EventView";
import { FilterButton } from "../../../components/Button/Filter/FilterButton";
import { FilterSelectorMin } from "../../../components/FilterSelector/FilterSelectorMin/FilterSelectorMin";

import { Event } from "../../../interfaces/Event"; 

import './PanelHomePage.css';


interface PanelHomePageProps {
    dashboardRows: any[];
    events: Event[];
    setDetailText: (e: string) => void;
}

export const PanelHomaPage: React.FC<PanelHomePageProps> = ({
    dashboardRows,
    events,
    setDetailText
}) => {

    const [activeSubMenu, setActiveSubmenu] = useState('orders'); // muestra section activo 
    const [showMinModal, setShowMinModal] = useState(false);

    return (
        <div className="panelHomePage">
            <div className="panelHomePage-circleTab">
                <CircleTab status={activeSubMenu === 'orders'} handleClick={() => {
                    setDetailText('Cada importación cuenta con equipos, los responsables de hacer que la importación sea exitosa.')
                    setActiveSubmenu('orders');
                   
                }}/>
                <CircleTab status={activeSubMenu === 'calendar'} handleClick={() => {
                    setDetailText('Ten a la mano las tareas y eventos más importantes para hoy.')
                    setActiveSubmenu('calendar');
                 
                }} />
            </div>
            <div className="panelHomePage-container">
                 <div className={`panelHomePage-orders `}>
                    <div className="panelHomePage-orders__nav">
                        <Subheader content="Órdenes compradas" active={activeSubMenu === 'orders'} 
                            handleClick={()=>{  
                                setDetailText('Cada importación cuenta con equipos, los responsables de hacer que la importación sea exitosa.')
                                setActiveSubmenu('orders');
                            }} /> 
                        <Subheader content="Calendario" active={activeSubMenu === 'calendar'} 
                            handleClick={()=>{
                                setDetailText('Ten a la mano las tareas y eventos más importantes para hoy.')
                                setActiveSubmenu('calendar');
                            }} /> 
                    </div>
                    { !( window.innerWidth <= 1024 && activeSubMenu !== 'orders') &&
                    <>
                        <div className="panelHomePage-orders_search">
                            <div className="panelHomePage-orders-filters">
                                <FilterSelectorMiniature preferences={[]} sortBy={[]} />
                                <SearchTextField title='' isActive={false} setTextSearch={()=>{}} />
                            </div>
                            <Button content="+ Agregar importación" />
                            <SearchTextField title='Buscar' isActive={false} setTextSearch={()=>{}} />
                            <FilterButton title="Filtros" setModal={setShowMinModal} />
                        </div>
                        <DashboardElements 
                            importation="Carros de juguete para navidad" 
                            cargoStatus="Investigacion"
                            date='19/04/2021'
                            elementsRow={dashboardRows.slice(0,1)}
                            open={true}
                        />
                        <DashboardElements 
                            importation="Cilindros de oxígeno" 
                            cargoStatus="Investigacion"
                            date='19/04/2021'
                            elementsRow={dashboardRows.slice(1,2)}
                        />
                        <DashboardElements 
                            importation="Mascarillas KN95" 
                            cargoStatus="Investigacion"
                            date='19/04/2021'
                            elementsRow={dashboardRows.slice(2,3)}
                        />
                        <DashboardElements 
                            importation="Bicicletas eléctricas" 
                            cargoStatus="Investigacion"
                            date='19/04/2021'
                            elementsRow={dashboardRows.slice(0,1)}
                        />
                    </>}
                </div>
                
                { !( window.innerWidth <= 1024 && activeSubMenu !== 'calendar') && 
                <div className={`panelHomePage-calendar ${activeSubMenu !== "calendar" && "panelHomePage-orders__desactive" }`}>
                    <Calendar 
                        disabled={true}
                        setDay={()=>{}}
                    />
                    <EventView 
                        date="Para hoy"
                        events={events}
                    />
                </div>}
            </div>
            <FilterSelectorMin 
                showModal={showMinModal} 
                filterItems={[
                    {
                        title: 'Preferencias', 
                        options: [{
                            text: 'Preferencias',
                            type: 'text',
                        }]
                    },
                    {
                        title: 'Ordenar por', 
                        options: [{
                        text: 'Relevancia',
                        type: 'text'
                        }]
                    }
                   
                ]}
                setShowModal={setShowMinModal}  
                setFilter={()=>{}}
            />
        </div>
    )
}