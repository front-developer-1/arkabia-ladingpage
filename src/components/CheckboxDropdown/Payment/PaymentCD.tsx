import React, { useState } from "react";
import { Button, TextField } from "../..";
import { Checkbox } from "../../Checkbox/Checkbox";
import "./PaymentCD.css";

interface PaymentCDProps {
  amount: number | string;
  handleSubmit: React.MouseEventHandler<HTMLButtonElement>;
  nameValue: string;
  handleName: React.ChangeEventHandler<HTMLInputElement>;
  lastNameValue: string;
  handleLastName: React.ChangeEventHandler<HTMLInputElement>;
  cardNumberValue: number | string;
  handleCardNumber: React.ChangeEventHandler<HTMLInputElement>;
  expireDateValue: string;
  handleExpireDate: React.ChangeEventHandler<HTMLInputElement>;
  cvvValue: string;
  handleCvv: React.ChangeEventHandler<HTMLInputElement>;
}

export const PaymentCD: React.FC<PaymentCDProps> = ({
  amount,
  handleSubmit,
  nameValue,
  handleName,
  lastNameValue,
  handleLastName,
  cardNumberValue,
  handleCardNumber,
  expireDateValue,
  handleExpireDate,
  cvvValue,
  handleCvv,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="payment">
      <div className="payment-container">
        <Checkbox setChecked={setIsChecked} />
        <h3 className="paragraph-header">Pagar con tarjeta</h3>
        <div className="checkboxDropdown-cards-img">
          <img src="/images/visa-img.png" alt="visa" />
          <img src="/images/master-img.png" alt="master" />
        </div>
      </div>

      {isChecked && (
        <form>
          <div className="payment-textfields_1">
            <TextField
              title="Nombre"
              placeholder=" "
              value={nameValue}
              onChange={handleName}
            />
            <TextField
              title="Apellido"
              placeholder=" "
              value={lastNameValue}
              onChange={handleLastName}
            />
          </div>

          <div className="payment-textfields_2">
            <TextField
              title="Número de tarjeta"
              placeholder=" "
              value={cardNumberValue}
              onChange={handleCardNumber}
            />
            <TextField
              title="Fecha de vencimiento"
              placeholder=" "
              value={expireDateValue}
              onChange={handleExpireDate}
            />
            <TextField
              title="CVV"
              placeholder=" "
              value={cvvValue}
              onChange={handleCvv}
            />
          </div>

          <Button
            content={`Pagar USD $ ${amount}`}
            type="submit"
            onClick={handleSubmit}
          />
        </form>
      )}
    </div>
  );
};
