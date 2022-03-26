import React from "react";

import { TextField } from "..";
import { Dropdown } from "..";
import { Checkbox } from "../Checkbox/Checkbox";
import { Button } from "..";

import './RegisterProvider.css';

interface RegisterProviderProps {
    isCompany: boolean;
    setIsCompany: (e:any) => void;
}

export const RegisterProvider: React.FC<RegisterProviderProps> = ({
    isCompany,
    setIsCompany
}) => {
    return (
        <div className="registerProvider-container">
            <div className="small-bold registerProvider-colorText" >Regístrate como proveedor de servicios</div>
            <div className="registerProvider-row">
                <TextField title='Nombre' placeholder=" " />
                <TextField title='Apellido' placeholder=" " />
            </div>
            <div className="registerProvider-row">
                <TextField title='Email' placeholder=" " />
                <TextField title='Elige tu contraseña' placeholder=" " />
            </div>
            <div className="registerProvider-row">
                <Dropdown
                    elements={['Perú']}
                    setValue={()=>{}}
                    title="Elige tu país"
                    value=""
                />
                <TextField title='Elige tu contraseña' placeholder=" " />
            </div>
            <div className="registerProvider-row">
                <Dropdown
                    elements={['DNI']}
                    setValue={()=>{}}
                    title="Tipo de documento"
                    value=""
                />
                <TextField title='Número' placeholder=" " />
            </div>
            <div className="registerProvider-row__checkbox">
                <Checkbox checked={isCompany} setChecked={setIsCompany} />
                <div className="paragraph-header registerProvider-colorText">Represento a una empresa</div>
            </div>
            {isCompany && <>
                <div className="registerProvider-row">
                    <TextField title='Nombre de la empresa' placeholder=" " />
                    <TextField title='Cargo de la empresa' placeholder=" " />
                </div>
                <div className="registerProvider-row">
                    <Dropdown
                        elements={['RUC']}
                        setValue={()=>{}}
                        title="Tipo de documento"
                        value=""
                    />
                    <TextField title='Número de RUC' placeholder=" " />
                </div>
            </>}
            <div className="paragraph-header registerProvider-colorText">En Arkabia, velamos por la seguridad de los proveedores de servicios. Corroboraremos la información de la empresa que estás brindando y tu información personal para evitar suplantación de identidad.</div>
            <div className="paragraph" style={{color: 'var(--gray-3)'}}>Al unirse, aceptas los <span style={{color: 'var(--blue-2)'}}>términos y condiciones</span> de Arkabia.</div>
            <div className="registerProvider-row__button">
                <Button 
                    content="Regístrame" 
                    color='black-75' 
                    size="large"
                />
            </div>
        </div>
    )
}