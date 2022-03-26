import React from "react";

type DoneGreenProps = React.HTMLAttributes<HTMLDivElement> & {};

export const DoneGreen: React.FC<DoneGreenProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/done.svg" alt="" />
    </div>
  );
};
