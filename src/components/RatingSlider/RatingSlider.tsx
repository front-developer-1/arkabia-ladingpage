import React from "react";
import "./RatingSlider.css";

interface RatingSliderProps {
  rating: number;
}

const getRatingNumber = (ratingf: number) => {
  if (ratingf === 0) {
    return 0;
  }

  let a = ratingf > 1 ? Math.floor(ratingf) * 10 : 0;
  //prettier-ignore
  let b = ratingf > 1 ? parseFloat((ratingf % Math.floor(ratingf)).toFixed(2)) * 10 : ratingf * 10
  let num = a + b;
  console.log("A", a);
  console.log("B", b);
  if (num < 50) {
    if (num > 10 && num < 20) {
      num += 1;
      return num;
    }
    if (num > 20 && num < 30) {
      num += 2;
      return num;
    }
    if (num > 30 && num < 40) {
      num += 3;
      return num;
    }
    if (num > 40 && num < 50) {
      num += 4;
      return num;
    }
  }
  //prettier-ignore
  return num === 10 ? num : num === 20 ? 21 : num === 30 ? 32 : num === 40 ? 43 : num === 50 ? 54: num;
};

export const RatingSlider: React.FC<RatingSliderProps> = ({ rating }) => {
  if (rating > 5.0) {
    console.log("Out of ratings range!");
    return null;
  }

  return (
    <div className="rating-slider">
      {[...new Array(54)].map((_, idx) => {
        if (idx === 10 || idx === 21 || idx === 32 || idx === 43) {
          return <div key={idx} className="rating-slider-space" />;
        }
        if (idx < getRatingNumber(rating)) {
          return <div key={idx} className="rating-slider-active" />;
        } else {
          return <div key={idx} className="rating-slider-default" />;
        }
      })}
    </div>
  );
};
