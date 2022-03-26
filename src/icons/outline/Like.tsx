import React from "react";

type LikeProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Like: React.FC<LikeProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/like-icon.svg" alt="" />
    </div>
  );
};
