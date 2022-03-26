import React from "react";

type PlaneProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Plane: React.FC<PlaneProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/plane-icon.svg" alt="" />
    </div>
  );
};
