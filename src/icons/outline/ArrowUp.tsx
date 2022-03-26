import React from "react";

type ArrowUpProps = React.HTMLAttributes<HTMLDivElement> & {};

export const ArrowUp: React.FC<ArrowUpProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/arrow-up.svg" alt="arrow-down" />
    </div>
  );
};
