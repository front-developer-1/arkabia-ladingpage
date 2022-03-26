import React from "react";

import { ServiceChargeStatus } from "../../@types/serviceChargeStatus";
import { SelectChargeStatus } from "../../utils/selectChargeStatus";

import './CargoStatus.css';

interface CargoStatusProps {
    phase: ServiceChargeStatus;
}

export const CargoStatus: React.FC<CargoStatusProps> = ({
    phase
}) => {

    const Icon = SelectChargeStatus(phase)[0];
    const title = SelectChargeStatus(phase)[1]

    return (
        <div className="cargoStatus-container">
            <Icon className="cargoStatus-icon" /> 
            <div className="cargoStatus-text">
                <div className="tinytext cargoStatus-color">Mi carga está en</div>
                <div className="smalltext-header cargoStatus-color">{title}</div>
            </div>
        </div>
    )
}