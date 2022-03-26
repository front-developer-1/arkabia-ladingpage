import React from "react";

type CircleCheckWhiteProps = React.HTMLAttributes<HTMLDivElement> & {};

export const CircleCheckWhite: React.FC<CircleCheckWhiteProps> = ({
  ...props
}) => {
  return (
    <div {...props}>
      <img src="/images/circle_check_outline_white.svg" alt="" />
    </div>
  );
};
