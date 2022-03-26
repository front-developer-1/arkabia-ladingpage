import React from "react";

import {
    format, 
    isSameDay, 
    isSunday, 
    isSaturday, 
    isSameWeek,
    isSameMonth
} from "date-fns";

import './Row.css';

interface  CalentarRowProps {
    rowData: any[];
    header?: boolean;
    selectedDate?: Date;
    today?: Date;
    setSelectDay?: (e: Date) => void;
}

export const CalendarRow: React.FC<CalentarRowProps> = ({
    rowData,
    header=false,
    selectedDate = new Date(),
    today = new Date(),
    setSelectDay = ()=> {}
}) => {
    
    const getDayStyle = (day: Date) => {
        if (isSameWeek(day, selectedDate) && isSunday(day)){
            return "calendarRow-weekSelectedLeft";
        }

        if (isSameWeek(day, selectedDate) && isSaturday(day)){
            return "calendarRow-weekSelectedRigth"
        }

        if (isSameWeek(day, selectedDate)) return "calendarRow-weekSelected";
    }

    const getSelectedDayStyle = (day: Date) => {
        if (isSameDay(day, selectedDate)) {
            return 'calendarRow-DaySelected';
        }
    } 

    const getTodayStyle = (day: Date) => {
        if(!header) {
            if (isSameDay(today, day)) {
               return 'calendarRow-today';
            }
        }
    }

    const getColorDay = (day: Date) => {
        if(!header) {
            if(isSameMonth(day, selectedDate)) {
                return 'calendarRow-colorCell';
            } else {
                return 'calendarRow-colorDesactive';
            }
        }
    }

    return (
        <div className="calendarRow-container">
            {
                rowData.length>0 && rowData.map((row, idx) => {
                    return (
                        <div 
                            key={idx} 
                            className={`calendarRow-cell ${!header && getDayStyle(row)}`}
                            onClick={()=> {!header && setSelectDay(row)}}
                        >
                            <div 
                                className={`paragraph ${!header && getSelectedDayStyle(row)} ${getTodayStyle(row)} ${getColorDay(row)}`}>
                                {header?row:format(row, "dd")}
                                </div>
                        </div>
                    )
                }) 
            }
        </div>
    )
}