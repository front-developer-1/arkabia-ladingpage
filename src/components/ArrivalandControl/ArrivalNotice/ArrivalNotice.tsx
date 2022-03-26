import React from "react";

import { UploadFile } from "../../UploadFile/UploadFile";

import './ArrivalNotice.css';

interface ArrivalNoticeProps {

}

export const ArrivalNotice: React.FC<ArrivalNoticeProps> = ({

}) => {
    return ( 
        <div className='arrivalNotice-main'>
            <UploadFile
                fileValue=""
                handleFileValue={()=>{}}
                buttonContent='Subir comprobante de pago'
                subtitle='El aviso de llegada es el documento que se tiene que pagar cuando la mercancía ya está cerca a su destino.'
                title='Aviso de llegada'
            />
        </div>
    )
}