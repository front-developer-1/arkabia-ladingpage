import React from "react";

type PinGrayProps = React.HTMLAttributes<HTMLDivElement> & {};

export const PinGray: React.FC<PinGrayProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/pin-icon-gray.svg" alt="" />
    </div>
  );
};
