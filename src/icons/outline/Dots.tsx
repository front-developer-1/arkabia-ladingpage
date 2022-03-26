import React from "react";

type DotsProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Dots: React.FC<DotsProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/three-dots-icon.svg" alt="" />
    </div>
  );
};
