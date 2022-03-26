import React from "react";
import { MedalRating } from "../../icons/outline/MedalRating";
import "./Rating.css";

interface RatingProps {
  rating: number;
  ratingCount?: string;
}

export const Rating: React.FC<RatingProps> = ({ rating, ratingCount }) => {
  return (
    <div className="rating">
      <MedalRating />
      <span className="smalltext-header">
        {rating} {ratingCount && `(${ratingCount})`}
      </span>
    </div>
  );
};
