import React from "react";
import { REVIEWDATA } from "../../testdata/fakedata";
import { Dropdown } from "../Dropdown/Dropdown";
import { Rating } from "../Rating/Rating";
import { RatingDisplay } from "../RatingDisplay/RatingDisplay";
import { Review } from "../Review/Review";
import "./ReviewDisplay.css";

interface ReviewDisplayProps {}

export const ReviewDisplay: React.FC<ReviewDisplayProps> = ({}) => {
  return (
    <div className="review-display">
      <h1 className="small-header">Reseñas</h1>
      <div className="review-display-top">
        <RatingDisplay
          companyService="Agenciamiento de aduana"
          rating={4.7}
          ratingText="Excelente"
        />
        <div className="review-display-dropdown">
          <Dropdown
            title="Ordenar por"
            elements={[]}
            value={"Relevancia"}
            setValue={() => {}}
            disabled={true}
          />
        </div>
      </div>

      <div className="review-display-ratings">
        <Rating rating={5} ratingCount="9" />
        <Rating rating={4} ratingCount="1" />
        <Rating rating={3} ratingCount="0" />
        <Rating rating={2} ratingCount="0" />
        <Rating rating={1} ratingCount="0" />
      </div>

      <div className="review-display-ratings-mobile">
        <Rating rating={5} />
        <Rating rating={4} />
        <Rating rating={3} />
        <Rating rating={2} />
        <Rating rating={1} />
      </div>

      <div className="review-display-list">
        <Review review={REVIEWDATA} />
        <Review review={REVIEWDATA} />
        <Review review={REVIEWDATA} />
      </div>
    </div>
  );
};
