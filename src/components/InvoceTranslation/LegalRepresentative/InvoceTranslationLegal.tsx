import React from "react";

import { HelpCircle } from "../../../icons/outline/HelpCircle";
import { TextField } from "../../TextField/TextField";
import { Dropdown } from "../../Dropdown/Dropdown";

import './InvoceTranslationLegal.css';

interface InvoceTranslationLegalProps {

}

export const InvoceTranslationLegal: React.FC<InvoceTranslationLegalProps> = ( {

}) => {
    return (
        <div className='invoceTranslationLegal-main'>
            <div className='invoceTranslationLegal-header'>
                <div className='invoceTranslationLegal-color paragraph-header'>Representante legal</div>
                <HelpCircle />
            </div>
            <div className='invoceTranslationLegal-textField'>
                <TextField 
                    title='Nombre del declarante' 
                    placeholder=' ' 
                    className='invoceTranslationLegal-width'
                />
                <TextField 
                    title='Apellido del declarante' 
                    placeholder=' ' 
                    className='invoceTranslationLegal-width'
                />
                <TextField 
                    title='Cargo' 
                    placeholder=' ' 
                    className='invoceTranslationLegal-width'
                />
            </div>
            <div className='invoceTranslationLegal-document'>
                <Dropdown 
                    title='Tipo de documento'
                    elements={['DNI', 'Pasaporte', 'Carnet de extrangeria']}
                    setValue={()=> {}}
                    value=''
                    disabled={true}
                />
                <TextField 
                    title='Número de documento' 
                    placeholder=' ' 
                    style={{width: '24.375rem'}}
                   
                />
            </div>
        </div>
    )
}