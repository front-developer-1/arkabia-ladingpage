import React from "react";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";

import './PaySuccessful.css';

interface PaySuccessfulProps {
    show: boolean;
    companyName: string;
    amount: number;
    setShow: (e: boolean) => void;
}

export const PaySuccessful: React.FC<PaySuccessfulProps> = ({
    show,
    companyName,
    amount,
    setShow
}) => {
    return (
       <Modal title="Confirma tu compra" show={show} setShow={setShow}>
            <div className="paySuccessful-container">
                <img className="paySuccessful-icon " src="/images/check_yellow.png" />
                <div className="paragraph paySuccessful-colorText ">Gracias por confiar en {companyName}, se ha cargado USD $ {amount} a tu tarjeta.</div>
            </div>
            <div className="paySuccessful-button">
                <Button 
                    content='Voler'
                    size="normal"
                    color='black-25'
                />
            </div>
       </Modal>
    )
}