import React from "react";

import { RatingSlider, TextField } from "..";
import { Button } from "..";
import { RatingMarker } from "../RatingMarker/RatingMarker";

import './ReviewCard.css';

interface ReviewCardProps {
    title: string;
    companyName: string;
    concept: string;
    amount: number
    addReview: boolean;
    responseProvider: boolean;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
    title,
    companyName,
    concept,
    amount,
    addReview,
    responseProvider
}) => {
    return (
        <div className="reviewCard-contrainer">
            <div className="reviewCard-blockText">
                <div className="smalltext-header reviewCard-colorTitle ">{title}</div>
                <div className="smalltext reviewCard-colorTitle ">{companyName}</div>
                <div className="smalltext reviewCard-colorDetail">{concept}</div>
                <div className="smalltext reviewCard-colorAmount">USD $ {amount}</div>
            </div>
            <div className="reviewCard-score">
                <RatingMarker setRating={()=>{}} />
                <TextField 
                    title="Escribe aquí tu reseña"
                    placeholder=" "
                />
            </div>
            <div className="reviewCard-button">
                {(!addReview) && (!responseProvider)? 
                <Button
                    content="Dejar reseña"
                    color='black-75'
                />:''}
                <div className="reviewCard-add">
                    <div className="smalltext-header" style={{color: 'var(--blue-2)'}}>{addReview && 'Adicionar a reseña'} { responseProvider && 'Responder al proveedor'}</div>
                    {(addReview || responseProvider )&&<div className="smalltext-header" style={{color: 'var(--gray-2)'}}>Tiempo restante 15 días</div>}
                </div>
            </div>
        </div>
    )
}