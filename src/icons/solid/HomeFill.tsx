import React from "react";

type HomeFillProps = React.HTMLAttributes<HTMLDivElement> & {};

export const HomeFill: React.FC<HomeFillProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/home-fill-icon.svg" alt="" />
    </div>
  );
};
