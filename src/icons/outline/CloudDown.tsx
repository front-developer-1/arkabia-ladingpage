import React from "react";

type CloudDownProps = React.HTMLAttributes<HTMLDivElement> & {};

export const CloudDown: React.FC<CloudDownProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/cloud_down.svg" alt="" />
    </div>
  );
};
