import React, { useState, useEffect } from "react";

// import components
import { Dots } from "../../../icons/outline/Dots";
import { MedalRating } from "../../../icons/outline/MedalRating";
import { Button } from "../../Button/Button";
import { Rating } from "../../Rating/Rating";

// import css
import './QuotationCard.css';

// props interfaces
interface QuotationCardProps {
    title: String; // title agency
    quotationDate: string, // date to quotation 
    subtitle: String, // tipe of service to quotation
    agency: object[], // agency going to rendered
    add: boolean, // status add more quotations
    compare: boolean, // status to show campare button
    steps: boolean, // status tu show numero of steps
    step?: number; // number of step
    titleStep?: string; // title of step
    setAddCompany: React.Dispatch<React.SetStateAction<boolean>>; // set status add more company to quotation
    setCompare:React.Dispatch<React.SetStateAction<boolean>>; // set status compare quotations
    onClickCancel: () => void //
}


/** component Quoatation card
 * component to will be rendered ever quotation from campanys an will be compare it
 */
export const QuotationCard: React.FC<QuotationCardProps> = ( {
    title, 
    quotationDate,
    subtitle,
    agency,
    add,
    compare,
    steps = true,
    step = 1,
    titleStep= 'Cotización',
    setAddCompany,
    setCompare,
    onClickCancel,
    ...props
}) => {
 
 
    return (
        <div className='quotationCard'> 
            <div className='quotationCard-container'>
                <div className={'quotationCard-header'+(!steps?' quotationCard-bottom': '')}>
                    <div className='quotationCard-header-left'>
                        <h1 className='smalltext-header quotationCard-colorText'>{title}</h1>
                        <p className='smalltext quotationCard-colorText'>{subtitle}</p>
                    </div>                    
                    <div className='quotationCard-header-rigth'>
                        <p className='tinytext quotationCard-colorText'>{quotationDate}</p>
                        <Dots />
                    </div> 
                </div>
               {steps && <div className='quotationCard-body'>
                    <div className='quotationCard-number paragraph-header'>{step}</div>
                    <p className='small-bold quotationCard-colorText'>{titleStep}</p>
                </div>}
                <div className='quotation-company'>
                    <div className='company-row smalltext-header quotationCard-colorText company-header-values'>
                        <div className='company-row-items' >Agencia de aduana</div>
                        <div className='company-row-items' style={{width: "86%"}}>Calificación</div>
                        <div className='company-row-items'>Presupuesto</div>
                    </div>
                    {agency.length>0 && agency.map((a:any) => {
                        return (
                            <div key={a.id} className='company-row company-row-values smalltext quotationCard-colorText'>
                                <div className='company-row-items'>{a.companyService}</div>
                                <div className='company-row-items' style={{width: "86%"}}> <div className='company-row-items-rantin'><Rating rating={a.rating}  /> </div></div>
                                <div className='company-row-items'>{a.quotationStatus === 0? 'Por Enviar': (a.quotationStatus === 1? 'En Proceso': "USD $ "+a.price)}</div>
                            </div>
                        )
                    }) }
                </div>
                <div className='quotationCard-buttons paragraph-header' >
                    {!add && !compare?<Button
                       content='Agregar más agencias de aduana' 
                       disabled={false}
                       onClick={() => {
                            setAddCompany(true);
                       }}
                    />: !compare?<div className='quotationCard-btns'>
                            <Button
                                content='Cancelar'
                                color='black-25' 
                                size='large'
                                disabled={false}
                                onClick={()=> {
                                    setAddCompany(false);
                                    onClickCancel();
                                }}
                            />
                            <Button
                                content='Enviar' 
                                disabled={false}
                                color='blue-2'
                                size='large'
                                onClick={() => {
                                   setAddCompany(false);
                                   agency.length===3 && setCompare(true);
                                   alert('Quotation sended')
                                }}
                            />
                        </div>:null}
                       {agency.length===3 && !compare?<div className='quotationCard-more'>
                            <Button
                                content='¿Más cotizaciones?'
                                color='yellow'
                                onClick={()=> {
                                    alert('Mas cotizaciones')
                                }}
                            />
                            <div className='quotationCard-num tinytext-header '>
                                ({agency.length} de 3 Cotización disponibles)
                            </div>
                        </div>:null}
                        {compare?<div className='comapare-quotation-action'>
                            <Button
                                content='Comparar mas cotizaciones'
                                color='black-75'
                                onClick={()=> {
                                    alert('Comparar mas cotizaciones')
                                }}
                            />
                            <Button
                                content='¿Más cotizaciones?'
                                color='yellow'
                                onClick={()=> {
                                    alert('mas cotizaciones')
                                }}
                            />
                        </div>: null}
                </div>
            </div>
        </div>
    )
}