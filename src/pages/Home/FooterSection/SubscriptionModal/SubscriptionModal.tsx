import React from "react";

import { Modal } from "../../../../components/Modal/Modal";
import { TextField } from "../../../../components"; 
import { Button } from "../../../../components";

import './SubscriptionModal.css';

interface SubscriptionModalProps {
    title: string;
    subTitle: string;
    show: boolean,
    setShow: (e: boolean) => void;
}

export const SubscriptionModal: React.FC<SubscriptionModalProps> = ({
    title,
    subTitle,
    show = false,
    setShow
}) => {
    return (
        <Modal 
            title={title} 
            subTitle={subTitle}
            show={show} 
            setShow={setShow}
        >
            <div className="subscriptionModal-container">
                <TextField title="Correo electronico" placeholder=" "  />   
                <Button content="Suscribirte" />
            </div>
        </Modal>
    )
}