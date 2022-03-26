import React from "react";
import { BtnsColorOptions } from "../../@types/btnsColorTypes";
import { TextSizeOptions } from "../../@types/textSizeTypes";
import {
  selectBtnBackgroundColor,
  selectBtnIconSizeClass,
} from "../../utils/selectButtonsStyles";
import { selectTextClass } from "../../utils/selectTextClass";
import "./ButtonIcon.css";

type ButtonIconProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  content: string;
  place?: IconPlace;
  Icon: React.ReactElement<any, any>;
  size?: TextSizeOptions;
  color?: BtnsColorOptions;
  disabled?: boolean;
};

type IconPlace = "left" | "right";

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  content,
  place = "left",
  Icon,
  size = "normal",
  color = "black-75",
  disabled = false,
  ...props
}) => {
  let IconLeft = null;
  let IconRight = null;
  if (place === "left") {
    IconLeft = Icon;
  } else {
    IconRight = Icon;
  }

  return (
    <button
      className={`custom-button-icon ${selectTextClass(
        size
      )} ${selectBtnIconSizeClass(size)} ${disabled && "btnIcon-disabled"}`}
      style={{
        backgroundColor: selectBtnBackgroundColor(color),
        color: color === "clear" ? "var(--black-50)" : "",
      }}
      disabled={disabled}
      {...props}
    >
      {IconLeft}
      {content}
      {IconRight}
    </button>
  );
};
