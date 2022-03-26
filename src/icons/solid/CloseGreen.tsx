import React from "react";

type CloseGreenProps = React.HTMLAttributes<HTMLDivElement> & {};

export const CloseGreen: React.FC<CloseGreenProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/close_green.svg" alt="" />
    </div>
  );
};
