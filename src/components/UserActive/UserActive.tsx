import React from "react";
import "./UserActive.css";

interface UserActiveProps {
  userImg: string;
  username: string;
  isConnected: boolean;
}

export const UserActive: React.FC<UserActiveProps> = ({
  userImg,
  username,
  isConnected,
}) => {
  return (
    <div className="useractive">
      <img src={userImg} alt={username} />
      {isConnected && <span className="useractive-logged"></span>}
    </div>
  );
};
