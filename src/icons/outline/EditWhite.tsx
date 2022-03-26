import React from "react";

type EditWhiteProps = React.HTMLAttributes<HTMLDivElement> & {};

export const EditWhite: React.FC<EditWhiteProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/edit_white.svg" alt="" />
    </div>
  );
};
