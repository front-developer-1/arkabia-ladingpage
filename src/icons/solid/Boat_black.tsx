import React from "react";

type BoatBlackProps = React.HTMLAttributes<HTMLDivElement> & {};

export const BoatBlack: React.FC<BoatBlackProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/boat_black.svg" alt="" style={{width: '27px'}}/>
    </div>
  );
};
