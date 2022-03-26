import React from "react";

import { HelpCircle } from "../../icons/outline/HelpCircle";
import { MilestoneCard } from "./Card/MilestoneCard";

import './Milestone.css';

interface MilestoneProps {
    hitos: any[]
}

export const Milestone: React.FC<MilestoneProps> = ( {
    hitos
}) => {
    return (
        <div className="milestone-main">
            <div className="milestone-header ">
                <div className="milestone-title">
                    <div className="paragraph-header">Hitos</div>
                    <HelpCircle className="milestone-img" />
                </div>  
                <div className="smalltext-header milestone-add">+ Agregar hito</div>
            </div>
            {hitos.length>0 ? hitos.map((h) => {
                return (
                    <MilestoneCard 
                        key={h.id}
                        numHito={h.numHito}
                        hitoCreated={h.nomCreated}
                        deliveryDate={h.deliveryDate}
                        msg={h.message}
                        firms={h.firms}
                    />
                )
                }):
                <div className="smalltext milestone-text-gray-2">Todavía no hay ningún hito que mostrar.</div> }
        </div>
    )
}