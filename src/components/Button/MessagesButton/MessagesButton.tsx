import React from "react";
import "./MessagesButton.css";

type MessagesButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  nMessages: number;
};

export const MessagesButton: React.FC<MessagesButtonProps> = ({
  nMessages,
  ...props
}) => {
  return (
    <button {...props} className="messages-btn paragraph-header">
      Ver mensajes{" "}
      {nMessages > 0 && (
        <span className="messages-btn-count smalltext-header">{nMessages}</span>
      )}
    </button>
  );
};
