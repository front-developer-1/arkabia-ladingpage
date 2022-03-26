import React, { useState } from "react";
import { Button, Dropdown } from "../..";
import { Checkbox } from "../../Checkbox/Checkbox";
import { ContainerInfo } from "./ContainerInfo/ContainerInfo";
import { ContainerRow } from "./ContainerRow/ContainerRow";
import "./FCLCD.css";

interface FCLCDProps {
  containerType: string;
  containerTypeElements: string[];
  setContainerType: React.Dispatch<React.SetStateAction<string>>;
  containerSize: string;
  containerSizeElements: string[];
  setContainerSize: React.Dispatch<React.SetStateAction<string>>;
  containerQty: string;
  containerQtyElements: string[];
  setContainerQty: React.Dispatch<React.SetStateAction<string>>;
}

export const FCLCD: React.FC<FCLCDProps> = ({
  containerType,
  containerTypeElements,
  setContainerType,
  containerSize,
  containerSizeElements,
  setContainerSize,
  containerQty,
  containerQtyElements,
  setContainerQty,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [containersArr, setContainersArr] = useState<any[]>([]);

  const handleAddContainer = () => {
    //TODO: CHNAGE Image URL
    if (!containerType || !containerSize || !containerQty) return;
    setContainersArr((p) => [
      ...p,
      {
        imgUrl: "/images/container.png",
        type: containerType,
        size: containerSize,
        quantity: containerQty,
      },
    ]);
  };

  return (
    <div className="fclcd">
      <div className="fclcd-container">
        <Checkbox setChecked={setIsChecked}/>
        <div className="fclcd-title">
          <h2 className="paragraph-header">Contenedor completo (FCL)</h2>
          <p className="smalltext">Tu carga ocupará un contenedor completo.</p>
        </div>
      </div>
      {isChecked && (
        <>
          <div className="fclcd-addContainer">
            <p className="paragraph-header">Agregar contenedor</p>
            <div className="fclcd-container-data">
              <Dropdown
                title="Tipo de contenedor"
                elements={containerTypeElements}
                value={containerType}
                setValue={setContainerType}
              />
              <div className="fclcd-container-info-mobile">
                <ContainerInfo containerType={containerType} />
              </div>
              <Dropdown
                title="Tamaño"
                elements={containerSizeElements}
                value={containerSize}
                setValue={setContainerSize}
              />
              <Dropdown
                title="Cantidad"
                elements={containerQtyElements}
                value={containerQty}
                setValue={setContainerQty}
              />
              <Button
                content="Añadir"
                size="normal"
                color="black-75"
                onClick={handleAddContainer}
              />
            </div>
          </div>
          <div className="fclcd-container-info">
            <ContainerInfo containerType={containerType} />
          </div>
          <ContainerRow
            containersArr={containersArr}
            setContainerArr={setContainersArr}
          />
        </>
      )}
    </div>
  );
};
