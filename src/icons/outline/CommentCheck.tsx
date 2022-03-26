import React from "react";

type CommentCheckProps = React.HTMLAttributes<HTMLDivElement> & {};

export const CommentCheck: React.FC<CommentCheckProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/comment-check-icon.svg" alt="" />
    </div>
  );
};
