import React from "react";

type DotsLinesProps = React.HTMLAttributes<HTMLDivElement> & {};

export const DotsLines: React.FC<DotsLinesProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/dots_lines.svg" alt="" />
    </div>
  );
};
