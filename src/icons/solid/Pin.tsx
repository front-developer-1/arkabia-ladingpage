import React from "react";

type PinProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Pin: React.FC<PinProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/pin-icon.svg" alt="" />
    </div>
  );
};
