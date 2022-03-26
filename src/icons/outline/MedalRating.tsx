import React from "react";

type MedalRatingProps = React.HTMLAttributes<HTMLDivElement> & {};

export const MedalRating: React.FC<MedalRatingProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/medal-rating-icon.svg" alt="" />
    </div>
  );
};
