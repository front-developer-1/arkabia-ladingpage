import React, { useState } from "react";
import { Dropdown, TextField } from "..";
import "./FinalDeliveryPlace.css";

interface FinalDeliveryPlaceProps {
  departmentElements: [string];
  departmentValue: string;
  setDepartment: React.Dispatch<React.SetStateAction<string>>;
  provinceElements: [string];
  provinceValue: string;
  setProvince: React.Dispatch<React.SetStateAction<string>>;
  districtElements: [string];
  districtValue: string;
  setDistrict: React.Dispatch<React.SetStateAction<string>>;
  finalAddressValue: string;
  handleFinalAddress: React.ChangeEventHandler<HTMLInputElement>;
}

export const FinalDeliveryPlace: React.FC<FinalDeliveryPlaceProps> = ({
  departmentElements,
  departmentValue,
  setDepartment,
  provinceElements,
  provinceValue,
  setProvince,
  districtElements,
  districtValue,
  setDistrict,
  finalAddressValue,
  handleFinalAddress,
}) => {
  const [isExtended, setIsExtended] = useState(false);

  let arrowImg = "";

  if (isExtended) {
    arrowImg = "arrow-up.svg";
  } else {
    arrowImg = "arrow-down.svg";
  }

  return (
    <div className="finalDeliveryPlace">
      <div className="finalDeliveryPlace-header">
        <h2 className="paragraph-header">
          ¿Deseas que del puerto se envíe a un local en específico? (Opcional)
        </h2>
        <img
          onClick={() => setIsExtended(!isExtended)}
          src={`/images/${arrowImg}`}
          alt="arrow-down"
        />
      </div>
      {isExtended && (
        <>
          <div className="finalDeliveryPlace-dps">
            <img src="/images/location-tags.png" alt="location-tags" />
            <Dropdown
              title="Departamento"
              elements={departmentElements}
              value={departmentValue}
              setValue={setDepartment}
            />
            <Dropdown
              title="Provincia"
              elements={provinceElements}
              value={provinceValue}
              setValue={setProvince}
            />
            <Dropdown
              title="Distrito"
              elements={districtElements}
              value={districtValue}
              setValue={setDistrict}
            />
          </div>
          {/* TODO Agregar el placeholder */}
          <TextField
            title="Dirección de entrega final"
            placeholder=" "
            value={finalAddressValue}
            onChange={handleFinalAddress}
          />
        </>
      )}
    </div>
  );
};
