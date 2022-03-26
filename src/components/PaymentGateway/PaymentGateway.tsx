import React, { useState } from "react";

import { Table } from "../Table/Table";
import { PaymentCD } from "../CheckboxDropdown/Payment/PaymentCD";
import { Modal } from "../Modal/Modal";

import { PaySafe } from "../PaySafe/PaySafe";

import './PaymentGateway.css';

interface PaymentGatewayProps {
    show: boolean;
    setShow: (e: boolean) => void;
}

export const PaymentGateway: React.FC<PaymentGatewayProps> = ( {
    show,
    setShow
}) => {

    const handleClose = (e:any) => {
        
    }

    return (
        <>
            {show && 
               <Modal title="Confirma tu compra" show={show} setShow={setShow} >
                    <div className="paragraph paymentGateway-colorText ">Envía Grupo Aduan Agencia de Aduana un adelanto de la comisión para que empiecen a trabajar en tu importación. Este monto será descontado del total.</div>
                     <Table 
                        header="Conceptos"
                        body={[{
                            name: ['10% Comisión de agencia de aduana'],
                            value: [18.22]
                        },{
                            name: ['IGV (18%)'],
                            value: [3.64]
                        }]}
                        footer={{title: 'Total' , values: ['USD $ 21.87']}}
                    />
                    <PaymentCD 
                        amount={21.87}
                        handleSubmit={(e) => {
                            e.preventDefault();
                        }}
                        nameValue=""
                        handleName={() => {}}
                        lastNameValue=""
                        handleLastName={() => {}}
                        cardNumberValue=""
                        handleCardNumber={() => {}}
                        expireDateValue=""
                        handleExpireDate={() => {}}
                        cvvValue=""
                        handleCvv={() => {}}
                    />
                    <PaySafe />
               </Modal>
            }
        </>
    ) 
}