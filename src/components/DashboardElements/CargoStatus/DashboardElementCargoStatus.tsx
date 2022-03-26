import React from "react";

import { ServiceChargeStatus } from "../../../@types/serviceChargeStatus";

import { SelectChargeStatus } from "../../../utils/selectChargeStatus";

import './DashboardElementCargoStatus.css';

interface DashboardElementCargoStatusProps {
    phase: ServiceChargeStatus;
    date: string;
}

export const DashboardElementCargoStatus: React.FC<DashboardElementCargoStatusProps> = ({
    phase,
    date
}) => {

    const Icon = SelectChargeStatus(phase)[0];
    const title = SelectChargeStatus(phase)[1]

    return (
        <div className="dashboardElementCargoStatus-container">
            <Icon className="cargoStatus-icon" /> 
            <div className="dashboardElementCargoStatus-text">
                <div className="tinytext-header dashboardElementCargoStatus-colorText">Mi carga está en {title}</div>
                <div className="tinytext dashboardElementCargoStatus-colorText">{date}</div>
            </div>
        </div>
    )
}