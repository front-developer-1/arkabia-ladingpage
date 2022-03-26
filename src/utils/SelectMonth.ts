import { SelectWeek } from "./SelectWeek";

const {
    startOfMonth,
    endOfMonth,
    endOfWeek,
    startOfDay,
    addDays,
} = require("date-fns");

export const SelectMonth = (start = new Date()) => {
    let month: any[] = []; 
    let date = start;
  
    function lastDayOfRange(range:any[]) {
      return range[range.length - 1][6];
    }
  
    return function () {
      const weekGen = SelectWeek(startOfMonth(date));
      const endDate = startOfDay(endOfWeek(endOfMonth(date)));
      month.push(weekGen());
  
      while (lastDayOfRange(month) < endDate) {
        month.push(weekGen());
      }
  
      const range = month;
      month = [];
      date = addDays(lastDayOfRange(range), 1);
  
      return range;
    };
  }
  