import React from "react";

import { Table } from "../Table/Table";
import { Row } from "..";

import './DontConfiscateCargo.css';

interface DontConfiscateCargoProps {
    companyList: any[];
    restriction: any[];
}

export const DontConfiscateCargo: React.FC<DontConfiscateCargoProps> = ({
    companyList,
    restriction
}) => {
    return (
        <div className="dontConfiscateCargo-container">
            <div className="dontConfiscateCargo-header">
                <div className="big-header">Que nunca decomisen tu mercancía por falta de información.</div>
                <div className="big-subheader dontConfiscateCargo-subheader__color">Las agencias te dirán si tu producto requiere permiso.</div>
            </div>
            <div className="dontConfiscateCargo-row">
                <Table 
                header="Restricciones"
                headerValues={companyList}
                headerType='image'
                body={restriction}
            />
            </div>
            
        </div>
    )
}