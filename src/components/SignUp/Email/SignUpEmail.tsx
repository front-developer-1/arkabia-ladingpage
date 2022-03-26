import React from "react";

import { Dropdown, TextField } from "../..";
import { Modal } from "../../Modal/Modal";
import { Button } from "../..";

import './SignUpEmail.css';
import { FooterSignUp } from "../FooterSignUp";

interface SignUpEmailProps {
    show: boolean;
    setShow: (e: boolean) => void;
}

export const SignUpEmail: React.FC<SignUpEmailProps> = ({
    show,
    setShow
}) => {
    return (
        <Modal title="Únete a Arkabia" show={show} setShow={setShow}>
            <div className="signUpEmail-container">
                <TextField
                    title='Elige un nombre de usuario'
                    placeholder=" "
                />
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