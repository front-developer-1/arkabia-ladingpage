import React from "react";
import "./ChoiceSelector.css";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const ChoiceSelector: React.FC<CheckboxProps> = ({
  label,
  ...props
}) => {
  return (
    <div className="choice-selector-container">
      <input type="checkbox" id={label.toLocaleLowerCase()} {...props} />
      <label htmlFor={label.toLocaleLowerCase()}>{label}</label>
    </div>
  );
};
