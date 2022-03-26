import React from "react";
import { CommentCheck } from "../../icons/outline/CommentCheck";
import "./CommentCount.css";

interface CommentCountProps {
  commentsCount: number;
}

export const CommentCount: React.FC<CommentCountProps> = ({
  commentsCount,
}) => {
  return (
    <div className="commentCount">
      <span className="smalltext-header">{commentsCount}</span>
      <CommentCheck />
    </div>
  );
};
