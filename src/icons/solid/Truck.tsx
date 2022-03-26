import React from "react";

type TruckProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Truck: React.FC<TruckProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/truck-icon.svg" alt="" />
    </div>
  );
};
