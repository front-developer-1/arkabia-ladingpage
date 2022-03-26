import React from "react";

type CloudUpProps = React.HTMLAttributes<HTMLDivElement> & {};

export const CloudUp: React.FC<CloudUpProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/cloud_up.svg" alt="" />
    </div>
  );
};
