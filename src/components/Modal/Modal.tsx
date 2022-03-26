import React from "react";

import './Modal.css';

interface ModalProps {
    title: string;
    subTitle?: string;
    icon?: React.ReactNode;
    show: boolean;
    setShow: (e:boolean) => void;
}

export const Modal: React.FC<ModalProps> = ({
    title,
    subTitle,
    icon,
    show,
    setShow,
    ...props
}) => {
    return (
        <>
            {show &&
            <div className="modal-main">
                <div className="modal-container">
                    <div className="modal__header">
                            <div className="modal__heade-left">
                                <div className="modal-logo">
                                    {icon}
                                </div>
                                <div className="modal-header__text">
                                    <div className={subTitle?'paragraph-header':"small-bold "}>{title}</div>
                                    {subTitle && <div className="paragraph">{subTitle}</div>}
                                </div>
                            </div>
                            <img src='/images/close_big.svg' alt="" onClick={()=>{setShow(false)}}/>
                    </div>
                    {props.children}
                </div>   
            </div>}  
        </>
    )
}