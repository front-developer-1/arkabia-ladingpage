import React from "react";

type RightArrowProps = React.HTMLAttributes<HTMLDivElement> & {};

export const RightArrow: React.FC<RightArrowProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/right-arrow-icon.svg" alt="" />
    </div>
  );
};
