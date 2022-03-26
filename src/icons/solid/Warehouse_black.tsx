import React from "react";

type WarehouseBlackProps = React.HTMLAttributes<HTMLDivElement> & {};

export const WarehouseBlack: React.FC<WarehouseBlackProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/warehouse_black.svg" alt="" />
    </div>
  );
};
