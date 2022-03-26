import React from "react";

type BackArrowProps = React.HTMLAttributes<HTMLDivElement> & {};

export const BackArrow: React.FC<BackArrowProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/back-arrow-icon.svg" alt="" />
    </div>
  );
};
