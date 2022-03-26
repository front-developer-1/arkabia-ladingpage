import React, { useState, useCallback } from "react";

import { Calendar } from "../../icons/outline/Calendar";
import { StopWatch } from "../../icons/outline/StopWatch";
import { Boat } from '../../icons/outline/Boat';
import { Maps } from "../Maps/Maps";

import './TrackingShipping.css';

interface TrackingShippingProps {
    estimatedArrival: string;
    remainingDays: number;
    boatName: string;
    location: {
        lat: number, 
        lng: number
    };
}


export const TrackingShipping: React.FC<TrackingShippingProps> = ({
    estimatedArrival,
    remainingDays,
    boatName,
    location
}) => {

    return (
        <div className="trackingShipping-container">
            <div className="trackingShipping-static">
                <div className="trackingShipping-card">
                    <Calendar className="trackingShipping-icon" /> 
                    <div className="trackingShipping-text">
                        <div className="paragraph-header trackingShipping-color">Llegada estimada</div>
                        <div className="paragraph trackingShipping-color">{estimatedArrival}</div>
                    </div>
                </div>  
                <div className="trackingShipping-card">
                    <StopWatch className="trackingShipping-icon" /> 
                    <div className="trackingShipping-text">
                        <div className="paragraph-header trackingShipping-color">Días restantes</div>
                        <div className="paragraph trackingShipping-color">{remainingDays} días</div>
                    </div>
                </div>
                <div className="trackingShipping-card">
                    <Boat className="trackingShipping-icon" /> 
                    <div className="trackingShipping-text">
                        <div className="paragraph-header trackingShipping-color">Barco</div>
                        <div className="paragraph trackingShipping-color">{boatName}</div>
                    </div>
                </div>
            </div>
            {/** mobile */}
            <div className="trackingShipping-static-mobile">
                <div className="trackingShipping-static-mobile-row trackingShipping-static-mobile-row--line">
                    <Calendar className="trackingShipping-icon-mobile" />  
                    <div className="trackingShipping-static-mobile-text">
                        <div className="tinytext-header trackingShipping-color">Llegada estimada</div>
                        <div className="tinytext trackingShipping-color">{estimatedArrival}</div>
                    </div>
                </div>
                <div className="trackingShipping-static-mobile-row trackingShipping-static-mobile-row--line">
                    <StopWatch className="trackingShipping-icon-mobile" /> 
                    <div className="trackingShipping-static-mobile-text">
                        <div className="tinytext-header trackingShipping-color">Días restantes</div>
                        <div className="tinytext trackingShipping-color">{remainingDays} días</div>
                    </div>
                </div>
                <div className="trackingShipping-static-mobile-row">
                    <Boat className="trackingShipping-icon-mobile" />   
                    <div className="trackingShipping-static-mobile-text">
                        <div className="tinytext-header trackingShipping-color">Barco</div>
                        <div className="tinytext trackingShipping-color">{boatName}</div>
                    </div>
                </div>
            </div>
            <Maps 
                locationMarker={location} 
                zoom={6}
                updatedTime="5 horas"
            />
        </div>
    )
}

