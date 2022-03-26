import React from "react";

type WarehouseWhiteProps = React.HTMLAttributes<HTMLDivElement> & {};

export const WarehouseWhite: React.FC<WarehouseWhiteProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/warehouse_white.svg" alt="" />
    </div>
  );
};
