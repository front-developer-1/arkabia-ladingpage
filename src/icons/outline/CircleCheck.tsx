import React from "react";

type CircleCheckProps = React.HTMLAttributes<HTMLDivElement> & {};

export const CircleCheck: React.FC<CircleCheckProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/circle_check_outline.svg" alt="" />
    </div>
  );
};
