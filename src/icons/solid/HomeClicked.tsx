import React from "react";

type HomeClickedProps = React.HTMLAttributes<HTMLDivElement> & {};

export const HomeClicked: React.FC<HomeClickedProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/home-clicked-icon.svg" alt="" />
    </div>
  );
};
