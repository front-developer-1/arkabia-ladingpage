import React from "react";
import { Bell } from "../../icons/solid/Bell";
import "./BellNotification.css";

interface BellNotificationProps {
  notificationCount: number;
}

export const BellNotification: React.FC<BellNotificationProps> = ({
  notificationCount,
}) => {
  return (
    <div className="bell-notification">
      <Bell />
      {notificationCount > 0 && (
        <span className="bell-notification-count">{notificationCount}</span>
      )}
    </div>
  );
};
