import React from "react";

type LeftArrowProps = React.HTMLAttributes<HTMLDivElement> & {};

export const LeftArrow: React.FC<LeftArrowProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/left-arrow-icon.svg" alt="" />
    </div>
  );
};
