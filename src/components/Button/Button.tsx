import React from "react";
import { BtnsColorOptions } from "../../@types/btnsColorTypes";
import { TextSizeOptions } from "../../@types/textSizeTypes";
import {
  selectBtnBackgroundColor,
  selectBtnSizeClass,
} from "../../utils/selectButtonsStyles";
import { selectTextClass } from "../../utils/selectTextClass";
import "./Button.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  content: string;
  disabled?: boolean;
  size?: TextSizeOptions;
  color?: BtnsColorOptions;
};

export const Button: React.FC<ButtonProps> = ({
  content,
  disabled = false,
  size = "normal",
  color = "black-75",
  ...props
}) => {
  if (disabled) color = "disabled";

  if (size === "only-text") {
    return (
      <button className="btn-only-text smalltext-header" {...props}>
        {content}
      </button>
    );
  }

  return (
    <button
      className={`custom-button ${selectTextClass(size)} ${
        disabled && "btn-disabled"
      } ${selectBtnSizeClass(size)} `}
      style={{
        backgroundColor: selectBtnBackgroundColor(color),
        color: `${color === "yellow" ? "var(--gray-1)" : (color === 'black-05' ? "var(--gray-1)" : "")}`,
      }}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};
