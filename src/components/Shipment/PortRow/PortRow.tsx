import React from "react";
import "./PortRow.css";

type PortRowProps = React.HTMLAttributes<HTMLDivElement> & {
  icon: any;
  title: string;
  subTitle: string;
};

export const PortRow: React.FC<PortRowProps> = ({
  icon,
  title,
  subTitle,
  ...props
}) => {
  return (
    <div className="portrow" {...props}>
      <img className="portrow-img" src={icon} alt={`${title}-flag`} />
      <div className="portrow-info">
        <span className="smalltext-header">{title}</span>
        <span className="tinytext">{subTitle}</span>
      </div>
    </div>
  );
};
