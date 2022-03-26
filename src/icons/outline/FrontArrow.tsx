import React from "react";

type FrontArrowProps = React.HTMLAttributes<HTMLDivElement> & {};

export const FrontArrow: React.FC<FrontArrowProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/front_arrow.svg" alt="" />
    </div>
  );
};
