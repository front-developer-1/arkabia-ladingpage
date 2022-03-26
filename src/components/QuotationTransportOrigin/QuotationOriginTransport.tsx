import React, { useState } from "react";

import { Modal } from "../Modal/Modal";
import { ArkabiaOp } from "../../icons/outline/ArkabiaOp";
import { InputOriginDestiny } from "../InputOriginDestiny/InputOriginDestiny";
import { FCLCD } from "../CheckboxDropdown/FCLCD/FCLCD";
import { LCLCD } from "../CheckboxDropdown/LCLCD/LCLCD";
import { Button } from "..";
import { ImportTimeline } from "..";
import { FinalDeliveryPlace } from "../FinalDeliveryPlace/FinalDeliveryPlace";
import { LongDown } from "../../icons/solid/Long_down";
import { IShipment } from "../../interfaces/Shipment";

import './QuotationOriginTransport.css';

interface QuotationTransportOriginProps {
    importTitle: string;
    show: boolean;
    setShow: (e: boolean)=>void;
}

export const QuotationTransportOrigin: React.FC<QuotationTransportOriginProps> = ({
    importTitle,
    show,
    setShow
}) => {

    const [origin, setOrigin] = useState<IShipment | undefined> ();
    const [destiny, setDestiny] = useState<IShipment | undefined>();

    return (
        <Modal 
            title={importTitle} 
            subTitle="Importación" 
            icon={<ArkabiaOp />} 
            setShow={setShow} 
            show={show}
        > 
            <div className="quotationTransportOrigin-container">
                <div className="quotationTransportOrigin__timeLine">
                    <ImportTimeline 
                        stage={1}
                    />
                </div>
                <div>  
                    <InputOriginDestiny
                        setOrigin={setOrigin}
                        setDestination={setDestiny}
                    />
                   {origin && destiny && <LongDown className="quotationTransportOrigin-longDown" />}
                    {origin && destiny && <FinalDeliveryPlace
                        departmentElements={[""]}
                        departmentValue=""
                        districtElements={[""]}
                        districtValue=""
                        finalAddressValue=""
                        handleFinalAddress={()=>{}}
                        provinceElements={[""]}
                        provinceValue=""
                        setDepartment={()=>{}}
                        setDistrict={()=>{}}
                        setProvince={()=>{}}
                    />}
                </div>
                <LCLCD 
                    cargoDescription=""
                    fileValue=""
                    handleFileValue={()=>{}}
                    handleTotalVolume={()=>{}}
                    handleTotalWeight={()=>{}}
                    isStackable=""
                    setCargoDescription={()=>{}}
                    setIsStackable={()=>{}}
                    setTotalVolumeUnit={()=>{}}
                    setTotalWeightUnit={()=>{}}
                    totalVolume=""
                    totalVolumeUnit=""
                    totalWeight=""
                    totalWeightUnit=""
                />
                <FCLCD 
                    containerQty=""
                    containerQtyElements={["Carro"]}
                    containerSize=""
                    containerSizeElements={['carro']}
                    containerType=""
                    containerTypeElements={["Carro"]}
                    setContainerQty={()=>{}}
                    setContainerSize={()=>{}}
                    setContainerType={()=>{}}
                />
                <div className="quotationTransportOrigin-footer">
                    <div className="quotationTransportOrigin-footer__draf">
                        <img src='/images/folder_plus.png' alt=""/>
                        <div className="tinytext-header">guardar borrador</div>
                    </div>
                    <div className="quotationTransportOrigin-footer__buttons">
                        <Button content="Volver" color='black-25' />
                        <Button content="Siguiente" color='black-75' />
                    </div>
                </div>
            </div>
        </Modal>
    )
}