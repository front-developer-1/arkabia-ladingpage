import React from "react";
import { LeftArrow } from "../../icons/outline/LeftArrow";
import { Like } from "../../icons/outline/Like";
import { RightArrow } from "../../icons/outline/RightArrow";
import { Share } from "../../icons/outline/Share";
import { Order } from "../../interfaces/Order";
import { Button } from "../Button/Button";
import { CityCountryDisplay } from "../CityCountryDisplay/CityCountryDisplay";
import { CommentCount } from "../CommentCount/CommentCount";
import { Rating } from "../Rating/Rating";
import "./OrderDisplay.css";

interface OrderDisplayProps {
  order: Order;
}

export const OrderDisplay: React.FC<OrderDisplayProps> = ({ order }) => {
  return (
    <div className="order-display">
      <div className="order-display-top">
        <div className="order-display-header">
          <h1 className="small-subheader">{order.companyService}</h1>
          <div className="order-display-ratings">
            <Rating rating={order.rating} />
            <CommentCount commentsCount={order.nComments} />
            <CityCountryDisplay
              city={order.city}
              country={order.country}
              flagImg={order.flagImg}
            />
          </div>
          <div className="order-display-social">
            <Share />
            <Like />
          </div>
        </div>

        <h1 className="big-header">{order.orderTitle}</h1>
      </div>

      <div className="order-display-mid">
        <div className="order-display-main-img">
          <LeftArrow />
          <img className="order-display-img" src={order.imagesArr[0]} alt="" />
          <RightArrow />
        </div>
        <div className="order-display-mini-imgs">
          {/* TODO CHANGE KEY FOR IMG ID */}
          {miniImages(order.imagesArr).map((miniImg: string, idx) => (
            <img key={idx} src={miniImg} alt="" />
          ))}
        </div>

        <div className="order-display-images-mobile">
          {order.imagesArr.map((images: string, idx) => (
            <img key={idx} src={images} alt="" />
          ))}
        </div>
      </div>

      <div className="order-display-header-mobile">
        <h1 className="small-subheader">{order.companyService}</h1>
        <div className="order-mobile-subheader">
          <div className="order-display-ratings">
            <Rating rating={order.rating} />
            <CommentCount commentsCount={order.nComments} />
            <CityCountryDisplay
              city={order.city}
              country={order.country}
              flagImg={order.flagImg}
            />
          </div>
          <div className="order-display-social">
            <Share />
            <Like />
          </div>
        </div>
      </div>

      <div className="order-display-bot">
        <h1 className="small-header">Acerca de esta oferta</h1>
        <p className="paragraph">{order.about}</p>
      </div>

      <div className="order-display-main-btn">
        <Button content="Solicitar cotización" />
      </div>
    </div>
  );
};

const miniImages = (imagesArr: string[]) => {
  return imagesArr.slice(1, imagesArr.length);
};
