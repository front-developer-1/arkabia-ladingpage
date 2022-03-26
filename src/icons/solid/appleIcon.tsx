import React from "react";

type AppleIconProps = React.HTMLAttributes<HTMLDivElement> & {};

export const AppleIcon: React.FC<AppleIconProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/apple_icon.svg" alt="" />
    </div>
  );
};
