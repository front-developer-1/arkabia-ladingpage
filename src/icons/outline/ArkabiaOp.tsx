import React from "react";

type ArkabiaOpProps = React.HTMLAttributes<HTMLDivElement> & {};

export const ArkabiaOp: React.FC<ArkabiaOpProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/arkabia-op-icon.svg" alt="" />
    </div>
  );
};
