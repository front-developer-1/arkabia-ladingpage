import React from "react";

import { TextField } from "../TextField/TextField";
import { Dropdown } from "../Dropdown/Dropdown";


import './SupplierInvoceTranslation.css';

interface SupplierInvoceTranslationProps {

}

export const SupplierInvoceTranslation: React.FC<SupplierInvoceTranslationProps> = ( {

}) => {
    return (
        <div className='supplierInvoceTranslation-main'>
            <div className='supplierInvoceTranslation-text paragraph-header'>Proveedor</div>
            <div className='supplierInvoceTranslation-row'>
                <TextField 
                    title='Nombre del proveedor'
                    placeholder=' '
                    className='supplierInvoceTranslation-width'
                />
                <TextField 
                    title='Número de factura'
                    placeholder=' '
                    className='supplierInvoceTranslation-width'
                />
            </div>
             <div className='supplierInvoceTranslation-row'>
                <Dropdown 
                    title='País'
                    elements={['Perú']}
                    setValue={()=> {}}
                    value=''
                    disabled={true}
                />
                <Dropdown 
                    title='Cuidad'
                    elements={['Lima']}
                    setValue={()=> {}}
                    value=''
                    disabled={true}
                />
                <Dropdown 
                    title='Tipo Proveedor'
                    elements={['Perú']}
                    setValue={()=> {}}
                    value=''
                    disabled={true}
                />
            </div>
            <div className='supplierInvoceTranslation-row'>
                <TextField 
                    title='Domicilio del proveedor'
                    placeholder=' '
                    className='supplierInvoceTranslation-width'
                />
                <TextField 
                    title='Teléfono'
                    placeholder=' '
                    className='supplierInvoceTranslation-width'
                />
            </div>
        </div>
    )
}