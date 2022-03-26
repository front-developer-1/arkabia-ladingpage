import React from "react";
import { TextField } from "../..";

import { Modal } from "../../Modal/Modal";
import { Dropdown } from "../..";
import { Button } from "../..";
import { FooterSignUp } from "../FooterSignUp";


import './SignUpFullData.css';
interface SignUpFullDataProps {
    show: boolean;
    setShow: (e: boolean) => void;
}

export const SignUpFullData: React.FC<SignUpFullDataProps> = ({
    show,
    setShow
}) => {
    return (
        <Modal title="Únete a Arkabia" show={show} setShow={setShow}>
            <div className="signUpFullData-container">
                <TextField 
                    title='Nombre'
                    placeholder=" "
                />
                <TextField 
                    title='Apellido'
                    placeholder=" "
                />
                <TextField 
                    title='Elige un nombre de usuario'
                    placeholder=" "
                />
                <div className="signUpFullData-password">
                    <TextField 
                        title='Elige una contraseña'
                        placeholder=" "
                        type='password'
                    />
                    <div className="paragraph" style={{color: 'var(--gray-3)'}}>8 caracteres mínimo, incluyendo mayúsculas y minúsculas.</div>
                </div>
                <Dropdown
                    elements={['Perú']}
                    setValue={()=>{}}
                    title="Elige tu país"
                    value=""
                />
                 <Button 
                    content="Registrarme"
                    size="large"
                    color='black-75'
                />
                <FooterSignUp />
            </div>
        </Modal>
    )
}