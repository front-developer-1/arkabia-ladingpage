import React from "react";

type FacebookIconProps = React.HTMLAttributes<HTMLDivElement> & {};

export const FacebookIcon: React.FC<FacebookIconProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/facebook_icon.svg" alt="" />
    </div>
  );
};
