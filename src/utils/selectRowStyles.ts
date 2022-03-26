import { RowsColorTypes } from "../@types/rowsColorTypes";
import { RowContentType } from "../@types/rowsContentType";

export const selectRowBackgroundColor = (options: RowsColorTypes) => {
  switch (options) {
    case "white-90":
      return "var(--white-90)";
    case "white-50":
      return "var(--white-50)";
    case "white-25":
      return "var(--white-25)";
    case "black-75":
      return "var(--black-75)";
    case "black-50":
      return "var(--black-50)";
    case "transparent":
      return "transparent";
  }
};

export const selectRowPadding = (options: RowContentType) => {
  switch (options) {
    case "text":
      return "15px 20px";
    case "button":
      return "0 20px";
    case "image":
      return "10px 20px";
  }
};

export const selectRowFontColor = (options: RowsColorTypes) => {
  switch (options) {
    case "white-90":
      return "var(--gray-1)";
    case "white-50":
      return "var(--gray-1)";
    case "white-25":
      return "var(--gray-1)";
    case "transparent":
      return "var(--gray-1)";
    case "black-75":
      return "var(--white)";
    case "black-50":
      return "var(--white)";
  }
};

export const selectRowJustifyContent = (rowValues: any[]) => {
  return rowValues.length > 1 ? "space-between" : "flex-end";
};
