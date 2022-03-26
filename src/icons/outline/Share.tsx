import React from "react";

type ShareProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Share: React.FC<ShareProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/share-icon.svg" alt="" />
    </div>
  );
};
