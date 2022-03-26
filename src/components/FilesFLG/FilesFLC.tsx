import React from "react";

import { UploadFile } from "..";

import './FilesFLC.css';

interface FilesFLCProps {
    invoice: string;
    packing: string;
    guide: string;
    disabled?: boolean;
    hiddenTitle?: boolean;
    setGuide: (e:any) => void;
    setPacking: (e:any) => void;
    setInvoice: (e:any) => void;
}

export const FilesFLC: React.FC<FilesFLCProps> = ({
    invoice,
    packing,
    guide,
    hiddenTitle  = false,
    disabled = false,
    setGuide,
    setPacking,
    setInvoice
}) => {
    return (
        <div className="filesFLC-container">
            {!hiddenTitle && <div className="filesFLC-header">
                <div className="big-header filesFLC-title">No más archivos perdidos</div>
                <div className="big-subheader filesFLC-color">Toda la documentación estará siempre ordenada</div>
            </div>}
            <div className="filesFLC-files">
                <UploadFile 
                    title="Factura comercial"
                    subtitle="Recuerda que se según tu aduanas, la factura debe contar obligatoriamente con el nombre, dirección, email y teléfono del proveedor. "
                    buttonContent="Subir factura comercial"
                    fileValue={invoice}
                    disabled={disabled}
                    handleFileValue={()=>{}}
                />
                <UploadFile 
                    title="Lista de empaque"
                    subtitle="Recuerda que si es LCL, tienes que declarar la cantidad de bultos sueltos correctamente, si no, es multa de SUNAT."
                    buttonContent="Subir la lista de empaque"
                    fileValue={packing}
                    disabled={disabled}
                    handleFileValue={()=>{}}
                />
                <UploadFile 
                    title="Guía de carga"
                    subtitle="El proveedor te debe entregar la guía de carga. Para cargas marítimas esta se llama 'Bill of Lading' (BL) y para cargas aéreas 'Air Waybill' (AWB) . Revisa el borrador que te emite el proveedor con el agente de aduana para corroborar la información."
                    buttonContent="Subir el BL o AWB"
                    fileValue={guide}
                    disabled={disabled}
                    handleFileValue={()=>{}}
                />
                {/* <div className="paragraph filesFLC-more">y más...</div> */}
            </div>
        </div>
    )
}