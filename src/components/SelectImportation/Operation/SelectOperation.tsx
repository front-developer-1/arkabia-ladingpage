import React from "react";
import "./SelectOperation.css";
import { Button } from "../..";
import { ArrowDown } from "../../../icons/outline/ArrowDown";

interface SelectOperationProps {
  handleAddImp: React.MouseEventHandler<HTMLButtonElement>;
  title: string;
  operation?: string;
  date: string;
}

export const SelectOperation: React.FC<SelectOperationProps> = ({
  handleAddImp,
  title,
  operation = "Importación",
  date,
}) => {
  return (
    <div className="selectOperation">
      <Button
        content="Agregar importación"
        size="extra-small"
        color="black-75"
        onClick={handleAddImp}
      />
      <div className="selectOperation-dashboard">
        <img src="/images/arkabia-op-icon.svg" alt="arkabia-op-icon" />
        <div className="selectOperation-titles">
          <h2 className="smalltext-header">{title}</h2>
          <p className="smalltext">{operation}</p>
        </div>
        <p className="paragraph">{date}</p>
        <ArrowDown />
      </div>
    </div>
  );
};
