import React from "react";

import { Row } from "../../Row/Row";
import {UploadTable} from '../../UploadFile/Table/UploadTable';


import './ArrivalTax.css';

interface ArrivalTaxProps {

}

export const ArrivalTax: React.FC<ArrivalTaxProps> = ({

}) => {
    return (
        <div className='arrivalTax-main'>
            <UploadTable 
                title='Derechos / Impuestos'
                subtitle='Estos son los impuestos que se tienen que pagar por tu carga.'
                rowsData={[
                    {title: 'Impuestos', color:'white-90', columValues:[]},
                    {title: 'Add volumen', color:'transparent', columValues:['-']},
                    {title: 'IGV (18%)', color:'transparent', columValues:['-']},
                    {title: 'IPM (2%)', color:'transparent', columValues:['-']},
                    {title: 'Percepción (3.5%)', color:'transparent', columValues:['-']},
                    {title: 'Total USD', color:'white-90', columValues:['$-']}
                ]}
                buttonContent='Subir comprobante de pago'
            />
        </div>
    )
}