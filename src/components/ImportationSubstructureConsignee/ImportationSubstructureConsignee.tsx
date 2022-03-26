import React from "react";
import "./ImportationSubstructureConsignee.css";
import { Button, Dropdown, TextField } from "..";

interface ImportationSubstructureConsigneeProps {
  consigneeElements: [string];
  consigneeValue: string;
  setConsigneeValue: React.Dispatch<React.SetStateAction<string>>;
  personOrCompanyElements: [string];
  personOrCompanyValue: string;
  setPersonOrCompanyValue: React.Dispatch<React.SetStateAction<string>>;
  rucValue: string;
  handleRucValue: React.ChangeEventHandler<HTMLInputElement>;
  businessNameValue: string;
  handleBusinessNameValue: React.ChangeEventHandler<HTMLInputElement>;
  documentTypeElements: [string];
  documentTypeValue: string;
  setDocumentTypeValue: React.Dispatch<React.SetStateAction<string>>;
  fiscalAddressValue: string;
  handleFiscalAddressValue: React.ChangeEventHandler<HTMLInputElement>;
  emailValue: string;
  handleEmailValue: React.ChangeEventHandler<HTMLInputElement>;
  phoneValue: string;
  handlePhoneValue: React.ChangeEventHandler<HTMLInputElement>;
  handleSaveConsignee: React.MouseEventHandler<HTMLButtonElement>;
}

export const ImportationSubstructureConsignee: React.FC<ImportationSubstructureConsigneeProps> =
  ({
    consigneeElements,
    consigneeValue,
    setConsigneeValue,
    personOrCompanyElements,
    personOrCompanyValue,
    setPersonOrCompanyValue,
    rucValue,
    handleRucValue,
    businessNameValue,
    handleBusinessNameValue,
    documentTypeElements,
    documentTypeValue,
    setDocumentTypeValue,
    fiscalAddressValue,
    handleFiscalAddressValue,
    emailValue,
    handleEmailValue,
    phoneValue,
    handlePhoneValue,
    handleSaveConsignee,
  }) => {
    return (
      <div className="importation-substructure-consignee">
        <p className="paragraph">
          El consignatario es la persona natural o empresa que va a ser
          declarado como el dueño de la carga para los trámites aduaneros.
        </p>
        <Dropdown
          title="Elegir consignatario"
          elements={consigneeElements}
          value={consigneeValue}
          setValue={setConsigneeValue}
          disabled={false}
        />
        <p className="paragraph">Ingresar los datos</p>
        <Dropdown
          title="Persona juridica / Empresa"
          elements={personOrCompanyElements}
          value={personOrCompanyValue}
          setValue={setPersonOrCompanyValue}
          disabled={false}
        />
        <div className="importation-substructure-consignee-inputs">
          <TextField
            title="RUC"
            placeholder=" "
            value={rucValue}
            onChange={handleRucValue}
          />
          <TextField
            title="Razón social de la empresa"
            placeholder=" "
            value={businessNameValue}
            onChange={handleBusinessNameValue}
          />
        </div>

        <div className="importation-substructure-consignee-inputs">
          <Dropdown
            title="Tipo de documento"
            elements={documentTypeElements}
            value={documentTypeValue}
            setValue={setDocumentTypeValue}
            disabled={false}
          />
          <TextField
            title="Dirección fiscal"
            placeholder=" "
            value={fiscalAddressValue}
            onChange={handleFiscalAddressValue}
          />
        </div>

        <div className="importation-substructure-consignee-inputs">
          <TextField
            title="Email"
            placeholder=" "
            value={emailValue}
            onChange={handleEmailValue}
          />
          <TextField
            title="Teléfono"
            placeholder=" "
            value={phoneValue}
            onChange={handlePhoneValue}
          />
        </div>

        <div className="importation-substructure-consignee-btn">
          <Button
            size="large"
            content="Guardar consignatario"
            color="black-75"
            onClick={handleSaveConsignee}
          />
        </div>
      </div>
    );
  };
