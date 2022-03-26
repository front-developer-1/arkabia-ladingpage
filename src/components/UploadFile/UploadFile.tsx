import React, { useRef } from "react";
import "./UploadFile.css";
import { CloudUp } from "../../icons/outline/CloudUp";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

interface UploadFilesProps {
  title: string;
  subtitle: string;
  buttonContent: string;
  fileValue: string | undefined;
  disabled?: boolean;
  handleFileValue: React.ChangeEventHandler<HTMLInputElement>;
}

export const UploadFile: React.FC<UploadFilesProps> = ({
  title,
  subtitle,
  buttonContent,
  fileValue,
  disabled=false,
  handleFileValue,
}) => {
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <div className="uploadfile">
      <div className="uploadfile-container">
        <h1 className="paragraph-header">{title}</h1>
        <p className="paragraph">{subtitle}</p>
        <div className="uploadfile-bottom">
          <ButtonIcon
            content={buttonContent}
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
            disabled={disabled}
          />
          <span className="tinytext">
            {fileValue === ""
              ? "No hay ningún documento todavía"
              : fileValue?.substr(12)}
          </span>
        </div>
      </div>
    </div>
  );
};
