import React from "react";

import { LocalizationTag } from "../../icons/outline/LocalizationTag";
import { TextField } from "..";
import { ChoiceSelector } from "..";
import { Shipment } from "..";
import { IShipment } from "../../interfaces/Shipment";

import './InputOriginDestiny.css';

interface InputOriginDestinyProps { 
    setOrigin:  React.Dispatch<React.SetStateAction<IShipment | undefined>>;
    setDestination: React.Dispatch<React.SetStateAction<IShipment | undefined>>;
}

export const InputOriginDestiny: React.FC<InputOriginDestinyProps> = ({
    setOrigin,
    setDestination
}) => {
    return (
        <div className="inputOriginDestiny-container">
            <div className="inputOriginDestiny-from">
                <LocalizationTag className="inputOriginDestiny-icon"/>
                <Shipment text="Origen" setShipment={setOrigin}  />
            </div>
            <div className="inputOriginDestiny-to">
                <div className="smalltext-header inputOriginDestiny-text">hacia</div>
                <Shipment text="Destino" setShipment={setDestination}  />
            </div>
            
        </div>
    )
}