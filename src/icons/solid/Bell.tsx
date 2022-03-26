import React from "react";

type BellProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Bell: React.FC<BellProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/bell-icon.svg" alt="" />
    </div>
  );
};
