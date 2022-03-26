import React from "react";

import { Dots } from "../../icons/outline/Dots";
import { Rating } from "../Rating/Rating";
import { CommentCount } from "../CommentCount/CommentCount";
import { CityCountryDisplay } from "../CityCountryDisplay/CityCountryDisplay";
import { RatingDisplay } from "../RatingDisplay/RatingDisplay";

import './ImportPhasesCard.css';
import { Button } from "..";

interface ImportPhasesCardProps {
    order: any; // order object to will be rendered
    online: boolean; // status if company is online
    phases: any[]; // phases 
    activePhase: number; // phase active 
    price: number, // price to quotation
    black?: boolean // status to rendered active phase circle in black
    showFlags?: boolean;  // status show icons
}

export const ImportPhasesCard: React.FC<ImportPhasesCardProps> = ({
    order,
    online,
    phases,
    activePhase=1,
    price,
    black=false,
    showFlags=true
}) => {
    return ( 
        <div className='importPhasesCard-main'>
            <div className='importPhasesCard-header'>
                <div className='importPhasesCard-title'>
                    <h1 className='smalltext-header importPhasesCard-colorText'>Agenciamiento de aduanas</h1>
                    <div className='importPhasesCard-header-rigth'>
                        <p className='tinytext importPhasesCard-colorText'>{order.date}</p>
                        <Dots />
                    </div>
                </div>
                <p className='small-bold importPhasesCard-colorText'> {order.company} </p>
                <p className='smalltext importPhasesCard-colorText'> Importación - Orden #{order.id}</p>
                {showFlags && <div className='importPhasesCard-rating'>
                    <Rating rating={order.rating} />
                    <CommentCount commentsCount={order.nComments} />
                    <CityCountryDisplay
                        city={order.city}
                        country={order.country}
                        flagImg={order.flagImg}
                    />
                    <div className='importPhasesCard-online smalltext'>
                        {online?'En Línea': 'Desconectado'}
                    </div>
                </div>}
            </div>
            <div className='importPhasesCard-container'>
               {phases.length>1 && phases.map((phase, idx) => {
                   return (
                       <div key={idx}>
                        <div className='importPhasesCard-row' style={{opacity: ((idx+1)>activePhase?'50%':'100%')}}>
                            <div className={'paragraph-header importPhasesCard-number'+(black && (idx+1)===activePhase?' importPhasesCard-active-black ':'')}>{idx+1}</div>
                            <div className='importPhasesCard-phase paragraph'>{phase}</div>
                        </div>
                        {idx < (phases.length-1) && <div className='importPhasesCard-row'>
                            <img className='importPhasesCard-line' src='/images/line.svg' />
                        </div>}
                       </div>
                   )
               }) }
            </div>
            <div className='importPhasesCard-price'>
               <p className='smalltext'>Total</p>
               <p className='paragraph-header'>USD ${price}</p>
            </div>
            {activePhase!==(phases.length) && <Button 
                content='Contratar'
                size='large'
            />}
        </div>
    ) 
}