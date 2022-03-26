import React from "react";

type EmojiProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Emoji: React.FC<EmojiProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/emoji.svg" alt="" />
    </div>
  );
};
