import React from "react";

import { TextField } from "..";
import { Button } from "..";


import './RegisterMail.css';

interface RegisterMailProps {
    setEmail: (e:string) => void;
    handleClick: ()=>void
}

export const RegisterMail: React.FC<RegisterMailProps> =({
    setEmail,
    handleClick
}) => {
    return (
        <div className="registerMail-container">
            <div className="small-bold">Regístrate, será gratis siempre</div>
            <div className="registerMail-input">
                <TextField title="Email" placeholder=" " onChange={(e) => {setEmail(e.target.value)}} />
                <Button content="Registrarse" color="black-75" onClick={handleClick} />
            </div>
            <div className="paragraph registerMail-color">Para empresas o personas naturales, para equipos grandes o pequeños.</div>
        </div>
    )
}