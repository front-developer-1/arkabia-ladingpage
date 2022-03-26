import React, { useRef, useState } from "react";
import { ButtonIcon, Dropdown, TextField, UploadFile } from "../..";
import { CloudUp } from "../../../icons/outline/CloudUp";
import { Checkbox } from "../../Checkbox/Checkbox";
import "./LCLCD.css";

interface LCLCDProps {
  fileValue: string | undefined;
  handleFileValue: React.ChangeEventHandler<HTMLInputElement>;
  totalWeight: string;
  handleTotalWeight: React.ChangeEventHandler<HTMLInputElement>;
  totalWeightUnit: string;
  setTotalWeightUnit: React.Dispatch<React.SetStateAction<string>>;
  totalVolume: string;
  handleTotalVolume: React.ChangeEventHandler<HTMLInputElement>;
  totalVolumeUnit: string;
  setTotalVolumeUnit: React.Dispatch<React.SetStateAction<string>>;
  cargoDescription: string;
  setCargoDescription: React.Dispatch<React.SetStateAction<string>>;
  isStackable: string;
  setIsStackable: React.Dispatch<React.SetStateAction<string>>;
}

const unitItems = ["Kilogramos", "Metros cúbicos"];
const description = ["Cajas"];
const stackable = ["Si, puede ir una encima de otra"];

export const LCLCD: React.FC<LCLCDProps> = ({
  fileValue,
  handleFileValue,
  totalWeight,
  handleTotalWeight,
  totalWeightUnit,
  setTotalWeightUnit,
  totalVolume,
  handleTotalVolume,
  totalVolumeUnit,
  setTotalVolumeUnit,
  cargoDescription,
  setCargoDescription,
  isStackable,
  setIsStackable,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <div className="lclcd">
      <div className="lclcd-container">
        <Checkbox setChecked={setIsChecked} />
        <div className="lclcd-title">
          <h2 className="paragraph-header">Contenedor compartido (LCL)</h2>
          <p className="smalltext">
            Tu carga se enviará dentro de un contenedor compartido para ahorrar
            costos.
          </p>
        </div>
      </div>
      {isChecked && (
        <div className="lclcd-bottom">
          <h2 className="paragraph-header">
            Añade las características de tu carga
          </h2>
          <div className="lclcd-first">
            <TextField
              title="Peso total"
              value={totalWeight}
              onChange={handleTotalWeight}
              placeholder=" "
            />
            <Dropdown
              title="Unidad"
              elements={unitItems}
              value={totalWeightUnit}
              setValue={setTotalWeightUnit}
            />
            <TextField
              title="Volumen total"
              value={totalVolume}
              onChange={handleTotalVolume}
              placeholder=" "
            />
            <Dropdown
              title="Unidad"
              elements={unitItems}
              value={totalVolumeUnit}
              setValue={setTotalVolumeUnit}
            />
          </div>
          <div className="lclcd-second">
            <Dropdown
              title="¿Qué describe mejor tu carga?"
              elements={description}
              value={cargoDescription}
              setValue={setCargoDescription}
            />
            <Dropdown
              title="¿Es apilable?"
              elements={stackable}
              value={isStackable}
              setValue={setIsStackable}
            />
          </div>
          <div className="lclcd-last">
            <div className="lclcd-add-list">
              <p className="smalltext-header">
                Añade la lista de empaque <span>(Opcional)</span>
              </p>
              <img src="/images/information-icon.svg" alt="information-icon" />
            </div>

            <div className="lclcd-fileupload">
              <ButtonIcon
                content="Subir archivo"
                Icon={<CloudUp />}
                color="blue-2"
                size="extra-small"
                place="right"
                onClick={() => {
                  fileRef.current?.click();
                }}
              />
              <input
                onChange={handleFileValue}
                type="file"
                hidden
                ref={fileRef}
                value={fileValue}
              />
              <span className="tinytext">
                {fileValue === ""
                  ? "No hay ningún documento todavía"
                  : fileValue?.substr(12)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
