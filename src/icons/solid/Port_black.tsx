import React from "react";

type PortBlackProps = React.HTMLAttributes<HTMLDivElement> & {};

export const PortBlack: React.FC<PortBlackProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/port_black.svg" alt="" />
    </div>
  );
};
