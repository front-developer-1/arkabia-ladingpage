import React from "react";
import { Hamburguer } from "../../icons/outline/Hamburguer";
import { Message } from "../../icons/outline/Message";
import { Bell } from "../../icons/solid/Bell";
import { Plus } from "../../icons/solid/Plus";
import { USERDATA } from "../../testdata/fakedata";
import { Button } from "../Button/Button";
import { Subheader } from "../Subheader/Subheader";
import { UserActive } from "../UserActive/UserActive";
import "./Navbar.css";
import { SignInBtn } from "./SignInBtn/SignInBtn";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const isLogged = true;

  return (
    <div className="navbar">
      <Hamburguer className="navbar-mob-btn" />

      <div className="navbar-title-container">
        <img src="/images/arkabia-logo.svg" alt="" />
      </div>

      {isLogged ? (
        <>
          <Message className="navbar-mob-btn" />
          <Bell className="navbar-mob-btn" />
        </>
      ) : (
        <div className="navbar-mob-btn">
          <Button content="Regístrate" color="yellow" size="extra-small" />
        </div>
      )}

      {!isLogged ? (
        <div className="navbar-login-container">
          <SignInBtn content="Iniciar Sesión" />
          <Button content="Regístrate" color="yellow" />
        </div>
      ) : (
        <>
          <div className="navbar-items">
            <Subheader content="Panel principal" handleClick={()=>{}} />
            <Subheader content="Servicios" handleClick={()=>{}}/>
          </div>

          <div className="navbar-options">
            <div className="navbar-user">
              <span className="paragraph-header">{USERDATA.username}</span>
              <UserActive
                userImg={USERDATA.userImgUrl}
                username={USERDATA.username}
                isConnected={isLogged}
              />
            </div>
            <div className="navbar-icons">
              <Plus />
              <Message />
              <Bell />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
