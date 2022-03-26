import React from "react";

type AduanaWhiteProps = React.HTMLAttributes<HTMLDivElement> & {};

export const AduanaWhite: React.FC<AduanaWhiteProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/aduana_white.svg" alt="" />
    </div>
  );
};
