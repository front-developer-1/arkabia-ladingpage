import React from "react";
import "./RatingDisplay.css";
import { MedalRating } from "../../icons/outline/MedalRating";
import { RatingSlider } from "../RatingSlider/RatingSlider";

interface RatingDisplayProps {
  companyService: string;
  rating: number;
  ratingText: string;
}

export const RatingDisplay: React.FC<RatingDisplayProps> = ({
  companyService,
  rating,
  ratingText,
}) => {
  return (
    <div className="rating-display">
      <h1 className="smalltext-header">{companyService}</h1>

      <div className="rating-display-container">
        <div className="rating-display-img">
          <MedalRating />
        </div>
        <div className="rating-display-text">
          <RatingSlider rating={rating} />
          <span className="paragraph-header">
            {rating} {ratingText}
          </span>
        </div>
      </div>
    </div>
  );
};
