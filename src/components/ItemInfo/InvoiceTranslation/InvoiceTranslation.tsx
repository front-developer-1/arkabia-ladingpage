import React, { useState } from "react";
import { Dropdown, TextField } from "../..";
import "./InvoiceTranslation.css";

interface InvoiceTranslationProps {
  productNumber: number;
  tradename: string;
  handleTradename: React.ChangeEventHandler<HTMLInputElement>;
  brand: string;
  handleBrand: React.ChangeEventHandler<HTMLInputElement>;
  model: string;
  handleModel: React.ChangeEventHandler<HTMLInputElement>;
  state: string;
  stateElements: string[];
  setState: React.Dispatch<React.SetStateAction<string>>;
  minDescriptions: string;
  handleMinDescriptions: React.ChangeEventHandler<HTMLInputElement>;
  primaryUse: string;
  handlePrimaryUse: React.ChangeEventHandler<HTMLInputElement>;
  amount: string;
  handleAmount: React.ChangeEventHandler<HTMLInputElement>;
  amountType: string;
  amountTypeElements: string[];
  setAmountType: React.Dispatch<React.SetStateAction<string>>;
  originCountry: string;
  originCountryElements: string[];
  setOriginCountry: React.Dispatch<React.SetStateAction<string>>;
  acquisitionCountry: string;
  acquisitionCountryElements: string[];
  setAcquisitionCountry: React.Dispatch<React.SetStateAction<string>>;
}

export const InvoiceTranslation: React.FC<InvoiceTranslationProps> = ({
  productNumber,
  tradename,
  handleTradename,
  brand,
  handleBrand,
  model,
  handleModel,
  state,
  stateElements,
  setState,
  minDescriptions,
  handleMinDescriptions,
  primaryUse,
  handlePrimaryUse,
  amount,
  handleAmount,
  amountType,
  amountTypeElements,
  setAmountType,
  originCountry,
  originCountryElements,
  setOriginCountry,
  acquisitionCountry,
  acquisitionCountryElements,
  setAcquisitionCountry,
}) => {
  const [isExtended, setIsExtended] = useState(false);

  let arrowImg = "";

  if (isExtended) {
    arrowImg = "arrow-up.svg";
  } else {
    arrowImg = "arrow-down.svg";
  }
  return (
    <div className="iteminfo-invoiceTranslation">
      <div className="iteminfo-invoiceTranslation-header">
        <p className="smalltext-header">Producto {productNumber}</p>
        <img
          onClick={() => setIsExtended(!isExtended)}
          src={`/images/${arrowImg}`}
          alt="arrow-down"
        />
      </div>
      {isExtended && (
        <>
          <div className="iteminfo-invoiceTranslation-row">
            <TextField
              title="Nombre comercial"
              value={tradename}
              onChange={handleTradename}
              placeholder=" "
            />
            <TextField
              title="Marca"
              value={brand}
              onChange={handleBrand}
              placeholder=" "
            />
            <TextField
              title="Modelo"
              value={model}
              onChange={handleModel}
              placeholder=" "
            />
            <Dropdown
              title="Estado"
              elements={stateElements}
              value={state}
              setValue={setState}
            />
          </div>
          <div className="iteminfo-invoiceTranslation-row">
            <TextField
              title="Descripciones mínimas"
              value={minDescriptions}
              onChange={handleMinDescriptions}
              placeholder=" "
            />
            <TextField
              title="Uso o función principal"
              value={primaryUse}
              onChange={handlePrimaryUse}
              placeholder=" "
            />
          </div>
          <div className="iteminfo-invoiceTranslation-row">
            <TextField
              title="Cantidad"
              value={amount}
              onChange={handleAmount}
              placeholder=" "
            />
            <Dropdown
              title="Tipo de cantidad"
              elements={amountTypeElements}
              value={amountType}
              setValue={setAmountType}
            />
            <Dropdown
              title="País de origen"
              elements={originCountryElements}
              value={originCountry}
              setValue={setOriginCountry}
            />
            <Dropdown
              title="País de adquisición"
              elements={acquisitionCountryElements}
              value={acquisitionCountry}
              setValue={setAcquisitionCountry}
            />
          </div>

          <div className="iteminfo-invoiceTranslation-last">
            <img src="/images/trash-full.svg" alt="trash-icon" />
          </div>
        </>
      )}
    </div>
  );
};
