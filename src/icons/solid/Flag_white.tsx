import React from "react";

type FlagWhiteProps = React.HTMLAttributes<HTMLDivElement> & {};

export const FlagWhite: React.FC<FlagWhiteProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/flag_white.svg" alt="" style={{width: '30px'}} />
    </div>
  );
};
