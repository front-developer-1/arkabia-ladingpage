import React from "react";
import "./TextField.css";

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  title: string;
  disable?: boolean;
  completed?: boolean;
};

export const TextField: React.FC<TextFieldProps> = ({
  title,
  disable = false,
  completed,
  placeholder,
  ...props
}) => {
  let disabledClass = "";
  if (disable) {
    disabledClass = "textfield-disabled";
  }

  if (completed) {
    disable = true;
  }

  return (
    <div className="textfield">
      <input
        className={`textfield-input ${disabledClass} `}
        disabled={disable}
        placeholder={`${disable ? " " : placeholder}`}
        {...props}
      />
      <span className="textfield-title paragraph-header">{title}</span>
    </div>
  );
};
