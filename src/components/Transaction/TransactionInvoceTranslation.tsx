import React from "react";

import { Dropdown } from "../Dropdown/Dropdown";
import { TextField } from "../TextField/TextField";

import './TransactionInvoceTranslation.css';

interface TransactionInvoceTranslationProps {

}

export const TransactionInvoceTranslation: React.FC<TransactionInvoceTranslationProps> = ( {

}) => {
    return (
        <div className='transactionInvoceTranslation-main'>
            <div className='transactionInvoceTranslation-text paragraph-header'>Transacción</div>
            <div className='transactionInvoceTranslation-row'>
                <Dropdown 
                    title='Incoterm'
                    elements={['Perú']}
                    setValue={()=> {}}
                    value=''
                    disabled={true}
                />
                <Dropdown 
                    title='Moneda'
                    elements={['USD']}
                    setValue={()=> {}}
                    value=''
                    disabled={true}
                />
                <Dropdown 
                    title='País de adquisición'
                    elements={['China']}
                    setValue={()=> {}}
                    value=''
                    disabled={true}
                />
            </div>
            <div className='transactionInvoceTranslation-row'>
                <Dropdown 
                    title='Tipo de pago'
                    elements={['Transferencia Bancaria']}
                    setValue={()=> {}}
                    value=''    
                    disabled={true}
                />
                <TextField 
                    title='Entidad financiera'
                    placeholder=' '
                    className='transactionInvoceTranslation-width'
                />
            </div>
            <TextField 
                    title='Lugar de entraga de la mercancía'
                    placeholder='Ej: Shanghái'   
                />
        </div> 
    )
}