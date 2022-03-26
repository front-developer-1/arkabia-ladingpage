import React from "react";

import "./Checkbox.css";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {setChecked: (e:any)=>void};

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  disabled,
  setChecked,
  ...props
}) => {
  let disabledClass = "";
  if (disabled) {
    disabledClass = "checkbox-disabled";
  }

  return (
    <div className={`checkbox-container ${disabledClass}`}>
      <input type="checkbox" disabled={disabled} checked={checked} {...props} onChange={(e)=>{setChecked(e.target.checked)}} />
      <label></label>
      {checked && disabled ? (
        <img
          className="checkbox-check"
          src="/images/checkbox-checked.svg"
          alt="checked"
        />
      ) : (
        <img
          className="checkbox-check"
          src="/images/checkbox-check.svg"
          alt="check"
        />
      )}
    </div>
  );
};
