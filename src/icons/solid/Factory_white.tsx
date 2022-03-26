import React from "react";

type FactoryWhiteProps = React.HTMLAttributes<HTMLDivElement> & {};

export const FactoryWhite: React.FC<FactoryWhiteProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/factory_white.svg" alt="" />
    </div>
  );
};
