import React, { useState } from "react";
import { Button, ButtonIcon, Dropdown, TextField } from "..";
import { EditWhite } from "../../icons/outline/EditWhite";
import "./BankAccountInput.css";

interface BankAccountInputProps {
  completed?: boolean;
  bank: string;
  bankElements: string[];
  setBank: React.Dispatch<React.SetStateAction<string>>;
  accountType: string;
  accountTypeElements: string[];
  setAccountType: React.Dispatch<React.SetStateAction<string>>;
  personType: string;
  personTypeElements: string[];
  setPersonType: React.Dispatch<React.SetStateAction<string>>;
  accountHolder: string;
  handleAccountHolder: React.ChangeEventHandler<HTMLInputElement>;
  ruc: string;
  handleRuc: React.ChangeEventHandler<HTMLInputElement>;
  currency: string;
  currencyElements: string[];
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  accountNumber: string;
  handleAccountNumber: React.ChangeEventHandler<HTMLInputElement>;
  cci: string;
  handleCCI: React.ChangeEventHandler<HTMLInputElement>;
  handleSave: React.MouseEventHandler<HTMLButtonElement>;
}

export const BankAccountInput: React.FC<BankAccountInputProps> = ({
  completed = false,
  bank,
  bankElements,
  setBank,
  accountType,
  accountTypeElements,
  setAccountType,
  personType,
  personTypeElements,
  setPersonType,
  accountHolder,
  handleAccountHolder,
  ruc,
  handleRuc,
  currency,
  currencyElements,
  setCurrency,
  accountNumber,
  handleAccountNumber,
  cci,
  handleCCI,
  handleSave,
}) => {
  const [disabled, setDisabled] = useState(true);

  if (completed) {
    return (
      <div className="bankAccountInput">
        <div className="bankAccountInput-row">
          <Dropdown
            title="Tipo de persona"
            elements={personTypeElements}
            value={personType}
            setValue={setPersonType}
          />
          <TextField
            title="Titular de la cuenta"
            value={accountHolder}
            onChange={handleAccountHolder}
            placeholder=" "
            disable={disabled}
          />
        </div>
        <div className="bankAccountInput-row">
          <TextField
            title="RUC"
            value={ruc}
            onChange={handleRuc}
            placeholder=" "
            disable={disabled}
          />
          <Dropdown
            title="Moneda"
            elements={currencyElements}
            value={currency}
            setValue={setCurrency}
          />
        </div>
        <div className="bankAccountInput-row">
          <TextField
            title="Nro de cuenta"
            value={accountNumber}
            onChange={handleAccountNumber}
            placeholder=" "
            disable={disabled}
          />
          <TextField
            title="Código interbancario CCI"
            value={cci}
            onChange={handleCCI}
            placeholder=" "
            disable={disabled}
          />
        </div>
        <div className="bankAccountInput-last">
          {disabled ? (
            <ButtonIcon
              content="editar"
              color="blue-2"
              size="extra-small"
              Icon={<EditWhite />}
              onClick={() => setDisabled(false)}
            />
          ) : (
            <Button
              content="Cancelar"
              color="red"
              size="extra-small"
              onClick={() => setDisabled(true)}
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bankAccountInput">
      <div className="bankAccountInput-row">
        <Dropdown
          title="Selecciona tu banco"
          elements={bankElements}
          value={bank}
          setValue={setBank}
        />
        <Dropdown
          title="Tipo de cuenta"
          elements={accountTypeElements}
          value={accountType}
          setValue={setAccountType}
        />
      </div>
      <div className="bankAccountInput-row">
        <Dropdown
          title="Tipo de persona"
          elements={personTypeElements}
          value={personType}
          setValue={setPersonType}
        />
        <TextField
          title="Titular de la cuenta"
          value={accountHolder}
          onChange={handleAccountHolder}
          placeholder=" "
        />
      </div>
      <div className="bankAccountInput-row">
        <TextField
          title="RUC"
          value={ruc}
          onChange={handleRuc}
          placeholder=" "
        />
        <Dropdown
          title="Moneda"
          elements={currencyElements}
          value={currency}
          setValue={setCurrency}
        />
      </div>
      <div className="bankAccountInput-row">
        <TextField
          title="Nro de cuenta"
          value={accountNumber}
          onChange={handleAccountNumber}
          placeholder=" "
        />
        <TextField
          title="Código interbancario CCI"
          value={cci}
          onChange={handleCCI}
          placeholder=" "
        />
      </div>
      <div className="bankAccountInput-last">
        <Button
          content="Guardar datos"
          onClick={handleSave}
          size="extra-small"
          color="black-75"
        />
      </div>
    </div>
  );
};
