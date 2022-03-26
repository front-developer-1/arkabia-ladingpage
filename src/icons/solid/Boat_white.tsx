import React from "react";

type BoatWhiteProps = React.HTMLAttributes<HTMLDivElement> & {};

export const BoatWhite: React.FC<BoatWhiteProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/boat_white.svg" alt=""/>
    </div>
  );
};
