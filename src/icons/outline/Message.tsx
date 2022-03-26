import React from "react";

type MessageProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Message: React.FC<MessageProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/message-icon.svg" alt="" />
    </div>
  );
};
