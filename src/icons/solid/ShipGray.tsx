import React from "react";

type ShipGrayProps = React.HTMLAttributes<HTMLDivElement> & {};

export const ShipGray: React.FC<ShipGrayProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/ship-icon-gray.svg" alt="" />
    </div>
  );
};
