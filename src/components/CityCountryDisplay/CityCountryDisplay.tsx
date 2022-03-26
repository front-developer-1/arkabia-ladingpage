import React from "react";
import "./CityCountryDisplay.css";

interface CityCountryDisplayProps {
  city: string;
  country: string;
  flagImg: string;
  classText?: string;
}

export const CityCountryDisplay: React.FC<CityCountryDisplayProps> = ({
  city,
  country,
  flagImg,
  classText=null
}) => {
  return (
    <div className="city-country-display">
      <span className={classText? classText:"smalltext-header"}>
        {city}, {country}
      </span>
      <div className="city-country--image">
        <img src={flagImg} alt={`${country}-flag`} />
      </div>
    </div>
  );
};
