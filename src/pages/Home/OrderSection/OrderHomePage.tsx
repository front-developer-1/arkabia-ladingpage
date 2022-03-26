import React, { useState } from "react";


import { CircleTab } from "../../../components/CircleTab/CircleTab";
import { Orders } from "../../../components/Orders/Orders";
import { ChargeCard } from "../../../components/ChargeCard/ChargeCard";
import { EventView } from "../../../components/EventView/EventView";
import { Multimedia } from "../../../components/Multimedia/Multimedia";
import { Chat } from "../../../components/Chat/Chat";
import { FilesFLC } from "../../../components/FilesFLG/FilesFLC";
import { TrackingShipping } from "../../../components/TranckingShipping/TrackingShipping";
import { Milestone } from "../../../components/Milestone/Milestone";
import { SubMenuContent } from "../../../components/SubMenuContent/SubMenuContent";


import { ChargePhasesType } from "../../../@types/chargePhasesType";
import { Phase } from "../../../@types/servicePhaseTypes";
import { Event } from "../../../interfaces/Event";
import { MessagesButton } from "../../../components/Button/MessagesButton/MessagesButton";
import { MessageTopbar } from "../../../components/MessageTopBar/MessageTopbar";
import { Button } from "../../../components";

import { Order } from "../../../interfaces/Order";

import './OrderHomePage.css';

interface OrderHomePageProps {
    orders: Order[];
    phasesOrder: Phase[];
    chargeStatus: ChargePhasesType[],
    events: Event[];
    teamData: any[];
    invoice: string;
    packing: string;
    guide: string;
    setDetail: (e: string) => void;
    setInvoice: (e: string) => void;
    setPacking: (e: string) => void;
    setGuide: (e: string) => void;
} 

export const OrderHomePage: React.FC<OrderHomePageProps> = ({
    orders,
    phasesOrder,
    chargeStatus,
    events,
    teamData,
    invoice,
    guide,
    packing,
    setDetail,
    setGuide,
    setInvoice,
    setPacking
}) => {

    const [subTab, setSubTab] = useState(0)  // magic number to control tabs

    return ( 
        <div className="orderHomePage-container">
            <div className="orderHomePage-circleTab">
                <CircleTab status={subTab === 0} handleClick={()=>{
                    setSubTab(0);
                    setDetail('Maneja la información y conversación de una importación de manera centralizada.')
                }} />
                <CircleTab status={subTab === 1} handleClick={()=>{
                    setSubTab(1);
                    setDetail('Maneja la información y conversación de una importación de manera centralizada.');    
                }} />
                <CircleTab status={subTab === 2} handleClick={()=>{
                    setSubTab(2);
                    setDetail('Cada orden tiene su propia estructura de información.');   
                }} />
                <CircleTab status={subTab === 3} handleClick={()=>{
                    setSubTab(3);
                    setDetail('Cada orden tiene su propia estructura de información.');
                }} />
            </div>
            <div className="orderHomePage-content">
               {subTab === 0 ? <>
                    <div className="orderHomePage-show">
                        <Orders
                            title="Órdenes"
                            orders={orders}
                            phases={phasesOrder}
                            addOrder={false}
                        />
                        <ChargeCard 
                            activePhase={1}
                            phases={chargeStatus}
                            setPhase={()=>{}}
                        />
                        <EventView 
                            date="Para hoy"
                            events={events}
                        />
                    </div>
                    <SubMenuContent 
                        titles={['Órdenes totales', 'Tracking', 'Eventos']} 
                        content={[
                                <Orders
                                    title="Órdenes"
                                    orders={orders}
                                    phases={phasesOrder}
                                    addOrder={false}
                                />,
                                <ChargeCard 
                                    activePhase={1}
                                    phases={chargeStatus}
                                    setPhase={()=>{}}
                                />,
                                <EventView 
                                    date="Para hoy"
                                    events={events}
                                />
                            ]}
                    />
                </> : (
                subTab === 1? 
                    <>
                        <div className="orderHomePage-tabs orderHomePage-tabs--multimedia" style={{maxWidth: '400px', width: '100%'}} >
                            <Multimedia />
                            <Orders
                                title="Órdenes"
                                orders={orders}
                                phases={phasesOrder}
                                addOrder={true}
                            />
                        </div>
                        <div className="orderHomePage-tabs" style={{maxWidth: '840px', width: '100%'}}>
                            <MessageTopbar
                                searchText=""
                                setSearchText={()=>{}}
                                team={teamData}
                                typeChat="Órdenes"
                            />
                            <Chat />
                        </div> 

                    </> : (
                subTab === 2 ? 
                    <>
                       <div className="orderHomePage-tabs orderHomePafe-with50 orderHomePage-tabs--multimedia" >
                            <Multimedia />
                            <Orders
                                title="Órdenes"
                                orders={orders}
                                phases={phasesOrder}
                                addOrder={true}
                            />
                        </div> 
                        <div className="orderHomePage-tabs orderHomePafe-with100 ">
                            <div className="orderHomePafe-tab__header">
                                <div className="orderHomePafe-tab-row">
                                    <div className="orderHomePage-tab__number paragraph-header">4</div>
                                    <div className="small-bold orderHomePage-colorText">Documentación</div>
                                </div>
                                <MessagesButton nMessages={0} />
                            </div>
                            <div className="paragraph orderHomePage-colorText">Tu agencia de aduana podrá ver y descargar esta información.</div>
                            <FilesFLC
                                invoice={invoice}  
                                packing={packing}
                                guide={guide}
                                hiddenTitle={true}
                                disabled={true}
                                setInvoice={setInvoice}
                                setPacking={setPacking}
                                setGuide={setGuide}
                            />
                        </div> 
                    </> : (
                    <>
                        <div className="orderHomePage-tabs orderHomePage-tabs--multimedia" style={{maxWidth: '400px', width: '100%'}}>
                            <Multimedia />
                            <Orders
                                title="Órdenes"
                                orders={orders}
                                phases={phasesOrder}
                                addOrder={true}
                            />
                            <Milestone hitos={[]} />
                        </div>
                        <div className="orderHomePage-tabs" style={{maxWidth: '840px', width: '100%'}}>
                            <div className="orderHomePafe-tab__header">
                                <div className="orderHomePafe-tab-row">
                                    <div className="orderHomePage-tab__number paragraph-header">5</div>
                                    <div className="small-bold orderHomePage-colorText">Carga enviada</div>
                                </div>
                                <MessagesButton nMessages={0} />
                            </div>
                            <TrackingShipping 
                                boatName="MSC Capella"
                                estimatedArrival="17 Diciembre, 2020"
                                location={{lat: 11, lng: 11}}
                                remainingDays={32}
                            />
                        </div>
                    </>
                )))}
            </div>
        </div>
    )
}