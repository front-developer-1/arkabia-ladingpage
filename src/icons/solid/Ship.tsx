import React from "react";

type ShipProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Ship: React.FC<ShipProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/ship-icon.svg" alt="" />
    </div>
  );
};
