import React from "react";

import { Button } from "..";
import { Hamburguer } from "../../icons/outline/Hamburguer";

import './Header.css';

interface HeaderProps {
    onClickLognIn: () => void;
    onClickRegister: () => void;
}

export const Header: React.FC<HeaderProps> = ({
    onClickLognIn,
    onClickRegister
}) => {
    return (
        <div className="header-container">
            <Hamburguer className="navbar-mob-btn" />
            <img src="/images/arkabia-logo.svg" alt="" />
            <div className="header-buttons_sign">
                <Button content="Iniciar Sesión" color='white'
                    style={{color: 'var(--gray-1)', backgroundColor: 'var(--white)'}}
                    onClick={onClickLognIn}
                />
                <Button content="Regístrate" color='yellow' 
                    style={{color: 'var(--black)', backgroundColor: 'var(--yellow)'}}
                    onClick={onClickRegister}
                />
            </div>
        </div>
    )
}