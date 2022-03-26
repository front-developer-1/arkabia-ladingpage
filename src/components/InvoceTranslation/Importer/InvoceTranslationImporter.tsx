import React from "react";
import { Dropdown } from "../../Dropdown/Dropdown";
import { TextField } from "../../TextField/TextField";

import './InvoceTranslationImporter.css';

interface InvoceTranslationImporterProps {

}

export const InvoceTranslationImporter: React.FC<InvoceTranslationImporterProps> = ( {

}) => {


    return ( 
        <div className='invoceTranslationImporter-main'>
            <p className='paragraph-header invoceTranslationImporter-color'>Importador</p>
            <Dropdown 
                title='Entidad'
                elements={['Persona juridica / Empresa']}
                value='Persona juridica / Empresa'
                setValue={()=> {}}
                disabled={true}
            />
            <div className='invoceTranslationImporter-input'>
                <TextField
                    style={{width:'18.125rem'}}
                    title='Razón social de la empresa'
                    placeholder=' '
                />
                 <TextField
                    style={{width:'11.25rem'}}
                    title='RUC'
                    placeholder=' '
                />
                <Dropdown 
                    title='Nivel comercial'
                    elements={['Persona juridica / Empresa']}
                    value='Persona juridica / Empresa'
                    setValue={()=> {}}
                    disabled={true}
                />
            </div>
        </div>
    )
}