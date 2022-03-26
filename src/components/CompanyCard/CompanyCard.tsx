import React from "react";
import { Like } from "../../icons/outline/Like";
import { Share } from "../../icons/outline/Share";
import { Company } from "../../interfaces/Company";
import { Button } from "../Button/Button";
import { CityCountryDisplay } from "../CityCountryDisplay/CityCountryDisplay";
import { CommentCount } from "../CommentCount/CommentCount";
import { Rating } from "../Rating/Rating";
import "./CompanyCard.css";

interface CompanyCardProps {
  company: Company;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <div className="company-card">
      <div className="company-card-imgs">
        <img
          className="company-card-bg"
          src={company.bgImgUrl}
          alt={`${company.name}`}
        />
        <div className="company-card-main-img-bg">
          <img
            className="company-card-main-img"
            src={company.imageUrl}
            alt={`${company.name}`}
          />
        </div>
      </div>

      <div className="company-card-info">
        <div className="company-card-main">
          <div className="company-card-title">
            <h1 className="small-bold">{company.name}</h1>
            <img src="/images/circle_check.svg" alt="checked" />
          </div>
          <h2 className="smalltext">{company.serviceType}</h2>
          <h3 className="smalltext">
            <span className="smalltext-header">
              {company.successfulOperations}
            </span>{" "}
            Operaciones Exitosas
          </h3>
        </div>

        <div className="company-card-work">
          <h4 className="smalltext-header">¿Por qué trabajar con nostros?</h4>
          <p className="smalltext">{company.whyWorkWithUs}</p>
        </div>

        <div className="company-card-social">
          <Rating rating={company.rating} />
          <CommentCount commentsCount={company.nComments} />
          <CityCountryDisplay
            city={company.city}
            country={company.country}
            flagImg={company.flag}
          />

          <div className="company-card-share-like">
            <Share />
            <Like />
          </div>
        </div>

        <div className="company-card-btns">
          <Button content="Ver Perfil" size="small" />
          <Button content="Enviar mensaje" color="blue-2" size="small" />
        </div>
      </div>
    </div>
  );
};
