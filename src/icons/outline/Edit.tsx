import React from "react";

type EditProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Edit: React.FC<EditProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/edit.svg" alt="" />
    </div>
  );
};
