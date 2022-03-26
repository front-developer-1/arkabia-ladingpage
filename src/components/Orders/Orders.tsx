import React from "react";

import { ImportPhasesCard } from "../ImportPhasesCard/ImportPhasesCard";

import './Orders.css';

interface OrdersProps {
    title: string;
    orders: any[];
    phases: any[];
    addOrder: boolean;
}

export const Orders: React.FC<OrdersProps> = ({
    title,
    orders,
    phases,
    addOrder
}) => {
    return (
        <div className="orders-container">
        <div className="orders-header">
            <div className="paragraph-header">{title}</div>
            {addOrder && <div className="smalltext-header" style={{color: 'var(--blue-2)'}}>+ Agregar orden de @grupoaduan</div>}
        </div>
        {orders.length>0? orders.map((o, idx) => {
            return (
                <ImportPhasesCard 
                    key={idx}
                    activePhase={1}
                    online={true}
                    order={o}
                    phases={phases}
                    price={8331.79}
                    showFlags={false}
                />
            )
        }): <div className="paragraph" style={{color: 'var(--gray-3)'}}>No tienes ninguna orden.</div>}
        </div>
    )
}