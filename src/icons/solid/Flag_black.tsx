import React from "react";

type FlagBlackProps = React.HTMLAttributes<HTMLDivElement> & {};

export const FlagBlack: React.FC<FlagBlackProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/target-flag-icon.svg" alt="" />
    </div>
  );
};
