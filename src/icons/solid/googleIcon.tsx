import React from "react";

type GoogleIconProps = React.HTMLAttributes<HTMLDivElement> & {};

export const GoogleIcon: React.FC<GoogleIconProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/google_icon.svg" alt="" />
    </div>
  );
};
