import React from "react";

type HamburguerProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Hamburguer: React.FC<HamburguerProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/hamburguer-icon.svg" alt="" />
    </div>
  );
};
