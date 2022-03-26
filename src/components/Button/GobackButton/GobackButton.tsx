import React from "react";
import "./GobackButton.css";

type GobackButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const GobackButton: React.FC<GobackButtonProps> = ({ ...props }) => {
  return (
    <button className="go-back-button" {...props}>
      <img src="/images/left-arrow-icon.svg" alt="" />
      <span className="paragraph-header">Regresar</span>
    </button>
  );
};
