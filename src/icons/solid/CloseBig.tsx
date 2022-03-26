import React from "react";

type CloseBigProps = React.HTMLAttributes<HTMLDivElement> & {};

export const CloseBig: React.FC<CloseBigProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/close_big.svg" alt="" />
    </div>
  );
};
