import React from "react";

type SearchBlackProps = React.HTMLAttributes<HTMLDivElement> & {};

export const SeachBlack: React.FC<SearchBlackProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/search_black.svg" alt="" />
    </div>
  );
};
