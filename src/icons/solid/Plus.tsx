import React from "react";

type PlusProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Plus: React.FC<PlusProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/plus-icon.svg" alt="" />
    </div>
  );
};
