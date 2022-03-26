import React from "react";

import { TextField } from "../TextField/TextField";
import { Dropdown } from "../Dropdown/Dropdown";
import { Trash } from "../../icons/outline/Trash";

import './ProductInvoceTranslation.css';

interface ProductInvoceTranslationProps {
    number: number
}

export const ProductInvoceTranslation: React.FC<ProductInvoceTranslationProps> = ( {
    number
}) => {
    return (
        <div className='productInvoceTranslation-main'>
            <div className='productInvoceTranslation-text smalltext-header'>Producto {number}</div>
            <div className='productInvoceTranslation-row-product'>
                <TextField
                    title='Nombre comercial'
                    placeholder=' '
                    className='productInvoceTranslation-product-text'
                />
                <TextField
                    title='Marca'
                    placeholder=' '
                    className='productInvoceTranslation-product-text'
                />
                <TextField
                    title='Modelo'
                    placeholder=' '
                    className='productInvoceTranslation-product-text'
                />
                <Dropdown 
                    disabled={true}
                    title='Estado'
                    elements={['Excelente', 'Muy bueno', 'Bueno', 'Regular', 'Malo']}
                    setValue={()=> {}}
                    value=''
                />
            </div>
            <div className='productInvoceTranslation-row-product'>
                <TextField
                    title='Descripciones mínimas'
                    placeholder=' '
                    className='productInvoceTranslation-field'
                />
                <TextField
                    title='Uso o función principal'
                    placeholder=' '
                    className='productInvoceTranslation-field'
                />
            </div>
            <div className='productInvoceTranslation-row-product'>
                <TextField
                    title='Cantidad'
                    placeholder=' '
                    className='productInvoceTranslation-product-text'
                />
                <Dropdown 
                     disabled={true}
                    title='Tipo de Cantidad'
                    elements={['Unidades', 'Miles', 'Toneladas']}
                    setValue={()=> {}}
                    value=''
                    className='productInvoceTranslation-sizeText'
                />
                <Dropdown 
                    disabled={true}
                    title='País origen'
                    elements={['China']}
                    setValue={()=> {}}
                    value=''
                    className='productInvoceTranslation-sizeText'
                />
                <Dropdown 
                    disabled={true}
                    title='País adquisición'
                    elements={['Perú']}
                    setValue={()=> {}}
                    value=''
                    className='productInvoceTranslation-sizeText'
                />
            </div>
            <div className='productInvoceTranslation-trashIcon'>
                <Trash/>
            </div>
        </div>
    )
}