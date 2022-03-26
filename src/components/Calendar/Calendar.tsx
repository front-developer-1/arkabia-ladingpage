import React, { useState } from "react";

import { BackArrow } from '../../icons/outline/BackArrow';
import { FrontArrow } from '../../icons/outline/FrontArrow';
import { CalendarRow } from './Row/Row';
import { TranslateMonth } from "../../utils/translateMonth";
import {DaysNameMin} from '../../Consts/daysNameMin';

import { SelectMonth } from '../../utils/SelectMonth';

import {format, addMonths} from "date-fns";


import './Calendar.css';

interface CalendarProps {
    disabled?: boolean
    setDay: (e: Date) => void;
}

export const Calendar: React.FC<CalendarProps> = ({
    disabled = false,
    setDay
}) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [today, setToday] = useState(new Date());
    const data = SelectMonth(selectedDate)();
   
    const nextMonth = ()=> {
        setSelectedDate(addMonths(selectedDate, 1));         
    }

    const prevMonth = ()=> {
        setSelectedDate(addMonths(selectedDate, -1));         
    }

    const onClickDay = (day: Date) => {
        setSelectedDate(day);
        setDay(day);
    }

    return (        
        <div className="calendar-container">
            <div className="calendar-title">
                <BackArrow onClick={()=> !disabled && prevMonth()} />
                <div className="paragraph-header">{`${TranslateMonth(format(selectedDate, 'MMMM'))} ${format(selectedDate, 'yyyy')}`}</div>
               <FrontArrow onClick={()=> !disabled && nextMonth()} /> 
            </div>
            <CalendarRow rowData={DaysNameMin} header={true} />
            
            {data.length>0 && data.map((d, idx) => {
                return (
                    <CalendarRow 
                        key={idx} 
                        rowData={d} 
                        selectedDate={selectedDate} 
                        today={today}
                        setSelectDay={!disabled ? onClickDay : ()=>{}}
                    />
                )
            })}
        </div>
    )
}