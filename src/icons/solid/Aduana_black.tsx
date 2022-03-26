import React from "react";

type AduanaBlackProps = React.HTMLAttributes<HTMLDivElement> & {};

export const AduanaBlack: React.FC<AduanaBlackProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/aduana_black.svg" alt="" />
    </div>
  );
};
