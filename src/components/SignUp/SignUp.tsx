import React from "react";

import { Button, ButtonIcon, TextField } from "..";
import { Modal } from "../Modal/Modal";
import { FooterSignUp } from "./FooterSignUp";

import { GoogleIcon } from "../../icons/solid/googleIcon";
import { FacebookIcon } from "../../icons/solid/facebookIcon";
import { AppleIcon } from "../../icons/solid/appleIcon";

import './SignUp.css';

interface SignUpProps {
    show: boolean;
    setShow: (e: boolean) => void;
}

export const SignUp: React.FC<SignUpProps> = ({
    show,
    setShow
}) => {
    return (
        <Modal title="Únete a Arkabia" show={show} setShow={setShow}>
            <div className="signUp-container">
                <ButtonIcon 
                    Icon={<GoogleIcon style={{width: '30px', height: '30px'}} />}
                    content="Continuar con Google"
                    place="left"
                    size='large'
                    color='white'
                    style={{color: 'var(--gray-1)', background: 'white'}}
                />
                 <ButtonIcon 
                    Icon={<FacebookIcon style={{width: '30px', height: '30px'}} />}
                    content="Continuar con Facebook"
                    place="left"
                    size='large'
                    color='white'
                    style={{color: 'var(--gray-1)', background: 'white'}}
                />
                 <ButtonIcon 
                    Icon={<AppleIcon style={{width: '30px', height: '30px'}} />}
                    content="Continuar con Apple"
                    place="left"
                    size='large'
                    color='white'
                    style={{color: 'var(--gray-1)', background: 'white'}}
                />
                <hr className="signUp-divider" />
                <TextField
                    title='Email'
                    placeholder=" "
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