import React from "react";

type PlaneGrayProps = React.HTMLAttributes<HTMLDivElement> & {};

export const PlaneGray: React.FC<PlaneGrayProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/plane-icon-gray.svg" alt="" />
    </div>
  );
};
