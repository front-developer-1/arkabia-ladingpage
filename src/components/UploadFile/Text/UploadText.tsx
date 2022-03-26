import React, { useState } from "react";
import "./UploadText.css";
import { Button, ButtonIcon, Textarea } from "../..";
import { EditWhite } from "../../../icons/outline/EditWhite";

interface UploadTextProps {
  title: string;
  subtitle: string;
  textTittle: string;
  placeholder?: string;
  textValue: string;
  handleTextValue: React.ChangeEventHandler<HTMLTextAreaElement>;
  buttonContent: string;
  handleButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const UploadText: React.FC<UploadTextProps> = ({
  title,
  subtitle,
  textTittle,
  placeholder = " ",
  textValue,
  handleTextValue,
  buttonContent,
  handleButtonClick,
}) => {
  const [disabled, setDisabled] = useState(true);

  const handleEditClick = () => {
    setDisabled(false);
  };

  return (
    <div className="uploadtext">
      <div className="uploadtext-container">
        <h1 className="paragraph-header">{title}</h1>
        <p className="paragraph">{subtitle}</p>

        <div className="uploadtext-bottom">
          <Textarea
            title={textTittle}
            value={textValue}
            onChange={handleTextValue}
            placeholder={placeholder}
            disable={disabled}
          />

          <div className="uploadtext-bottom-btns">
            {disabled ? (
              <ButtonIcon
                content="editar"
                color="blue-2"
                size="extra-small"
                Icon={<EditWhite />}
                onClick={handleEditClick}
              />
            ) : (
              <Button
                content="Cancelar"
                color="red"
                size="extra-small"
                onClick={() => setDisabled(true)}
              />
            )}
            <Button
              content={buttonContent}
              color="black-75"
              size="extra-small"
              onClick={handleButtonClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
