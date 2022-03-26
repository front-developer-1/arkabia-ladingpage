import React from "react";

type SearchWhiteProps = React.HTMLAttributes<HTMLDivElement> & {};

export const SeachWhite: React.FC<SearchWhiteProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/search_white.svg" alt="" />
    </div>
  );
};
