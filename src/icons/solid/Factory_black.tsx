import React from "react";

type FactoryBlackProps = React.HTMLAttributes<HTMLDivElement> & {};

export const FactoryBlack: React.FC<FactoryBlackProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/factory_black.svg" alt="" />
    </div>
  );
};
