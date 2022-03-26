import React, {useState, useRef} from "react";
import { Row } from "../..";
import { RowsColorTypes } from "../../../@types/rowsColorTypes";
import { ButtonIcon } from "../../ButtonIcon/ButtonIcon";
import { CloudUp } from "../../../icons/outline/CloudUp";

import "./UploadTable.css";

interface UploadTableProps {
  title: string;
  subtitle: string;
  rowsData: {
    title: string;
    columValues: any;
    color: RowsColorTypes;
  }[];
  buttonContent: string;
}

export const UploadTable: React.FC<UploadTableProps> = ({
  title,
  subtitle,
  buttonContent,
  rowsData,
}) => {
  const [value, setValue] = useState("No hay ningún documento todavía");
  const fileRef = useRef<HTMLInputElement>(null);

  const handleChange = (name: string): void => {
    setValue(name.substr(12));
  };

  return (
    <div className="uploadtable">
      <div className="uploadtable-container">
        <h1 className="paragraph-header">{title}</h1>
        <p className="paragraph">{subtitle}</p>

        <div className="uploadtable-table">
          {/* TODO change idx for a real key */}
          {rowsData?.map(({ title, columValues, color }, idx) => (
            <Row
              key={idx}
              title={title}
              color={color}
              columValues={columValues}
              content="text"
            />
          ))}
        </div>
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
              onChange={(e) => handleChange(e.target.value)}
              type="file"
              hidden
              ref={fileRef}
            />
            <span className="tinytext">{value}</span>
          </div>
      </div>
    </div>
  );
};
