import React from "react";
import { TextField } from "../..";
import "./SelectTitle.css";

interface SelectImportationProps {
  titleValue: string;
  handleTitle: React.ChangeEventHandler<HTMLInputElement>;
}

export const SelectTitle: React.FC<SelectImportationProps> = ({
  titleValue,
  handleTitle,
}) => {
  let charCount = titleValue.length;

  return (
    <div className="selectTitle">
      <p className="paragraph">Coloca un título a tu importación.</p>
      <div className="selectTitle-textfield">
        <TextField
          title="Título"
          placeholder="Ej. Carros de juguete"
          value={titleValue}
          onChange={handleTitle}
          maxLength={40}
        />
        <p className="smalltext">{charCount} / 40 caracteres</p>
      </div>
    </div>
  );
};
