import React from "react";
import { Button, RatingSlider, Textarea } from "../..";
import { MedalRating } from "../../../icons/outline/MedalRating";
import "./UploadRating.css";

interface UploadRatingProps {
  title: string;
  subtitle: string;
  rating: number;
  ratingText: string;
  inputTitle: string;
  textValue: string;
  placeholder?: string;
  handleTextareaChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  buttonText: string;
  handleUploadRatingSubmit: React.MouseEventHandler<HTMLButtonElement>;
}

export const UploadRating: React.FC<UploadRatingProps> = ({
  title,
  subtitle,
  rating,
  ratingText,
  inputTitle,
  textValue,
  placeholder = " ",
  handleTextareaChange,
  buttonText,
  handleUploadRatingSubmit,
}) => {
  return (
    <div className="uploadrating">
      <div className="uploadrating-container">
        <h1 className="paragraph-header">{title}</h1>
        <p className="paragraph">{subtitle}</p>

        <div className="uploadrating-rating">
          <div className="uploadrating-medal">
            <MedalRating />
          </div>
          <RatingSlider rating={rating} />
          <span className="paragraph">{ratingText}</span>
        </div>

        <Textarea
          title={inputTitle}
          value={textValue}
          onChange={handleTextareaChange}
          placeholder={placeholder}
        />

        <div className="uploadrating-btn-container">
          <Button
            content={buttonText}
            size="large"
            color="black-75"
            onClick={handleUploadRatingSubmit}
          />
        </div>
      </div>
    </div>
  );
};
