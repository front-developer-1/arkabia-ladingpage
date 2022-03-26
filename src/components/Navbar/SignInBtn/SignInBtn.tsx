import React from "react";
import "./SignInBtn.css";

type SignInBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  content: string;
};

export const SignInBtn: React.FC<SignInBtnProps> = ({ content, ...props }) => {
  return (
    <button {...props} className="signin-btn paragraph-header">
      {content}
    </button>
  );
};
