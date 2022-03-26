import React from "react";

import { ImportPhasesCard } from "../ImportPhasesCard/ImportPhasesCard";

import { Order } from "../../interfaces/Order";

import './StepsImport.css';

interface StepsImportProps {
    order: Order;
    phases: string[];
    total: number;
    activePhase: number;
    isOnline: boolean;
}

export const StepsImport: React.FC<StepsImportProps> = ({
    order,
    phases,
    total,
    activePhase,
    isOnline
}) => {
    return (
        <div className="stepsImport-container">
            <div className="stepsImport-header">
                <div className="big-header">Pasos para importar de inicio a fin</div>
                <div className="big-subheader stepsImport-color">Todo está estructurado, para que no cometas ningún error.</div>
            </div>
            <ImportPhasesCard 
                activePhase={activePhase}
                online={isOnline}
                order={order}
                phases={phases}
                price={total}
            />
        </div>
    )
}