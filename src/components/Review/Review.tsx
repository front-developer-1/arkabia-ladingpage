import React from "react";
import { Dots } from "../../icons/outline/Dots";
import { Like } from "../../icons/outline/Like";
import { ReviewData } from "../../interfaces/Review";
import { Button } from "../Button/Button";
import { Rating } from "../Rating/Rating";
import "./Review.css";

interface ReviewProps {
  review: ReviewData;
}

export const Review: React.FC<ReviewProps> = ({ review }) => {
  return (
    <div className="review">
      <div className="review-top">
        <img
          className="review-user-img"
          src={review.userImgUrl}
          alt={review.username}
        />
        <h1 className="small-bold">{review.username}</h1>
        <Rating rating={review.rating} />
        <Dots />
      </div>

      <div className="review-mid">
        <p className="paragraph">{review.review}</p>
      </div>

      <div className="review-bot">
        <div className="review-bot-likes">
          <Like />
          <span className="smalltext-header">{review.likes} me gusta</span>
        </div>
        <Button content="Ver respuestas" size="only-text" color="blue-2" />
      </div>
    </div>
  );
};
