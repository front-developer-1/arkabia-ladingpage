import React from "react";

type PortWhiteProps = React.HTMLAttributes<HTMLDivElement> & {};

export const PortWhite: React.FC<PortWhiteProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/port_white.svg" alt="" />
    </div>
  );
};
