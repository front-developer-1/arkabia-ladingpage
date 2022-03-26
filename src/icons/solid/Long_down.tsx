import React from "react";

type LongDownProps = React.HTMLAttributes<HTMLDivElement> & {};

export const LongDown: React.FC<LongDownProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/long_down.svg" alt="" />
    </div>
  );
};
