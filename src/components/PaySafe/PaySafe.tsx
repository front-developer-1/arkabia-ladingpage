import React from "react";

import './PaySafe.css';

interface PaySafeProps {

}

export const PaySafe: React.FC<PaySafeProps> = ({

}) => {
    return (
        <div className="paySafe-container">
           <div className="paySafe-title">
                <div className="paySafe-cert">
                     <div className="small-bold paySafe-colorTitle"> Pago 100% seguro</div>
                    <div className="smalltext paySafe-colorDescription">Este certificado garantiza la seguridad de todas tus conexiones mediante cifrado</div>
                </div>
                <img src="/images/payment_methods.svg" style={{width: '274px'}} />
           </div>
            <div className="smalltext paySafe-colorDescription">Tus tarjetas se guardan de forma segura para que puedas reutilizar el método de pago.</div>
        </div>
    )
}