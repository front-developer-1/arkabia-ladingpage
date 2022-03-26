import React, { useRef } from "react";
import "./BulletHeader.css";

interface BulletHeaderProps {
  step: number;
  text: string;
  notification?: boolean;
}

export const BulletHeader: React.FC<BulletHeaderProps> = ({
  step,
  text,
  notification = false,
}) => {
  const bulletRef = useRef<HTMLDivElement>(null);
  const bulletNumberRef = useRef<HTMLSpanElement>(null);

  const handleClick = () => {
    bulletRef.current?.classList.toggle("bullet__number-clicked");
    bulletNumberRef.current?.classList.toggle("bullet-number-gray");
  };

  return (
    <div className="bullet" onClick={handleClick}>
      <div className="bullet__number" ref={bulletRef}>
        <span
          className="bullet__number-circle paragraph-header"
          ref={bulletNumberRef}
        >
          {step}
        </span>
      </div>
      <div className="bullet__text">
        <span className="bullet__text-data paragraph">{text}</span>
        {notification && <span className="bullet__text-notification"></span>}
      </div>
    </div>
  );
};
