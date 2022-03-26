import { BtnsColorOptions } from "../@types/btnsColorTypes";
import { TextSizeOptions } from "../@types/textSizeTypes";

export const selectBtnBackgroundColor = (options: BtnsColorOptions) => {
  switch (options) {
    case "black-75":
      return "var(--black-75)";
    case "black-15":
      return "var(--black-15)";
    case "black-05":
      return "var(--black-05)";
    case "black-25":
      return "var(--black-25)";
    case "yellow":
      return "var(--yellow)";
    case "blue-2":
      return "var(--blue-2)";
    case "red":
      return "var(--red)";
    case "green-2":
      return "var(--green-2)";
    case "white-50":
      return "var(--white-50)";
    case "white":
      return "white"
    case "disabled":
      return "transparent";
    case "clear":
      return "transparent";
  }
};

export const selectBtnSizeClass = (options: TextSizeOptions) => {
  switch (options) {
    case "large":
      return "btn-large";
    case "normal":
      return "btn-normal";
    case "small":
      return "btn-small";
    case "extra-small":
      return "btn-extra-small";
    default:
      return "btn-normal";
  }
};

export const selectBtnIconSizeClass = (options: TextSizeOptions) => {
  switch (options) {
    case "large":
      return "btnIcon-large";
    case "normal":
      return "btnIcon-normal";
    case "small":
      return "btnIcon-small";
    case "extra-small":
      return "btnIcon-extra-small";
    default:
      return "btnIcon-normal";
  }
};
