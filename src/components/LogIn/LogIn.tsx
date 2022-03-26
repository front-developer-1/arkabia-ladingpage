import React from "react";

import { Modal } from "../Modal/Modal";
import { ButtonIcon } from "..";
import { GoogleIcon } from "../../icons/solid/googleIcon";
import { FacebookIcon } from "../../icons/solid/facebookIcon";
import { AppleIcon } from "../../icons/solid/appleIcon";
import { TextField } from "..";
import { Button } from "..";

import './LogIn.css';
import { Checkbox } from "../Checkbox/Checkbox";

interface LogInProps {
    show: boolean;
    setShow: (e: boolean) => void;
}

export const LogIn: React.FC<LogInProps> = ({
    show,
    setShow
}) => {
    return (
        <Modal title="Inicia sesión en Arkabia" show={show} setShow={setShow}> 
            <div className="logIn-container">
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
                 <hr className="logIn-divider" />
                <TextField
                    title='Email'
                    placeholder=" "
                />
                <TextField
                    title='Contraseña'
                    placeholder=" "
                    type='password'
                />
                <div className="logIn-remember">
                    <div className="logIn-checkbox">
                        <Checkbox setChecked={()=>{}}/>
                        <div className="paragraph-header" style={{color: 'var(--gray-1)'}}>Recuérdame</div>
                    </div>
                    <div className="smalltext-header" style={{color: 'var(--blue-2)'}}>¿Olvidaste la contraseña?</div>
                </div>
                <Button 
                    content="Iniciar sesion"
                    size="large"
                    color='black-75'
                />
                <hr className="logIn-divider" />
                <div className="small-bold" style={{color: 'var(--gray-1)'}}>¿No tienes cuenta? <span style={{color: 'var(--blue-2)'}}>Regístrate aquí</span></div>
            </div>
        </Modal>
    )
}