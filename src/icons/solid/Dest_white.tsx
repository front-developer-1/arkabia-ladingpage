import React from "react";

type DestWhiteProps = React.HTMLAttributes<HTMLDivElement> & {};

export const DestWhite: React.FC<DestWhiteProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/dest_white.svg" alt="" />
    </div>
  );
};
