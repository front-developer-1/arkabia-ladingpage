import React from "react";
import { Message } from "../../icons/outline/Message";
import "./MessageNotification.css";

interface MessageNotificationProps {
  notificationCount: number;
}

export const MessageNotification: React.FC<MessageNotificationProps> = ({
  notificationCount,
}) => {
  return (
    <div className="message-notification">
      <Message />
      {notificationCount > 0 && (
        <span className="message-notification-count smalltext-header">
          {notificationCount}
        </span>
      )}
    </div>
  );
};
