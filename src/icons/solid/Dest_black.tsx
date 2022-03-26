import React from "react";

type DestBlackProps = React.HTMLAttributes<HTMLDivElement> & {};

export const DestBlack: React.FC<DestBlackProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/dest_black.svg" alt="" />
    </div>
  );
};
