import { TextSizeOptions } from "../@types/textSizeTypes";

export const selectTextClass = (options: TextSizeOptions) => {
  switch (options) {
    case "large":
      return "small-bold";
    case "normal":
      return "paragraph-header";
    case "small":
      return "smalltext-header";
    case "extra-small":
      return "tinytext-header";
    default:
      return "paragraph-header";
  }
};
