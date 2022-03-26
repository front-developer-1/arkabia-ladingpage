import React from "react";

// Import Packages
import { Rating } from "../Rating/Rating";
import { CommentCount } from "../CommentCount/CommentCount";
import { CityCountryDisplay } from "../CityCountryDisplay/CityCountryDisplay";
import { Share } from "../../icons/outline/Share";
import { Like } from "../../icons/outline/Like";

// imports interfaces
import {Order} from '../../interfaces/Order';

// import css
import './OrderMiniature.css';

// props interface
interface OrderMiniatureProps {
    order: Order; // order going to render
    price: number; // price to service
    choose: boolean; // status if choose order
    edit: boolean; // status if its editable
    quoteSended: boolean; // status if quotation are sended
    onClickChoose:  () => void;// method if click y choose order
}


/**  component OrderMiniature 
    in this component the company will be rendered in card showing information about it*/
export const OrderMiniature: React.FC<OrderMiniatureProps> = (
    {
        order, 
        price, 
        choose,
        edit,
        quoteSended,
        onClickChoose
    }) => {
    return (
        <div className='order-minuature-main'>
            <img className='order-minuature-img' src={order.imagesArr[0]} />
           <div className='order-minuature-text order-miniature-padding-text'>
                <div className='order-minuature-title paragraph-header'>
                    {order.companyService}
                </div>
                <div className='online-company'></div>
           </div>
            <div className='order-minuature-description order-miniature-padding-text paragraph'>
                Lorem ipsum dolor sit ame tmin immin im, consectetur adipiscing.
            </div>
            <div className='order-minuature-rating'>
                <Rating rating={order.rating} />
                <CommentCount commentsCount={order.nComments} />
                <CityCountryDisplay
                    city={order.city}
                    country={order.country}
                    flagImg={order.flagImg}
                />
            </div>
            {!edit && !choose && <hr className='order-miniature-line' />}
            {!edit && !choose?<div className='order-miniature-share order-miniature-padding-text '>
                <div className='order-miniature-social'>
                    <Share />
                    <Like />
                </div>
                <div className='order-miniature-price paragraph-header'>
                    Desde USD ${price}
                </div>
            </div>: null}
            {choose?<div className='order-miniature-buttons'>
                <div className={'order-minuature-button-single smalltext-header'+(quoteSended?' order-minuature-button-single-green': '')}
                    onClick={!quoteSended?onClickChoose:()=>{}}
                >
                    {quoteSended?'Cotización enviada':'Elegir'}
                </div>
            </div>: null}
            {edit?<div className='order-miniature-buttons smalltext-header'>
                <div className='order-minuature-button-left'
                    onClick={() => {
                        console.log("click")
                    }}
                >
                    Text
                </div>
                <div className='order-minuature-button-rigth'
                    onClick={() => {
                        console.log("click")
                    }}
                >
                    Text
                </div>
            </div>: null}
        </div>
    )
}